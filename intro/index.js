// ReactDOM.render(<p>Hello, my name is Bob!</p>, document.getElementById("root"))
// ReactDOM.render(
//   <ul><li>a</li><li>b</li></ul>, 
//   document.getElementById("root")
// )


// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

// function MainContent() {
//   return (
//     <h1>I'm learning React!</h1>
//   )
// }

// ReactDOM.render(
//   <MainContent />,
//   document.getElementById("root")
// )


/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
  <nav>
    <h1>Brand Name</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar,
  document.getElementById("root")
)