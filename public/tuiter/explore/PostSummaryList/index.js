import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return `
      <ul class="list-group mt-2">
            ${posts
              .map((post) => {
                return PostSummaryItem(post);
              })
              .join("")}
      </ul>
`;
};

export const RemoveUndefined = () => {
  const post_tweets = document.querySelectorAll("#post-tweets")
  post_tweets.forEach(
    post_tweet=> {
      console.log(post_tweet)
      if ("undefined" === post_tweet.outerText) {
        post_tweet.remove();
      }
    }
  );
}

export default PostSummaryList;
$("#wd-post-summary-list-index").html(PostSummaryList());
$(RemoveUndefined());
