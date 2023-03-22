import '../styles/global.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'

import { SnackbarProvider } from 'notistack'
import { UserContextProvider } from '@context'
import type { Page } from '@types'

type Props = AppProps & {
  Component: Page
}

const MyApp: FC<Props> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <UserContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </UserContextProvider>
    </SnackbarProvider>
  )
}
export default MyApp
