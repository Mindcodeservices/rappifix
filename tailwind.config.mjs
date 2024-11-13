/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#fe2b06', // Define aquí tu color personalizado
				'secondary': '#ec6f59', // Define aquí tu color personalizado
				'contrast':'#e52705'
			  },
		},
	},
	plugins: [],
}
