import './../css/ForgotPasswordAuth.css'
import { MdOutlineMailLock, MdEmail } from 'react-icons/md'
import { BsFillLockFill } from 'react-icons/bs'

const ForgotPasswordAuth = () => {
    return (
        <div className="body">
            <div className="fg-auth">

                <div className='logo-mail-lock'> 
                    <MdEmail id='mail-icon' size={200} color={'#232f47'}/>
                    
                    <BsFillLockFill id='lock-icon' size={50} color={'#243769'} />

                    <p> (iiitb emails only) </p>
                </div>

                <form className="email-auth">
                    <label htmlFor="youremail"> Enter the email that you have used when registering: </label>

                    <input type="email" id="youremail" placeholder="yourmail@email.com" pattern=".+@iiitb.ac.in" autoFocus />  

                    <button type="submit" id='fg-btn'> Submit </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordAuth;