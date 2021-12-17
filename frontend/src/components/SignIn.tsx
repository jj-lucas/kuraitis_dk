import React, { useState } from 'react'
import { Box, Button, Stack, TextField } from '@mui/material'
import { useSignInMutation, SignInMutationVariables } from '../graphql-queries'

const SignIn: React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [signInMutation, { data, loading, error }] = useSignInMutation()

	const signIn = () => {
		console.log(password)
		signInMutation({
			variables: {
				email,
				password,
			},
		})

		console.log(data, loading, error)
	}

	const changeField: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
		console.log(e.target.id)
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
				<Button variant="contained" fullWidth onClick={signIn}>
					Log in
				</Button>
			</Stack>
		</Box>
	)
}

export { SignIn }
