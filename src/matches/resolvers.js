import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allMatches: (_) =>
			getRequest(URL, ''),
		matchById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createMatch: (_, { match }) =>
			generalRequest(`${URL}`, 'POST', {match:match}),
		updateMatch: (_, { id, match }) =>
			generalRequest(`${URL}/${id}`, 'PUT', {match:match}),
		deleteMatch: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
