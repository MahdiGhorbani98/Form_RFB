var name1 = document.querySelector('#name');
// let valid1 = document.querySelector('#valid1');
let role = document.querySelector('#role');
let address = document.querySelector('#address');
let phone_number = document.querySelector('#phone_number');
let mail = document.querySelector('#mail');
let btnSubmit = document.querySelector('#btnSubmit');
let personal_info0 = document.querySelector('.personal_info0')
btnSubmit.addEventListener('click' , validSubmit)


function validSubmit(){
    if(role.value === ""){
        valid2.style.display = "block";
        role.style.background = "#ffcdd2"
        personal_info0.scrollIntoView()
    }
    if(address.value === ""){
        valid3.style.display = "block";
        address.style.background = "#ffcdd2"
        personal_info0.scrollIntoView();
    }
    if(phone_number.value === "" || isNaN(phone_number.value)){
        valid4.style.display = "block";
        phone_number.style.background = "#ffcdd2"
        personal_info0.scrollIntoView();
    }
    if(mail.value === ""){
        valid5.style.display = "block";
        mail.style.background = "#ffcdd2"
        personal_info0.scrollIntoView();
    }
    if(name1.value === ""){
        valid1.style.display = "block";
        name1.style.background = "#ffcdd2"
        personal_info0.scrollIntoView()
    }




}

function DestroyValid()
{
    valid1.style.display = "none";
    name1.style.background = "#fff"
}
function DestroyValid2(idElement,idValid)
{

    idValid.style.display = "none";
    idElement.style.background = "#fff"
}


/////////////////////////////////////////////ProgressBar/////////////////////////////////////////////

let Circle1 = document.querySelector('#Circle1')
let Circle2 = document.querySelector('#Circle2')
let Circle3 = document.querySelector('#Circle3')
let Circle4 = document.querySelector('#Circle4')
let Circle5 = document.querySelector('#Circle5')
let Circle6 = document.querySelector('#Circle6')
let list = [Circle1 , Circle2 ,Circle3 ,Circle4 ,Circle5 ,Circle6]
// let Start_Button = document.querySelector('#Start_Button')

function StartProgress(element){
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("playAnimation")
    }
    element.classList.add("playAnimation")
    
}
function TickedCircle(element){

    element.classList.add("fas")
    element.classList.add("fa-check-circle")
    element.classList.remove("far")
    element.classList.remove("fa-circle")
    element.firstChild.style.visibility = "hidden"
}


////////////////////////////////////////Submit/////////////////////////////////////////////

function SubmitAll(){
    document.getElementById("form1").submit();
}