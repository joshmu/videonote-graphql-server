import Note from './models/note'
import Project from './models/project'
import Settings from './models/settings'
import User from './models/user'

export const resolvers = {
  Query: {
    async getProject(root, { _id }) {
      return await Project.findById(_id).populate({
        path: 'notes',
        model: 'note',
      })
    },
    async getNote(root, { _id }) {
      return await Note.findById(_id)
    },
    async allNotes() {
      return await Note.find()
    },
  },
  Mutation: {
    async createUser(root, { input }) {
      return await User.create(input)
    },
    async createProject(root, { input }) {
      // create project
      const projectDoc = await Project.create(input)
      // add projectId to user
      const userDoc = await User.findById(input.userId)
      userDoc.projects.push(projectDoc._id)
      userDoc.save()

      return projectDoc
    },
    async createNote(root, { input }) {
      // create note
      const noteDoc = await Note.create(input)
      // add note id to project
      const projectDoc = await Project.findById(input.projectId)
      projectDoc.notes.push(noteDoc._id)
      projectDoc.save()
      return noteDoc
    },
    async updateNote(root, { _id, input }) {
      return await Note.findOneAndUpdate({ _id }, input, { new: true })
    },
    async deleteNote(root, { _id }) {
      return await Note.findOneAndDelete({ _id })
    },
  },
}
