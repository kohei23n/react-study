// ReactDOM.render(<p>Hello, my name is Bob!</p>, document.getElementById("root"))
// ReactDOM.render(
//   <ul><li>a</li><li>b</li></ul>, 
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