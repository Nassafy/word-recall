import React from 'react'
import { useStateContext, useDispatchStateContext } from '../utils/store';

function Memorise() {
    const state = useStateContext();
    const disatch = useDispatchStateContext();
    const list = state.words.map((word, index) => (
        <li key={index}>{word.good}</li>
    ))
    return (
        <>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
            <button onClick={() => disatch({ type: "nextStage" })}>Next</button>
        </>
    )
}

export default Memorise;