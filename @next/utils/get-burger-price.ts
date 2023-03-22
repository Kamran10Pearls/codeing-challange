import { BURGER_SIZES_FACTORS } from '@constants'
export const getBurgerPrice = (cost: number, size: string): number => {
  // @ts-expect-error
  return cost * BURGER_SIZES_FACTORS[size]
}
