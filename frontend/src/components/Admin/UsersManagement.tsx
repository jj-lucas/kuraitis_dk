import React from 'react'
import { UsersQuery, User } from '../../graphql-queries'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Alert, Box, Chip, Collapse, IconButton, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Row: React.FC<{ user: User }> = ({ user }) => {
	const [open, setOpen] = React.useState(false)

	return (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
				<TableCell scope="row">{user.name}</TableCell>
				<TableCell>{user.email}</TableCell>
				<TableCell align="right">
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 2 }}>
							<Typography variant="body1" sx={{ mb: 2 }} component="div">
								Permissions
							</Typography>
							{user.permissions
								?.filter(perm => perm && perm.name)
								.map(perm => (
									<Chip
										color="primary"
										icon={perm?.name === 'ADMIN' ? <VerifiedUserIcon /> : undefined}
										label={perm?.name}
										variant="outlined"
										sx={{ ml: '1rem' }}
									/>
								))}
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

export const UsersManagement: React.FC<{ users: UsersQuery['users'] }> = ({ users }) => {
	if (!users) {
		return <Alert severity="info">No users</Alert>
	} else {
		return (
			<TableContainer component={Paper}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>{users?.map(user => user && <Row key={user.id} user={user as User} />)}</TableBody>
				</Table>
			</TableContainer>
		)
	}
}
