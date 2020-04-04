import React from 'react'
import { useStateContext, useDispatchStateContext } from '../utils/store';

function Guess() {
    const state = useStateContext();
    const [words, setWords] = React.useState(state.words);

    const dispatch = useDispatchStateContext();

    const onChange = (index: number, event: React.FormEvent<HTMLInputElement>) => {
        let newWord = words.slice();
        newWord[index].guess = event.currentTarget.value;
        setWords(newWord);
    }

    const onClick = () => {
        dispatch({ type: "setWords", words: words });
        dispatch({ type: "nextStage" });
    }

    return (
        <>
            <div>
                {words.map((word, index) => (
                    <div key={index}>
                        <input type="text" onChange={(event) => onChange(index, event)} value={word.guess} />
                    </div>
                ))}
            </div>
            <button onClick={onClick}>Next</button>
        </>
    )
}

export default Guess;