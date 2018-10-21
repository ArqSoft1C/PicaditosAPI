export const matchesTypeDef = `
type Match {
    id: Int!
    court_id: Int!
    team_home_id: String!
    team_away_id: String
    score_home: Int!
    score_away: Int!
    played: Boolean!
    date: String!
}
input MatchInput {
    court_id: Int!
    team_home_id: String!
    team_away_id: String
    score_home: Int
    score_away: Int
    played: Boolean
    date: String!
}`;

export const matchesQueries = `
    allMatches: [Match]!
    matchById(id: Int!): Match!
    matchByTeam(team: String!): [Match]!
    openMatches: [Match]!
`;

export const matchesMutations = `
    createMatch(match: MatchInput!): Match!
    deleteMatch(id: Int!): String
    updateMatch(id: Int!, match: MatchInput!): Match!
`;