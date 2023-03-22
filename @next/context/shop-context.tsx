import React, { createContext, useState, useEffect } from 'react'
import { BurherDetailTypes } from './context.types'

const burgerDetails: BurherDetailTypes[] = []

export const ShopContext = createContext({
  burgerDetails,
  addFoodItem: (burgerDetail: BurherDetailTypes) => {},
  removeCartItem: (index: number): void => {},
  clearCart: (): void => {}
})

export const UserContextProvider = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [burgerDetails, setBurgerDetails] = useState<BurherDetailTypes[]>([])
  useEffect(() => {
    const burgerDetails = localStorage.getItem('burgerDetails')
    if (burgerDetails) {
      setBurgerDetails(JSON.parse(burgerDetails))
    }
  }, [])
  useEffect(() => {
    if (!burgerDetails?.length) return
    localStorage.setItem('burgerDetails', JSON.stringify(burgerDetails))
  }, [burgerDetails])
  const addFoodItem = (burgerDetail: BurherDetailTypes): void => {
    console.log('context burger details are', burgerDetail)
    setBurgerDetails([...burgerDetails, burgerDetail])
  }

  const removeCartItem = (burgerIndex: number): void => {
    const burgers = [...burgerDetails]
    burgers.splice(burgerIndex, 1)
    localStorage.setItem('burgerDetails', JSON.stringify([]))
    setBurgerDetails(burgers)
  }
  const clearCart = (): void => {
    setBurgerDetails([])
  }
  return (
    <ShopContext.Provider
      value={{ burgerDetails, addFoodItem, removeCartItem, clearCart }}
    >
      {children}
    </ShopContext.Provider>
  )
}
