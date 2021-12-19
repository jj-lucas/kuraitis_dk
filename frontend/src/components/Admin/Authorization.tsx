import React, { useContext } from 'react'
import { UserContext } from '..'
import { hasPermission } from '../../utils'
import { Alert } from '@mui/material'

export const Authorization: React.FC<{ permissions: String[] | String }> = ({ permissions, children }) => {
	const user = useContext(UserContext)

	if (hasPermission(user, permissions)) {
		return <>{children}</>
	}

	return <Alert severity="error">You don't have sufficient rights to view this page</Alert>
}
