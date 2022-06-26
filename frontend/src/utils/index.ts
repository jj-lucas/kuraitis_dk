import { useContext } from 'react'
import { LanguageContext } from '@/contexts'
import { Scalars, Maybe } from '@/graphql-queries'

export * from './user'
export * from './media'

export const rem2num = (n: string): number => {
	return parseInt(n.replace('rem', ''), 10) * 10
}

export const nationalize = (
	strObj:
		| {
				[key: string]: Maybe<Scalars['String']>
		  }
		| null
		| undefined
) => {
	const lang = useContext(LanguageContext)

	if (strObj && strObj.hasOwnProperty(lang)) {
		return strObj[lang] || ''
	}

	return 'N/A'
}
