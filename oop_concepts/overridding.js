class Father {
  addNumber() {
    let a = 20;
    let b = 30;
    console.log(a + b);
  }
}

class Son extends Father {
  // Overriding the addNumber method
  addNumber() {
    let a = 40;
    let b = 50;
    let c = 560;
    console.log(a + b + c);
  }
}

let FatherObj = new Father();
let SonObj = new Son();

FatherObj.addNumber();
SonObj.addNumber();
