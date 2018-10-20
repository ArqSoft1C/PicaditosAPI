export const teamsTypeDef = `
type Team {
    id: String!
    name: String!
    sport: String!
    captain: String!
    squad: [String]
}
input TeamInput {
    name: String!
    sport: String!
    captain: String!
    squad: [String]
}`;

export const teamsQueries = `
    allTeams: [Team]!
    teamById(id: String!): Team!
`;

export const teamsMutations = `
    createTeam(team: TeamInput!): Team!
    deleteTeam(id: String!): String
    updateTeam(id: String!, team: TeamInput!): Team!
`;
