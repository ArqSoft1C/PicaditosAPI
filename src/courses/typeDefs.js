export const equiposTypeDef = `
type Equipo {
    id: String!
    nombre: String!
    deporte: String!
    capitan_un: String!
    miembros: [String]
}
input EquipoInput {
    nombre: String!
    deporte: String!
    capitan_un: String!
    miembros: [String]
}`;

export const equiposQueries = `
    allEquipos: [Equipo]!
    equipoById(id: String!): Equipo!
`;

export const equiposMutations = `
    createEquipo(equipo: EquipoInput!): Equipo!
    deleteEquipo(id: String!): String
    updateEquipo(id: String!, equipo: EquipoInput!): Equipo!
`;
