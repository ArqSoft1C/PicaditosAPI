export const equiposTypeDef = `
type Equipo {
    id: String!
    nombre: String!
    capitan_un: String!
    miembros: [String]
}
input EquipoInput {
    nombre: String!
    capitan_un: String!
    miembros: [String]
}`;

export const equiposQueries = `
    allEquipos: [Equipo]!
    equipoById(id: String!): Equipo!
    equipoByPlayer(player_name: String!): [Equipo]!
`;

export const equiposMutations = `
    createEquipo(equipo: EquipoInput!): Equipo!
    deleteEquipo(id: String!): String
    updateEquipo(id: String!, equipo: EquipoInput!): Equipo!
`;
