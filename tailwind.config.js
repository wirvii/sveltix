/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'sans': ['Poppins', 'sans-serif'],
		},
		fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		},
		extend: {},
	},
	plugins: [],
	safelist: [
		{
			pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
			variants: ['sm', 'md', 'lg', 'xl'],
		},
		{
			pattern: /p-(1|2|3|4|5|6|7|8|9|10|11|12)/,
			variants: ['sm', 'md', 'lg', 'xl'],
		},
		{
			pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
			variants: ['sm', 'md', 'lg', 'xl'],
		},
	],
}

