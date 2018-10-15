export const loginTypeDef = `
type User {
  id: Int!
  provider: String!
  uid: String!
  name: String!
  lastname: String!
  username: String!
  picture: String!
  phone: String!
  email: String!
  password: String!
  token: String
  client: String
}

input UserInput {
    name: String!
    lastname: String!
    email: String!
    picture: String!
    phone: String!
    username: String!
    password: String!
    password_confirmation: String!
}


type Validate {
  success: String!
  errors: String
}
`;

export const loginQueries = `
    allUsers: [User]!
    userById(id: Int!): User!
    validate_token(token: String!, client: String!, uid: String!): Validate!
`;

export const loginMutations = `
    createUser(user: UserInput!): User!
    signIn(email: String!, password: String!): User!
    signOut(token: String!, client: String!, uid: String!): Validate!
`;
