
 drag();

const btn=document.getElementById("btn");
const input=document.getElementById("input");
const todoContainer=document.querySelector("#todo>.item-container");

btn.onclick=function(){

    if(input.value.trim()==""){
        alert("There is nothing to add")
    }
else{
    const text=document.createTextNode(input.value);
const div=document.createElement("div");
const pTag=document.createElement("p");
div.classList.add("cus-item");
div.setAttribute("draggable","true")
pTag.appendChild(text);
div.appendChild(pTag);
todoContainer.appendChild(div);
input.value="";
drag();
}
}

function drag(){
    const containers=document.querySelectorAll(".item-container");
    const items=document.querySelectorAll(".cus-item");
    const trash=document.getElementById("btnDel")
   
    
   
    items.forEach((item)=>{
        item.addEventListener("dragstart",(e)=>{
         e.target.classList.add("drag-item");
         e.target.style.opacity="0.5";
         e.target.style.border="1px dashed black"
         
        
        });
      
        item.addEventListener("dragend",(e)=>{
            e.target.classList.remove("drag-item");
            e.target.style.opacity="1";
            e.target.style.border="none"
            
           
           });
    })
    
   
    containers.forEach(container=>{
        container.addEventListener("dragenter",()=>{
           const dragged=document.querySelector(".drag-item");
           
         
           container.appendChild(dragged)
       });
       
   
       
    });

    trash.addEventListener("dragenter",()=>{

        
     const dragged=document.querySelector(".drag-item");
     if(dragged!=null){
            dragged.remove();
     }
    
        
        
      
    })
}
