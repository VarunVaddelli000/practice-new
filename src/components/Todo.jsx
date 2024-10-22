import TodoContext from "../Services/TodoContext";
import { useContext, useState } from "react";
import DeleteTodo from "./DeleteTodo";


export default function Todo() {
    const { todo } = useContext(TodoContext);

    // Add a fallback for when `todo` is undefined or not an array
    if (!todo || !Array.isArray(todo)) {
        return <div>No todos available</div>;
    }
    const [isModelOpen, setIsModelOpen] = useState(false)

    

    return (
        <div>
            <div className="grid grid-cols-3 ">
            {todo.map((todoInfo) => (
                <div
                    key={todoInfo.id}
                    className="max-w-sm mx-auto bg-white shadow-lg rounded-lg border overflow-hidden w-full mt-5 "
                >
                    <div className="px-6">
                        <h2 className="text-2xl font-bold text-gray-800">{todoInfo.name}</h2>
                        <p className="text-gray-600 mt-2">
                            Category: <span className="font-medium text-gray-700">{todoInfo.category}</span>
                        </p>
                        <p className="text-gray-600 mt-2">
                            ID: <span className="font-medium text-gray-700">{todoInfo.id}</span>
                        </p>
                       
                    </div>
                    <div className="px-6 py-4 flex justify-between">
                        <button className="w-fit bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-all"
                         onClick = {() => setIsModelOpen(true)}>
                            delete
                        </button>
                        <p className="text-gray-600 mt-1 ">
                            <span className={`font-medium text-white py-1 px-2 rounded-md ${todoInfo.isCompleted ?'bg-green-500 ' : 'bg-red-500'}`}>{todoInfo.isCompleted ? 'Completed':'In Completed'}</span>
                        </p>
                    </div>

                </div>
            ))}

        </div>
        {isModelOpen && <DeleteTodo setIsModelOpen={setIsModelOpen} todoId={todo.id}/>}
        </div>
    );
}
