import { Box, Typography } from '@mui/material'
import { FC } from 'react'

export const NoItemsFound: FC = () => {
  return (
    <Box
      height={180}
      sx={{
        display: 'flex',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column'
      }}
    >
      <Typography variant="h2">No Items Found</Typography>
    </Box>
  )
}
