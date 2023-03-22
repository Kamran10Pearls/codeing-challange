import { FC, useEffect, useState } from 'react'
import { Card, Grid, Box, TextField } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
  useCheckoutDetail,
  useAppDispatch,
  useAppSelector,
  useDiscount,
  usePromo
} from '@hooks'
import { OrderPlacedSuccessDialog, OrdersList } from '@molecules'
import { shopActions } from '@store'
import { NoItemsFound } from '@atoms'
import { useRouter } from 'next/router'

export const CheckoutDetailCard: FC = () => {
  const router = useRouter()
  const { burgerDetails } = useAppSelector((store) => store.shop)
  const [showDialog, setShowDialog] = useState(false)
  const [promoCode, setPromoCode] = useState('')
  const [discountCode, setDiscountCode] = useState('')
  const dispatch = useAppDispatch()
  const { discountedAmount, calculateDiscountedAmount } = useDiscount()
  const { promoAmount, calculatePromoAmountAmount } = usePromo()
  const [cartItems, totalAmount] = useCheckoutDetail()
  const handleDeleteItem = (itemIndex: number): void => {
    dispatch(shopActions.removeCartItem({ itemIndex }))
  }
  useEffect(() => {
    calculatePromoAmountAmount(totalAmount, promoCode)
    calculateDiscountedAmount(totalAmount, discountCode)
  }, [burgerDetails])
  const handleDiscount = (): void => {
    calculateDiscountedAmount(totalAmount, discountCode)
  }
  const handlePromo = (): void => {
    calculatePromoAmountAmount(totalAmount, promoCode)
  }
  return (
    <Box>
      <Card sx={{ maxWidth: 800, boxShadow: 2, width: '100%' }}>
        <CardContent>
          {cartItems.length ? (
            <Grid container spacing={4} width="100%">
              <Grid item xs={12} sm={12} md={12} lg={6.5} xl={6.5}>
                <Box>
                  <Typography variant="h2">Order Detail</Typography>
                  <OrdersList
                    cartItems={cartItems}
                    handleDeleteItem={handleDeleteItem}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
                <Box>
                  <Typography variant="h2">Bill</Typography>
                  <Typography mt={2}>Total:${totalAmount}</Typography>
                  <Box mt={2} sx={{ display: 'flex' }}>
                    <TextField
                      disabled={promoAmount}
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      id="filled-basic"
                      label="Promo Code"
                      variant="outlined"
                      size="small"
                    />
                    <Button onClick={handlePromo} disabled={promoAmount}>
                      Apply Promo
                    </Button>
                  </Box>
                  <Box mt={2} width="100%" sx={{ display: 'flex' }}>
                    <TextField
                      disabled={discountedAmount}
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      id="filled-basic"
                      label="Discount Code"
                      variant="outlined"
                      size="small"
                    />
                    <Button
                      onClick={handleDiscount}
                      disabled={discountedAmount}
                    >
                      Apply Discount
                    </Button>
                  </Box>
                  {discountedAmount ? (
                    <Typography mt={2}>
                      Discount: -${discountedAmount}
                    </Typography>
                  ) : null}
                  {promoAmount ? (
                    <Typography mt={2}>
                      Promo Discount: -${promoAmount}
                    </Typography>
                  ) : null}

                  <Typography mt={2}>
                    Net Total: {totalAmount - discountedAmount - promoAmount}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ) : (
            <NoItemsFound />
          )}
        </CardContent>
        <CardActions sx={{ width: '100%' }}>
          {cartItems?.length ? (
            <Button
              disabled={!cartItems?.length}
              size="medium"
              variant="contained"
              sx={{ width: '100%' }}
              onClick={() => setShowDialog(true)}
            >
              Place Order
            </Button>
          ) : (
            <Button
              size="medium"
              variant="contained"
              sx={{ width: '100%' }}
              onClick={() => {
                void router.push('/')
              }}
            >
              Get Items
            </Button>
          )}
        </CardActions>
      </Card>
      <OrderPlacedSuccessDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </Box>
  )
}
