import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(`${URL}allUsers/`, ''),
		userById: (_, { id }) =>
			generalRequest(`${URL}userById/${id}/`, 'GET'),
		validate_token: (_, { token, client, uid }) =>
			generalRequest(`${URL}validate_token?access-token=${token}&uid=${uid}&client=${client}`, 'GET')
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}`, 'POST', user),
		signOut: (_, { token, client, uid }) =>
			generalRequest(`${URL}sign_out?access-token=${token}&uid=${uid}&client=${client}`, 'DELETE'),
		signIn: (_, { email, password }) =>
			generalRequest(`${URL}sign_in/`, 'POST', {email,password}, true).then((sessionResponse)=> {
				let user = sessionResponse.body
				user['token'] = sessionResponse.headers['access-token']
				user['client'] = sessionResponse.headers['client']
				return user;
			})
	}
};

export default resolvers;
