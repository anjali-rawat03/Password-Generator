const slider = document.querySelector(".jsslider");
const valueRange = document.querySelector(".value");
slider.value = 15;

slider.addEventListener("input",()=>{
    valueRange.innerHTML = slider.value;
});

const mainPassword = document.querySelector('.jsPassword');
const btn = document.querySelector('.jsBtn');
const upperCase = document.querySelector('.jsUppercase');
const lowerCase = document.querySelector('.jsLowercase');
const numbers = document.querySelector(".jsNumbers");
const symbols = document.querySelector(".jsSymbols");
const progress = document.querySelector(".jsProgress");
const strenght = document.querySelector('.jsstrenght');

btn.addEventListener("click", ()=>{
    mainPassword.innerHTML = passwordGenerator();
    progressBar([upperCase,lowerCase,numbers,symbols],slider.value);
});

function passwordGenerator(){
    let letters = "";
    let password = "";
    
    if(!upperCase.checked && !lowerCase.checked && !numbers.checked && !symbols.checked){
        alert("please select atleast one check box")
        password = "";
        return password;
    }
    if(upperCase.checked){
        letters+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(lowerCase.checked){
        letters+= "abcdefghijklmnopqrstuvwxyz";
    }
    
    if(numbers.checked){
        letters += "1234567890";
    }
    if(symbols.checked){
        letters += "!@#$%^&*(){}[]-_";
    }
    
    
    for(let i = 0; i<Number(slider.value); i++){
        password += letters[Math.floor(Math.random()* letters.length)];
    }
    return password;
}

function progressBar(inputArray,values){
    let count = 0;
    for(let i = 0; i<inputArray.length ; i++ ){
        if(inputArray[i].checked){
            count++;
        }
    }
    if((count>=4 && values>= 15) || (count>=4 && values< 15)){
        progress.style.backgroundColor = "green";
        progress.style.width = "100%";
        strenght.innerHTML = "Very strong";
    }
    else if(((count>=3 || count>=2) && values >=15) || (count>=3 && values< 15)){
        progress.style.backgroundColor = "green";
        progress.style.width = "75%";
        strenght.innerHTML = "Strong";
    }
    else if((count>=1 && values>=15) || (count>=2 && values<15)){
        progress.style.backgroundColor = "orange";
        progress.style.width = "55%";
        strenght.innerHTML = "Medium";
    }
    else if(count>=1 && values<15){
        progress.style.backgroundColor = "red";
        progress.style.width = "25%";
        strenght.innerHTML = "Weak";
    }
}
