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
		createTeam: (_, { equipo }) =>
			generalRequest(`${URL}/`, 'POST', equipo),
		updateTeam: (_, { id, equipo }) =>
			generalRequest(`${URL}/${id}/`, 'PUT', equipo),
		deleteTeam: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE')
	}
};

export default resolvers;
