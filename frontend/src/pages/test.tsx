import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { TestQuery } from '../../graphql-types'

const Page: React.FC<PageProps<TestQuery>> = ({ data }) => <>{data.kuraitis.hello}</>

export default Page

export const testQuery = graphql`
	query Test {
		kuraitis {
			hello(name: "Lucas")
		}
	}
`
