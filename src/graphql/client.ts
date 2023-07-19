import { GraphQLClient } from "graphql-request"

// const endpoint = process.env.GRAPHQL_API_URL

const client = new GraphQLClient("http://localhost:1337/graphql")

export default client