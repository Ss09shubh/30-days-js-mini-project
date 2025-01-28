function saveText(){
    const textInput = document.getElementById("textInput").value;

    localStorage.setItem('saveText',textInput)
    document.getElementById("textInput").value = ""
}

function retrievText(){
    const saveText = localStorage.getItem("saveText");

    if(saveText){
        document.getElementById("output").textContent = saveText;
    }else{
        document.getElementById("output").textContent = "No saved Text found";
    }
}