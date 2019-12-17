const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ArchivementSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const RankSchema = new Schema({
  duration: { type: Number, require: true },
  score: { type: Number, required: true },
  archivements: [ArchivementSchema],
}, { timestamps: true });
const Rank = mongoose.model('Rank', RankSchema);

module.exports = { Rank, };