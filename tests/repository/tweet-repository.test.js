import TweetRepository from "../../src/repository/tweet-repository";
import Tweet from "../../src/model/tweet.js";
jest.mock("../../src/model/tweet.js");

describe("create tweet", () => {
  test("should create a new tweet and return it", async () => {
    const data = {
      content: "Testing tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "2022-02-12", updatedAt: "2022-02-12" };
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);
    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    //   expect(tweet.createdAt).toBeUndefined();
    expect(tweet.createdAt).toBeDefined();
  });

  test("should not create a tweet and throw exception", async () => {
    const data = {
      content: "Testing tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("something went wrong");
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("something went wrong");
    });
  });
});
