export * from './user'
export * from './media'

export const rem2num = (n: string): number => {
	return parseInt(n.replace('rem', ''), 10) * 10
}
