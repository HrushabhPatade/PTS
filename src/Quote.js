import { useFormik } from "formik";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { getDatabase } from "firebase/database";
import { set, ref } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDIAdpJvngVRFg_gK0D7Jfqk9r8QpUUyOc",
  authDomain: "basic-8fd68.firebaseapp.com",
  projectId: "basic-8fd68",
  storageBucket: "basic-8fd68.appspot.com",
  messagingSenderId: "1098552565065",
  appId: "1:1098552565065:web:1d8e70e76445e01f484e98"
};


const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

function Quote(){

    const[ans,setAns] = useState("");

    // const[name, setName] =useState("");
    // const[email, setEmail] =useState("");
    // const[cno, setCno] =useState("");
    // const[desc, setDesc] = useState("");

    // const hName = (event) => { setName(event.target.value);}

    const initialValues={name:"",email:"",cno:"",desc:""};

    const validate = (values) =>{
        const errors={}

        if(values.name =="")
            errors.name="Empty name not allowed";
        if(values.email =="")
            errors.email="Empty email not allowed";    
        if(values.cno =="")
            errors.cno="Empty contact number not allowed";
        if(values.desc =="")
            errors.desc="Empty description not allowed";
        if(! values.name.match(/^[A-z ]+$/))
            errors.name="Enter proper name ";
        // if(! values.cno.match(/^[\d{10}]$/))
        //     errors.cno="Enter 10 digit mobile number";
        // if(! values.email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/));
        //     errors.email="Enter valid email id";
    
        return  errors;
    }      

    // const configureCaptcha = () => {
	// 	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button',{
	// 		'size':'invisible',
	// 		'callback':(response)=>{
	// 			generate();
	// 			console.log("Recaptca verified")
	// 		},
	// 		defaultCountry: "IN"
	// });
	// }

    const onSubmit=(values)=>{
        
        let data = {"from_name":values.name, "from_email":values.email, "from_cno":values.cno, "message":values.desc};
        emailjs.send("service_y55jvlk","template_0fl5l1z",data,"RqjTTaqQxpQXbS7Ue")
        .then(res=>{
            let d = new Date();
            let t = d.getHours();
            if(t>10 && t<18){
                setAns("Message Send, we will call you in two hours.")
            }
            else {
                setAns("Message Send, we will call you as soon as possible.")
            }
        })
        .catch(err=>console.log(err));
    }

    const formik = useFormik({initialValues, validate, onSubmit});

    return(
        <>
        <div className="quote"  >
        <h2>If you need Quotation for any other Product, please enter information below:</h2>
        <div className="quote_form">
            <form name="quote" onSubmit={formik.handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br/>
                {formik.errors.name && formik.touched.name ? <span>{formik.errors.name}</span>:null}<br/>
                <input type="email" name="email" placeholder="Email ID" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/>
                {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span>:null}<br/>
                <textarea rows="5" cols="7" name="desc" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Write the Description of the Product you needed for best price quotation. "></textarea><br/>
                {formik.errors.desc && formik.touched.desc ? <span>{formik.errors.desc}</span>:null}<br/>
                <button type="submit">Submit</button>
            </form>
            <form name="quote">
                <input type="number" name="cno" placeholder="Contact Number" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/>
                {formik.errors.cno && formik.touched.cno ? <span>{formik.errors.cno}</span>:null}<br/>
                <button type="submit">Generate OTP</button>
            </form>
            <h1>{ans}</h1>
        </div>

        </div>


        </>
    );




}
export default Quote;