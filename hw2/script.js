var memories = [{
    val: 64,
    price: 300,
  },
  {
    val: 128,
    price: 500,
  },
  {
    val: 256,
    price: 700,
  }
];

var colors = [{
    name: 'silver',
    img: 'silver.jpg',
    price: 0
  },
  {
    name: 'black',
    img: 'black.jpg',
    price: 10
  },
  {
    name: 'pink',
    img: 'pink.jpg',
    price: 20
  }
];

var memory, color;
var chosenMemory, chosenColor;
var price = 0;

memory: while (true) {
  memory = prompt('Memory?');
  if (memory === null) {
    break;
  }
  for (var i = 0; i < memories.length; i++) {
    if (memories[i].val === +memory) {
      chosenMemory = memories[i];
      break memory;
    }
  }
}

color: while (chosenMemory) {
  color = prompt('Color?');
  if (color === null) {
    break;
  }
  for (var i = 0; i < colors.length; i++) {
    if (colors[i].name === color) {
      chosenColor = colors[i];
      break color;
    }
  }
}var price = chosenMemory.price + chosenColor.price;

document.write('<h1>Price: ' + price + '$</h1>');
document.write('<img src="../img/' + chosenColor.img + '">');