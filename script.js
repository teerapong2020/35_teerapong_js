document.addEventListener('DOMContentLoaded', () => {
    const taskproduct = document.getElementById('product-name');
    const taskprice = document.getElementById('price');
    const taskimage = document.getElementById('url');
    const createbtn = document.getElementById('create-product');
    const tasklist = document.getElementById('task-list');

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
                imageUrl: taskurl
            };

            tasks.push(task);
            renderTasks(tasks);

          
        }
    });

   
});
