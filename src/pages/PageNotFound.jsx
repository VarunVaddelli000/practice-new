import { Link } from "react-router-dom";
export default function PageNotFound(){
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">
              404
            </h1>
            <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
           
             <h1><Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
             > Go TO Home</Link></h1>
            
          </div>
        </div>
      );
      
}