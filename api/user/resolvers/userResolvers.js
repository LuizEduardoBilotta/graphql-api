const { GraphQLScalarType } = require('graphql');

const userResolvers = {

  RolesType:{
    ESTUDANTE: "ESTUDANTE",
    DOCENTE: "DOCENTE",
    COORDENACAO: "COORDENACAO"
  },
  
  DateTime: new GraphQLScalarType({
    name:'DateTime',
    description: 'String de data e hora no formato ISO-8601',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  
  Query: {
    getUsers: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    getUserById: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  
  Mutation: {
    insertNewUser: async(root, { user }, { dataSources }) => dataSources.usersAPI.insertNewUser(user),
    updateUserById: async(root, novosDados, { dataSources }) => dataSources.usersAPI.updateUserById(novosDados),
    removeUserById: async(root, { id }, { dataSources }) => dataSources.usersAPI.removeUserById(id)
  }
}

module.exports = userResolvers;