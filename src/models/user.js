import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    settings: { type: Schema.Types.ObjectId, ref: 'Settings' },
    role: { type: String, default: 'free' },
    password: String,
  },
  { timestamps: true }
)

export default mongoose.model('User', UserSchema)
