import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allMessages: (_) =>
			generalRequest(URL,'GET'),
		//messageByCode: (_, { code }) =>
		//	generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createMessage: (_, { message }) =>
			generalRequest(`${URL}`, 'POST', message),
		//updateCourse: (_, { code, course }) =>
		//	generalRequest(`${URL}/${code}`, 'PUT', course),
		deleteMessage: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
