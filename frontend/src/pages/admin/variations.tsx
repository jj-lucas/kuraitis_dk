import { Alert, CircularProgress } from '@mui/material'
import React from 'react'
import { Authorization, VariationsManagement } from '@/components/Admin'

import { useVariationsQuery } from '../../graphql-queries'

const AdminVariationsPage: React.FC = () => {
	const { data, loading, error } = useVariationsQuery()
	return (
		<Authorization permissions={'ADMIN'}>
			<h1>Variations management</h1>

			{loading && <CircularProgress />}

			{error && (
				<Alert severity="error">
					<>{error}</>
				</Alert>
			)}

			{data?.variations && <VariationsManagement variations={data.variations} />}
		</Authorization>
	)
}

export default AdminVariationsPage
