import { BURGER_SIZES_FACTORS } from '@constants'
import { BurgerSizeTypes } from '@types'
export const getBurgerPrice = (cost: number, size: BurgerSizeTypes): number => {
  return cost * BURGER_SIZES_FACTORS[size]
}
