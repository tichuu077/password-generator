 const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowercase = "abcdefghijklmnopqrstuvwxyz";
 const numbers = "0123456789";
 const symbol = "!@#$%^&*()+_~";
const display=document.getElementById("pass-box");
const copy = document.getElementById('copy');

 const randomChar = (dataset) => {
     return dataset[Math.floor(Math.random() * dataset.length)];
 }
copy.addEventListener('click',()=>{
    console.log('clicked')
    let  text= display.innerHTML; 
     navigator.clipboard.writeText(text);
    copy.innerHTML='copied'
})
 const passGenerator = () => {
     let pass = "";
     const passlength = parseInt(document.getElementById("total-char").value);
     const checkUpper = document.getElementById("upper-case").checked;
     const checklower = document.getElementById("lower-case").checked;
     const checknumber = document.getElementById("numbers").checked;
     const checksymbols = document.getElementById("symbols").checked;
console.log(checklower)
   console.log(checkUpper)
     if (checkUpper) {
         pass += randomChar(uppercase);
     }
     if (checklower) {
         pass += randomChar(lowercase);
     }
     if (checknumber) {
         pass += randomChar(numbers);
     }
     if (checksymbols) {
         pass += randomChar(symbol);
     }


   while (pass.length < passlength) {
       if (checkUpper) {
           pass += randomChar(uppercase);
       }
       if (checklower) {
           pass += randomChar(lowercase);
       }
       if (checknumber) {
           pass += randomChar(numbers);
       }
       if (checksymbols) {
           pass += randomChar(symbol);
       }
   }


     if (pass.length > passlength) {
         pass = pass.substr(0, passlength);
     }


    
     return pass;
 }

 document.getElementById("btn").addEventListener('click', () => {
    display.innerHTML=passGenerator();
     copy.innerHTML='';
     let i=document.createElement('i');
     i.classList.add('fa-regular');
     i.classList.add('fa-copy');
     copy.appendChild(i);
 });
 
