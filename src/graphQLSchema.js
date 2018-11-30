import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	teamsMutations,
	teamsQueries,
	teamsTypeDef
} from './teams/typeDefs';

import {
	loginMutations,
	loginQueries,
	loginTypeDef
} from './login/typeDefs';

import {
	authMutations,
	authTypeDef
} from './auth/typeDefs';

import {
	matchesMutations,
	matchesQueries,
	matchesTypeDef
} from './matches/typeDefs';

import {
	courtsMutations,
	courtsQueries,
	courtsTypeDef
} from './courts/typeDefs';

import {
	messagesMutations,
	messagesQueries,
	messagesTypeDef
} from './messages/typeDefs';

import teamsResolvers from './teams/resolvers';
import loginResolvers from './login/resolvers';
import matchesResolvers from './matches/resolvers';
import courtsResolvers from './courts/resolvers';
import messagesResolvers from './messages/resolvers';
import authResolvers from './auth/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		teamsTypeDef,
		loginTypeDef,
		matchesTypeDef,
		courtsTypeDef,
		messagesTypeDef,
	  authTypeDef
	],
	[
		teamsQueries,
		loginQueries,
		matchesQueries,
		courtsQueries,
		messagesQueries
	],
	[
		teamsMutations,
		loginMutations,
		matchesMutations,
		courtsMutations,
		messagesMutations,
		authMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		teamsResolvers,
		loginResolvers,
		matchesResolvers,
		courtsResolvers,
		messagesResolvers,
		authResolvers
	)
});
