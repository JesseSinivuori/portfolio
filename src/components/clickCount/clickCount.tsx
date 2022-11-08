import { useEffect, useState } from 'react';
import styles from './clickCount.module.scss';

export default function ClickCount() {


    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`Clicked the button ${count} times`);
    }, [count])

    return (
        <div className={styles.container}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
