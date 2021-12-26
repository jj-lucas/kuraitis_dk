import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Alert, Box, Chip, Collapse, IconButton, Stack, TextField, Typography } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { LoadingButton } from '@mui/lab'
import {
	UsersQuery,
	User,
	UsersDocument,
	useCreateUserMutation,
	useDeleteUserMutation,
	useUnassignPermissionMutation,
} from '../../../graphql-queries'
import { PermissionsModal } from './PermissionsModal'

const Row: React.FC<{ user: User }> = ({ user }) => {
	const [open, setOpen] = React.useState(false)

	const [unassignPermissionMutation] = useUnassignPermissionMutation()

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
							{user.permissions &&
								user.permissions?.length > 0 &&
								user.permissions
									?.filter(perm => perm && perm.name)
									.map(
										perm =>
											perm && (
												<Chip
													color="primary"
													icon={perm.name === 'ADMIN' ? <VerifiedUserIcon /> : undefined}
													label={perm.name}
													variant="outlined"
													onDelete={e => {
														unassignPermissionMutation({
															variables: {
																userId: user.id,
																permissionName: perm.name,
															},
															refetchQueries: [{ query: UsersDocument }],
														})
													}}
													sx={{ mr: '1rem' }}
												/>
											)
									)}
							<PermissionsModal user={user} />
						</Box>
						<Box sx={{ margin: 2 }}>
							<DeleteUser user={user} />
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

const AddUser: React.FC = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [createUserMutation, { loading, error }] = useCreateUserMutation()

	const createUser = () => {
		createUserMutation({
			variables: {
				name,
				email,
				password,
			},
			refetchQueries: [{ query: UsersDocument }],
		}).then(() => {
			setName('')
			setEmail('')
			setPassword('')
		})
	}

	return (
		<Box mt={10}>
			<Typography variant="h6">Add a new user</Typography>
			<Stack sx={{ width: { xs: '100%', sm: '400px' } }}>
				<TextField id="name" variant="standard" label="Name" value={name} onChange={e => setName(e.target.value)} />

				<TextField
					id="email"
					variant="standard"
					type="email"
					label="Email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>

				<TextField
					id="password"
					variant="standard"
					label="Password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				<LoadingButton variant="contained" sx={{ mt: 3 }} loading={loading} onClick={createUser}>
					Create
				</LoadingButton>
				{error && <Alert severity="error">{error}</Alert>}
			</Stack>
		</Box>
	)
}

const DeleteUser: React.FC<{ user: User }> = ({ user }) => {
	const [deleteUserMutation, { loading, error }] = useDeleteUserMutation()

	const deleteUser = (id: string) => {
		deleteUserMutation({
			variables: {
				id,
			},
			refetchQueries: [{ query: UsersDocument }],
		})
	}
	return (
		<>
			<LoadingButton
				variant="contained"
				color={'error'}
				loading={loading}
				onClick={() => {
					if (confirm('Are you sure you want to delete this user?') == true) {
						deleteUser(user.id)
					}
				}}>
				Delete
			</LoadingButton>
			{error && <Alert severity="error">{error}</Alert>}
		</>
	)
}

export const UsersManagement: React.FC<{ users: UsersQuery['users'] }> = ({ users }) => (
	<>
		{users ? (
			<TableContainer component={Paper} sx={{ mb: 3 }}>
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
		) : (
			<Alert severity="info">No users</Alert>
		)}
		<AddUser />
	</>
)
