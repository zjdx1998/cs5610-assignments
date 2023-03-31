import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
  return `
           <ul class="list-group w-100 mt-1">
            <li class="list-group-item">
              <h5>Who to follow</h5>
            </li>
            ${who
              .map((who) => {
                return WhoToFollowListItem(who);
              })
              .join("")}
           </ul>
`;
};

export default WhoToFollowList;
$("#wd-who-to-follow").html(WhoToFollowList());
