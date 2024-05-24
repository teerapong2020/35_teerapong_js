const taskproduct = document.getElementById('product-name');
const taskprice = document.getElementById('price');
const taskimage = document.getElementById('url');
const createbtn = document.getElementById('create-product');
const tasklist = document.getElementById('task-list'); 
const selectallbtn = document.getElementById('select-all');   
const addToCartBtn = document.getElementById('add-to-cart'); 
const cartlist = document.getElementById('cart-list'); 
const calculatePriceBtn = document.getElementById('calculate-price'); 
const allprice = document.getElementById('totalprice');

let tasks = [];
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    createbtn.addEventListener('click', () => {
        const tasktext = taskproduct.value.trim();
        const tasknumber = taskprice.value.trim();
        const taskurl = taskimage.value.trim();

        if (tasktext && tasknumber && taskurl) {
            const task = {
                id: Date.now(),
                name: tasktext,
                price: parseFloat(tasknumber),
                imageUrl: taskurl,
            };

            tasks.push(task);
            renderTasks(tasks);
        }
    });

    selectallbtn.addEventListener('click', () => {
        const checkboxes = tasklist.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) { 
                checkbox.checked = true; 
            } else {
                checkbox.checked = false; 
            }     
    });
    });
    // 3.3 section add cart 
    addToCartBtn.addEventListener('click', () => {
        const selectedTasks = tasks.filter((task, index) => {
            const checkbox = tasklist.querySelectorAll('input[type="checkbox"]')[index];
            return checkbox.checked;
        });

        cart = selectedTasks;
        renderCart(cart);
        
         
    });
    // 3.3 section total price
    calculatePriceBtn.addEventListener('click', () => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    allprice.textContent = 'You pay to: $' + totalPrice.toFixed(2);
});
});

function renderTasks(taskforrender) {
    tasklist.innerHTML = ''; 
    taskforrender.forEach((task) => {
        const taskitem = document.createElement('li');
        taskitem.style.display = 'flex';
        taskitem.style.gap = '10rem';
        taskitem.style.margin = '50px';
        tasklist.appendChild(taskitem);

        const taskcheck = document.createElement('input');
        taskcheck.type = 'checkbox';
        taskcheck.className = 'product-checkbox';
        taskitem.appendChild(taskcheck);

        const taskbox = document.createElement('div');
        taskbox.style.background = 'rgb(203 213 225)';
        taskbox.style.display = 'flex';
        taskbox.style.gap = '10rem';
        taskitem.appendChild(taskbox);

        const tasktext = document.createElement('h4');
        tasktext.textContent = task.name;
        taskbox.appendChild(tasktext);

        const tasknumber = document.createElement('h4');
        tasknumber.textContent = '$' + task.price;
        taskbox.appendChild(tasknumber);

        const taskimage = document.createElement('img');
        taskimage.src = task.imageUrl;
        taskimage.style.maxWidth = '100px';
        taskbox.appendChild(taskimage);
    });
}

// render 3.3 add cart 
function renderCart(cartItems) {
    cartlist.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.style.display = 'flex';
        cartItem.style.gap = '10rem';
        cartItem.style.margin = '50px';
        cartlist.appendChild(cartItem);

        const cartbox = document.createElement('div');
        cartbox.style.background = 'rgb(203 213 225)';
        cartbox.style.display = 'flex';
        cartbox.style.gap = '10rem';
        cartItem.appendChild(cartbox);

        const cartText = document.createElement('h4');
        cartText.textContent = item.name;
        cartbox.appendChild(cartText);

        const cartPrice = document.createElement('h4');
        cartPrice.textContent = '$' + item.price;
        cartbox.appendChild(cartPrice);

        const cartImage = document.createElement('img');
        cartImage.src = item.imageUrl;
        cartImage.style.maxWidth = '100px';
        cartbox.appendChild(cartImage);
    });
}
