import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allTeams: (_) =>
			getRequest(URL, ''),
		teamById: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'GET'),
		teamByPlayer: (_, {player_name}) =>
			getRequest(URL, '').then((teamResponse) => {
				let teams = teamResponse.filter(team => team.squad.includes(player_name));
				return teams;
			}),
		openTeams: (_) =>
			getRequest(URL, '').then((teamResponse) => {
				let teams = teamResponse.filter(team => team.squad.length < 11 );
				return teams;
			}),
	},
	Mutation: {
		createTeam: (_, { team }) =>
			generalRequest(`${URL}/`, 'POST', team),
		updateTeam: (_, { id, team }) =>
			generalRequest(`${URL}/${id}/`, 'PUT', team),
		deleteTeam: (_, { id }) =>
			generalRequest(`${URL}/${id}/`, 'DELETE'),
		addPlayerToTeam: (_, { id, player_name }) =>
			generalRequest(`${URL}/${id}/`, 'GET').then((teamResponse) => {
				teamResponse.squad.push(player_name)
				return generalRequest(`${URL}/${id}/`, 'PUT', teamResponse)
			}),
	}
};

export default resolvers;
