import { NavLink } from 'react-router-dom'
import './../css/Login.css'
const LoginPage = () => {
    return (
        <div className="body">
            <div className="Login">

                <h1> Sign In </h1>

                <form className="sign-in">
                    
                    <div className='label'>
                        <label htmlFor="username"> username: </label>
                    
                        <input id="username" type="text" maxLength={15} placeholder="username" autoFocus={true}/>
                    </div>

                    <div className='label'>
                        <label htmlFor="password"> password: </label>

                        <input id="password" type="password" placeholder='password'
                        maxLength={20}/>
                    </div>
                    <button type="submit"> Submit </button>
                </form>

                <NavLink className='nav-link'  to='/forgotpassword'> <a id='fg-pass'>Forgot password?</a> </NavLink>
                <NavLink className='nav-link' to='/signup'> <a id='su-acco'>Don't have an account? Sign up</a> </NavLink>

            </div>
        </div>
    )
} 

export default LoginPage