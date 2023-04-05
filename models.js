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

const userSchema = new Schema(
  {
    name: String,
    email: String,
  },
  { collection: "Users", typeKey: "$type" }
);

const SubmissionModel = mongoose.model("Submission", submissionSchema);
const UserModel = mongoose.model("User", userSchema);

module.exports = { SubmissionModel, UserModel };