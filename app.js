//Improvisação ao ponto de ser nojento
const form = document.querySelector("form");
const textBox = document.querySelector("#textbox");
const advice = document.querySelector("#advice");
const list = document.querySelector("#list");

//simbolos especiais reconhecidos pelo programa
const symbols = ["!", "@", "#", "$", "%", "&", "*", ".",",", ":", ";", "/", "?", "~", "^", "[", "]", "-", "_", "=", "+", "{", "}", "|"];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //Deus me perdoe por esta atrocidade

//função que checa a quantidade de letras e tipos
// de caracteres usados na senha do usuario
function passRules(pass) { //parametro recebe o valor da variavel password
    const charNum = pass.length; //variavel recebe a quantidade de caracteres contidos na senha do usuario

    //conta todas as instancias de simbolos e numeros no input e aumenta seu contador
    let symCount = 0;
    let numCount = 0;

    for(let char of pass){
        if (symbols.includes(char)) symCount++;
        if (nums.includes(char)) numCount++;
    }
    
    //logica de definição de senha
    //se a senha conter a quantidade e tipos corretos de caracteres, o DOM é mudado de acordo
    if(charNum === 0){
        return 0;
    }
    else if (charNum <= 8){
        return "Weak Password";
    }
    else if (charNum >= 9 && charNum <= 13){
        //se a senha passada pelo usuario conter pelo menos um caracter do array symbols e um do nums retornar "good password"
        if(symCount >= 1 && numCount >= 1){
            return "Good Password";
        }
        else{
            return "Weak Password";
        }
    }
    else{
        if(symCount >= 2 && numCount >= 2){
            return "Strong Password";
        }
        else if(symCount >= 1 && numCount >= 1){
            return "Good Password";
        }
        else{
            return "Weak Password";
        }
    }
}

//Atualiza a pagina automaticamente conforme o input é digitado
textBox.addEventListener("input", () => {
    list.innerHTML="";
    let password = textBox.value.trim(); //recebe o valor passado pelo usuario na caixa de texto

    //console.log("Info sent !");
    //console.log(password);

    const result = passRules(password); //define o parametro da função passRules como o valor da variavel password
    advice.textContent = result; //define que o texto do h2 advice seja o resulçtado da função passRules
    advice.style.fontWeight = "400";
    const listItem = document.createElement("li");
    const listItem2 = document.createElement("li");

    const itemDesc1 = document.createTextNode("Use more numbers");
    const itemDesc2 = document.createTextNode("Use more symbols");

    //caso o resultado da função for weak password, criar um objeto de lista com o seguinte texto
    if(result === "Weak Password"){
        advice.style.color = `rgb(219, 32, 32)`;
        advice.style.backgroundColor = `rgb(255, 187, 187)`;

        listItem.appendChild(itemDesc1);
        listItem2.appendChild(itemDesc2);
        list.append(listItem);
        list.append(listItem2);
    }
    else if(result === "Good Password"){
        advice.style.color = `rgb(185, 167, 0)`;
        advice.style.backgroundColor = `rgb(250, 255, 187)`;
    }
    else if (result === "Strong Password"){
        advice.style.color = `rgb(0, 196, 0)`;
        advice.style.backgroundColor = `rgb(187, 255, 191)`;
    }
    else{
        advice.innerHTML = "";
        advice.style.backgroundColor = null;
    }
});

