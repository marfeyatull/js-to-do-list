const inputBox = document.getElementById("input-box");
const listContainer=document.getElementBy("list-Container");

function addTask(){
    if(inputBox.value==="") {
        alert("Your task is empty!");
    } else{
        let li=document.createElement("li");
        li. innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    storeData();
}
listContainer.addEventListenar(
    "click",
    function(e){
        if(e.target.tagName ==="LI") {
            e.target.classlist.toggle("checked");
            storeData();
        }
    },
    false
);
function storeData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML= localStorage.getItem("data");
}
showData();