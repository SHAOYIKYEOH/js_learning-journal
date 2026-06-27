const toDoList = [{name:'learn coding', dueDate:'2026-06-24'},
    {name:'learn bayesian', dueDate:'2026-06-24'}];
    
renderToDoList();
function renderToDoList(){ //generating html. instead of writing it we loop it through array
    let toDolistHtml = '';

    for(let i = 0; i< toDoList.length; i++){
        let toDoObject = toDoList[i];
        let name = toDoObject.name;
        let dueDate = toDoObject.dueDate;
        let html = `<p>${name}${dueDate}<button onclick = "toDoList.splice(${i},1);
                    renderToDoList();">Delete</button></p>`;
        toDolistHtml += html;
    }
    console.log(toDolistHtml);

    document.querySelector('.js-toDo-list')
        .innerHTML = toDolistHtml;
}    

function addToDo(){
    const inputElement = document.querySelector('.input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.dueDate-input');
    const dueDate = dateInputElement.value;


    toDoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate}); // we can also just {name, dueDate}, since property and variable name are the same
    console.log(toDoList);
    
    inputElement.value = ''; // 写:把输入框清空
    renderToDoList();
}
