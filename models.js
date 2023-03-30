const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema(
  {
    id: String,
    name: String,
    score: Number,
  },
  { collection: "Submissions", typeKey: "$type" }
);

const SubmissionModel = mongoose.model("Submission", submissionSchema);

module.exports = { SubmissionModel };