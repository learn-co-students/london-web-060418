import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'

const myCreateElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { children: children },
    ref: null
  };
};

// const Article = (props) => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', { className: 'article-heading' }, props.title),
//     React.createElement('p', { className: 'article-main' }, props.text)
//   ])
// }

const Article = (props) => {
  return (
    <div>
      <h1 className='article-heading'>{ props.title }</h1>
      <p className='article-main'>{ props.text }</p>
    </div>
  )
}

Article('HELLO PEAKY BINDERS I MISSED YOU', 'Rishi here reporting for duty.')


const articles = [
  {title: 'HELLO PEAKY BINDERS I MISSED YOU', text: 'Rishi here reporting for duty.'},
  {title: 'Breaking news on campus', text: 'Nicolas has shown up and is gonna give awesome react lectures'},
  {title: 'Don\'t sleep on Steven!', text: 'We all miss him too'},
  {title: 'Sam is the best of us all', text: 'Love you'}
]

ReactDOM.render(<div>
    <Navbar content="Flatiron London Newsletter" subheader="Get yer news here" />
    <Navbar content="Flatiron Lond0n Newsletter" subheader="Get yer news here" />
    { articles.map(a => <Article title={a.title} text={a.text} />) }
  </div>, document.getElementById('main'));


  // ReactDOM.render(<App />, document.getElementById('main'));

//React.createElement takes 3 params
// 1. the element tag id/name/whatever
// 2. props
// 3. children


// render takes 1. what are we putting on the page? 2. where are we putting it?
