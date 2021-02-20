import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const Login = ({history}) => {
    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            const user = await JSON.parse(localStorage.getItem('user'));
            // console.log("Login", user);
            setUser(user)
        }

        getUser();
    },[])

    const handleLogin = (e) => {
        e.preventDefault();
        if(loginName && loginPassword) {
            if(loginName === user.userName) {
                if(loginPassword === user.password) {
                    history.push('/home')
                }
            }else {
                alert('Login credentials not match')
            }
        }
    }


    return (
        <div className="login">
            <div className="login__form">
                <div className="form__header">API LOGIN</div>
                <input type="text" placeholder="Username" onChange={e => setLoginName(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
                <button onClick={handleLogin}>Submit</button>
                <Link to="/signup" className="form__footer">
                    New Here? Signup  
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Login)
