import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    config: { type: Schema.Types.ObjectId, ref: 'Config' },
    role: { type: String, default: 'free' },
    password: String,
  },
  { timestamps: true }
)

export default mongoose.model('user', UserSchema)
