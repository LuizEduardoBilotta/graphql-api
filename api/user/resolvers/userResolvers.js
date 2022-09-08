const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    adicionaUser: async(root, user, { dataSources }) => dataSources.usersAPI.adicionaUser(user),
    atualizaUser: async(root, novosDados, { dataSources }) => dataSources.usersAPI.atualizaUser(novosDados),
    removeUser: async(root, { id }, { dataSources }) => dataSources.usersAPI.removeUser(id)
  }
}

module.exports = userResolvers;