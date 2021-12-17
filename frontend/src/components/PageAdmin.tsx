import React from 'react'
import styled from 'styled-components'
import { useCurrentUserQuery } from '../graphql-queries'
import { Helmet } from 'react-helmet'
import { SignIn } from '../components'

const Header = styled.div`
	background-color: ${props => props.theme.colors.tertiary};
`

const AuthenticateUser: React.FC = props => {
	const { data, loading, error } = useCurrentUserQuery()

	if (error) return <p>{error.message}</p>

	if (loading) return <p>Loading</p>

	if (!data?.currentUser) {
		// display a login form
		return <SignIn />
	}

	return <div>{props.children}</div>
}

const PageAdmin: React.FC = props => {
	return (
		<div>
			<Helmet>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Helmet>
			<Header>Admin header</Header>
			<AuthenticateUser>{props.children}</AuthenticateUser>
		</div>
	)
}

export { PageAdmin }
