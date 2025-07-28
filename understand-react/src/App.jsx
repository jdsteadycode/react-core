// grab modules
import {FootballStar} from "./components/FootballStar.jsx";
import {Button} from "./components/Button.jsx";
import './App.css';

// Object to hold star's data
let star = {
    "name": "Lionel Messi",
    "pic": "https://matchwornshirts.eu/wp-content/uploads/2020/10/ManchesterUnitedvBarcelonaUEFAChampionsctVEgrbvPxmx.jpg",
    "DOB": "June 24, 1987",
    "goals": 834,
    "passes": 500,
    "about": `Lionel Messi, an Argentine professional footballer, is widely recognized as one of the greatest players of all time. His exceptional talent and achievements have cemented his status as a global icon and a role model for aspiring athletes worldwide`,
    "initialImgWidth": 800,
    "initialImgHeight": 400,
}


// () -> renders the App
function App() {
  return (
    <>
      <h1>A Footballer Profile</h1>
      <FootballStar {...star} />
      <Button text="click" />
    </>
  );
}

// expose the App component 
export default App;
