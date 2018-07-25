const resourceUrl = `http://localhost:3000/posts`

// {
// "userId": 1,
// "id": 5,
// "title": "nesciunt quas odio",
// "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
// },

document.addEventListener('DOMContentLoaded', function () {
  fetch(resourceUrl)
    .then(res => res.json()) // convert the promise object body ( the response ) from json to js object
    .then(blogpostArray => renderPosts(blogpostArray));

  populateSelectWithAuthorIds();
});

function renderPost (post) {
  const newPostElement = document.createElement('div')
  // let postTitle = document.createElement('h3')
  // let postAuthor = document.createElement('h4')
  // let postBody = document.createElement('p')
  //
  // postTitle.innerText = post.title
  // postAuthor.innerText = post.userId
  // postBody.innerText = post.body
  //
  // postTitle.className = `blogpost-title`
  // postAuthor.className = `blogpost-author`
  // postBody.className = `blogpost-content`
  //
  // newPostElement.append(
  //   postTitle,
  //   postAuthor,
  //   postBody
  // )

  newPostElement.innerHTML = `
    <hr>
    <h3 class="blogpost-title">${post.title}</h3>
    <h4 class="blgopost-author">${post.userId}</h4>
    <p class="blogpost-content">${post.body}</p>
    <hr>
  `

  document
    .querySelector('div.blog-post-container')
    .append(newPostElement)
}

function renderPosts (blogpostArray) {
  for (post of blogpostArray) {
    renderPost(post)
  }
}

function populateSelectWithAuthorIds() {
  const authorIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const selectElement = document.querySelector('#author-select')
  selectElement.addEventListener('change', filterByAuthor)

  for (id of authorIds) {
    selectElement.appendChild(appendOption(id))
  }
}

function appendOption(id) {
  const optionElement = document.createElement('option')
  optionElement.innerText = `${id}`
  optionElement.value = `${id}`
  return optionElement
}

function filterByAuthor(e) {
  clearPosts()

  fetch(resourceUrl)
    .then(res => res.json()) // convert the promise object body ( the response ) from json to js object
    .then(blogpostArray => blogpostArray.filter(post => post.userId == e.target.value))
    .then(blogpostArray => renderPosts(blogpostArray));
}

function clearPosts() {
  const posts = document.querySelector('div.blog-post-container')
  posts.innerHTML = ''
}
