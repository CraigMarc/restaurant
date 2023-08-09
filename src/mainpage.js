import Icon from './images/pizza.jpeg';

function component() {
    const element = document.createElement('div');
    
    element.textContent = 'Hello Module';

       

    const element2 = document.createElement('div');
    

    const myIcon = new Image();
    myIcon.src = Icon;
  
    element2.appendChild(myIcon);
    myIcon.classList.add('pic1');
   document.body.appendChild(element2);
   
    return document.body.appendChild(element);

  }

  export default component;