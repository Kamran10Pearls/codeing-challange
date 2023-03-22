// import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import { NavBar } from '@organisms'
import { MUITheme } from '@styles'

export const MainLayout = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <ThemeProvider theme={MUITheme}>
      <NavBar />
      {children}
    </ThemeProvider>
  )
}
