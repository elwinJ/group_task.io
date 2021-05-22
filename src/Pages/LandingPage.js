import React, {useState} from 'react';
import NavBarLanding from '../Componets/NavBarLanding';
import Modal from "react-modal";
import '../CSS/LandingPage.css'

// This is to fix the accessibility warnings in the console.
// Such warnings are caused by not having the appElement defined on the modal import.
Modal.setAppElement('#root') 

function LandingPage(props){
    const [logInIsOpen, setLogInIs] = useState(false);
    const [logOutIsOpen, setLogOutIs] = useState(false);

    return(
        <div>
             <Modal 
                isOpen={logInIsOpen} 
                onRequestClose={() => setLogInIs(false)} 
                style={
                    {
                        content: {
                            top: '20%',
                            left: '40%',
                            right: '40%',
                            bottom: '35%'
                        }
                    }
                }
            >
                <div className="modal_content-container">
                    <h1>Log In</h1>
                    <hr></hr>
                    
                    <form onSubmit={() => alert("Welcome Back.")}>
                        <div className="form_email-container">
                            <label for="email">Enter email:</label><br></br>
                            <input type="text" id="full_email" name="email" required></input>
                            <br></br>
                        </div>
                        
                        <div className="form_password-container">
                            <label for="password">Enter password:</label><br></br>
                            <input type="password" id="full_password" name="password" required></input>
                        </div>
                        <br></br>

                        <input className="submitbutton" type="submit" value="Sign In"></input>
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                        {/* Remember Task: Handle wrong credentials */}
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    </form>
                </div>
            </Modal>

            <Modal 
                isOpen={logOutIsOpen} 
                onRequestClose={() => setLogOutIs(false)} 
                style={
                    {
                        content: {
                            top: '20%',
                            left: '40%',
                            right: '40%',
                            bottom: '35%'
                        }
                    }
                }
            >
                <div className="modal_content-container">
                    <h1>Sign Up</h1>
                    <hr></hr>

                    <form onSubmit={() => alert("Thank you for joining us.")}>
                        <div className="form_email-container">
                            <label for="email">Enter email:</label><br></br>
                            <input type="text" id="full_email" name="email" required></input>
                            <br></br>
                        </div>
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                        {/* Remember Task: Use onChange to live-check if the email is available */}
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

                        <div className="form_username-container">
                            <label for="username">Enter a username:</label><br></br>
                            <input type="text" id="full_username" name="username" required></input>
                            <br></br>
                            
                        </div>
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                        {/* Remember Task: Use onChange to live-check if the username is available */}
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                        
                        <div className="form_password-container">
                            <label for="password">Enter password:</label><br></br>
                            <input type="password" id="full_password" name="password" required></input>
                        </div>

                        <div className="form_confirm_password-container">
                            <label for="password2">Confirm password:</label><br></br>
                            <input type="password" id="full_password2" name="password2" required></input>
                        </div>
                        <br></br>
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                        {/* Remember Task: Use onChange to live-check if the password2 matches password */}
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

                        <input className="submitbutton" type="submit" value="Sign Up"></input>
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                        {/* Remember Task: Use conditional rendering to make submit button visible if conditions are met */}
                        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    </form>
                </div>

            </Modal>
        
            <div className="landing_page-container">
                <NavBarLanding/>

                <h1>Name of Website and Logo</h1>
                <div className="landing_page-button-container"> 
                    <button onClick={() => setLogInIs(true)}>Log In</button>
                    <button onClick={() => setLogOutIs(true)}>Sign Up</button>
                    
                </div>

            </div>
        </div>
    )
    
}

export default LandingPage