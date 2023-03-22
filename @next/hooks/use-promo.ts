import { useState, useContext } from 'react'
import { PROMO_CODES, BURGERS_LIST } from '@constants'
import { useSnackbar } from 'notistack'
import { getBurgerPrice } from '@utils'
import { PromoCodeTypes } from '@types'
import { ShopContext } from '@context'

export const usePromo = (): any => {
  const { enqueueSnackbar } = useSnackbar()
  const { burgerDetails } = useContext(ShopContext)

  const showSnackbarMessage = (
    type: 'error' | 'warning' | 'success',
    message: string
  ): void => {
    enqueueSnackbar(message, {
      variant: type
    })
  }

  const [promoAmount, setPromoAmount] = useState(0)
  const calculatePromoAmountAmount = (
    totalPrice: number,
    promoCode: PromoCodeTypes
  ): any => {
    setPromoAmount(0)

    if (!promoCode) return
    if (!PROMO_CODES[promoCode]) {
      showSnackbarMessage('error', 'Invalid Code!')
      return
    }
    const promoItems = burgerDetails.filter(
      (burger) =>
        burger.burgerType === PROMO_CODES[promoCode] &&
        burger.burgerSize === 's'
    )

    if (promoItems?.length < 2) {
      showSnackbarMessage(
        'error',
        `You must have atleast two ${PROMO_CODES[promoCode]} in your cart of size small !`
      )
      return
    }
    const burgerDetail = BURGERS_LIST.find(
      (val) => val.name === PROMO_CODES[promoCode]
    )
    if (!burgerDetail) {
      showSnackbarMessage('error', 'Item Not Found!')
      return
    }

    const discount = getBurgerPrice(burgerDetail.price, 's')
    setPromoAmount(discount)
  }

  return { promoAmount, calculatePromoAmountAmount }
}
