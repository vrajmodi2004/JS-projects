var taskinput=document.getElementById("task")
const addbtn=document.getElementById("btn")
const tasklist=document.getElementById("tasklist")
const removeallbtn=document.getElementById("removeallbtn")

addbtn.addEventListener("click",addTask)

removeallbtn.addEventListener("click",function(){
    while(tasklist.firstChild)
    {
        tasklist.removeChild(tasklist.firstChild)
    }
})

function addTask(){
    const taskvalue=taskinput.value
    if(taskvalue!="")
    {
        //ensure no duplicate tasks are not there
        const tasks = Array.from(tasklist.querySelectorAll("li span")).map(
            (span) => span.textContent
        );

        if (tasks.includes(taskvalue)) {
            alert("Task already exists!");
            return;
        }


        //Adding a task inside a span element to allow changes in it later on
        const listitem=document.createElement('li') 
        const listitemvalue=document.createElement('span')
        listitemvalue.textContent=taskvalue
        listitem.appendChild(listitemvalue)

        //Adding a remove btn
        const removebtn=document.createElement('button')
        removebtn.textContent='REMOVE'
        removebtn.addEventListener('click',function(){
            tasklist.removeChild(listitem)
        })

        //Adding a checkbox 
        const checkbox=document.createElement('input')
        checkbox.type="checkbox"
        checkbox.addEventListener('change',function(){
            if(checkbox.checked)
            {
                listitem.style.backgroundColor="green"
                listitem.classList.toggle("completed")
            }
            else{
                listitem.style.backgroundColor="white"
                listitem.classList.toggle("completed")
            }
        })

        //Adding edit option
        const editbtn=document.createElement('button')
        editbtn.textContent='Edit'
        editbtn.addEventListener("click",function(){
            checkbox.disabled=true
            if (!listitem.querySelector("input[type='text']")) {
                const newtext = document.createElement("input");
                newtext.type = "text";

                const savebtn = document.createElement("button");
                savebtn.innerHTML = "Save";

                savebtn.addEventListener("click", function () {
                    checkbox.disabled=false
                    listitemvalue.textContent = newtext.value;
                    listitem.removeChild(newtext);
                    listitem.removeChild(savebtn);
                });

                listitem.appendChild(newtext);
                listitem.appendChild(savebtn);
            }
        })
        
        //Appending all the elements
        tasklist.appendChild(listitem)
        listitem.appendChild(removebtn)
        listitem.appendChild(editbtn)
        listitem.appendChild(checkbox)
        taskinput.value=""
        
    }
    else
    {
        alert("Enter any task")
    }
}