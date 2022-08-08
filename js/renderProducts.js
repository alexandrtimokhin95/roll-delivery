class ProductListItem {
    constructor(id, title, itemsInBox, weight, price, imgSrc, parentSelector, ...classes) {
        this.id = id;
        this.title = title;
        this.itemsInBox = itemsInBox;
        this.weight = weight;
        this.price = price;
        this.imgSrc = imgSrc;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
    }

    render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
            this.element = 'col-md-6';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }
        element.innerHTML = `
            <div class="card mb-4" data-id="${this.id}">
                <img class="product-img" src="img/roll/${this.imgSrc}" alt="">
                <div class="card-body text-center">
                    <h4 class="item-title">${this.title}</h4>
                    <p><small data-items-in-box class="text-muted">${this.itemsInBox} шт.</small></p>
                    <div class="details-wrapper">
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter>1</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price__weight">${this.weight}г.</div>
                            <div class="price__currency">${this.price} ₽</div>
                        </div>
                    </div>
                    <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}

getProducts();

async function getProducts() {
    const response = await fetch('./js/products.json');
    const productsArray = await response.json();

    renderProducts(productsArray);
}

function renderProducts(array) {
    array.forEach(({id, title, itemsInBox, weight, price, imgSrc}) => {
        new ProductListItem(id, title, itemsInBox, weight, price, imgSrc, '#products-container', 'col-md-6').render();
    });
}



// const productsContainer = document.querySelector('#products-container');

// getProducts();

// async function getProducts() {
//     const response = await fetch('./js/products.json');
//     const productsArray = await response.json();

//     renderProducts(productsArray);
// }

// function renderProducts(array) {
//     array.forEach(item => {
//         const productHTML = `
//             <div class="col-md-6">
//                 <div class="card mb-4" data-id="${item.id}">
//                     <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
//                     <div class="card-body text-center">
//                         <h4 class="item-title">${item.title}</h4>
//                         <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>

//                         <div class="details-wrapper">
//                             <div class="items counter-wrapper">
//                                 <div class="items__control" data-action="minus">-</div>
//                                 <div class="items__current" data-counter>1</div>
//                                 <div class="items__control" data-action="plus">+</div>
//                             </div>

//                             <div class="price">
//                                 <div class="price__weight">${item.weight}г.</div>
//                                 <div class="price__currency">${item.price} ₽</div>
//                             </div>
//                         </div>

//                         <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

//                     </div>
//                 </div>
//             </div>
//         `;

//         productsContainer.insertAdjacentHTML('beforeend', productHTML);
//     });
// }