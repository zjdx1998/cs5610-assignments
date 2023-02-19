const PostItem = (post) => {
  return (`
      <div class="row wd-flex-content-all align-items-start">
        <div class="col-auto" style="padding: 12px;">
          <img
            class="wd-flex-content-avatar rounded-circle"
            src="${post.avatar}"
          />
         </div>
        <div class="col p-0 me-2">
            <div class="wd-flex-content-title row align-items-start">
              <div class="overflow-hidden col-auto ps-0 pe-0" style="color:white">${post.UserName}</div>
              <div class="wd-flex-content-title-handle-date col-auto ps-0 pe-0">
                &nbsp@${post.handle} · ${post.time}
              </div>
              <div class="ms-auto col-1 me-2">
                 <svg class="wd-flex-content-title-icon">
                  <g>
                    <path
                      fill="gray"
                      d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                    ></path>
                  </g>
                </svg>           
              </div>
  
            </div>
            <div class="wd-flex-content-post row">
              ${post.content}
            </div>
            <div class="card wd-post-card bg-transparent row">
              <img src="${post.picture}" class="p-0" style="border-top-left-radius: 5%; border-top-right-radius: 5%"/>
              <div id="wd-picture-content">
                <div class="wd-flex-content-article-title">
                  ${post.picture_title}
                </div>
                <p class="card-text wd-flex-content-article-content">${post.picture_content}</p>
              </div>
            </div>
            <div class="wd-flex-content-article-react row">
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component col-3">
                <svg class="wd-flex-content-react-icon">
                  <g>
                    <path
                      fill="gray"
                      d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                    ></path>
                  </g>
                </svg>
                <div class="wd-flex-content-react-number">${post.discussion}</div>
              </div>
              </a>
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component">
                <svg class="wd-flex-content-react-icon">
                  <g>
                    <path
                      fill="gray"
                      d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                    ></path>
                  </g>
                </svg>
                <div class="wd-flex-content-react-number">${post.fwd}</div>
              </div>
              </a>
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component">
                <svg class="wd-flex-content-react-icon">
                  <g>
                    <path
                      fill="rgb(249,24,128)"
                      d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    ></path>
                  </g>
                </svg>
                <div
                  class="wd-flex-content-react-number"
                  style="color: rgb(249, 24, 128)"
                >
                  ${post.likes}
                </div>
              </div>
              </a>
              <a href="#" style="text-decoration: none" class="col-3 p-0">
              <div class="wd-flex-content-react-component">
                <svg class="wd-flex-content-react-icon">
                  <g>
                    <path
                      fill="gray"
                      d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                    ></path>
                  </g>
                </svg>
              </div>
              </a>
            </div>
          </div>
      </div>
  `);
}

export const AdjustUndefined = () => {
  const post_tweets = document.querySelectorAll("div#wd-picture-content")
  post_tweets.forEach(
    post_tweet=> {
      if ("undefined" === post_tweet.children[0].outerText) {
        post_tweet.parentNode.children[0].style.cssText = 'border-radius:5%';
        post_tweet.remove();
      }
    }
  );
}

export default PostItem;