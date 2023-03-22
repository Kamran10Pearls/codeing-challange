import { ProductItem } from '@molecules'
import { Grid } from '@mui/material'
import { FC, useContext } from 'react'
import { BURGERS_LIST } from '@constants'
import { useSnackbar } from 'notistack'
import { BurgerSizeTypes } from '@types'
import { ShopContext } from '@context'

export const ProductsListing: FC = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { addFoodItem } = useContext(ShopContext)

  const handleAddOrder = (
    burgerType: string,
    burgerSize: BurgerSizeTypes
  ): void => {
    addFoodItem({
      burgerType,
      burgerSize
    })

    enqueueSnackbar('Item Added to cart Successfully!', {
      variant: 'success'
    })
  }
  return (
    <Grid container spacing={4}>
      {BURGERS_LIST.map(({ name, image, description, price, rating }) => (
        <Grid key={name} item xs={12} sm={4} md={4} lg={4} xl={4}>
          <ProductItem
            {...{ name, image, description, price, rating }}
            onAddProduct={handleAddOrder}
          />
        </Grid>
      ))}
    </Grid>
  )
}
