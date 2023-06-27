import './CreateAccount.css'
import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Request from '../../helpers/request.js'


const CreateAccount = ({users, addUser}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = () => {
        console.log("handleCreateAccountCalled");
        let userNameUsed = false;
        for(let user of users){
            if(user.name === userName ){
                userNameUsed = true;
                alert('Username already in use!');
                break
            }
        }

        if (userNameUsed === false) { 
            alert('Account created successfully!');
            // setCreated(true);
            const newUser = {
                name: userName,
                password: password
            }
            addUser(newUser)
            const request = new Request();
            request.post('/users', newUser).then(() => {
                window.location = '/';
            })
            // FeedServices.addUser(newUser)
            return <Navigate to="/"/>
        }
    }

    return (
        <form className="create">
        <h1>Create Account</h1>
        <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleCreateAccount}>Create Account</button>
        </form>
    );
    
}

export default CreateAccount;