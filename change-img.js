
let img1Array = document.querySelectorAll('.imag');


const img2Array = [{
    alt: 'chicago',
    src: 'images/productos/chicago.webp',
    srcOver : 'images/productos/chicago 2.webp'
},
{
    alt: 'fuckingcap',
    src: 'images/productos/fucking awesome cap.webp',
    srcOver: 'images/productos/fucking cap 2.webp'
},
{
    alt: 'jordan travis',
    src: 'images/productos/Jordan x Travis t shirt.webp',
    srcOver: 'images/productos/jordan travis 2.webp'
},
{
    alt: 'pata jeans',
    src: 'images/productos/tommy patta jeans .webp',
    srcOver: 'images/productos/patta jeans 2.webp'
},
{
    alt: 'patta polo',
    src: 'images/productos/tommy patta polo.webp',
    srcOver: 'images/productos/patta polo 2.webp'
},
{
    alt: 'stussy cap',
    src: 'images/productos/stussy cap blue.webp',
    srcOver: 'images/productos/stussy cap 2.webp'
},
{
    alt: 'stussy hoodie',
    src: 'images/productos/stussy hoodie black.webp',
    srcOver: 'images/productos/stussy hoodie 2.webp'
},
{
    alt: 'vans',
    src: 'images/productos/vans old school.webp',
    srcOver: 'images/productos/vans 2.webp'
}];

function recorrerArray(array) {
    
    array.forEach(element1 => {
       img2Array.forEach(element2 => {
        if (element1.alt == element2.alt) {
            element1.addEventListener('mouseover',cambiarImg)
            element1.addEventListener('mouseout',volverImg)

            function cambiarImg() {
                element1.src = element2.srcOver
            }
            function volverImg() {
                element1.src = element2.src
            }

            
        }
       })
        
    });
    
}



recorrerArray(img1Array);











