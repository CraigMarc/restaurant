import Icon1 from './images/pizza1.jpeg'


function menu() {
    const div1 = document.createElement('div');
    div1.classList.add('menu');

    const h3 = document.createElement('h3');
    h3.textContent = "Menu"

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

/*menu divs*/
    const menu1 = document.createElement('div');
    menu1.classList.add('menuItem');

    const menu2 = document.createElement('div');
    menu2.classList.add('menuItem');

    const menu3 = document.createElement('div');
    menu3.classList.add('menuItem');

    const menu4 = document.createElement('div');
    menu4.classList.add('menuItem');
/*add images*/
    const pizza1 = new Image();
    pizza1.src = Icon1;
    pizza1.classList.add('imageHome');


    div1.appendChild(menuContainer);
    menuContainer.appendChild(menu1);
    menuContainer.appendChild(menu2);
    menuContainer.appendChild(menu3);
    menuContainer.appendChild(menu4);
   
    menu1.appendChild(pizza1)

    return document.body.appendChild(div1);
/*
    const div2 = document.createElement('div');
    const p1 = document.createElement('p');
    p1.textContent = '"The best pizza I have ever eaten" Pisquales Customer';
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('imageHome');

    const div3 = document.createElement('div')
    div3.classList.add('hours');

    const h3 = document.createElement('h3')
    h3.textContent = "Hours"

    const hours1 = document.createElement('h4')
    hours1.textContent = "Sunday: 11am - 8pm"

    const hours2 = document.createElement('h4')
    hours2.textContent = "Monday: 11am - 8pm"

    const hours3 = document.createElement('h4')
    hours3.textContent = "Tuesday: Closed"

    const hours4 = document.createElement('h4')
    hours4.textContent = "Wednesday: 11am - 8pm"

    const hours5 = document.createElement('h4')
    hours5.textContent = "Thursday: 11am - 8pm"

    const hours6 = document.createElement('h4')
    hours6.textContent = "Friday: 1pm - 10pm"

    const hours7 = document.createElement('h4')
    hours7.textContent = "Saturday: 1pm - 10pm"


    div1.appendChild(div2);
    div1.appendChild(div3);
    div2.appendChild(myIcon)
    div2.appendChild(p1)
    div3.appendChild(h3)
    div3.appendChild(hours1)
    div3.appendChild(hours2)
    div3.appendChild(hours3)
    div3.appendChild(hours4)
    div3.appendChild(hours5)
    div3.appendChild(hours6)
    div3.appendChild(hours7)



    return document.body.appendChild(div1);
*/
}

export default menu;