import React, { useReducer } from 'react'

//#region type

type StoreProviderProps = { children: React.ReactNode }

type Word = {
    good: string,
    guess: string,
}

type State = {
    stage: number;
    words: Array<Word>;
}

type Action =
    {
        type: 'nextStage' | 'reset',
    } |
    {
        type: 'setWords',
        words: Array<Word>
    }

type Dispatch = (action: Action) => void

//#endregion

const defaultState: State = {
    stage: 0,
    words: []
};


const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'nextStage':
            return { ...state, stage: state.stage++ };
        case 'reset' :
            return defaultState;
        case 'setWords':
            return {...state, words: action.words};
        default:
            throw new Error();
    }
}

const StateContext = React.createContext<State | undefined>(undefined);
const DispatchStateContext = React.createContext<Dispatch | undefined>(undefined);

function StoreProvider({ children }: StoreProviderProps) {


    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <StateContext.Provider value={state}>
            <DispatchStateContext.Provider value={dispatch}>
                {children}
            </DispatchStateContext.Provider>
        </StateContext.Provider>
    )
}

function useStateContext() {
    const context = React.useContext(StateContext);
    if (context === undefined) {
        throw new Error("useStateContext must be used within a StateProvider")
    }
    return context;
}

function useDispatchStateContext() {
    const context = React.useContext(DispatchStateContext);
    if (context === undefined) {
        throw new Error("useDispatchStateContext must be used within a StateDispatchProvider")
    }
    return context;
}

export { StoreProvider, useStateContext, useDispatchStateContext }