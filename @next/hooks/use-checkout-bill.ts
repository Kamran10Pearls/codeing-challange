import { useAppSelector } from '@hooks'
import { useEffect, useState } from 'react'
import { BURGERS_LIST, BURGER_SIZES_NAMES } from '@constants'
import { getBurgerPrice } from '@utils'
interface ItemListType {
  name: string
  price: number
  size: string
  image: string | undefined
}
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

export const useCheckoutDetail = (): any => {
  const { burgerDetails } = useAppSelector((store) => store.shop)
  const [total, setTotal] = useState(0)
  const [itemsList, setItemsList] = useState<ItemListType[]>([])
  // burgerType: 'Cheese Burger', burgerSize: 's'
  useEffect(() => {
    const cartItemsDetail: ItemListType[] = []
    let totalPricePerItem = 0
    if (burgerDetails?.length) {
      burgerDetails.forEach(({ burgerType, burgerSize }) => {
        const { name, price, image } = BURGERS_LIST.find(
          (burger) => burger.name === burgerType
        ) ?? { name: 'Unknown', price: 0 }
        const itemPricePerSize = getBurgerPrice(price, burgerSize)
        totalPricePerItem += itemPricePerSize
        const burgerItem = createListItem(
          name,
          itemPricePerSize,
          // @ts-expect-error
          BURGER_SIZES_NAMES[burgerSize],
          image
        )
        cartItemsDetail.push(burgerItem)
      })
    }
    setItemsList(cartItemsDetail)
    setTotal(+totalPricePerItem?.toFixed(2))
  }, [burgerDetails])

  return [itemsList, total]
}
