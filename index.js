class Polygon{
    constructor (sideArray){
        this.sideArray = sideArray;
    }
    get countSides(){
        return this.sideArray.length
    }
    get perimeter(){
        return this.sideArray.reduce((a,b)=> {return a+b;})
    }
}
class Triangle extends Polygon{
    get isValid(){
        let a = this.sideArray[0];
        let b = this.sideArray[1];
        let c = this.sideArray[2];
        if (a+b <= c || a+c <= b || b+c <= a){
            return false;
        }
        else{
            return true;
        }
        

    }
}
class Square extends Polygon{
    get isValid(){
        if ((this.perimeter%4)===0){
            return true;
        }
        else{
            return false;
        }
    }
    get area(){
        return (this.perimeter/4)*(this.perimeter/4)
    }
}
triangle = new Triangle( [ 5, 7, 10 ])
console.log(triangle.isValid)