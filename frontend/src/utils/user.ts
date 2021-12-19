import { CurrentUserQuery } from '../graphql-queries'

export const hasPermission = (user: CurrentUserQuery['currentUser'], search: String | String[]): boolean => {
	const allowed = typeof search === 'string' ? [search] : search
	return (
		(user && user.permissions && user.permissions.some(perm => perm && perm.name && allowed.includes(perm.name))) ||
		false
	)
}
