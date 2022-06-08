import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";


function Recaptcha() {
    function onChange(value) {
        console.log("Captcha value:", value);
      }

    //   testkey: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
  return (
    <ReCAPTCHA
    sitekey="6LfQLVUgAAAAAGS9SqS-NEb5qtaU5iSGGKyVIMpe"
    onChange={onChange}
   
  />
  

  )
}

export default Recaptcha