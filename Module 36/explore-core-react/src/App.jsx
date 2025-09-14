
import './App.css'

function App() {
 
//here vasically html code is inside return
  return (
    <>
    {/* html codes need to ve written like this */}
      <h1>React Core Concepts</h1>
      {/* new function means newly created function call
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Pet></Pet> */}
      <Student></Student>
      <Student></Student>
      <Person></Person>
      {/* how to add ovjects key and value inside component */}
      <Developer name ="Tuan" tech="Js"></Developer>
      <Developer name ="Jam" tech="python"></Developer>
      <Sports name="footvall" player="11"></Sports>
      <Sports name="Cricket" player="11"></Sports>
      <Pet></Pet>
      
    </>
  )
}


function Developer (props)//here parameter is taking a ovject from component and the key and values are written inside the component like id and class name = "Tuan" tech="JS"
{

  return(
    <div  style={{
border: '2px solid green', 
borderRadius : '20px'

    }} >
      <h3>Developer:{props.name}</h3>
      <p>Technology:{props.tech}</p>
    </div>
  )
}

//A new function creation and function name always need to ve started with Capital letter
function Person (){ 
  const age = 17;
  const name = 'Tuan';


  //css style varivle(it's another style to declare CSS)
  const personStyle = {
    color: "red",
    textAlign : 'center'
  }

  return (
    <p style={personStyle}>I am a person: {name} and my age is {age}</p> //varivles can ve added like this
  )
}


function Sports(games) {

const sportsStyle = {
  border: '2px solid red',
  borderRadius : '20px'
}

 return(

   <div style={sportsStyle}>
    <h3>Game:{games.name}</h3>
    <p>Players: {games.player} </p>
  </div>
 )
}


function Pet  (){
const pet = 'Cat';
  return (
    <p style={{ color: 'red'}}>{pet}is a per</p>
  )
}

function Student () {
  return(
    <div className='student'>
<p>Name:</p>
<p>Student:</p>

    </div>
  )
}

export default App //and here the app function is called
