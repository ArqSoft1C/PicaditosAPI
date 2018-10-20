import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allTeams: (_) =>
			getRequest(URL, ''),
		teamById: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'GET'),
	},
	Mutation: {
		createTeam: (_, { team }) =>
			generalRequest(`${URL}/`, 'POST', team),
		updateTeam: (_, { id, team }) =>
			generalRequest(`${URL}/${id}/`, 'PUT', team),
		deleteTeam: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE')
	}
};

export default resolvers;
