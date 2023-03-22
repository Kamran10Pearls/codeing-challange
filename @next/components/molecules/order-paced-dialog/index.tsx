import { FC, Dispatch, SetStateAction } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@hooks'
import { shopActions } from '@store'
interface OrderPlacedSuccessDialogTypes {
  showDialog: boolean
  setShowDialog: Dispatch<SetStateAction<boolean>>
}

export const OrderPlacedSuccessDialog: FC<OrderPlacedSuccessDialogTypes> = ({
  showDialog,
  setShowDialog
}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const handleDialogClose = () => {
    setShowDialog(false)
    dispatch(shopActions.clearCart())
    void router.push('/')
  }
  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={setShowDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="h2">Order Placed</Typography>
            <CloseIcon
              sx={{ color: 'red', cursor: 'pointer' }}
              onClick={handleDialogClose}
            />
          </Box>
        </DialogTitle>

        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '200px',
            marginBottom: '20px'
          }}
        >
          <CheckCircleIcon sx={{ fontSize: '200px', color: 'green' }} />
          <DialogContentText id="alert-dialog-description">
            Your order has been placed successfully
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
