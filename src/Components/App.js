
import '../Cssfiles/App.css'; 
import Member from './Member.js'; 
import Aboutus from './Aboutus.js';
import Howtoplay from './Howtoplay.js'; 
import Winner from './Winner.js';

function App() { 
  const people = [
  { name: "Ravi", city: "Hyderabad" },
  { name: "Charan", city: "Hyderabad" },
  { name: "Ramu", city: "Kakinada" },
  { name: "Sita", city: "Vijayawada" },
  { name: "Krishna", city: "Guntur" },
  { name: "Lakshmi", city: "Warangal" },
  { name: "Arjun", city: "Nellore" },
  { name: "Mounika", city: "Tirupati" },
  { name: "Kiran", city: "Visakhapatnam" },
  { name: "Harika", city: "Rajahmundry" }
];

  return (
  <> 
  <h1 className='title'>First Batch is best Batch</h1>  
       <Aboutus/> 
       <Howtoplay/>

  <div className="memberscontainer"> 
    {people.map(function(member){
         return <Member name={member.name} city={member.city}/>
    })}

    
      
      
      </div> 
      <Winner array={people}/>
  </> );

  
  
}

export default App;
