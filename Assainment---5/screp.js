



 function loveIcon() {
    

        
const a = getElement("total-quntitysss").innerText;

console.log(a);

const currenQuantityq = Number (a) + 1;

getElement("total-quntitysss").innerText = currenQuantityq

      };
    




function getElement (id) {
    const element = document.getElementById(id)
    return element;
}


// const heart = document.getElementsByClassName("heart-btn")
// console.log(cartbtns);



// for(let heartNumber of heart) {
// heartNumbe.addEventListener("click", function(){


// // const quntity = getElement("total-quntity").innerText;

// // console.log(quntity);

// // const currenQuantity = Number (quntity) + 1;
// // getElement("total-quntity").innerText = currenQuantity






// // const quntity = getElement("total-quntity").innerText;

// // console.log(quntity);

// // const currenQuantity = Number (quntity) + 1;
// // getElement("total-quntity").innerText = currenQuantity

// const  heartIcon = heartNumbe.parentNode.parentNode

// console.log(heartIcon);







// })
// }


const cartbtns = document.getElementsByClassName("cart-btn")
console.log(cartbtns);


for (let cartButton of cartbtns) {
    cartButton.addEventListener("click", function(){
        // console.log("button clicked");


        







const  productTitle = cartButton.parentNode.parentNode.children[1].innerText

 




const productPrice = cartButton.parentNode.parentNode.children[3].innerText

const cartContainer = getElement("cart-container");

const newCart = document.createElement("div");
newCart.innerHTML =`


      <div class="bg-gray-100 rounded-xl  p-4">
                     
                    
                    <div class="">
                      <h2 class="font-bold">${productTitle}</h2>

                       <h2 class="text-gray-500">${productPrice}</h2>
                    </div>
                    
                    </div>


`





cartContainer.append(newCart)




const quntity = getElement("total-pricess").innerText;

console.log(quntity);

const currenQuantity = Number (quntity) - 20;

getElement("total-pricess").innerText = currenQuantity







document.getElementById("btn-clear").addEventListener("click", function(){
        const cartContainer = getElement("cart-container");
        cartContainer.innerText = "";
    })










// const totalPrice = getElement("total-price").innerText;


// const currentTotal =  Number (productPrice) + Number (totalPrice);

// getElement("total-price").innerText =currentTotal

// const cartContainer = getElement("cart-container");

// const newCart = document.createElement("div");
// newCart.innerHTML =`


//       <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                       <img class="h-10" src="${productImg }" alt="">
                    
//                     <div class="">
//                       <h2 class="font-bold">${productTitle}</h2>

//                        <h2 class="font-bold">${productPrice}</h2>
//                     </div>
                    
//                     </div>


// `





// cartContainer.append(newCart)


// const quntity = getElement("total-quntity").innerText;

// console.log(quntity);

// const currenQuantity = Number (quntity) + 1;
// getElement("total-quntity").innerText = currenQuantity




    })
    
     document.getElementById("btn-clear").addEventListener("click", function(){
        const cartContainer = getElement("cart-container");
         cartContainer.innerText = "";
                            
        
        
        





        //  ...........................
        
        })

    

        
    
    }


    





    











