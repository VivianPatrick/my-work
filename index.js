const input = document.querySelector("#value") //input el1
const instruction = document.querySelector(".input-instruction")//instruction element

function handler(e){

    const acceptedCharacters = [
        'a','b','c','d','e','f','g', 'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','_','1','2','3','4','5','6','7','8','9','0'    
    ,'Backspace'];
    console.log(e.key)

    if(!acceptedCharacters.includes(e.key)){
        e.preventDefault();
            imput.classList.add("error")
            instruction.getElementsByClassName.visibility = "visible";

    }
    else{
        input.classList.remove("error")

       instruction.getElementsByClassName.visibility = "hidden"
    }



}

input.addEventListener('keydown', handler)












// function printname(name,age){
//     console.log("hello", name,age)


// }

// printname("Vivian Nzekwe", 20, "Nigerian")
