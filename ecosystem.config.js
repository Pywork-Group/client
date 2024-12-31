module.exports = {
	apps: [
		{
			name: 'KUPIDROP-CLIENT',
			script: 'yarn',
			args: 'start',
			watch: true,
			ignore_watch: ['node_modules', 'logs', '.next/cache'],
			env: {
				NEXT_APP_ENV: 'production',
				NEXT_APP_URL: 'https://kupidrop.ru',
				NEST_APP_URL: 'https://server.kupidrop.ru',
				APP_DOMAIN: 'kupidrop.ru',
			},
		},
	],
}
