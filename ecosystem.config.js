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
				APP_DOMAIN: 'kupidrop.ru',
				NEXT_APP_URL: 'https://kupidrop.ru',
				NEST_APP_URL: 'https://server.kupidrop.ru',
				GRAPHQL_URL: 'https://server.kupidrop.ru/api/mygraphql',
			},
		},
	],
}
