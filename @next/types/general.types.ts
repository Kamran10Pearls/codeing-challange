export type DiscountCodeTypes = '10OFF' | '20OFF'
export type PromoCodeTypes = '50HamOFF' | '50ChilliOFF'
export type BurgerSizeTypes = 's' | 'm' | 'l'
export interface BurherDetailTypes {
  burgerType: string
  burgerSize: BurgerSizeTypes
}
