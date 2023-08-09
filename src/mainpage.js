import Icon from './images/pizza.jpeg';

function component() {
    const element = document.createElement('div');
    
  
    // Lodash, now imported by this script
    element.textContent = 'Hello Module';

    const myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(myIcon);
   
   
    return document.body.appendChild(element);
  }

  export default component;