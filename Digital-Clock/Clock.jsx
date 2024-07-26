import { useEffect, useState } from "react";



function Clock(){
    const [time,setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return `${hours}:${minutes}:${seconds} ${ampm}`;

    }
        




    return (
        <>
            <div className="clock-container">
                <div className="clock">
                    <span>
                        {formatTime()}
                    </span>
                </div>
            </div>
        </>
    );
}

export default Clock