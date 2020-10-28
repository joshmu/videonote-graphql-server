import { makeExecutableSchema } from 'graphql-tools'

import { resolvers } from './resolvers'

const typeDefs = `#graphql

  type Note {
    _id: ID!
    content: String!,
    time: Float,
    done: Boolean,
    creatorId: ID!
    projectIds: [ID]
    createdAt: Date,
    updatedAt: Date,
  }

  scalar Date
  
  type Project {
    _id: ID!
    title: String!,
    src: String,
    notes: [Note],
    isPrivate: Boolean!,
    creatorId: ID!
    userIds: [ID]!,
    createdAt: Date,
    updatedAt: Date,
  },

  type Config {
    _id: ID!
    userId: ID!,
    playOffset: Int,
    showHints: Boolean,
    seekJump: Int,
    sidebarWidth: Int,
    currentProjectId: ID!,
    createdAt: Date,
    updatedAt: Date,
  }

  type User {
    _id: ID!
    email: String!,
    username: String,
    projectIds: [ID],
    configId: ID,
    role: String!,
    createdAt: Date,
    updatedAt: Date,
  }
  
  type Query {
    getNote(_id: ID!): Note
    allNotes: [Note]
  }

  input NoteInput {
    title: String!,
    content: String!
  }

  input NoteUpdateInput {
    title: String,
    content: String
  }

  type Mutation {
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
