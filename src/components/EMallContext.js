import React, {createContext, useReducer} from "react";

const EMallContext = createContext();

export default function ContextProvider({children}){

    function reducer(prev,action){

        switch(action.type)
        {
            case '':
            return
            default:
                break;
        }
        return prev;
    }

    const [state,dispatch] = useReducer(reducer, {});

    return ( <EMallContext.Provider value={state, dispatch}>
        {children}
    </EMallContext.Provider>
)
}