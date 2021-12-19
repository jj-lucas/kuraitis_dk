import { createContext } from 'react'
import { CurrentUserQuery } from '../../graphql-queries'

export const UserContext = createContext<CurrentUserQuery['currentUser'] | null>(null)
