import { FC } from 'react'
import Box from '@mui/material/Box'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface CartItemsType {
  name: string
  price: number
  image: string
  size: string
}
interface OrdersListTypes {
  cartItems: CartItemsType[]
  handleDeleteItem: (index: number) => void
}

export const OrdersList: FC<OrdersListTypes> = ({
  cartItems,
  handleDeleteItem
}) => {
  return (
    <Box sx={{ maxHeight: '500px', overflow: 'auto' }}>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">CAction</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(({ name, price, size, image }, i: number) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <ListItemAvatar
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Avatar alt={name} src="/images/cheeseburger.jpg" />
                    <Box ml={1}>{name}</Box>
                  </ListItemAvatar>
                </TableCell>
                <TableCell align="right">{price}</TableCell>
                <TableCell align="right">{size}</TableCell>
                <TableCell align="right">
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteItem(i)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
