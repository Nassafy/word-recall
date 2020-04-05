import React from 'react'
import { useStateContext, useDispatchStateContext } from '../utils/store';

function Memorise() {
    const state = useStateContext();
    const disatch = useDispatchStateContext();
    const list = state.words.map((word, index) => (
        <li className="bg-gray-200 my-2 rounded py-1 px-4 w-full text-gray-700" key={index}>{word.good}</li>
    ))
    return (
        <>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
            <button className="btn w-full"
             onClick={() => disatch({ type: "nextStage" })}>Next</button>
        </>
    )
}

export default Memorise;