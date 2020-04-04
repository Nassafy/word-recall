import React from 'react'
import { useStateContext } from '../utils/store';

function Result() {
    const state = useStateContext();
    const score = state.words.filter((word) => word.good === word.guess).length;

    return (
        <>
            <table>
                <tbody>
                    {
                        state.words.map((word, index) => (
                            <tr key={index}>
                                <td>{word.good}</td>
                                <td>{word.guess}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>Score: {score} / {state.words.length}</div>
        </>
    )
}

export default Result;