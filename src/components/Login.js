import { useState } from "react"
import { Header } from "./Header"
export const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const handleSignUp = () => {
        setSignIn(false);
    }
    return (
        <div>
            <Header />
            <div style={{ position: 'absolute' }}>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="text" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, position: 'absolute', marginTop: '120px', background: 'rgba(0,0,0,.75)', borderRadius: '4px', boxSizing: 'border-box', padding: '20px', width: '350px', height: '400px', left: '40%' }}>
                {
                    isSignIn ? <form  >
                        <h1 style={{
                            color: '#fff',  
                            fontSize: '32px',
                            fontWeight: 500,
                            marginBottom: '28px'
                        }}>{isSignIn ? 'SignIn' : 'SignUp'}</h1>
                        <div style={{
                            paddingBottom: '16px', maxWidth: '100%', color: '#333',
                            margin: '0 auto'
                        }}>
                            <input style={{ background: 'grey', height: '35px', width: '100%', borderRadius: '2px', border: '1px solid #8c8c8c' }} type="email" placeholder="Enter a email" />
                        </div>
                        <div style={{
                            paddingBottom: '16px', maxWidth: '100%', color: '#333',
                            margin: '0 auto'
                        }}>
                            <input style={{ background: 'grey', height: '35px', width: '100%', borderRadius: '2px', border: '1px solid #8c8c8c' }} type="password" placeholder="Enter a password" />
                        </div>
                        <div style={{
                            paddingBottom: '16px', maxWidth: '100%', color: '#333',
                            margin: '0 auto'
                        }}>
                            <button style={{ background: '#e50914', width: '100%', height: '30px', borderRadius: '4px' }} type="submit">Sign In</button>
                            <div>
                                <p style={{ color: 'grey' }}>New To NextFlix:<span><button onClick={handleSignUp}>Sign Up</button></span></p>
                            </div>
                        </div>
                    </form> :

                        <form  >
                            <h1 style={{
                                color: '#fff',
                                fontSize: '32px',
                                fontWeight: 500,
                                marginBottom: '28px'
                            }}>Sign In</h1>
                            <div style={{
                                paddingBottom: '16px', maxWidth: '100%', color: '#333',
                                margin: '0 auto'
                            }}>
                                <input style={{ background: 'grey', height: '35px', width: '100%', borderRadius: '2px', border: '1px solid #8c8c8c' }} type="email" placeholder="Enter a email" />
                            </div>
                            <div style={{
                                paddingBottom: '16px', maxWidth: '100%', color: '#333',
                                margin: '0 auto'
                            }}>
                                <input style={{ background: 'grey', height: '35px', width: '100%', borderRadius: '2px', border: '1px solid #8c8c8c' }} type="password" placeholder="Enter a password" />
                            </div>
                            <div style={{
                                paddingBottom: '16px', maxWidth: '100%', color: '#333',
                                margin: '0 auto'
                            }}>
                                <button style={{ background: '#e50914', width: '100%', height: '30px', borderRadius: '4px' }} type="submit">Sign Up</button>
                                {/* <div>
        <p style={{color:'grey'}}>New To NextFlix:<span><button onClick={handleSignUp}>Sign Ip</button></span></p>
    </div> */}
                            </div>
                        </form>
                }

            </div>
        </div>
    )
}