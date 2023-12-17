module.exports = {
	content: ["./src/views/**/*.html", "./src/js/*.js"],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				"brand-dark": "#010E10",
				"brand-blue": "#17868D",
				"brand-gray": "#3D3D3D",
				"brand-dark-gray": "#1C1C1C",
				"brand-accent": "#F0D683"
			},
			fontFamily: {
				heading: ["Oranienbaum", "serif"],
				primary: ["Noto Sans", "sans-serif"]
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
				"out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
				"in-quad": "cubic-bezier(0.11, 0, 0.5, 0)"
			},
			backgroundImage: {
				gradient: "linear-gradient(to top right, #9F734C 0%, #F0D683 100%)",
				"gradient-reverted": "linear-gradient(to top right, #F0D683 0%, #9F734C 100%)"
			}
		},
		corePlugins: {},
		plugins: []
	}
}
