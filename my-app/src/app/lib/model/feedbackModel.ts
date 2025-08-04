import { Schema, model, models, Types } from 'mongoose'

export interface IFeedback {
  comment: string
  rating: number
  author: Types.ObjectId 
  seller: Types.ObjectId 
}

const feedbackSchema = new Schema<IFeedback>({
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

export const Feedback = models.Feedback || model<IFeedback>('Feedback', feedbackSchema)
