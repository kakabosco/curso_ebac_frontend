function Clothes(size, color, price) {
    this.size = size;
    this.color = color;

    let _price = price;

    this.getPrice = function () {
        return _price;
    };

    this.setPrice = function (newPrice) {
        if (typeof newPrice === "number" && newPrice > 0) {
            _price = newPrice;
        }
    };
}

function Shirt(size, color, price) {
    Clothes.call(this, size, color, price);
}

function Pants(size, color, price) {
    Clothes.call(this, size, color, price);
}

function Shoes(size, color, price) {
    Clothes.call(this, size, color, price);
}

const blackShirt = new Shirt("M", "black");
blackShirt.setPrice(60);
console.log(
    `Black Shirt - Size: ${blackShirt.size}, Color: ${blackShirt.color}, Price: ${blackShirt.getPrice()}`
);

const jeansPants = new Pants("42", "jeans");
jeansPants.setPrice(140);
console.log(
    `Jeans Pants - Size: ${jeansPants.size}, Color: ${jeansPants.color}, Price: ${jeansPants.getPrice()}`
);

const whiteShoes = new Shoes("41", "white");
whiteShoes.setPrice(250);
console.log(
    `White Shoes - Size: ${whiteShoes.size}, Color: ${whiteShoes.color}, Price: ${whiteShoes.getPrice()}`
);
