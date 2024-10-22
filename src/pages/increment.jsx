import { useState, useReducer } from "react"

function reducer(state, action){

switch(action.type) {
    case 'increment':{
        return{value: state.value+1}
    }
    case 'decrement':{
        return{value: state.value > 0 ? state.value-1 : 0}
    }
    case 'reset':{
        return{value:0}
    }
}
return state;
}
export default function Increment() {

    // const [inc,setInc] = useState(0);

    // const increment = () =>{
    //     setInc(inc+1);
    // }
    // const decrement = () =>{
    //     setInc(inc-1);
    // }

    // const reset = () =>{
    //     setInc(0);
    // }

    const [state, dispatch] = useReducer(reducer,{value:0});

    return(
        <div>
            <h1>counter:{state.value}</h1>
            <button onClick={()=> dispatch({type:'increment'})} className="ml-10 bg-gray-200">Increment</button>
            <button onClick={()=> dispatch({type:'decrement'})} className="ml-10 bg-gray-200">decrement</button>
            <button onClick={()=> dispatch({type:'reset'})} className="ml-10 bg-gray-200">reset</button>
        </div>
    )
}