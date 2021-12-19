import { Button } from '@mui/material'
import React from 'react'
import { useSignOutMutation, CurrentUserDocument } from '../graphql-queries'

const SignOut: React.FC = () => {
	const [signOutMutation] = useSignOutMutation()

	const signOut = () => {
		signOutMutation({ refetchQueries: [{ query: CurrentUserDocument }] })
	}
	return (
		<Button variant="outlined" sx={{ color: 'white' }} onClick={signOut}>
			Log out
		</Button>
	)
}

export { SignOut }
