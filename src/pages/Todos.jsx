import TodoContext from "../Services/TodoContext";
import { useContext } from "react";
import Todo from "../components/Todo";
import { useEffect, useState } from "react";
export default function Todos() {
    const [todo, setTodo] = useState([]);

    const confDelete = async (id) => {
        const filteredTodo = todo.filter((todos) => todos.id !== id);
            setTodo(filteredTodo);
      };
      
    
    const getTodo = async () =>{
        try{

            let response = await fetch('http://localhost:4000/items',{method: 'GET'});
            let data = await response.json();
            setTodo(data);
        }catch (error){
            console.error("Error fetching todos:", error); 
        }
    }
    useEffect(() => {
        getTodo();
    },[])
    return(
        <div>
            <TodoContext.Provider value={{ todo, confDelete }}>
                 <Todo/>
            </TodoContext.Provider>
        </div>
    )
}