# Requirements and Demo

```markdown
# Requirements

- User should be able to create a post
  - [The post/tweet cannot be more than 250 chars ]
  - [Every post/tweet will be having support for image upload]
- Any post should be visible to all those users who follows the author
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- We can comment on a comment
- We can like any comment also
- Retweeting
- User profile:
  - Name
  - Follower count
  - Bio
  - Last 10 tweets from the user
- Pagination on tweets
- User Auth
- hashtag
```

**POST API TWITTER**

API : _localhost:3000/api/v1/tweets_

Along with this we need to mention content in body section

![Screenshot 2023-04-27 at 5.12.00 PM.png](demo_images/Screenshot_2023-04-27_at_5.12.00_PM.png)

output : (inside mongo)

![Screenshot 2023-04-27 at 5.12.52 PM.png](demo_images/Screenshot_2023-04-27_at_5.12.52_PM.png)

![Screenshot 2023-04-27 at 5.13.10 PM.png](demo_images/Screenshot_2023-04-27_at_5.13.10_PM.png)

**Get tweet with comments**

api : _localhost:3000/api/v1/tweets/644c9a6a57637c8485f06aa5_

![Screenshot 2023-04-29 at 10.34.30 PM.png](demo_images/Screenshot_2023-04-29_at_10.34.30_PM.png)

**Like toggle functionality ( A tweet or a comment like can be toggled )**

_localhost:3000/api/v1/likes/toggle?modelId=644c9a6a57637c8485f06aa5&modelType=Tweet_
Along with this we need to give userId in body

![Screenshot 2023-04-29 at 5.23.28 PM.png](demo_images/Screenshot_2023-04-29_at_5.23.28_PM.png)

![Screenshot 2023-04-29 at 5.23.56 PM.png](demo_images/Screenshot_2023-04-29_at_5.23.56_PM.png)

![Screenshot 2023-04-29 at 5.24.17 PM.png](demo_images/Screenshot_2023-04-29_at_5.24.17_PM.png)

![Screenshot 2023-04-29 at 5.24.45 PM.png](demo_images/Screenshot_2023-04-29_at_5.24.45_PM.png)

Initially there are two likes on a tweet from 2 different people. After post api like gets deleted. If we again do the same the like will appear

**Post comment on tweet**

_localhost:3000/api/v1/comments?modelId=644c9a6a57637c8485f06aa5&modelType=Tweet_

with userId and content in body

![Screenshot 2023-04-29 at 10.38.30 PM.png](demo_images/Screenshot_2023-04-29_at_10.38.30_PM.png)

![Screenshot 2023-04-29 at 10.39.25 PM.png](demo_images/Screenshot_2023-04-29_at_10.39.25_PM.png)

![Screenshot 2023-04-29 at 10.39.43 PM.png](demo_images/Screenshot_2023-04-29_at_10.39.43_PM.png)

**post comment on comment**

_localhost:3000/api/v1/comments?modelId=644d4f06451e3732e25172ee&modelType=Comment_

![Screenshot 2023-04-29 at 10.41.50 PM.png](demo_images/Screenshot_2023-04-29_at_10.41.50_PM.png)

![Screenshot 2023-04-29 at 10.43.14 PM.png](demo_images/Screenshot_2023-04-29_at_10.43.14_PM.png)

**SIGNUP FUNCTIONALITY WITH ENCRYPTING PASSWORD**

API : _localhost:3000/api/v1/signup_

![Screenshot 2023-04-30 at 12.32.48 PM.png](demo_images/Screenshot_2023-04-30_at_12.32.48_PM.png)

![Screenshot 2023-04-30 at 12.34.52 PM.png](demo_images/Screenshot_2023-04-30_at_12.34.52_PM.png)

**Login service**

api - _localhost:3000/api/v1/login_

![Screenshot 2023-04-30 at 1.38.48 PM.png](demo_images/Screenshot_2023-04-30_at_1.38.48_PM.png)

![Screenshot 2023-04-30 at 1.39.06 PM.png](demo_images/Screenshot_2023-04-30_at_1.39.06_PM.png)

**added middleware of authorisation inside creation of tweet and comment**

![Screenshot 2023-04-30 at 2.18.34 PM.png](demo_images/Screenshot_2023-04-30_at_2.18.34_PM.png)

![Screenshot 2023-04-30 at 2.19.31 PM.png](demo_images/Screenshot_2023-04-30_at_2.19.31_PM.png)

![Screenshot 2023-04-30 at 2.19.45 PM.png](demo_images/Screenshot_2023-04-30_at_2.19.45_PM.png)

Tweet with image upload on s3 (AWS)

![Screenshot 2023-05-01 at 12.25.06 AM.png](demo_images/Screenshot_2023-05-01_at_12.25.06_AM.png)
