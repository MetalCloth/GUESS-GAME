//box1 bnana hai usme 5 loop to create div with class element
//boxes me box1 daalna hai
let elemetBox=["NIGGER","REALLY","BUS","BOXES"];
let data=elemetBox[Math.floor(Math.random()*4)];
let boxes=document.querySelector(".boxes");
let f=0;
let k=0;
let m=false
let hint=Math.floor(Math.random()*5);
let occurance=1;
if(data.length==3){
    occurance=0;
}
console.log(occurance);
let count=0;
let over=false;
let exception=true;
let a;
let box1=document.createElement("div");
for(let i=count;i<data.length;i++){
        a=document.createElement("input");
        a.style.border="none";
        a.style.fontFamily="Times New Roman";
        if(f==0 && i==hint){
            a=document.createElement("div");
            a.textContent=data[i];
            f=1;
        }
        a.id="element"+i;
        a.classList.add("element");
        
        console.log(a);
        a.inputMode="enabled";
        
    box1.classList.add("box1");
    box1.appendChild(a);
}

box1.lastChild.addEventListener("keyup",(e)=>{
    if(e.key=="Enter" && e.target.value!="" && !e.target.classList.contains("x")){
        checking();
        e.target.classList.add("x");
        checkErrors();
    }
});
count=data.length;
let h=document.getElementById("element"+0);
console.log(boxes)

box1.addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    if(e.key==="Backspace" && e.target.value=="" || e.target.value==null){
        if(e.target.previousSibling.innerText==data[hint] && m==false){
            m=true;
           e.target.previousSibling.previousSibling.focus();
       }
       else{

           console.log("PREV SIBLING");
           e.target.previousSibling.focus();
       }
    }
    
    else if(e.target.nextSibling!=null && e.target.value!=""){
        if(e.target.nextSibling.innerText==data[hint]){
            e.target.nextSibling.nextSibling.focus();
        }
        else{
        console.log("NEXT SIBLING");
        m=false
        e.target.nextSibling.focus();
        }
    }
    if(e.target.value.length>1){
        if(/^[a-zA-Z]+$/.test(e.target.value[1])){
            e.target.value=e.target.value[1];
        }
        else{
            e.target.value=e.target.value[0];
        }
    }
    
     if( e.target.nextSibling.innerText==data[hint] && m==false){
        e.target.nextSibling.nextSibling.focus();
    }
    console.log(e.target.innerText);

    
})
box1.addEventListener("click",(e)=>{
    console.log("CLICLED");
    console.log(e.target.value);
})

boxes.appendChild(box1);


function checkErrors(){
checking();
if(!over){
console.log("PREM KI NAYYA");
console.log(occurance);
let f=0;
let z=0;
let a;
for(let i=count-data.length;i<count;i++){
    a=document.getElementById("element"+i);
    console.log(a);
    a.readOnly=true;

}
let box1=document.createElement("div");
for(let i=count;i<data.length+count;i++){
    a=document.createElement("input");
    a.style.fontFamily="Times New Roman";
    if(f==0){
        a=document.createElement("input");
        a.textContent=data[i];
        f=1;
    }
    a.id="element"+i;
    a.classList.add("element");
    a.inputMode="disabled";
    box1.classList.add("box1");
    a.style.border="none";
    box1.appendChild(a);
    boxes.appendChild(box1);

    box1.lastChild.addEventListener("keyup",(e)=>{
        if(e.key=="Enter" && e.target.value!="" && !e.target.classList.contains("x")){

            console.log(occurance);
            console.log("ENTER");
            occurance++;
            e.target.classList.add("x");    
            checkErrors();
        }
    });
    

    box1.addEventListener("keyup",(e)=>{
        if(e.key==="Backspace" && e.target.value=="" || e.target.value==null){
            e.target.previousSibling.focus();
            console.log("PREV SIBLING ACTIVE");
             
        }
        else if(e.target.nextSibling!=null && e.target.value!="" ){
            e.target.nextSibling.focus();
        }
        if(e.target.value.length>1){
            if(/^[a-zA-Z]+$/.test(e.target.value[1])){
    
                e.target.value=e.target.value[1];
            }
           else{
            e.target.value=e.target.value[0];
           }
        }
        if( e.target.nextSibling.innerText==data[hint]){
            e.target.nextSibling.nextSibling.focus();
        }
        console.log("HHH");
        
    })
}
checking();
let m=document.getElementById("element"+(count));

count+=data.length;
m.focus();
}
}
function checking(){
    if(occurance<data.length-2){
    k=0;
    
    for(let i=count-data.length;i<count;i++){
        let x=document.getElementById("element"+i);
        if(i==hint){
            x.style.background="#FCAE1E";
        }
        else if(document.getElementById("element"+i).value==data[i-count+data.length] || document.getElementById("element"+i).value==data[i-count+data.length].toLowerCase()){
            k++;
            x.style.backgroundColor="#02B75A";
        }
        else{
            x.style.backgroundColor="#979797";
        }
        x.style.color="white";
        
    }
    if(k==data.length){
        gameOver();
    }
    else if(k==data.length-1 && exception==true && count==data.length){
        exception=false;
        gameOver();
    }
    
}
else{
    if(k==data.length){
        gameOver();
    }
    else if(k==data.length-1 && exception==true && count==data.length){
        exception=false;
        gameOver();
    }
    else{
    YouLose();
    }
}
    
}

function gameOver() {
    console.log("TTETETETE");
    for(let i=count-data.length;i<count;i++){
        a=document.getElementById("element"+i);
        a.readOnly=true;
    }
    over=true;
    console.log(count);
    console.log("Congrats!!")
    document.body.style.backgroundColor = "red";
}
function YouLose(){
    for(let i=count-data.length;i<count;i++){
        let x=document.getElementById("element"+i);
        if(i==hint){
            x.style.background="#FCAE1E";
        }
        else if(document.getElementById("element"+i).value==data[i-count+data.length] || document.getElementById("element"+i).value==data[i-count+data.length].toLowerCase()){
            k++;
            x.style.backgroundColor="#02B75A";
        }
        else{
            x.style.backgroundColor="#979797";
        }
        x.style.color="white";
        
    }
    console.log('hhhhhhhhhhhhhh');
    console.log(k);
    if(k>=data.length){
        gameOver();
    }
    else if(k>=data.length-1 && exception==true && count==data.length){
        exception=false;
        gameOver();
    }
    else{
    over=true
    for(let i=count-data.length;i<count;i++){
        a=document.getElementById("element"+i);
        a.readOnly=true;
    }
    console.log("HHHHH");
    console.log(k);
    console.log("YOU LOSE");
    }
    }

