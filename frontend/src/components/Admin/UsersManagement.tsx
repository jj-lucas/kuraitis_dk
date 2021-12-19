import React from 'react'
import { UsersQuery, User } from '../../graphql-queries'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Chip, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const UsersManagement: React.FC<{ users: UsersQuery['users'] }> = ({ users }) => {
	if (!users) {
		return <Alert severity="info">No users</Alert>
	} else {
		return (
			<div>
				<Typography variant="h6">
					<div style={{ display: 'flex' }}>
						<div style={{ flexBasis: '25%' }}>Email</div>
						<div style={{ flexGrow: '1' }}>Name</div>
					</div>
				</Typography>
				{users.map(
					user =>
						!!user && (
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{ display: 'flex', flexWrap: 'wrap' }}>
									<div style={{ flexBasis: '25%' }}>{user.email}</div>
									<div style={{ flexGrow: '1' }}>{user.name}</div>
								</AccordionSummary>
								<AccordionDetails>
									{user.permissions
										?.filter(perm => perm && perm.name)
										.map(perm => (
											<Chip
												icon={perm?.name === 'ADMIN' ? <VerifiedUserIcon /> : undefined}
												label={perm?.name}
												variant="outlined"
												sx={{ ml: '1rem' }}
											/>
										))}
								</AccordionDetails>
							</Accordion>
						)
				)}
			</div>
		)
	}
}
