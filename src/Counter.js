import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const [word, setWord] = useState('');

    return (
        <div>
            {count}
            <br />
            {word}
            <br />
            <button 
                onClick={() => {
                    setCount(count + 1);                    
                }}
            >
                Add
            </button>

            <br />
            
            <button 
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Subtract
            </button>
            
            <br />

            <input 
                onChange={e => {
                    setWord(e.target.value);
                    console.log(e);
                }}
                value={word}
                type='text'
            />
            <br />
            <input
                onChange={e => {
                    console.log(e.target.checked);
                }}
                type='checkbox'
            />
        </div>
    )
}

export default Counter;