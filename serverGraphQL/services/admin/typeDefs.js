const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    teachers: [Teacher]
  }

  type Teacher {
    id: ID!
    email: String!,
    password: String!,
    name: String,
    dob: String,
    phone: String,
    status: Boolean
  }

  type Mutation {
    addTeacher(
      email: String!,
      password: String!,
      name: String,
      dob: String,
      phone: String,
      status: Boolean
      ) : Teacher
  }
`;