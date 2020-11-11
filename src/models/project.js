import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    src: String,
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    sharedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    share: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  },
  { timestamps: true }
)

export default mongoose.model('Project', ProjectSchema)
