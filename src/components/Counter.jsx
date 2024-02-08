import { useState } from 'preact/hooks';

export function Counter() {
    const [ counter, setCounter ] = useState(0);

    return (
        <>
        <span style="color: aqua;">{counter}</span>
        <button onClick={() => setCounter(counter => counter + 1)}>+</button>
        <button onClick={() => setCounter(counter => counter - 1)}>-</button>
        </>
    )

}
