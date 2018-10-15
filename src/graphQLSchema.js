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

import equiposResolvers from './courses/resolvers';
import loginResolvers from './login/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		equiposTypeDef,
		loginTypeDef
	],
	[
		equiposQueries,
		loginQueries
	],
	[
		equiposMutations,
		loginMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		equiposResolvers,
		loginResolvers
	)
});
