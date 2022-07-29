import React, { useContext } from 'react'
import { UserContext } from '@/components/Admin'

const IndexPage: React.FC = () => {
	const currentUser = useContext(UserContext)
	return (
		<>
			<h1>Hejsa {currentUser?.name}</h1>
		</>
	)
}

export default IndexPage
