//useEffect() - React hook that tells react to do some code when 
//              this component re-renders
//              this component mounts
//              the state of value changes
// it handles the effect of depedency array by allowing to perform side code on components
//it is called every time aby state if the depedency array changed or modified.
//

// import { useEffect, useState } from "react";

// useEffect(function,[dependecny-array])
// useEffect(function) - runs on every render
// useEffect(function) - runs on only when mount
// useEffect(function) - runs on mount + runs on when value changes



//uses 
//#1 event listeners
//#2 fetch data from an API
//#3 set up a subscription(real time updates)
//#4 manually change the DOM
//#5 manually call other React lifecycle methods
//#6 clean up the effect(when component unmounts)
//#7 manually focus on an element
//#8 manually start or stop a timer

import Clock from "./Clock";



function App() {

  return(
    <>
      <Clock />
    </>
    
  );
 
}

export default App
