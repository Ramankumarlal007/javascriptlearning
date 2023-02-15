let laptop4 = {
    cpu: "i4",
    ram: 16,
    brand: "mac ultra",
  
    greet: function () {
      console.log(this.cpu);
    }
  };


let laptop3 = {
    cpu: "i3",
    ram: 16,
    brand: "apple studio",
  
    greet: function () {
      console.log(this.cpu);
    }
  };


let laptop2 = {
    cpu: "i7",
    ram: 16,
    brand: "apple mac pbook pro",
  
    greet: function () {
      console.log(this.cpu);
    }
  };

let laptop1 = {
  cpu: "i9",
  ram: 16,
  brand: "Dell vostro",

  greet: function () {
    console.log("this is good laptop");
  }
};
laptop4.greet();
laptop3.greet();
laptop1.greet();

