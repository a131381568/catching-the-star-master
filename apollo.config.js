module.exports = {
  client: {
    service: {
      "name": "ctsm-sql",
      // GraphQL API
      url: 'http://localhost:4000/graphql',
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}