import { useRef, useState } from "react";

import { useEffect } from "react";

    function StopWatch(){

        const [isRunning,setIsRunning] =useState(false);
        const [elapsedTime,setElapsedTime] = useState(0);
        const intervalIdRef = useRef(null);
        const startTimeRef = useRef(0);

        useEffect(()=>{
            if(isRunning){
                intervalIdRef.current = setInterval(()=>{
                    setElapsedTime(Date.now()-startTimeRef.current);

                },10);
                return ()=>{
                    clearInterval(intervalIdRef.current);
                }
            }

        },[isRunning]);

        function start(){
            setIsRunning(true);
            startTimeRef.current = Date.now()-elapsedTime;
            

        }
        function stop(){
            setIsRunning(false);

        }

        function reset(){
            setElapsedTime(0);
            setIsRunning(false);

        }

        function formatTime(){
            let hours = Math.floor( elapsedTime/(1000*60*60));
            let minutes = Math.floor( elapsedTime/(1000*60)%60);
            let seconds = Math.floor( elapsedTime/(1000)%60);    
            let milliSeconds = Math.floor( (elapsedTime % 1000)/10);  
            
            hours = hours<10? "0"+hours:hours;
            minutes = minutes<10? "0"+minutes:minutes;
            seconds = seconds<10? "0"+seconds:seconds;
            milliSeconds = milliSeconds<10? "00"+milliSeconds:milliSeconds;
            // milliSeconds = milliSeconds<100? "0"+milliSeconds:milliSeconds;

            if(minutes>59){
                return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
            }




            return `${minutes}:${seconds}:${milliSeconds}`;

        }



        return(
            
            <div className="stop-watch">
                <div className="display">{formatTime()}</div>
                <div className="controls">
                    <button className="start-button" onClick={start}>Start</button>
                    <button className="stop-button" onClick={stop}>Stop</button>
                    <button className="reset-button" onClick={reset}>Reset</button>
                </div>
            </div>
        
           
        );
    }
    export default StopWatch