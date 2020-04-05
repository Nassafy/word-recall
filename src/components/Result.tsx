import React from 'react'
import { useStateContext } from '../utils/store';

function Result() {
    const state = useStateContext();
    const score = state.words.filter((word) => word.good === word.guess).length;

    return (
        <>
            <div className="flex flex-row">
                <div className="flex-col mr-2">
                    {
                        state.words.map((word, index) => (
                            <div key={index}>
                                <div className="w-1/2 bg-gray-200 my-4 rounded py-1 px-4 w-full text-gray-700">
                                    {word.good}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex-col">
                    {
                        state.words.map((word, index) => (
                            <div key={index}>
                                <div className={`w-1/2 my-4 rounded py-1 px-4 w-full text-gray-700 ${word.good === word.guess ? "bg-green-400" : "bg-red-400"}`}>
                                    {word.good}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>Score: {score} / {state.words.length}</div>
        </>
    )
}

export default Result;