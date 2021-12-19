import { Alert, CircularProgress } from '@mui/material'
import React from 'react'
import { Authorization, UsersManagement } from '../../components'

import { useUsersQuery } from '../../graphql-queries'

const AdminUserPage: React.FC = () => {
	const { data, loading, error } = useUsersQuery()
	return (
		<Authorization permissions={'ADMIN'}>
			<h1>User management</h1>

			{loading && <CircularProgress />}

			{error && <Alert severity="error">{error}</Alert>}

			{data?.users && <UsersManagement users={data.users} />}
		</Authorization>
	)
}

export default AdminUserPage
