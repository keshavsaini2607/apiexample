import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const Signup = ({history}) => {
    const [values, setValues] = useState({
        email: "",
        userName: "",
        phoneNumber: Number,
        password: "",
        profession: "Student"
    })

    const {email, userName, phoneNumber, password, profession} = values

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(email.length > 5) {
            localStorage.setItem('user',JSON.stringify(values))
            setValues({
                email: "",
                userName: "",
                password: "",
                phoneNumber: "",
                profession: "Student"
            })
            alert('Signup Complete please signin now')
            history.push('/login')
        }
    }


    return (
        <div className="login">
            <div className="login__form">
                <div className="form__header">API Signup</div>
                <input type="email" placeholder="Email" onChange={handleChange("email")} value={email} />
                <input type="text" placeholder="Username" onChange={handleChange("userName")} value={userName} />
                <input type="phone" placeholder="Phone Number" onChange={handleChange("phoneNumber")} value={phoneNumber} />
                <input type="password" placeholder="Password" onChange={handleChange("password")} value={password} />
                <label>Profession</label>
                <select onChange={handleChange("profession")} value={profession}>
                    <option defaultChecked="true">Student</option>
                    <option>Working Professional</option>
                    <option>Business Person</option>
                </select>
                <button onClick={onSubmit}>Submit</button>
                <Link to="/login" className="form__footer">
                    Account already exists? Login  
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Signup)
