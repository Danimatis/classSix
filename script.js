const list = document.getElementById("list-of-numbers");
let htmlNumberList = "<ul>";
function getEvenNumbers() {
  for (let i = 10; i < 200; i += 2) {
    htmlNumberList += `<li> ${i} </li>`;
  }
  htmlNumberList += "</ul>";
  list.innerHTML += htmlNumberList;
  console.log(list.innerHTML);
}
const showKeys = document.getElementById("keys");
const obj = {
  name: "daniel",
  age: 23,
  email: "d@notmyrealmail.com",
  phone: "058666666:smiling_imp:",
  address: {
    city: "tlv",
    street: "not found",
    number: 666,
  },
};
let htmlKeysList = "<ul>";
function displayKeysOfObj() {
  for (const key in obj) {
    htmlKeysList += `<li> ${key} => ${obj[key]}`;
    if (key == obj.address) return;
  }
  displayValuesOfAddress();
}
let htmlAddressList = "<ul>";
function displayValuesOfAddress() {
  for (const value in obj.address) {
    htmlAddressList += `<li> ${value} => ${obj.address[value]}`;
  }
  htmlKeysList += htmlAddressList;
  showKeys.innerHTML += htmlKeysList;
}
const productList = [
  {
    title: "shampoo",
    price: 23.4,
    category: "shower",
    barcode: "4043945",
  },
  {
    title: "cornflakes",
    price: 60,
    category: "food",
    barcode: "A-5455",
  },
  {
    title: "Cola",
    price: 80.5,
    category: "drinks",
    barcode: "B-986453",
  },
  {
    title: "Bamba red",
    price: 90.3,
    category: "food",
    barcode: "C-68645",
  },
];
let bootstrap = ``;
const bootstrapProducts = document.getElementById("products");
function displayProductsInCard() {
  for (const products of productList) {
    console.log(products);
    for (const product in products) {
      console.log(product);
      console.log(products[product]);
      for (const pro in product) {
        // console.log(product[pro]);
      }
    }
  }

  bootstrapProducts.innerHTML = products;
}
