import Image1 from './images/map.png'


function location() {
    const div1 = document.createElement('div');
    div1.classList.add('contact');

    const h3 = document.createElement('h3');
    h3.textContent = "Our Location"

    const h4 = document.createElement('h4');
    h4.textContent = "277 Bedford Ave. Brooklyn NY, 11211"
    
    const h4II = document.createElement('h4');
    h4II.textContent = "Phone: (212) 945-1000"

    

    const myIcon = new Image();
    myIcon.src = Image1;
    myIcon.classList.add('mapPicture');

    div1.appendChild(h3);
    div1.appendChild(h4);
    div1.appendChild(h4II);
    div1.appendChild(myIcon);

    return document.body.appendChild(div1);
   
    
}

export default location;