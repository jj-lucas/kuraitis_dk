const dotenv = require('dotenv')

dotenv.config({
	path: '.env',
})

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Gatsby typescript',
	},
	plugins: [
		{
			resolve: 'gatsby-source-graphql',
			options: {
				// Arbitrary name for the remote schema Query type
				typeName: 'Kuraitis',
				// Field under which the remote schema will be accessible. You'll use this in your Gatsby query
				fieldName: 'kuraitis',
				// Url to query from
				url: process.env.GATSBY_GRAPHQL_ENDPOINT,
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		// `gatsby-plugin-graphql-codegen`,
		{
			resolve: 'gatsby-plugin-apollo',
			options: {
				uri: process.env.GATSBY_GRAPHQL_ENDPOINT,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
}
