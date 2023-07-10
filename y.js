
const form = document.querySelector("form")
statusTxt =form.querySelector(".button-area span");

form.onsubmit =(e)=>{
    e.preventDefault()//preventing form from submitting
    statusTxt.style.color ="#0D6EFD";
    statusTxt.style.display = "block";

    let xhr =new XMLHttpRequest();//creating new xml object
    xhr.open("POST", "message.php", true);//sending post request to message.php file
    xhr.onload = ()=>{//once ajax loaded
        if(xhr.readyState ==4 && xhr.status ==200){//if ajax response status is 200 $ ready status is 4 means ther is no error
            let response= xhr.response;//storing ajax in a response variable
            // console.log(response);
            if(response.indexOf("Email and password field is required")!= -1|| response.indexOf("Email and password field is required!")|| "Sorry failed to send your message!"){
                statusTxt.color="red";
        }else{
            form.reset();
            setTimeout(()=>{
                statusTxt.style.display="none";

            },3000);
        }
        statusTxt.innerText = response

        }
    }
    let formData = new FormData(form);//creating new FormData obj. This obj is used tosend form Data  
    xhr.send(formData);//sending form data

}
