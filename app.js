
alert("You can change the picture by clicking it!")

var button2= document.getElementById("bottomButton");
button2.addEventListener("click", bottomClick);

function changeBackgroundImg(){
    var element = document.getElementById("backgroundPic");
    if (element.style.backgroundImage.includes("https://tinyurl.com/3s5tcsrx")){
        element.style.backgroundImage = "url('https://tinyurl.com/4nv635ze')";
    } else {
        element.style.backgroundImage = "url('https://tinyurl.com/3s5tcsrx')";
    }
    
}

function populateImages(number){
    const imageContainer= document.getElementById("imageContainer");
    for (let index = 0; index < number; index++) {
        const image = document.createElement("img");
        image.src = "images/champpic2.jpg"
        image.alt = "a picture of a dog"
        imageContainer.appendChild(image)
        
    }
}
function bottomClick(){
    var userAnswer = prompt("How many do you want? 1-6")
    
    var userNumber = parseInt(userAnswer)
    
    if (!isNaN(userNumber) && userNumber >=1 && userNumber <=6){
        console.log(userNumber)
        populateImages(userNumber)
        return userNumber;
    } else {
        alert("Please enter a valid number")
    }
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


