import { Todo } from "../classes";
import { todolist } from "../index";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml= (todo) =>{
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed': ''}" data-id="${todo.id}">
        <div class="view">
             <input class= "toggle" type="checkbox" ${ (todo.completado) ? 'checked': ''}>
             <label>${todo.tarea}</label>
             <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a todoMVC template">
    </li> 
    `;
    
    
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

txtInput.addEventListener('Keyup'), (evento)=>{
    //keycode 13 es un enter, se valida que no este vacio
    if(evento.keyCode===13 && txtInput.value.length>0){
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        txtInput.value='';
    }


divTodoList.addEventListener('click', (evento)=>{

    const nombreElemento = evento.target.localName;
    const todoElementos = evento.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemto.includes('input')){
        todoList.marcarCompleto(todoId);
        todoElementos.classList.toggle('completed');
    }
    else if (nombreElemento.includes('input')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento); //lo borra de HTML
    }

btnBorrar.addEventListener('click', ()=>{

    todolist.eliminarCompletados();
    for (lef i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];
        if(elemento.classList.constains('completed')){
            divTodoList.removeChild(elemento);
        }
        
    }

ulFiltros.addEventListener('click', (evento)=>{

    const filtro = evento.target.text;
    if(!filtro){return;}

    anchorFiltros.forEach(elem=>elem.classList.remove('selected'));
    evento.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        // el hidden viene del css
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
           
        switch (filtro){
            case 'pendientes':
                if(!completado){
                     elemento.classList.add('hidden');
                }
            break;
        }
    }      
      
});
