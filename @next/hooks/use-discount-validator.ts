import { useState } from 'react'
import { DISCOUNT_CODES } from '@constants'
import { useSnackbar } from 'notistack'

export const useDiscount = (): any => {
  const { enqueueSnackbar } = useSnackbar()
  const [discountedAmount, setDiscountedAmount] = useState(0)
  const calculateDiscountedAmount = (
    totalPrice: number,
    discountCode: string
  ): void => {
    setDiscountedAmount(0)
    if (!discountCode) return
    // @ts-expect-error
    if (discountCode && DISCOUNT_CODES[discountCode] && totalPrice) {
      // @ts-expect-error
      const discountFactor = 1 - DISCOUNT_CODES[discountCode]
      // @ts-expect-error
      const discountAmount = totalPrice * DISCOUNT_CODES[discountCode]
      totalPrice *= discountFactor
      setDiscountedAmount(discountAmount)
    } else {
      setDiscountedAmount(0)
      enqueueSnackbar('Invalid Code!', {
        variant: 'error'
      })
    }
  }

  return { discountedAmount, calculateDiscountedAmount }
}
