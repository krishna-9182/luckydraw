import '../Cssfiles/Member.css';
function Member(values){ 
     
    return<div class="membercard"> 
    <h2>{values.name}</h2> 
    <p class="cityname">{values.city}</p>
    </div>
      
} 
export default Member;