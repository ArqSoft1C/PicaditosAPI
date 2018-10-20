export const courtsTypeDef = `
type Court {
    id: Int!
    name: String!
    latitude: Float!
    longitude: Float!
    address: String!
    availability: Boolean!
    price_hour: Int!
}
input CourtInput {
    name: String!
    latitude: Float!
    longitude: Float!
    address: String!
    availability: Boolean!
    price_hour: Int!
}`;

export const courtsQueries = `
    allCourts: [Court]!
    courtById(id: Int!): Court!
`;

export const courtsMutations = `
    createCourt(court: CourtInput!): Court!
    deleteCourt(id: Int!): String
    updateCourt(id: Int!, court: CourtInput!): Court!
`;