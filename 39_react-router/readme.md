# React Router

We want students to be caught up to Lifecycle Methods by the time they're here. I recommend starting with an application that already has some components, so there's something to work with, and you don't need to spend time building out the structure

## SWBATs

* Understand why routing is important and how it is different in React Router
* Set up React Router in a React App
* Go over `BrowserRouter`, `Link`, `Route`, and `Switch`.

## Resources

* [Example Video](https://www.youtube.com/watch?v=lps-Eq2QWxk)
* [Starter Code]()

* [React Router Quickstart](https://reacttraining.com/react-router/web/guides/quick-start)
* [Learn's Intro to Client-Side Routing](https://github.com/learn-co-curriculum/react-introduction-to-react-router)
* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)

## Outline

    10m Theoretical Prerequisites
     5m But what does React Router Actually Do?
     5m Setup and Components
    40m Using the Router Components
    ===
    60m Total

### Theoretical Prerequisites

##### Static vs. Dynamic Routing

Static routing is what we're used to with Rails. Basically, we define the routes beforehand, and then render their actions separately.

React Router is Different. Basically, the app "renders" routes _while_ rendering all of the JSX. This means no external `routes.*` configuration.

##### Client-side routing

Now that the React stack is handling routing, that means none of our routes require a new `GET` request to the backend to get that page's HTML. This allows us to enforce the "Single Page App", since we can render the new route's page without refreshing.

##### Why do we even need routes?

* The user can use forward/back to navigate your app
* The user can navigate via urls
* We can make urls describe the action that the user might be taking

##### What are the drawbacks to client-side routing?

* We're loading all of our frontend at once, so it might add to the initial load time
* We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### But what does React Router Actually Do?

Ultimately, we're still in a Single-Page application. Show that you can use vanilla JS to change the route in the terminal using the following commands.

```js
window.history.pushState({}, null, 'page');
```

```js
window.history.back();
```

All router does is wrap this functionality in components that make it easy to transform the browser's URL.

### Setup and Components

You can use `create-react-app` in conjunction with `react-router`, just install with `npm install react-router-dom`.

Now, we can add the requisite components with

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
```

Here are the components we use:

#### Router

We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

#### Route

Conditionally render a certain component based on what the route looks like.

#### Link

Changes the url we see in the browser, must have a 'to' prop.

#### Switch

Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if).

#### Redirect

Forces a redirect to a particular route. We won't use this here.

### Using the Router Components

Go through the process of building a app with routing. Start by wrapping your top-level app in the router in `index.js`:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Now you can make your app render different components using `<Render />` At this stage, it helps to have a separation of information and navigation, so the links can live on their own.

##### Basic Routing

In your `App.js`, add something that looks like this:

```jsx
<Switch>
  <Route path="/login" component={Login} />
  <Route path="/paintings" component={PaintingsContainer} />
  <Route path="/" component={About} />
</Switch>
```

Explain that `Switch` allows router to choose the route that matches the url when loading that particular component. Show that the `component` props takes a function, and passes in extra information through props. If you want to initialize a component using your own props but don't want to los React Router's props, pass a function into `render` instead.

You can set up a default `Route` by setting `path="/"`, and add a `<Route exact path="/" />` to catch the base path.

##### Nested Routes

You can have `Switch` anywhere, including inside a component. Here, you can catch specific paintings with a slug via:

```jsx
<Route
  path="/paintings/:slug"
  render={({ match }) => {
    return <PaintingItem painting={getPainting(match.params.slug)} />;
  }}
/>
```

##### Links

Now, you can update your navbar with links that go towards specific paths.

```jsx
<Link to="/paintings" className="item">
  Paintings
</Link>
```

_Try asking your students what the child of the `Link` component is, and where that comes through in the props._

Try navigating around your app, and adding new routes!
