import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
	breakpoints: {
		xs: '320px', // mobile
		sm: '480px', // tablet
		md: '768px', // tablet / small screen
		lg: '1200px', // large screen
		xl: '1600px', // huge screen
	},
	maxWidth: {
		xs: '960px',
		sm: '960px',
		md: '960px',
		lg: '960px',
		xl: '960px',
	},
	maxLengthLine: {
		xs: '800px',
		sm: '800px',
		md: '800px',
		lg: '800px',
		xl: '800px',
	},
	typography: {
		fs: {
			h1: '36px',
			h2: '24px',
			h3: '16px',
			h4: '16px',

			lg: '20px',
			base: '14px',
			sm: '12px',
			xs: '10px',
		},
		fw: {
			light: 300,
			regular: 400,
			semibold: 600,
			bold: 700,
		},
		ff: {
			noto: "'Noto Sans', sans-serif",
		},
	},
	boxShadow: {
		sm: '0 0 5px 3px rgba(0, 0, 0, 0.05)',
		md: '0 0 8px 0 rgba(0, 0, 0, 0.2);',
		lg: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
	},
	transition: {
		duration: {
			sm: '0.2s',
			lg: '0.8s',
		},
		type: {
			cubic: 'cubic-bezier(0.73, 0.09, 0.21, 0.96)',
			easeInOut: 'ease-in-out',
		},
	},
	sizes: {
		headerStatusHeight: '18px',
		headerInnerHeight: '76px',
		headerInnerHeightMin: '50px',
		headerGap: '18px',
	},
}

export { theme }
