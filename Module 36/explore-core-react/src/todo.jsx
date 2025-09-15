
//Exporting the file to default means in app.jsx.....the file needs to ve inside same folder
// export default  function ToDo({task , isDone}){
//     return (
// // task = "error handle"...this can not ve done...the value can not ve reseted
//        <ul>
//          <li>Task:{task} </li>
//          <li>Is done:{isDone} </li>
//        </ul>

//     )
// }

// export default  function ToDo({task , isDone , duration = 0}){

//     if (isDone){
//     return(
// <ul>
//     <li>Task: {task}</li>
// <li>duration: {duration}</li>

// </ul>
//     )
// }
//  else{
//     // return can ve used multiple times in react when if condition is applied
//     return(
//         <li>Do it now: {task} duration: {duration}</li>
//     )
//  }

// }



// export default  function ToDo ({ task , isDone , duration = 0} ){

//     //inlike if else here return needs to ve put infront of the conditional variavle in turnery operator
//   return  isDone ? <li>Done : {task} duration: {duration}</li>
//    : <li>Pending: {task}  </li>

    
    


// }

//conditional rendering option-4(multiple export file can not ve placed in one file )

// export default  function ToDo ({ task , isDone , duration = 0} ){

//     //inlike if else here return needs to ve put infront of the conditional variavle in turnery operator
//   return  isDone && <li>Done : {task} duration: {duration}</li>
//    //this means if isDone === true then this operation will ve performed 

    
    


// }

// export default  function ToDo ({ task , isDone , duration = 0} ){

//     //inlike if else here return needs to ve put infront of the conditional variavle in turnery operator
//   return  isDone || <li>Pending : {task} duration: {duration}</li>
//    //this means if isDone === false then this operation will ve performed 

    
    


// }



//conditional statement using variavles 
// export default  function ToDo({task , isDone , duration = 0}){

//     let listItem;
//     if (isDone){
//     listItem =( 
// <ul>
//     <li>Task: {task}</li>
// <li>duration: {duration}</li>

// </ul>
//     )
// }
//  else{
//     // return can ve used multiple times in react when if condition is applied
//     listItem = (
//         <li>Do it now: {task} duration: {duration}</li>
//     )
//  }
// return listItem;
// }