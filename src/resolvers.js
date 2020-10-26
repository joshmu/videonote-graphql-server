import Note from './models/note'

export const resolvers = {
  Query: {
    async allNotes() {
      return await Note.find()
    },
  },
  Mutation: {
    async createNote(root, { input }) {
      return await Note.create(input)
    },
  },
}
