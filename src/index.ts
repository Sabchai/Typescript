
interface vehicle {
    make: string; 
    model:string;
    year: number;
    start(): void; 
    
}
console.log("engine started");

 
class Car implements vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model; 
      this.year = year;
    }
  
    start(): void {
      console.log("engine started");
    }
  }
  const mycar= new Car ("Audi ", "A4", 2019);
  mycar.start()