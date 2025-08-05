// grab utilities
import './App.css'

// React's declarative feature..
/*
  Just tell what to do? (<main> Element and placing sub-elements like <p> and <b>)
  Rest would be done by React (i.e., how to make them child Nodes, Elements of <main> Element etc...)
*/
// () -> An App Component with resp. content
function App() {

  // return JSX
  return (
    <>
      <main>
        <h1 className="header">Why React? Because it's declarative</h1>
        <b className="text">(An declarative way of rendering the content)</b>
        <p className="text">
          Just specify 'what needs to be done?'
          Computer would handle 'how it would be done!'
          <b className="text">FOR YOU</b>
        </p>
      </main>
    </>
  )
}

// expost to project
export default App;
