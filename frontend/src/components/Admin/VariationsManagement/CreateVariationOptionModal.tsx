import React, { useState } from 'react'
import { Alert, Box, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { LoadingButton } from '@mui/lab'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import CircularProgress from '@mui/material/CircularProgress'
import { Variation, VariationsDocument, useCreateVariationOptionMutation } from '../../../graphql-queries'

export const CreateVariationOptionModal: React.FC<{ variation: Variation }> = ({ variation }) => {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [code, setCode] = useState('')
	const [createVariationOptionMutation, { loading: loadingCreateMutation, error: errorCreateMutation }] =
		useCreateVariationOptionMutation()

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
						Create option for {variation.code}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<FormControl fullWidth>
							<TextField
								id="code"
								variant="standard"
								type="code"
								label="Code"
								value={code}
								required
								onChange={e => setCode(e.target.value)}
							/>

							{errorCreateMutation && (
								<Alert severity="error">
									<>{errorCreateMutation}</>
								</Alert>
							)}
							<LoadingButton
								variant="contained"
								loading={loadingCreateMutation}
								disabled={!code}
								onClick={() => {
									createVariationOptionMutation({
										variables: {
											code,
											variationId: variation.id,
										},
										refetchQueries: [{ query: VariationsDocument }],
									}).then(() => {
										setCode('')
										setOpen(false)
									})
								}}
								sx={{ mt: 2 }}>
								Create
							</LoadingButton>
						</FormControl>
					</Typography>
				</Box>
			</Modal>
		</>
	)
}
