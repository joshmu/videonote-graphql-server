import mongoose from 'mongoose'

const Schema = mongoose.Schema

const NoteSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    time: { type: Number, default: 0 },
    done: { type: Boolean, default: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    projectIds: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  },
  { timestamps: true }
)

export default mongoose.model('note', NoteSchema)
