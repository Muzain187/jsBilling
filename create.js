let CmpName = document.getElementById('CmpName');
let CmpAddr = document.getElementById('CmpAddr');
let CmpPhno = document.getElementById('CmpPhno');
let CmpEmail = document.getElementById('CmpEmail');



let success = document.getElementById('success');

console.log("we are in javascript");


let button = document.getElementById('SubmitBtn');
button.addEventListener("click",function(){
    if(CmpPhno.value != '' && CmpAddr.value!='' && CmpName.value!='' && CmpEmail.value!= ''){

        console.log("Company name :",CmpName.value);
        console.log("Company Address :",CmpAddr.value);
        console.log("Company Phone Number :",CmpPhno.value);
        console.log("Company Email :",CmpEmail.value);


        let email = prompt("Enter email again to verfy");
        if(CmpEmail.value == email){
            //storing the Details in Local storage
            console.log("verified");
            localStorage.setItem("CmpName",CmpName.value);
            localStorage.setItem("CmpAddr",CmpAddr.value);
            localStorage.setItem("CmpPhno",CmpPhno.value);
            localStorage.setItem("CmpEmail",CmpEmail.value);
            // alert("Successfully created.");
            success.innerHTML = `<div class="alert alert-success alert-dismissible" role="alert">
            your credential created <strong>Success Fully</strong><a href="index.html" class="btn btn-success">Goto Home</a> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        }
        else{
            alert("Enter Email properly");
            CmpEmail.value = '';
        }
    }
    else{
        alert("fields should be filled");
    }
});
