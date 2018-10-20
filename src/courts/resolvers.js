import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCourts: (_) =>
			getRequest(URL, ''),
		courtById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createCourt: (_, { court }) =>
			generalRequest(`${URL}`, 'POST', court),
		updateCourt: (_, { id, court }) =>
			generalRequest(`${URL}/${id}`, 'PUT', court),
		deleteCourt: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
