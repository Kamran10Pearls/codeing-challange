interface BurgerSizeType {
  name: string
  value: string
}
export const BURGER_SIZES: BurgerSizeType[] = [
  {
    name: 'small',
    value: 's'
  },
  {
    name: 'medium',
    value: 'm'
  },
  {
    name: 'large',
    value: 'l'
  }
]
interface BurgerFactorType {
  s: number
  m: number
  l: number
}

interface BurgerSizes {
  s: string
  m: string
  l: string
}

export const BURGER_SIZES_FACTORS: BurgerFactorType = {
  s: 0.7,
  m: 1.0,
  l: 1.3
}

export const BURGER_SIZES_NAMES: BurgerSizes = {
  s: 'Small',
  m: 'Medium',
  l: 'Large'
}
