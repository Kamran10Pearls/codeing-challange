import { FC, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Button, ButtonGroup } from '@mui/material'
import { BURGER_SIZES } from '@constants'
import AddIcon from '@mui/icons-material/Add'
import { RatingAndPrice } from '@molecules'
import { getBurgerPrice } from '@utils'
import { BurgerSizeTypes } from '@types'

interface ProductItemTypes {
  name: string
  image: string
  price: number
  description: string
  rating: number
  onAddProduct: (burgerType: string, burgerSize: BurgerSizeTypes) => void
}

export const ProductItem: FC<ProductItemTypes> = ({
  name,
  image,
  description,
  onAddProduct,
  rating,
  price
}) => {
  const [burgerSize, setBurgerSize] = useState<BurgerSizeTypes>('s')

  return (
    <Card
      sx={{
        maxWidth: '100%',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'space-between'
      }}
    >
      <CardMedia sx={{ height: 180 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <RatingAndPrice
          rating={rating}
          price={getBurgerPrice(price, burgerSize)}
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <ButtonGroup
            aria-label="outlined button group"
            sx={{ marginTop: '10px' }}
          >
            {BURGER_SIZES.map(({ name, value }) => (
              <Button
                key={value}
                variant={burgerSize === value ? 'contained' : 'outlined'}
                size="small"
                onClick={() => {
                  setBurgerSize(value)
                }}
              >
                {name}
              </Button>
            ))}
          </ButtonGroup>
          <Button
            size="small"
            variant="contained"
            sx={{ bgColor: 'pallet.common.orange', marginTop: '10px' }}
            startIcon={<AddIcon />}
            onClick={() => onAddProduct(name, burgerSize)}
          >
            Add Item
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}
