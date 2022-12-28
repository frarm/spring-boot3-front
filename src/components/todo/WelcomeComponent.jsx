import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext'

function WelcomeComponent(){

    const {username} = useParams();

    const [message, setMessage] = useState(null);

    const authContext = useAuth();

    function callHelloWolrdRestApi(){
        console.log("call");
        // retrieveHelloWorldBean()
        // .then(
        //     (response) => successfulResponse(response) 
        // ).catch(
        //     (error) => errorResponse(error)
        // ).finally(
        //     () => console.log('cleanup')
        // )

        retrieveHelloWorldPathVariable('frarm', authContext.token)
        .then(
            (response) => successfulResponse(response) 
        ).catch(
            (error) => errorResponse(error)
        ).finally(
            () => console.log('cleanup')
        )
    }

    function successfulResponse(response){
        console.log(response);
        //setMessage(response.data);
        setMessage(response.data.message);
    }

    function errorResponse(error){
        console.log(error);
    }

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}!</h1>
            <div>
                Manage your todos - <Link to='/todos'>Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWolrdRestApi}>Call Hello World</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

export default WelcomeComponent