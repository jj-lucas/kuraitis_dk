const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
	path: '.env',
})

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Gatsby typescript',
		mocks: {
			product: {
				code: 'OR',
				current_variation: 'TAN',
				other_variations: [
					{
						url: '/brown',
						image: 'https://res.cloudinary.com/kuraitis/image/upload/v1641724594/products/l3xco11gwlqk71oe8nal.jpg',
					},
					{
						url: '/black',
						image: 'https://res.cloudinary.com/kuraitis/image/upload/v1641727554/products/khyuhmmmaxhzmepk7cws.jpg',
					},
				],
				sizes: ['S', 'L'],
				customizable: true,
				breadcrumbs: [
					{
						label: 'Lorem',
						url: '/lorem',
					},
					{
						label: 'Ipsum',
						url: '/ipsum',
					},
				],
				title: 'Lorem ipsum dolor',
				long_title: 'Lorem ipsum dolor sit amet consectetur',
				description:
					'If you are always looking for your things and you appreciate practical storage solutions, this leather tray will allow you to store your belongings in a beautiful natural style. Your keys, coins, pens and everything your imagination determines can be contained in this practical leather tray that will delight your home or office. It is of robust construction but at the same time, soft to the touch and with a fragrance and colors characteristic of natural leather.\n\nIf you are always looking for your things and you appreciate practical storage solutions, this leather tray will allow you to store your belongings in a beautiful natural style. Your keys, coins, pens and everything your imagination determines can be contained in this practical leather tray that will delight your home or office. It is of robust construction but at the same time, soft to the touch and with a fragrance and colors characteristic of natural leather.',
				material: ['leather'],
				details: ['Lorem ipsum dolor sit amet 1', 'Lorem ipsum dolor sit amet 2', 'Lorem ipsum dolor sit amet 3'],
				prices: {
					S: {
						dkk: 43000,
						usd: 7800,
					},
					L: {
						dkk: 43000,
						usd: 7800,
					},
				},
				size_chart: 'http://www.google.com',
				images: {
					product: [
						'https://res.cloudinary.com/kuraitis/image/upload/v1641665283/products/ouvgk0hsjnsvrozjqdxk.jpg',
						'https://res.cloudinary.com/kuraitis/image/upload/v1617901813/products/to8omylzrz4hmg6mwhn5.jpg',
						'https://res.cloudinary.com/kuraitis/image/upload/v1617901792/products/wokipe2phwvvuqois6rt.jpg',
					],
					parallax:
						'https://previews.123rf.com/images/mtoome/mtoome1609/mtoome160900099/63492873-leather-handbag-craftsman-at-work-in-a-workshop.jpg',
				},
			},
			translations: {
				product_details_sizing: 'Sizing info text. Potentially a small size chart.',
				product_details_shipping_returns: [
					'Lorem ipsum dolor sit amet 1',
					'Lorem ipsum dolor sit amet 2',
					'Lorem ipsum dolor sit amet 3',
					'Lorem ipsum dolor sit amet 4',
					'Lorem ipsum dolor sit amet 5',
				],
				product_details_shipping_returns_customization: 'Special paragraph about customization',
				product_materials: {
					leather:
						'An interesting description about the materials being used based on the selected materials from the admin. Selling points, why sustainability, etc. An interesting description about the materials being used based on the selected materials from the admin. Selling points, why sustainability, etc.',
				},
				product_customization:
					"We can add up to three initials to each item which can be embossed by pressure onto the surface of the leather, adding a unique touch of individuality and personality. Request such customization in the 'customization' field above.",
				product_selling_points: {
					shipping: '1-3 days until your order is made and shipped.',
					gift: 'All items are shipped in gift packaging.',
					cancellations_returns:
						'Free cancellations prior to shipping.\n30 days return right for non-customized products',
					product_sergio:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				footer:
					'© 2022, Sergio Kuraitis - Naturligt Design. CVR: 32220649 Højrisvej 13, 7900 Nykøbing Mors, Denmark | sergio@kuraitis.dk',
				footer_privatlivs: 'Privatlivspolitik',
				footer_cookie: 'Cookiepolitik',
			},
			review:
				'I love this key organizer. Great craftsmanship & shipped pretty quickly. I would definitely purchase from Sergio again.',
		},
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
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				'@': path.join(__dirname, 'src'),
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-graphql-codegen`,
		{
			resolve: 'gatsby-plugin-apollo',
			options: {
				uri: process.env.GATSBY_GRAPHQL_ENDPOINT,
				credentials: 'include',
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
