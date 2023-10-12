alert("You can change the picture by clicking it!")
function changeBackgroundImg(){
    var element = document.getElementById("backgroundPic");
    if (element.style.backgroundImage.includes("https://tinyurl.com/3s5tcsrx")){
        element.style.backgroundImage = "url('https://tinyurl.com/4nv635ze')";
    } else {
        element.style.backgroundImage = "url('https://tinyurl.com/3s5tcsrx')";
    }
    console.log("click worked");
}

function askName(){
    var name;

    while(true){
        name = prompt("Your name:");
        if (name === null || name.trim() === "" ){
            alert("Please enter a valid name.")
        } else{
            document.write("Welcome ", name);
            break;
        }
    }
}

var button = document.getElementById("myButton");
button.addEventListener("click", button1Click);

function bottomClick(){
    var newUrl = "https://www.akc.org/dog-breeds/labrador-retriever/";
    window.location.href = newUrl
}
var button2= document.getElementById("bottomButton");
button2.addEventListener("click", bottomClick);