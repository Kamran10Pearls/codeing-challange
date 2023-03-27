import { useEffect, useState, useContext } from 'react'
import { BURGERS_LIST, BURGER_SIZES_NAMES } from '@constants'
import { getBurgerPrice } from '@utils'
import { BurgerDetailTypes, ItemListType } from '@types'
import { ShopContext } from '@context'

function createListItem(
  name: string,
  price: number,
  size: string,
  image: string | undefined
): ItemListType {
  // Return a new object with the given properties
  return {
    name,
    price: +price?.toFixed(2),
    size,
    image
  }
}
interface GetCartItemsAndTotalReturnType {
  totalPricePerItem: number
  cartItemsDetail: ItemListType[]
}
type GetCartItemsAndTotal = (
  burgerDetails: BurgerDetailTypes[]
) => GetCartItemsAndTotalReturnType

const getCartItemsAndTotal: GetCartItemsAndTotal = (burgerDetails) => {
  const cartItemsDetail: ItemListType[] = []
  let totalPricePerItem = 0
  burgerDetails.forEach(({ burgerType, burgerSize }) => {
    const burger = BURGERS_LIST.find((burger) => burger.name === burgerType)
    if (!burger) return
    const { name, price, image } = burger
    const itemPricePerSize = getBurgerPrice(price, burgerSize)
    totalPricePerItem += itemPricePerSize
    const burgerName: string = BURGER_SIZES_NAMES[burgerSize]
    const burgerItem = createListItem(name, itemPricePerSize, burgerName, image)
    cartItemsDetail.push(burgerItem)
  })
  return { totalPricePerItem, cartItemsDetail }
}

export const useCheckoutDetail = (): any => {
  const { burgerDetails } = useContext(ShopContext)

  const [total, setTotal] = useState(0)
  const [itemsList, setItemsList] = useState<ItemListType[]>([])
  // burgerType: 'Cheese Burger', burgerSize: 's'
  useEffect(() => {
    const { totalPricePerItem, cartItemsDetail } =
      getCartItemsAndTotal(burgerDetails)
    setItemsList(cartItemsDetail)
    setTotal(+totalPricePerItem?.toFixed(2))
  }, [burgerDetails])

  return [itemsList, total]
}
