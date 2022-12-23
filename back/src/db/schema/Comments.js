import { Schema, model } from 'mongoose';

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: String
  },
  {
    timestamps: true
  }
);

const CommentModel = model('Comments', CommentSchema);

export { CommentModel };
