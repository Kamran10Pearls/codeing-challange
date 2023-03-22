import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import Rating from '@mui/material/Rating'

interface RatingAndPriceTypes {
  rating: number
  price: number
}
export const RatingAndPrice: FC<RatingAndPriceTypes> = ({ rating, price }) => {
  return (
    <Box
      width="100%"
      mt={4}
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Rating name="read-only" value={rating} readOnly color="red" />
      <Box sx={{ display: 'flex' }}>
        <Typography>Price: </Typography>
        <Typography color="common.green">${price.toFixed(2)}</Typography>
      </Box>
    </Box>
  )
}
