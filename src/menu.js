import Image1 from './images/pizza1.jpeg'
import Image2 from './images/pizza2.jpeg'
import Image3 from './images/pizza3.jpeg'
import Image4 from './images/pizza4.jpeg'


function menu() {
    const div1 = document.createElement('div');
    div1.classList.add('menu');

    const h3 = document.createElement('h3');
    h3.textContent = "Menu"

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    /*menu divs*/
    /*
        const menu1 = document.createElement('div');
        menu1.classList.add('menuItem');
    
        const menu2 = document.createElement('div');
        menu2.classList.add('menuItem');
    
        const menu3 = document.createElement('div');
        menu3.classList.add('menuItem');
    
        const menu4 = document.createElement('div');
        menu4.classList.add('menuItem');*/
    /*add images*/
    /*
        const pizza1 = new Image();
        pizza1.src = Image1;
        pizza1.classList.add('imageHome');*/

    function createMenuItem(menuText, Imagefile, pizzaText,) {
        /*menu div*/


        const menu1 = document.createElement('div');
        menu1.classList.add('menuItem');
        /*menu pic*/
        const pizza1 = new Image();
        pizza1.src = Imagefile;
        pizza1.classList.add('menuPictures');
        /*menu title*/
        const menuTitle = document.createElement('h4');
        menuTitle.textContent = menuText
        /*menu descr*/
        const menuDescr = document.createElement('p');
        menuDescr.textContent = pizzaText

        /*append elements*/
        menuContainer.appendChild(menu1);
        menu1.appendChild(pizza1)
        menu1.appendChild(menuTitle)
        menu1.appendChild(menuDescr)


    }
    createMenuItem('Milano', Image1, 'Artichokes, fresh garlic, fresh mozzarella, fresh basil, ricotta cheese & extra virgin olive oil')
    createMenuItem('San Danielle', Image2, 'Imported prosciutto, fresh arugula, fresh basil, san marzano tomatoes, fresh mozzarella & extra virgin olive oil')
    createMenuItem('Soppressata Toscana', Image2, 'Hot soppressata, grana padana, san marzano tomatoes, cherry tomatoes, fresh mozzarella, fresh basil & extra virgin olive oil')
    createMenuItem('Capri', Image2, 'Grilled shrimp, topped with scampi sauce, fresh mozzarella & parsley')

    div1.appendChild(h3);
    div1.appendChild(menuContainer);

    /*
    menuContainer.appendChild(menu1);
    menuContainer.appendChild(menu2);
    menuContainer.appendChild(menu3);
    menuContainer.appendChild(menu4);
   
    menu1.appendChild(pizza1)*/



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