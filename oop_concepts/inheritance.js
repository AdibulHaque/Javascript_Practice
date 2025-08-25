class Father {
  addNumber() {
    let a = 20;
    let b = 30;
    console.log(a + b);
  }
}

class Son extends Father {}

let FatherObj = new Father();
let SonObj = new Son();

// FatherObj.addNumber();
SonObj.addNumber();
