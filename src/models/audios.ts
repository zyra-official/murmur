import { Schema, model, Document, models } from "mongoose";

export interface IAudio extends Document {
  title: string;
  artist: string;
  duration: string;
  category: string;
  src: string;
  image: string;
}

const AudioSchema = new Schema<IAudio>({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: String, required: true },
  category: { type: String, required: true },
  src: { type: String, required: true },
  image: { type: String, required: true },
});

export const Audio = models.Audio || model<IAudio>("Audio", AudioSchema);
