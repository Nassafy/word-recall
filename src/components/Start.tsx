import React, { useState } from 'react'
import { useDispatchStateContext } from '../utils/store'
import { getWords } from '../utils/wordsUtils';
function Start() {

    const dispatch = useDispatchStateContext();
    const [nbWords, setNbWords] = useState(10);

    const onClick = () => {
        const wordsStr = getWords(nbWords);
        const words = wordsStr.map((word) => {
            return {
                good: word, 
                guess: ""
            }
        });
        dispatch({ type: 'setWords', words: words })
        dispatch({ type: 'nextStage' })
    }

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNbWords(event.currentTarget.valueAsNumber);
    }
    return (
        <>
            <div>
                <input type="number" onChange={onChange} value={nbWords}></input>
            </div>
            <button onClick={onClick}>Start</button>
        </>
    )
}

export default Start
