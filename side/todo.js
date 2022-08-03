let newtask = document.getElementById('newtask');
let add = document.getElementById('add');
let tasks = document.getElementById('tasks');
let donetasks = document.getElementById('donetasks');


add.addEventListener('click',function(){
    var span = document.createElement('span');
    span.innerHTML = newtask.value;
    tasks.appendChild(span);

    var deleteNutton = document.createElement('button');
    tasks.appendChild(deleteNutton);

    deleteNutton.addEventListener('click',function(){
        tasks.removeChild(span);
        tasks.removeChild(deleteNutton);
        donetasks.appendChild(span);
        
    })
})