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
	VariationsQuery,
	Variation,
	VariationsDocument,
	useCreateVariationMutation,
	//useCreateUserMutation,
	//useDeleteUserMutation,
	//useUnassignPermissionMutation,
} from '../../../graphql-queries'
//import { Modal } from '@/components/Admin'

const Row: React.FC<{ variation: Variation }> = ({ variation }) => {
	const [open, setOpen] = React.useState(false)

	//const [unassignPermissionMutation] = useUnassignPermissionMutation()

	return (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
				<TableCell scope="row">{variation.code}</TableCell>
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
							{/*user.permissions &&
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
												)*/}
							{/*<PermissionsModal user={user} />*/}
						</Box>
						<Box sx={{ margin: 2 }}>{/*<DeleteUser user={user} />*/}</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

const CreateVariation: React.FC = () => {
	const [code, setCode] = useState('')
	const [createVariationMutation, { loading, error }] = useCreateVariationMutation()

	const createVariation = e => {
		e.preventDefault()

		createVariationMutation({
			variables: {
				code,
			},
			refetchQueries: [{ query: VariationsDocument }],
		}).then(() => {
			setCode('')
		})
	}

	return (
		<Box mt={10} component="form" onSubmit={createVariation}>
			<Typography variant="h6">Add a new variation</Typography>
			<Stack sx={{ width: { xs: '100%', sm: '400px' } }}>
				<TextField
					id="code"
					variant="standard"
					label="Code"
					value={code}
					required
					onChange={e => setCode(e.target.value)}
				/>

				<LoadingButton variant="contained" sx={{ mt: 3 }} loading={loading} type="submit">
					Create
				</LoadingButton>
				{error && (
					<Alert severity="error">
						<>{error}</>
					</Alert>
				)}
			</Stack>
		</Box>
	)
}

/*
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
*/

export const VariationsManagement: React.FC<{ variations: VariationsQuery['variations'] }> = ({ variations }) => (
	<>
		{variations ? (
			<TableContainer component={Paper} sx={{ mb: 3 }}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell>Code</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{variations?.map(variation => variation && <Row key={variation.id} variation={variation} />)}
					</TableBody>
				</Table>
			</TableContainer>
		) : (
			<Alert severity="info">No variations</Alert>
		)}
		<CreateVariation />
	</>
)
