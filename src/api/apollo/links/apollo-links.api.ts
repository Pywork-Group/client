import { ApolloLink, HttpLink, split } from '@apollo/client'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import { errorLink } from '../error/apollo-error.api'

const removeTypenameLink = removeTypenameFromVariables()

const httpLink = new HttpLink({
	uri: process.env.GRAPHQL_URL as string,
	credentials: 'include',
})

export const socketLink = new GraphQLWsLink(
	createClient({
		url: process.env.GRAPHQL_URL as string,
		retryAttempts: 10,
	})
)

export const apolloLinks = ApolloLink.from([
	removeTypenameLink,
	errorLink,
	split(
		({ query }) => {
			const definition = getMainDefinition(query)
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'subscription'
			)
		},
		socketLink,
		httpLink
	),
])
