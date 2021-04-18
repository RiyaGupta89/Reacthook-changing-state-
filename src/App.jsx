import React, { useState } from 'react';

const App = () => {

    const [count, setCount] = useState(0);

    const Increment = () => {
        
        return(
            setCount(count+1)
        )
    }
    return (
                
        <>
        <div className="container">
           <h1>{count}</h1>
           <button className="btn" onClick={Increment}>Click Me</button>
        </div>
         </>
    )
}

export default App;