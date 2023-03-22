import { useAppSelector } from '@hooks'
import { useState } from 'react'
import { PROMO_CODES, BURGERS_LIST } from '@constants'
import { useSnackbar } from 'notistack'
import { getBurgerPrice } from '@utils'

export const usePromo = (): any => {
  const { enqueueSnackbar } = useSnackbar()
  const [promoAmount, setPromoAmount] = useState(0)
  const { burgerDetails } = useAppSelector((store) => store.shop)
  const calculatePromoAmountAmount = (
    totalPrice: number,
    promoCode: string
  ): any => {
    setPromoAmount(0)
    // @ts-expect-error
    if (!promoCode || !PROMO_CODES[promoCode]) {
      enqueueSnackbar('Invalid Code!', {
        variant: 'error'
      })
      return
    }
    const promoItems = burgerDetails.filter(
      (burger) =>
        // @ts-expect-error
        burger.burgerType === PROMO_CODES[promoCode] &&
        burger.burgerSize === 's'
    )
    if (promoItems?.length < 2) {
      enqueueSnackbar(
        `You must have atleast two ${
          // @ts-expect-error
          PROMO_CODES[promoCode] as string
        } in your cart of size small !`,
        {
          variant: 'error'
        }
      )
      return
    }
    const burgerDetail = BURGERS_LIST.find(
      // @ts-expect-error
      (val) => val.name === PROMO_CODES[promoCode]
    )
    if (!burgerDetail) {
      enqueueSnackbar('Item Not Found!', {
        variant: 'error'
      })
      return
    }

    const discount = getBurgerPrice(burgerDetail.price, 's')
    setPromoAmount(discount)
  }

  return { promoAmount, calculatePromoAmountAmount }
}
