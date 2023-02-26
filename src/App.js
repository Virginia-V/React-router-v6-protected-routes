import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Products />} path="/products" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// In React Router DOM, an outlet refers to the component where the contents of a route are rendered.
// It acts as a placeholder for the content that is associated with a particular route.

// In most cases, the outlet is a part of the layout of the application and is usually rendered
// in the root component of the application. The outlet component is where the router will render
// the contents of the route that matches the current URL.

// Here's an example of how to use an outlet in React Router DOM:

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// function Home() {
//   return <h1>Welcome to the homepage!</h1>;
// }

// function About() {
//   return <h1>Learn more about us.</h1>;
// }

// function Contact() {
//   return <h1>Contact us.</h1>;
// }

// In the example above, the Switch component is used to define the routes of the application.
// The Route component is used to define the URL path and the component that should be rendered
// when that path is matched. The contents of each route will be rendered in the outlet of the application.

// In this case, the outlet component is not explicitly defined, but it is created automatically
// by the Switch component.
