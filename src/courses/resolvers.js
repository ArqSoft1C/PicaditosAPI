import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allEquipos: (_) =>
			getRequest(URL, ''),
		equipoById: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'GET'),
		equipoByPlayer: (_, {player_name}) =>
			getRequest(URL, '').then((teamResponse) => {
				let teams = teamResponse.filter(team => team.miembros.includes(player_name));
				return teams;
			}),
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
