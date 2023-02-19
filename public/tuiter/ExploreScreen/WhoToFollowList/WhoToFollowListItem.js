const WhoToFollowListItem = (who) => {
  return `
          <li class="list-group-item">
          <div class="row align-items-center">
            <img class="col-3 rounded-circle p-xs" src=${who.avatarIcon}>
            <div class="col-6" style="margin-left: -1px">
              <div class="row overflow-hidden">
                <b class="col-auto p-0 overflow-hidden">${who.userName}</b>
                <div class="col-1 p-0">
                  <svg role="img" class="wd-follow-icon" data-testid="icon-verified"><g><path fill="#00aced" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g></svg>
                </div>
              </div>
              <div class="row overflow-hidden">
                ${who.handle}
              </div>
            </div>
           <div class="col-3 align-self-center p-0">
                   <a href="Follow.hml" class="col-12 btn btn-primary rounded-pill align-self-center text-center" style="padding: 6px">
                    Follow
                  </a>
           </div>
          </div>
        </li>
  `;
};

export default WhoToFollowListItem;
