//  alert("hey einstein welcome");
 
 let correct=document.getElementsByClassName("ans");
 
for(let m=0;m<correct.length;m++){
    correct[m].addEventListener("click",function(){
        
      correct[m].innerText="correct";
     correct[m].style.backgroundColor="green";
      
     
  
})}

let wrong = document.getElementsByClassName("wrongans"); 

for (let i = 0; i < wrong.length; i++) {
    wrong[i].addEventListener("click", function() {
         wrong[i].innerText="oops wrong";
         wrong[i].style.backgroundColor="yellow";
    });
}

 
let k=document.getElementById("point");
let count=0;
 for(let b=0;b<correct.length;b++){
    
correct[b].onclick=(function(){
   
      if(!this.disabled){
        count++;
         
        k.style.backgroundColor="orange";
        k.innerText=count;
        this.disabled=true;
      }
       
      
         
      });
      

    }

 

 

 
 
 
  

 
  
  


  
    
    
   