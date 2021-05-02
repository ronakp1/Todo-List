import {createOwnElement} from './domCreation';

const navHeader = document.querySelector('.nav-header');

const renderHeader = () => {
   // const header1 = createOwnElement('div', 'header', null);
    //navHeader.appendChild(header1);
    const ToDoHeader = createOwnElement('h1', null, 'Todo List');
    navHeader.appendChild(ToDoHeader);
}

export {renderHeader}