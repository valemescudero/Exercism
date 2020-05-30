// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export class Robot { 
    constructor() {
    this.usedNames = [];
    this.nameAux = this.releaseNames();
    }
    randomizeLetter() {
        return alphabet[Math.floor(Math.random() * 26)];
    }
    randomizeNumber() {
        return Math.floor(Math.random() * 10).toString();
    }
    generateName() {
        let aux = [];
        for (let i=0; i<2 ; i++){
            aux.push(this.randomizeLetter());
        }
        for (let i=0; i<3 ; i++){
            aux.push(this.randomizeNumber());
        }
        return aux.join('');
    }    
    releaseNames() {        
        let aux = '';
        do {
           aux = this.generateName();
        } while (this.usedNames.indexOf(aux) !== -1)
        this.usedNames.push(aux);
        return aux;
    }
    reset() {
        this.nameAux = this.releaseNames();
    }
    get name() {
    return this.nameAux;
    }
}

Robot.releaseNames = () => { };
