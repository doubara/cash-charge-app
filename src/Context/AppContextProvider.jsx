import { Context, createContext, useReducer } from "react";
import { current } from "tailwindcss/colors";

const appContext = createContext({})

const dispatchFunction = (state, action)=>{
    const {type, data} = action;
    if (type === 'NavigationToggle'){
        return {...state, toggle: !state.toggle};
    }
    else return state;

}

const AppContextProvider = (props) =>{
    const [currentContext, dispatch] = useReducer(dispatchFunction, {});
    console.log(currentContext);

    return <appContext.Provider value={[currentContext, dispatch]} >{props.children}</appContext.Provider>
};
export {appContext};
export default AppContextProvider;