import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allMatches: (_) =>
			getRequest(URL, ''),
		matchById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		matchByTeam: (_, { team })  =>
			getRequest(URL, '').then((matchResponse) => {
				let matches = matchResponse.filter( match => (match.team_home_id === team) || (match.team_away_id === team))
				return matches;
			}),

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
