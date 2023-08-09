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

   


    return document.body.appendChild(div1);
   
    
}

export default menu;