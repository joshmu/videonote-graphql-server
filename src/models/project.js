import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    src: String,
    noteIds: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
    creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userIds: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    isPrivate: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.model('project', ProjectSchema)
