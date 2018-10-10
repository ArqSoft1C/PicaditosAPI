import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allEquipos: (_) =>
			getRequest(URL, ''),
		equipoById: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'GET'),
	},
	Mutation: {
		createEquipo: (_, { equipo }) =>
			generalRequest(`${URL}/`, 'POST', equipo),
		updateEquipo: (_, { id, equipo }) =>
			generalRequest(`${URL}/${id}/`, 'PUT', equipo),
		deleteEquipo: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE')
	}
};

export default resolvers;
