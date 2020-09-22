interface Jersey {
    playerName : string,
    playerNumber : number,
    primaryColor : string,
    secondaryColor? : string
    sponsorLogo? : string,
    size : Size 
};
enum Size {
    xs,s , m , l, xl, xxl,
}

class PlayerJersey implements Jersey {
    playerName: string;
    playerNumber: number;
    primaryColor: string;
    size: Size;

    constructor(jersey : Jersey) {
        this.playerName = jersey.playerName;
        this.playerNumber = jersey.playerNumber;
        this.primaryColor = jersey.primaryColor;
        this.size = jersey.size;
    }
}

interface isRetiredFunction{
    (jersey : Jersey): boolean;
}
let playerOne : Jersey = {
    playerName : "Sami",
    playerNumber : 54,
    primaryColor : "Blue",
    size : Size.l,
}

let newJersey = new PlayerJersey(playerOne);

console.log(newJersey);
console.log(playerOne.playerName);

let retiredNumbers : number[] = [2,3,54];
let retired : isRetiredFunction;
retired =function isNumberRetired(jersey: Jersey): boolean{
    return retiredNumbers.includes(jersey.playerNumber);
}
console.log(retired);




