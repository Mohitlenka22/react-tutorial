import React, { useState, useEffect } from 'react';

export const Effect = () => {

    //This code is just to re-render code again to see SideEffects created by useEffect Hook.
    const [count, setCount] = useState(() => {
        console.log("initial value")
        return 0;
    });

    const updateCount = amount => {

        setCount(prevCount => {
            return prevCount + amount;
        });
    }

    //useEffect Hook demonstration.
    const [items, setItems] = useState([]);


    /*
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json))
    }); 
    -> Without second parameter useEffect loads code on every re-render by changing props, state and values etc..,
    -> To stop this we pass second parameter as array of values/dependencies on which useEffect runs code when ever this array changes.
    -> when we pass [] (empty array) useEffect runs code only once on mounting(putting elements into DOM)
    -> atlast we can return a clean-up function saying that what to do when unmounting the elements.
    */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.json())
            .then(json => setItems([...items,json]))
        // const res = await fetch('https://fakestoreapi.com/products/1');
        // // const data = res.json();
        // // setItems(data);
        // console.log(res)
    }, [count]);

    return (
        <div className="effect">
            <h1>{count}</h1>
            <button onClick={() => { updateCount(1); }}>Increment</button>
            <button onClick={() => { updateCount(-1); }}>Decrement</button>
            <button onClick={() => { setCount(0); }}>Reset</button>
            {items.map((item) => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })}
        </div>
    );
}