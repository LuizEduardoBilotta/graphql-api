const userResolvers = {
  Query: {
    getUsers: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    getUserById: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    insertNewUser: async(root, user, { dataSources }) => dataSources.usersAPI.insertNewUser(user),
    updateUserById: async(root, novosDados, { dataSources }) => dataSources.usersAPI.updateUserById(novosDados),
    removeUserById: async(root, { id }, { dataSources }) => dataSources.usersAPI.removeUserById(id)
  }
}

module.exports = userResolvers;