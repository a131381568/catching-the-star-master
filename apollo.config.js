module.exports = {
  client: {
    service: {
      "name": "ctsm-sql",
      // GraphQL API
      // http://localhost:4000/graphql
      url: 'http://localhost:4000/graphql',
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}