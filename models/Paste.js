import mongoose from 'mongoose';

const PasteSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      default: null,
    },
    remainingViews: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Paste ||
  mongoose.model('Paste', PasteSchema);
