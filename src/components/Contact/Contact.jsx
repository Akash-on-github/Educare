import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "89646b1d-c716-4349-8c5d-e219f8170a72");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
   
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setTimeout(() => {
            setResult("");
          }, 3000);
      } else {
        console.log("Error", data);
        setResult(data.message);
        
      }
    };


  return (
    <div className='contact'>
       <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below. Your feedback is incredibly valuable to us, and we genuinely appreciate you taking the time to share your thoughts. We are committed to continually improving our services and your insights help us do just that.  </p>
      <ul>
        <li> <img src={mail_icon} alt ="" />Contact@ADMIN.dev</li>
        <li><img src={phone_icon} alt ="" />+91 134-453-1330</li>
        <li><img src={location_icon} alt ="" />12 KIIT Road, Bhubneswar<br/>
        Odisha, India</li>
      </ul>
       </div>
       <div className="contact-col">
<form onSubmit={onSubmit}>
<label>Your name</label>
<input type="text" name='name' placeholder='enter your name' required/>
<label>Phone Number</label>
<input type="tel" name='phone' placeholder='enter your mobile number' required/>
<label> Write your message here</label>
<input  name="message" rows="6" placeholder='enter your message' required/>


<button type='submit' className='btn dark-btn'>Submit now</button>
</form>
<span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
