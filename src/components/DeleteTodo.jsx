import TodoContext from "../Services/TodoContext";
import { useContext, useState } from "react";
export default function DeleteTodo(props) {

   const {setIsModelOpen, todoId} = props;
   const { confDelete } = useContext(TodoContext);

    return (
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                {/* <!-- Modal Header --> */}
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Confirm Delete</h2>

                {/* <!-- Modal Body --> */}
                <p class="text-gray-700 mb-6">
                    Are you sure you want to delete this item? This action cannot be undone.
                </p>

                {/* <!-- Modal Actions --> */}
                <div class="flex justify-end space-x-4">
                    <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition ease-in-out"
                      onClick = {() => setIsModelOpen(false)}>
                        Cancel
                    </button>
                    <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition ease-in-out"
                     onClick = {() =>{
                        confDelete(todoId);
                        setIsModelOpen(false);
                     }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>

    )
}