import { CheckoutLayout } from '@layouts'
import { Container } from '@mui/material'
import { CheckoutDetailCard } from '@organisms'

export const CheckoutPage = (): JSX.Element => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <CheckoutDetailCard />
    </Container>
  )
}
CheckoutPage.getLayout = (page: React.ReactNode) => (
  <CheckoutLayout>{page}</CheckoutLayout>
)
