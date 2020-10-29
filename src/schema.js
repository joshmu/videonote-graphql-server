import { makeExecutableSchema } from 'graphql-tools'

import { resolvers } from './resolvers'

const typeDefs = `#graphql

  type Note {
    _id: ID!
    content: String!
    time: Float
    done: Boolean
    user: ID!
    projects: [ID]
    createdAt: Date
    updatedAt: Date
  }

  scalar Date
  
  type Project {
    _id: ID!
    title: String!
    src: String
    notes: [Note]
    isPrivate: Boolean!
    user: ID!
    sharedUsers: [ID]!
    createdAt: Date
    updatedAt: Date
  },

  type Settings {
    _id: ID!
    user: ID!
    playOffset: Int
    showHints: Boolean
    seekJump: Int
    sidebarWidth: Int
    currentProject: ID!
    createdAt: Date
    updatedAt: Date
  }

  type User {
    _id: ID!
    email: String!
    username: String
    projects: [ID]
    settings: ID
    role: String!
    createdAt: Date
    updatedAt: Date
  }
  
  type Query {
    getProject(_id: ID!) : Project
    getNote(_id: ID!): Note
    allNotes: [Note]
  }

  input UserInput {
    email: String!
    password: String!
    username: String
    projects: [ID]
    settings: ID
    role: String
  }

  input ProjectInput {
    user: ID!
    title: String!
    src: String
    sharedUsers: [ID]
    isPrivate: Boolean
  }

  input NoteInput {
    user: ID!
    project: ID!
    content: String!
  }

  input NoteUpdateInput {
    user: ID!
    content: String
  }

  type Mutation {
    createUser(input: UserInput) : User
    createProject(input: ProjectInput) : Project
    createNote(input: NoteInput) : Note
    updateNote(_id: ID!, input: NoteUpdateInput) : Note
    deleteNote(_id: ID!) : Note
  }
`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
