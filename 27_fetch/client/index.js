// XHR Syntax
// So many steps, if only there were a better way!
// function reqListener() {
//   console.log(JSON.parse(this.response))
// }
// var req = new XMLHttpRequest()
// req.addEventListener("load")
// req.open("GET", "http://localhost:3000/brews/")
// req.setRequestHeader('Content-Type', 'application/json')
// req.send()

document.addEventListener('DOMContentLoaded', init)

function init() {
  Adapter.getBrews()
    .then((resp) => {return renderBrews(resp)})
}


function renderBrews(data) {
  console.log(data);
  data.brews.forEach(renderBrew)
  // can't get all the brew dom elements back and put them on the dom
  // renderBrew must do all that for us
}

function renderBrew(brew) {
  // create an element
  // update properties or add event listeners
  // append it to parent element if any
  // append parent to DOM
  const container = document.querySelector('#container')
  const div = document.createElement('div')
  const p = document.createElement('p')
  p.addEventListener('click', (e) => getBrew(brew))
  p.innerText = brew.blend_name
  div.append(p)
  container.append(div)
}

function getBrew(brew) {
  Adapter.getBrew(brew)
    .then(console.log)
}

