import { useState } from "react"
import { Header } from "./Header"
export const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const handleSignUp = () => {
        setSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />
            <div style={{ position: 'absolute' }}>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="text" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, position: 'absolute', marginTop: '120px', background: 'rgba(0,0,0,.75)', borderRadius: '4px', boxSizing: 'border-box', padding: '20px', width: '350px', height: '400px', left: '40%' }}>
               {isSignIn ? <h1 style={{color:'white'}}>SignIn</h1>: <h1 style={{color:'white'}}>SignUp</h1>}
                {isSignIn ?   <div>
               <form style={{display:'flex', gap:1,alignItems:'center', flexDirection:'column'}}>
                 <div style={{width:'100%'}}>
                    <input type="email" placeholder="Enter the Email "/>
                 </div>
                 <div style={{width:'100%'}}>
                 <input type="email" placeholder="Enter the password "/>
                 </div>
                 <div style={{width:'100%'}}>
                    <button style={{color:'red'}} type="submit">SignIn</button>
                 </div>
               </form>
                 <p style={{color:'grey'}} onClick={handleSignUp}>New To Netflix : ? SignUp</p>
               </div> : 
                <div>
                <form style={{display:'flex', gap:1 , alignItems:'center', flexDirection:'column'}}>
                <div style={{width:'100%'}}>
                     <input type="text" placeholder="Enter username"/>
                  </div>
                  <div style={{width:'100%'}}>
                     <input type="email" placeholder="Enter the Email "/>
                  </div>
                  <div style={{width:'100%'}}>
                  <input type="email" placeholder="Enter the password "/>
                  </div>
                  <div style={{width:'100%'}}>
                     <button style={{color:'red'}} type="submit">SignUp</button>
                  </div>
                </form>
                  <p style={{color:'grey'}} onClick={handleSignUp}>Go To Netflix : ? SignIN</p>
                </div>
               }
              
            </div>
        </div>
    )
}