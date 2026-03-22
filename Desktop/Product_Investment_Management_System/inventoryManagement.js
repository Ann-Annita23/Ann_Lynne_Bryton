//Array of Products
const products = [ "Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct(products){
    console.log(products)
}

logFirstProduct(products);// call to action function

//Adding products
function addProduct(products){
    products.push("Keyboard")
    console.log(products)
}
addProduct(products);

//updating
function updateProductName(products){
    products[0] = "Traditional Computer"
    console.log(products)
}
updateProductName(products)

// Removing an item in the array
function removeProduct(){
    products.pop()
    console.log(products)
}
removeProduct(products)