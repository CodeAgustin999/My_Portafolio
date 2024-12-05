import React from 'react'
import { SiGmail } from "react-icons/si";


export const SendMail = () => {
    const email= "caceresagustin999@gmail.com";
    const subject = "Consulta por sus servicios";
    const body = "Quería consultar por sus servicios";
    const gmailLink= `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return(
<>
<a href={gmailLink} target="_blank" rel="noopener noreferrer">
<SiGmail size={150} color="red" />
</a>
</>

)

}
