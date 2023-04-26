const mongoose = require("mongoose");
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },

  { timestamps: true }
);
tweetSchema.pre("save", function (next) {
  console.log("Inside a hook");
  this.content = this.content + "...";
  next();
});
tweetSchema.virtual("contentwithEmail").get(function process() {
  return `${this.content} \nCreated by: ${this.userEmail}`;
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
