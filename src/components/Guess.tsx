import React, { useRef, useEffect } from "react";
import { useStateContext, useDispatchStateContext } from "../utils/store";

function Guess() {
  const state = useStateContext();
  const [words, setWords] = React.useState(state.words);

  const dispatch = useDispatchStateContext();

  const firstInputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const onChange = (
    index: number,
    event: React.FormEvent<HTMLInputElement>
  ) => {
    let newWord = words.slice();
    newWord[index].guess = event.currentTarget.value;
    setWords(newWord);
  };

  const onClick = () => {
    dispatch({ type: "setWords", words: words });
    dispatch({ type: "nextStage" });
  };

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  return (
    <>
      <div>
        {words.map((word, index) => (
          <div key={index}>
            <input
              className="input my-2"
              type="text"
              onChange={(event) => onChange(index, event)}
              value={word.guess}
              ref={index === 0 ? firstInputRef : null}
            />
          </div>
        ))}
      </div>
      <button className="btn w-full" onClick={onClick}>
        Next
      </button>
    </>
  );
}

export default Guess;
