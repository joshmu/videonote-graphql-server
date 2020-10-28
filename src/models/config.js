import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ConfigSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    currentProjectId: { type: Schema.Types.ObjectId, ref: 'Project' },
    playOffset: Number,
    showHints: { type: Boolean, default: true },
    seekJump: Number,
    sidebarWidth: Number,
  },
  { timestamps: true }
)

export default mongoose.model('config', ConfigSchema)
