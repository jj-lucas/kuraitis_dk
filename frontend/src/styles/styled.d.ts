// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			accent: string
		}
		breakpoints: {
			xs: string
			sm: string
			md: string
			lg: string
			xl: string
		}
		maxWidth: {
			xs: string
			sm: string
			md: string
			lg: string
			xl: string
		}
		maxLengthLine: {
			xs: string
			sm: string
			md: string
			lg: string
			xl: string
		}
		typography: {
			fs: {
				h1: string
				h2: string
				h3: string
				h4: string

				lg: string
				base: string
				sm: string
				xs: string
			}
			fw: {
				light: number
				regular: number
				semibold: number
				bold: number
			}
			ff: {
				noto: string
				roboto: string
				stick: string
			}
		}
		boxShadow: {
			xs: string
			sm: string
			md: string
			lg: string
		}
		transition: {
			duration: {
				sm: string
				lg: string
			}
			type: {
				cubic: string
				easeInOut: string
			}
		}
		sizes: {
			headerCollapse: string
			productPageContentStart: string
			productPageMobileGalleryHeight: string
		}
		spacing: {
			sm: string
			base: string
			lg: string
		}
	}
}
