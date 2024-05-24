const taskproduct = document.getElementById('product-name');
const taskprice = document.getElementById('price');
const taskimage = document.getElementById('url');
const createbtn = document.getElementById('create-product');
const tasklist = document.getElementById('task-list'); 
const selectallbtn = document.getElementById('select-all');   // 3.2 connect btn select all 

document.addEventListener('DOMContentLoaded', () => {
    let tasks = [];

    createbtn.addEventListener('click', () => {
        const tasktext = taskproduct.value.trim();
        const tasknumber = taskprice.value.trim();
        const taskurl = taskimage.value.trim();

        if (tasktext && tasknumber && taskurl) {
            const task = {
                id: Date.now(),
                name: tasktext,
                price: tasknumber,
                imageUrl: taskurl,
            };

            tasks.push(task);
            renderTasks(tasks);
        }
    });
    // 3.2 select all 
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
