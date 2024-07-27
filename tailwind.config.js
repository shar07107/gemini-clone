/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				auto: " repeat(auto-fill, minmax(180px, 1fr))",
			},
		},
	},
	plugins: [],
};
