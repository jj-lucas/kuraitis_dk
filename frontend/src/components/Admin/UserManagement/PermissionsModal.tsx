import React, { useState } from 'react'
import { Alert, Box, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { LoadingButton } from '@mui/lab'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import CircularProgress from '@mui/material/CircularProgress'
import { User, UsersDocument, usePermissionsQuery, useAssignPermissionMutation } from '../../../graphql-queries'
import { hasPermission } from '../../../utils'

export const PermissionsModal: React.FC<{ user: User }> = ({ user }) => {
	const { data, loading } = usePermissionsQuery()
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [permissionToGrant, setPermissionToGrant] = useState('')
	const [assignPermissionMutation, { loading: loadingAssignMutation, error: errorAssignMutation }] =
		useAssignPermissionMutation()

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		width: { xs: '100%', sm: 'auto' },
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
		transform: 'translate(-50%, -50%)',
	}

	if (loading) {
		return <CircularProgress />
	}

	return (
		<>
			<LoadingButton variant="outlined" onClick={handleOpen}>
				+
			</LoadingButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Grant permissions to {user.name}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<FormControl fullWidth>
							<InputLabel id="permissions">Permission</InputLabel>
							<Select
								labelId="permissions"
								id="permissions"
								value={permissionToGrant}
								label="Permission"
								onChange={e => setPermissionToGrant(e.target.value)}>
								{data?.permissions
									?.filter(perm => !hasPermission(user, perm?.name || ''))
									.map(perm => (
										<MenuItem key={perm?.id} value={perm?.name || ''}>
											{perm?.name}
										</MenuItem>
									))}
							</Select>
							{errorAssignMutation && <Alert severity="error">{errorAssignMutation}</Alert>}
							<LoadingButton
								variant="contained"
								loading={loadingAssignMutation}
								disabled={!permissionToGrant}
								onClick={() => {
									assignPermissionMutation({
										variables: {
											userId: user.id,
											permissionName: permissionToGrant,
										},
										refetchQueries: [{ query: UsersDocument }],
									}).then(() => {
										setOpen(false)
									})
								}}
								sx={{ mt: 2 }}>
								Grant
							</LoadingButton>
						</FormControl>
					</Typography>
				</Box>
			</Modal>
		</>
	)
}
