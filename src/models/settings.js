import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SettingsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    currentProject: { type: Schema.Types.ObjectId, ref: 'Project' },
    playOffset: Number,
    showHints: { type: Boolean, default: true },
    seekJump: Number,
    sidebarWidth: Number,
  },
  { timestamps: true }
)

export default mongoose.model('Settings', SettingsSchema)
