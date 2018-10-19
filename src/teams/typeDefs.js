teamexport const teamsTypeDef = `
type Team {
    id: String!
    nombre: String!
    deporte: String!
    capitan_un: String!
    miembros: [String]
}
input TeamInput {
    nombre: String!
    deporte: String!
    capitan_un: String!
    miembros: [String]
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
