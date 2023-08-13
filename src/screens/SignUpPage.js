import './../css/SignUpPage.css'
import { FaCashRegister } from 'react-icons/fa'

const SignUpPage = () => {
    return (
        <div className='body'>
            <div className='sign-up'>

                <div className='register'>
                    <FaCashRegister size={100} color={'#232f47'}/>
                    <h2> Register Now! </h2>
                </div>

                <form className='su-form' autoFocus>

                    <div className='form-card'>
                        <div className='label'>
                            <label htmlFor='fullname'> Full Name </label>
                            <input id='fullname' type='text' placeholder='Full Name'/>
                        </div>

                        <div className='label'>
                            <label htmlFor='username'> Username </label>
                            <input id='username' type='text' placeholder='username'/>
                        </div>

                        <div className='label'>
                            <label htmlFor='email'> E-mail </label>
                            <input id='email' type='email' placeholder='email@iiitb.ac.in' pattern='.+@iiitb.ac.in'/>
                        </div>

                        <div className='label'>
                            <label htmlFor='password'> Password </label>
                            <input id='password' type='password' placeholder='password'/>
                        </div>

                        <div className='label'>
                            <label htmlFor='retype-password'> Re-type password </label>
                            <input id='retype-password' type='password' placeholder='password'/>
                        </div>
                    </div>

                    <button type='submit' id='su-btn'> Submit </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;