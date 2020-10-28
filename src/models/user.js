import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String },
    projectIds: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    configId: { type: Schema.Types.ObjectId, ref: 'Config' },
    role: { type: String, default: 'free' },
    password: String,
  },
  { timestamps: true }
)

export default mongoose.model('user', UserSchema)
