function header() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Pisquales Pizza';

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('buttonContainer');
   
    const headerDiv1 = document.createElement('div');
    headerDiv1.textContent = 'Home';
    headerDiv1.classList.add('button1');
   

    const headerDiv2 = document.createElement('div');
    headerDiv2.textContent = 'Menu';
    headerDiv2.classList.add('button3');

    const headerDiv3 = document.createElement('div');
    headerDiv3.textContent = 'Location';
    headerDiv3.classList.add('button3');
    
    


    header.appendChild(h1);
    header.appendChild(headerContainer);
    headerContainer.appendChild(headerDiv1);
    headerContainer.appendChild(headerDiv2);
    headerContainer.appendChild(headerDiv3);

   
    return document.body.appendChild(header);

  }

  export default header;