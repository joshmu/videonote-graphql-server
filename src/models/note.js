import mongoose from 'mongoose'

const Schema = mongoose.Schema

const NoteSchema = new Schema(
  {
    content: { type: String, required: true },
    time: { type: Number, default: 0 },
    done: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
  },
  { timestamps: true }
)

export default mongoose.model('Note', NoteSchema)
