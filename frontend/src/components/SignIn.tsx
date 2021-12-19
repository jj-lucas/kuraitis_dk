import React, { useState } from 'react'
import { Box, Stack, TextField, Alert } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useSignInMutation, CurrentUserDocument } from '../graphql-queries'

const SignIn: React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [signInMutation, { loading, error }] = useSignInMutation()

	const signIn = () => {
		signInMutation({
			variables: {
				email,
				password,
			},
			refetchQueries: [{ query: CurrentUserDocument }],
		})
	}

	const changeField: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
		switch (e.target.id) {
			case 'email':
				setEmail(e.target.value)
				break
			case 'password':
				setPassword(e.target.value)
				break
		}
	}

	return (
		<Box sx={{ width: { xs: '100%', sm: 300 }, textAlign: 'left', margin: 'auto' }}>
			<Stack direction={'column'} spacing={{ xs: 1, sm: 2, md: 4 }} mb={{ xs: 1, sm: 2, md: 4 }}>
				<TextField id="email" label="Email" variant="outlined" value={email} onChange={changeField} />
				<TextField
					id="password"
					type="password"
					label="Password"
					variant="outlined"
					value={password}
					onChange={changeField}
				/>
				<LoadingButton variant="contained" fullWidth onClick={signIn} loading={loading}>
					Log in
				</LoadingButton>
				{error && <Alert severity="error">{error}</Alert>}
			</Stack>
		</Box>
	)
}

export { SignIn }
