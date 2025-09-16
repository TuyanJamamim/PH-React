import { useState } from "react"

export default function Batsman() {
    //useState for runs
    const [run, setRun] = useState(0)
// useState fox sixes
const [sixes , sixCount] = useState(0);

    const handleSingles = () => {

        const newRun = run + 1;
        setRun(newRun)//this function is for displaying runs
    }
    const handleFour = () => {

        const newRun = run + 4;
        setRun(newRun)
    }
    const handleSix = () => {

        const newRun = run + 6;
        const newSix = sixes + 1;
        sixCount(newSix)
        setRun(newRun)
    }

    return (
        <div>
            <h3>Player: Bangladeshi vatsman</h3>
<p>Six Cout: {sixes}</p>
            {/* adding dynamically  */}
            {
              run > 50 && <p>Score: 50</p>//this is a js special case...if run is over 50 then(&&) execute <p>

            }

            <h1>Score: {run} </h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>

    )

}