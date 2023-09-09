/** Creation de l'objet Produit **/
function Product (image,description,price){
this.image = image,
this.description = description,
this.price = price
   
}    

const  product1 = new Product('assets/img/cosmetic-huile.jpg','Huile pour le massage du corps',45)
const  product2 = new Product('assets/img/cosmetic-lait.jpg','Lait pour le corps ',18)
const  product3 = new Product('assets/img/cosmetic-parfum-dior.jpg','parfum dior intense',189.99)
const  product4 = new Product('assets/img/cosmetic-parfum.jpg','parfum guerlin voyage',175)
const  product5 = new Product('assets/img/cosmetic-rouge-a-levre.jpg','Rouge à lèvre intense beauté',19.99)
const  product6 = new Product('assets/img/cosmetic-vernis.jpg','Les vernis de Meybeling',23.89)
const  product7 = new Product('assets/img/cosmetic-savon.jpg','Les savons pour l\'entretien de la peau',23.89)
const  product8 = new Product('assets/img/cosmetic-pinceaux.jpg','Les pinceaux pour la mise en beauté',223.99)

let products =[]
    
products.push(product1,product2,product3,product4,product5,product6,product7,product8);
console.log(products);

function addProduct() {
    let listOfProduct = '';
    products.forEach(prod=>{
        listOfProduct += `
        <tr class="text-center">
           <td><img src = ${prod.image} class = " img-fluid img-thumbnail w-50"></td>
           <td class = "w-25 align-middle">${prod.description}</td>
           <td class = "w-25 align-middle">${prod.price} €</td>
           <td class = "w-25 align-middle"><button class="btn btn-info text-white">View</button></td>
           `
    }) 
    document.getElementById('productList').innerHTML = listOfProduct;
}

