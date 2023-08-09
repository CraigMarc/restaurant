function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, now imported by this script
    element.textContent = 'Hello Module';

   
   
    return document.body.appendChild(element);
  }

  export default component;