const express = require("express");
const { PORT } = require("../src/config/server");
const connect = require("./config/database");
const Tweet = require("./model/tweet");
const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./model/comment");

const app = express();

app.listen(PORT, async () => {
  console.log(`server running on ${PORT}`);
  await connect();
  console.log("mongo connected");
  //   const tweet = await Tweet.create({
  //     content: "this is 2nd tweet",
  //     // userEmail: "a@bc.com",
  //   });
  //   const tweets = await Tweet.find({ userEmail: "a@b.com" });
  //   const tweet = await Tweet.findById("6447fd1526cf5d5e33cd2545");
  //   tweet.userEmail = "a@c.com";
  //   tweet.save();
  const tweetRepo = new TweetRepository();
  //   const tweet = await tweetrepo.get("6447fb1532b42c486d1709b2");
  //   const tweet = await tweetrepo.update("6447fb1532b42c486d1709b2", {
  //     content: "2nd twee",
  //   });
  const tweet = await tweetRepo.create({ content: "tweet with a pre " });
  console.log(tweet);
  //   tweet.comments.push({ content: "first comment" });
  //   await tweet.save();

  //   const tweet = await tweetRepo.create({
  //     content: "Tweet with comment schema22",
  //   });
  //   console.log(tweet);
  //   var tweet = await tweetRepo.get("6448cbcd564d640a9abacd88");
  //   const comment = await Comment.create({ content: "new comment 3" });
  //   tweet.comments.push(comment);
  //   await tweet.save();
  //   tweet = await tweetRepo.getAll(0, 3);
  //   console.log(tweet[0].contentwithEmail);
});
