import './CreateAccount.css'
import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Request from '../../helpers/request.js'


const CreateAccount = ({users, addUser}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = (event) => {
        event.preventDefault();
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
                "name": userName,
                "password": password
            }
            addUser(newUser)
            console.log("newUser", newUser);

            const request = new Request();
            request.post('/api/users', newUser).then(() => {
                window.location = '/';
            })
            return <Navigate to="/games"/>
        }
    }

    return (
        <form className="create" onSubmit={handleCreateAccount}>
            <h1>Create Account</h1>
            <input
                type="text"
                placeholder="User Name"
                name='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className='cb'type="submit">Create Account</button>
        </form>
    );
    
}

export default CreateAccount;