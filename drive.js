wordList = new LinkedList();
listAlphabet = new LinkedList();
listPush = new LinkedList();
noInWord = new LinkedList();
visualList = new LinkedList();
var tried = 0;
var faild = 0;
var hits = 0;
r = new RandomManager();

var dificultad = 0.50;


function setAlphabetToLinkedList(){
    alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for(var i = 0; i < alphabet.length; i++){
        listAlphabet.push(alphabet[i]);
    }  
}

function getElementsFromLinkedList(){
    document.getElementById("alphabet").innerHTML ="";
    for( i = 0; i < listAlphabet.length() ; i++){
        document.getElementById("alphabet").innerHTML  += 
        `<div class="col-1">
            <div id=${i} onclick="push(${i})"  class="letter-of-alphabet mb-2 "><h4 class="text-alphabet pt-2">${listAlphabet.getElement(i)}<h4></div>
        </div>`;
    }  
}

function jugar(){
    

    word = (document.getElementById("palabra").value).toUpperCase();
    unknown = "";
    for(var i = 0; i < word.length; i++){
        wordList.push(word[i]);
        visualList.push("__");
        unknown += "____  "
    }
    document.getElementById("form-principal").innerHTML= 
    `
    <div class="row">
        <div class="col-12"><h5 class="mt-5">Palabra con ${wordList.length()} letras.</h5></div>
    </div>
    `;
    document.getElementById("form-principal").innerHTML+= ` 

    <div class="row" id="contenedor-juego">
        <div class="col-12"><h4>${unknown}</h4></div>
    </div>
    `

}


function push(i){
    tried ++;
    letter = listAlphabet.pop(i);
    if(wordList.bool_getElement(letter)){

        for(var i = 0; i < wordList.length(); i++){
            if(wordList.getElement(i) == letter){
                listPush.push(letter);
                visualList.replace(i, letter);
                hits ++;
    
            }
        }
        getElementsFromLinkedList();
        getSure();
        return true;
    }
    
    if(faild == Math.floor(wordList.length()*dificultad)){
        $('#resultado').modal('show');
        document.getElementById("txt-fin").innerHTML = 
        `
        <div class="col-12">
            <h1>Lo siento, has perdido</h1>
        </div>
        `
    }
    if(hits == visualList.length()){
        $('#resultado').modal('show');
        document.getElementById("txt-fin").innerHTML = 
        `
        <div class="col-12">
            <h1>¡Felicidades, has ganado!</h1>
        </div>
        `
    }

    noInWord.push(letter);
    getElementsFromLinkedList();
    faild ++;
    getFail();
    return false;

}

function getSure(){
    
    content = "";
    for(var i = 0; i < listPush.length(); i++ ){
        content += 
        `
        <div class="col-1 ml-3">
            <div id=sure-${i}  class="letter-of-alphabet-sure mb-2 ">
                <h4 class="text-alphabet pt-2">${listPush.getElement(i)}<h4>
            </div>
        </div>
        `
    }

    document.getElementById("sure").innerHTML = content;
    updateText();
}

function getFail(){
    content = "";
    for(var i = 0; i < noInWord.length(); i++){
        content += 
        `
        <div class="col-1 ml-3">
            <div id=sure-${i}  class="letter-of-alphabet-fail mb-2 ">
            <h4 class="text-alphabet pt-2">${noInWord.getElement(i)}<h4>
            </div>
            </div>
        `
    }
    document.getElementById("fail").innerHTML = content;
}

function updateText(){
    unknow= "";
    document.getElementById("form-principal").innerHTML= ""; 
    for(var i = 0; i < visualList.length(); i++){
        unknow += `${visualList.getElement(i)}`
        unknow += " ";

    }
    document.getElementById("form-principal").innerHTML+= ` 

    <div class="row" id="contenedor-juego">
        <div class="col-12"><h4>${unknow}</h4></div>
    </div>
    `
}


//addRandomToLinkedList();
setAlphabetToLinkedList();
getElementsFromLinkedList();
