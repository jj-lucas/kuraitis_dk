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
				long_title: {
					da: 'Lorem ipsum dolor sit amet consectetur',
				},
				description: {
					da: 'If you are always looking for your things and you appreciate practical storage solutions, this leather tray will allow you to store your belongings in a beautiful natural style. Your keys, coins, pens and everything your imagination determines can be contained in this practical leather tray that will delight your home or office. It is of robust construction but at the same time, soft to the touch and with a fragrance and colors characteristic of natural leather.\n\nIf you are always looking for your things and you appreciate practical storage solutions, this leather tray will allow you to store your belongings in a beautiful natural style. Your keys, coins, pens and everything your imagination determines can be contained in this practical leather tray that will delight your home or office. It is of robust construction but at the same time, soft to the touch and with a fragrance and colors characteristic of natural leather.',
				},
				material: ['leather'],
				details: [
					{
						da: 'Lorem ipsum dolor sit amet 1',
					},
					{
						da: 'Lorem ipsum dolor sit amet 2',
					},
					{
						da: 'Lorem ipsum dolor sit amet 3',
					},
				],
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
				},
			},
			translations: {
				product_details_sizing: {
					da: 'Sizing info text. Potentially a small size chart.',
				},
				product_details_shipping_returns: [
					{ da: 'Lorem ipsum dolor sit amet 1' },
					{ da: 'Lorem ipsum dolor sit amet 2' },
					{ da: 'Lorem ipsum dolor sit amet 3' },
					{ da: 'Lorem ipsum dolor sit amet 4' },
					{ da: 'Lorem ipsum dolor sit amet 5' },
				],
				product_details_shipping_returns_customization: {
					da: 'Special paragraph about customization',
				},
				product_materials: {
					leather: {
						da: 'An interesting description about the materials being used based on the selected materials from the admin. Selling points, why sustainability, etc. An interesting description about the materials being used based on the selected materials from the admin. Selling points, why sustainability, etc.',
					},
				},
				product_customization: {
					da: "We can add up to three initials to each item which can be embossed by pressure onto the surface of the leather, adding a unique touch of individuality and personality. Request such customization in the 'customization' field above.",
				},
				product_selling_points: {
					shipping: {
						da: '1-3 days until your order is made and shipped.',
					},
					gift: {
						da: 'All items are shipped in gift packaging.',
					},
					cancellations_returns: {
						da: 'Free cancellations prior to shipping.\n30 days return right for non-customized products',
					},
					product_sergio: {
						da: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					},
				},
				footer: {
					da: '?? 2022, Sergio Kuraitis - Naturligt Design. CVR: 32220649 H??jrisvej 13, 7900 Nyk??bing Mors, Denmark | sergio@kuraitis.dk',
				},
				footer_privatlivs: {
					da: 'Privatlivspolitik',
				},
				footer_cookie: {
					da: 'Cookiepolitik',
				},
			},
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
		{
			resolve: `gatsby-plugin-graphql-codegen`,
			options: {
				documentPaths: ['./src/**/*.{ts,tsx}'],
			},
		},
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
