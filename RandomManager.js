function RandomManager (){
    this.random = intRandom;
}

    function intRandom(max = 101,min = 0){
        return Math.floor((Math.random()*(max-min)+min));
    }