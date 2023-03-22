// import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import { MUITheme } from '@styles'

export const CheckoutLayout = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  return <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>
}
