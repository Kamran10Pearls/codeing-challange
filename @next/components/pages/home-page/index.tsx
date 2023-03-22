import { MainLayout } from '@layouts'
import { Container } from '@mui/material'
import { ProductsListing } from '@organisms'

export const HomePage = (): JSX.Element => {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <ProductsListing />
    </Container>
  )
}
HomePage.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>
