module.exports = {
	networks: {
		development: {
			protocol: 'http',
			host: '192.168.0.155',
			port: 8545,
			network_id: '*',
		},
		ropsten: {
			protocol: 'https',
			host: 'ropsten.infura.io',
			key: 'z3Gn6k0E1Kgu1W0I1WXU',
			port: 8545,
			network_id: 3,
		},
	},
	migrations_directory: './migrations',
};
// https://ropsten.infura.io/z3Gn6k0E1Kgu1W0I1WXU