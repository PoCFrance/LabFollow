import { createApolloFetch } from 'apollo-fetch';

export const uri = 'http://10.41.173.44:4000/'
export const apolloFetch = createApolloFetch({ uri });