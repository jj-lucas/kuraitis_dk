import React from 'react'
import { UsersQuery, User } from '../../graphql-queries'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Alert } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const ActionMenu: React.FC<{ user: User }> = ({ user }) => {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls="basic-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}>
				edit
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	)
}

export const UsersManagement: React.FC<{ users: UsersQuery['users'] }> = ({ users }) => {
	if (!users) {
		return <Alert severity="info">No users</Alert>
	} else {
		return (
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>Email</TableCell>
							<TableCell>Name</TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map(
							user =>
								!!user && (
									<TableRow key={user.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell component="th" scope="row">
											{user.email}
										</TableCell>
										<TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>{user.name}</TableCell>
										<TableCell align="right">
											<ActionMenu user={user as User} />
										</TableCell>
									</TableRow>
								)
						)}
					</TableBody>
				</Table>
			</TableContainer>
		)
	}
}
