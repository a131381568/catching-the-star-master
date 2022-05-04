module.exports = {
  client: {
    service: {
      "name": "ctsm-sql",
      // GraphQL API
      // http://localhost:4000/graphql
      url: import.meta.env.VITE_API_URL
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}