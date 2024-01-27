import React, { useState } from 'react';

export const Counter = () => {
    //useState hook is used to maintain state of UI.


    /*
     ->useState must be used at top level of function Component only 
     ->i.e.., it should not wrap into any blocks, conditional, loops statements etc..,
     -> useState returns array of two values 1.initial state 2.function to update state.    
    */

    /*
    const [count, setCount] = useState(0); //when you directly give value then when component re-renders then initial value will be also computed,which decreases speed.
    to overcome this we use function version
    */
    const [count, setCount] = useState(() => {
        console.log("initial value")
        return 0;
    });

    const updateCount = amount => {
        /*
        ->setCount(count + amount) //it will always takes initial value every time same more than one call.
        ->funtion version used to maintain prevState. So, when we make more than one function call's it consider the prevState rather than initial value for every call. 
        */

        setCount(prevCount => {
            return prevCount + amount;
        });
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={() => { updateCount(1); }}>Increment</button>
            <button onClick={() => { updateCount(-1); }}>Decrement</button>
            <button onClick={() => { setCount(0); }}>Reset</button>
        </div>
    );
}