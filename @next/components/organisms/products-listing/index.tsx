import { ProductItem } from '@molecules'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { useAppDispatch } from '@hooks'
import { BURGERS_LIST } from '@constants'
import { shopActions } from '@store'
import { useSnackbar } from 'notistack'

export const ProductsListing: FC = () => {
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const handleAddOrder = (burgerType: string, burgerSize: string): void => {
    dispatch(
      shopActions.addFoodItem({
        burgerType,
        burgerSize
      })
    )
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
