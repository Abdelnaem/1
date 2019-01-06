             function initialLoadMore(data) {
                var linkloadmore = data.querySelector('#linkloadmore');
                if (linkloadmore.length == 0) {		
                  linkloadmore.parentNode.removeChild(linkloadmore);
                } else if (linkloadmore.length == 1) {	
                  document.querySelector("#Blog1 .blog-pager").appendChild(linkloadmore.cloneNode());
                  LoadMore();
                }
              }

              function LoadMore() {
                var linktoload = document.querySelector('#linkloadmore');
                if (!linktoload) {return;}
                linktoload.onclick = function (event) {
                  var span = document.querySelector('#linkloadmore a span');
                  if (span) {span.innerHTML = "<img src='https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/AjaxLoader.gif'/>"; }
                  var link = document.querySelector('#Blog1_blog-pager-older-link');
                  if (!link) {return; }
                  get({
                    url: link.getAttribute('href'),
                    success: function(data) {
                      var div = document.createElement("div");
                      div.innerHTML = data;
                      var newBlogPosts = div.querySelectorAll(".blog-posts article.post"), i;
                      var blog_posts = document.querySelector(".blog-posts");
                      for (i = 0; i < newBlogPosts.length; i += 1) {
                        blog_posts.appendChild(newBlogPosts[i]);
                      }
                      var link = div.querySelector('#linkloadmore');
                      linktoload.innerHTML = link ? link.innerHTML : "<span>No More</span>";
                    }
                  });
                  return false;
                }
              }

              LoadMore();
