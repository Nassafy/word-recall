import React from "react";
import { useStateContext, useDispatchStateContext } from "../utils/store";

function Result() {
  const state = useStateContext();
  const score = state.words.filter((word) => word.good === word.guess).length;
  const dispatch = useDispatchStateContext();

  return (
    <>
      <table>
        <tbody>
      {
          state.words.map((word, index) => (
            <tr key={index}>
              <td>
                <div className="w-1/2 bg-gray-200 my-4 rounded py-1 px-4 w-full text-gray-700 mr-4">
                  {word.good}
                </div>
              </td>
              <td>
                <div
                  className={`w-1/2 my-4 rounded py-1 px-4 w-full text-gray-700 ${word.good === word.guess ? "bg-green-400" : "bg-red-400"}`}>
                  {word.guess}
                </div>
              </td>
            </tr>
          ))
      }
        </tbody>
      </table>

      <div>
        Score: {score} / {state.words.length}
      </div>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn w-full my-5"
      >
        Restart
      </button>
    </>
  );
}

export default Result;
