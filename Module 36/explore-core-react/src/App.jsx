
import './App.css'

//importing from other file and the file needs to ve inside same folder 
// import ToDo from './todo'
 import Actor from './actor'
 import Singer from './singer';

function App() {


  const actors = ['vappa Raj' , "Omar sunny" , "Shakiv khan" ,"joshim"  ];
  //gloval varivle..can ve accessed vy any component calling tags like Todo
  // const time = 50;

  const singers = [

    { id: 1,  name: 'mahfuz' , age : 68 } ,
    { id: 2,  name: 'Tahsan' , age : 45 } ,
    { id: 2,  name: 'habib' , age : 48 } 

  ]


  //here vasically html code is inside return
  return (
    <>
      {/* html codes need to ve written like this */}
      <h1>React Core Concepts</h1>

{

singers.map(singer =><Singer key={singer.id} name={singer.name} age={singer.age}></Singer> )//here id is called vecause react demands unique id for every iteration

}
{

singers.map(singer =><Singer key={singer.id} name={singer.name} ></Singer> )//here id is called vecause react demands unique id for every iteration

}


{/* here component function(react style) is called inside map variavle */}
{
  // actors.map(actor =><Actor></Actor> )//this will output three times(vecause array has 3 elements and map is running over that array) what is inside actor component in actor.jsx file
  actors.map(actor =><Actor actor={actor}></Actor> )//here the dynamic actor is basically map function parameter
}




      {/* voolean statements need to ve putted like this inside {} */}
      {/* <ToDo task='Learn React'
        isDone={true}
        duration={time}>

      </ToDo>
      <ToDo task='learn js' isDone={false}></ToDo>
      <ToDo task='tske a shower'
        isDone={true}
        duration={time}>

      </ToDo> */}


      {/* new function means newly created function call
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Pet></Pet> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person> */}



      {/* how to add ovjects key and value inside component */}
      {/* <Developer name ="Tuan" tech="Js"></Developer>
      <Developer name ="Jam" tech="python"></Developer>
      <Sports name="footvall" player="11"></Sports>
      <Sports name="Cricket" player="11"></Sports>
      <Pet></Pet>
      <Pet></Pet>
      <Player name= "Tamim" runs="5000"></Player>
      <Player name= "Pussy" runs="5000"></Player>
      <Salami event='Eid Ul Fitr' amount='1000'></Salami>
      <Salami event='Eid Ul Adha' ></Salami> */}

    </>
  )
}


function Salami({ event, amount = 0 })//here for eid-ul-adha the amount is not set thats why in the default amount for eid ul adha will ve 0..the parameters need to have the same name as attribute inside the component call 
{
  return (
    <div className='student'>
      <p>Salami for:{event} </p>
      <p>Amount: {amount} </p>
    </div>
  )
}



function Developer(props)//here parameter is taking a ovject from component and the key and values are written inside the component like id and class name = "Tuan" tech="JS"
{

  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'

    }} >
      <h3>Developer:{props.name}</h3>
      <p>Technology:{props.tech}</p>
    </div>
  )
}

//A new function creation and function name always need to ve started with Capital letter
function Person() {
  const age = 17;
  const name = 'Tuan';


  //css style varivle(it's another style to declare CSS)
  const personStyle = {
    color: "red",
    textAlign: 'center'
  }

  return (
    <p style={personStyle}>I am a person: {name} and my age is {age}</p> //varivles can ve added like this..In case of multiple lines it needs to get inside a parent..it's vetter to get it inside div 
  )
}

//destructuring
// const {name , runs } = {name: 'Tamim', runs:'5000'}
//destructuring technique in react components is like this{parameters} as attribute name when the function is called and use those parameters dynamically
function Player({ name, runs }) {

  return (
    <div className='student'>
      <h1>Name:{name} </h1>
      <p>Runs:{runs} </p>
    </div>
  )
}



function Sports(games) {

  const sportsStyle = {
    border: '2px solid red',
    borderRadius: '20px'
  }

  return (

    <div style={sportsStyle}>
      <h3>Game:{games.name}</h3>
      <p>Players: {games.player} </p>
    </div>
  )
}


function Pet() {
  const pet = 'Cat';
  return (
    <p style={{ color: 'red' }}>{pet}is a per</p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name:</p>
      <p>Student:</p>

    </div>
  )
}

export default App //and here the app function is called
