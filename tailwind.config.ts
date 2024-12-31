import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

export default {
	content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
	theme: {
		fontFamily: {
			base: [
				'var(--font-gotham), -apple-system, blinkmacsystemfont, arial, sans-serif',
			],
		},
		colors: {
			white: '#ffffff',
			black: '#000000',
			transparent: 'transparent',
		},
		zIndex: {
			0: '0',
			1: '1',
			2: '2',
		},
		lineHeight: {
			none: '1',
			base: '1.2',
			md: '1.4',
			lg: '1.6',
		},
		keyframes: {
			fade: {
				from: { opacity: '0' },
				to: { opacity: '1' },
			},
			'fade-out': {
				from: { opacity: '1' },
				to: { opacity: '.4' },
			},
			slideIn: {
				from: {
					visibility: 'hidden',
					opacity: '0',
					transform: 'translateY(-5px)',
				},
				to: { visibility: 'visible', opacity: '1', transform: 'translateY(0)' },
			},
			bounceIn: {
				from: { opacity: '0', transform: 'scale(.8)' },
				to: { opacity: '1', transform: 'scale(1)' },
			},
			spin: {
				from: { transform: 'rotate(0deg)' },
				to: { transform: 'rotate(-1turn)' },
			},
			contract: {
				from: {
					width: 'fit-content',
					height: 'fit-content',
					opacity: '0',
					transform: 'rotate(0deg)',
				},
				'40%': {
					width: 'fit-content',
					height: 'fit-content',
					opacity: '1',
				},
				'99%': { width: 'fit-content', height: 'fit-content', opacity: '0' },
				to: {
					opacity: '0',
					width: '0',
					height: '0',
					overflow: 'hidden',
					transform: 'rotate(1turn)',
				},
			},
			'contract-win': {
				from: { opacity: '0', visibility: 'hidden' },
				'80%': {
					opacity: '0',
					visibility: 'hidden',
				},
				to: { opacity: '1', visibility: 'visible' },
			},
			bounce: {
				from: {
					transform: 'translateY(-1px)',
				},
				to: {
					transform: 'translateY(1px)',
				},
			},
		},
		animation: {
			fade: 'fade 300ms ease-in-out forwards',
			'fade-out': 'fade-out 300ms ease-in-out forwards',
			bounce: 'bounce 1200ms linear infinite',
			slideIn: 'slideIn 300ms ease-in-out forwards',
			spin: 'spin 4s linear infinite',
			spinner: 'spin 1.1s linear infinite',
			contract: 'contract 2.5s forwards',
			'contract-win': 'contract-win 3s forwards',
		},
		extend: {
			transitionTimingFunction: {
				DEFAULT: 'ease-out',
			},
			transitionDuration: {
				DEFAULT: '300ms',
			},
		},
	},
	plugins: [
		plugin(
			({
				addComponents,
				theme,
				addUtilities,
			}: {
				addUtilities: Function
				addComponents: Function
				theme: Function
			}) => {
				addComponents({})

				addUtilities({
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg-cover': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},

					'.text-ellipsis': {
						maxWidth: '100%',
						display: 'block',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					},

					'.consumer': {
						background:
							'linear-gradient(180deg, rgba(73,78,84,0), hsla(216,9%,55%,.24) 90%), #201f2b',
					},

					'.mil-spec': {
						background:
							'linear-gradient(180deg, rgba(36,70,78,0), rgba(82,172,192,.22) 90%), #201f2b',
					},

					'.industrial': {
						background:
							'linear-gradient(180deg, rgba(26,17,81,0), rgba(38,64,201,.24) 90%), #201f2b',
					},

					'.restricted': {
						background:
							'linear-gradient(180deg, rgba(34,17,81,0), rgba(125,46,204,.24) 90%), #201f2b',
					},

					'.classified': {
						background:
							'linear-gradient(180deg, rgba(81,17,29,0), rgba(209,56,102,.24) 90%), #201f2b',
					},

					'.covert': {
						background:
							'linear-gradient(180deg, rgba(81,25,17,0), rgba(197,48,28,.24) 90%), #201f2b',
					},

					'.gold': {
						background:
							'linear-gradient(180deg, rgba(81,55,17,0), rgba(197,139,28,.24) 90%), #201f2b',
					},

					'.consumer-text': {
						color: '#c1c1c1',
					},

					'.mil-spec-text': {
						color: '#6db6cf',
					},

					'.industrial-text': {
						color: '#909cff',
					},

					'.restricted-text': {
						color: '#b795ff',
					},

					'.classified-text': {
						color: '#eb97ca',
					},

					'.covert-text': {
						color: '#ca4b4f',
					},

					'.gold-text': {
						color: '#c6944f',
					},
				})
			}
		),
	],
} satisfies Config
