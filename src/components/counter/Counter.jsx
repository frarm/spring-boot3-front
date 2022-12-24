import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

// export default function Counter(){
//     return(
//         <div>
//             <CounterButton></CounterButton>
//             <CounterButton by="2"></CounterButton>
//             <CounterButton by={3}></CounterButton>
//         </div>
//     )
// }

export default function Counter(){
    const [count, setCount] = useState(0);

    function incrementCounterParenFunction(by){
        setCount(count + by);
    }

    function decrementCounterParenFunction(by){
        setCount(count - by);
    }

    function resetCounter(){
        setCount(0);
    }

    return(
        <div>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
            incrementMetod={incrementCounterParenFunction}
            decrementMetod={decrementCounterParenFunction}
            ></CounterButton>
            <CounterButton by={2} 
            incrementMetod={incrementCounterParenFunction}
            decrementMetod={decrementCounterParenFunction}
            ></CounterButton>
            <CounterButton by={3} 
            incrementMetod={incrementCounterParenFunction}
            decrementMetod={decrementCounterParenFunction}
            ></CounterButton>
            <button className="resetButton" 
                onClick={resetCounter}
            >Reset </button>
        </div>
    )
}

