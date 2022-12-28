import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodoApi, retrieveAllTodosForUserApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

function ListTodosComponent(){
    
    const today = new Date();

    const authContext = useAuth();

    const navigate = useNavigate();

    const username = authContext.username;

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect (
        () => refreshTodos(), []
    )

    function refreshTodos(){
        retrieveAllTodosForUserApi(username)
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id){
        deleteTodoApi(username,id)
        .then(
            () => {
                setMessage(`Delete of todo with ${id} succesful`)
                refreshTodos()
            }
        )
        .catch(error => console.log(error))
    }

    function updateTodo(id){
        navigate(`/todo/${id}`)
    }

    function addNewTodo(){
        navigate(`/todo/-1`)
    }

    return(
        <div className='container'>
            <h1>Thins You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                            <td>Delete</td>
                            <td>Update</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-3" onClick={addNewTodo}>Add new Todo</div>
        </div>
    )
}
export default ListTodosComponent