import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	equiposMutations,
	equiposQueries,
	equiposTypeDef
} from './courses/typeDefs';

import {
	loginMutations,
	loginQueries,
	loginTypeDef
} from './login/typeDefs';

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

import equiposResolvers from './courses/resolvers';
import loginResolvers from './login/resolvers';
import matchesResolvers from './matches/resolvers';
import courtsResolvers from './courts/resolvers';
import messagesResolvers from './messages/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		equiposTypeDef,
		loginTypeDef,
		matchesTypeDef,
		courtsTypeDef,
		messagesTypeDef
	],
	[
		equiposQueries,
		loginQueries,
		matchesQueries,
		courtsQueries,
		messagesQueries
	],
	[
		equiposMutations,
		loginMutations,
		matchesMutations,
		courtsMutations,
		messagesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		equiposResolvers,
		loginResolvers,
		matchesResolvers,
		courtsResolvers,
		messagesResolvers
	)
});
