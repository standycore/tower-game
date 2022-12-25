import { useState } from 'react';

export default function Root() {

    const [count, setCount] = useState(0);

    function handleClick() {

        setCount(count + 1);

    }

    return (
        <button onClick={handleClick}>Count: {count}</button>
    );

}
