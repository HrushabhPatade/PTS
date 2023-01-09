import NavBar from "./NavBar";

import { useState } from "react"

import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Reg() {

    const nav = useNavigate();
    const[name, setName] =useState("");
    const[email, setEmail] =useState("");
    const[cno, setCno] =useState("");
    const[pwd1, setPwd1] =useState("");
    const[pwd2, setPwd2] =useState("");
    

    const [ans, setAns] = useState("");

    const hName = (event) => {setName(event.target.value);}
    const hEmail = (event) => {setEmail(event.target.value);}
    const hCno = (event) => {setCno(event.target.value);}
    const hPwd1 = (event) => {setPwd1(event.target.value);}
    const hPwd2 = (event) => {setPwd2(event.target.value);}

    const save = (event) =>{
        event.preventDefault();
        if(pwd1 == pwd2){
            // values.preventDefault();
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, pwd1 )
            .then(res=> nav("/login"))
            .catch(err=> console.log("Issue "+ err))
        }
        else{
            setAns("Please enter proper details");
        }
        
    }


    
    return (
        <>

            <center>
                <NavBar />

                <div className="reg" style={{paddingtop: "100px"}}>
                    
                    <h2>Registration Page</h2>
                    <div className="reg_form" style={{paddingbottom: "50px"}}>
                        <form onSubmit={save} >
                            {/* <input type="text" name="name" placeholder="Name" onChange={hName}/>
                           <br/> */}
                            <input type="email" name="email" placeholder="Email ID" onChange={hEmail} />
                            <br/>
                            {/* <input type="number" name="cno" placeholder="Contact Number" onChange={hCno}/>
                            <br/> */}
                            <input type="password" name="pwd1" placeholder="Set Password" onChange={hPwd1}/>
                            <br/>
                            <input type="password" name="pwd2" placeholder="Re-enter Password" onChange={hPwd2} />
                            <br/>
                            <div className="reg_btn">
                                {/* <Link to="/">Register</Link> */}
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                        <h1>{ans}</h1>
                    </div>

                </div>







            </center>

        </>

    );
}
export default Reg;