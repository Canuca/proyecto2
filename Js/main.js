const menuItems = document.querySelectorAll ('.menu-item');

menuItems.forEach(function(item) {
   item.addEventListener('click', function(e){
        const activeItem = document.querySelector ('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');
   })
});

const reproductorBtn = document.querySelector('#activar_video');
    reproductorBtn.addEventListener('click', function(){
        const verVideo = document.querySelector('iframe');
        verVideo.style.display = 'unset';
        const cerrarVideo = document.querySelector('.cerrar-video');
        cerrarVideo.style.display = 'unset';
        const fondoVideo = document.querySelector('.fondo_video');
        fondoVideo.style.display = 'unset';
    });


const cerrarBoton1 = document.querySelector('.btn1');

cerrarBoton1.addEventListener('click', function(){
    const cerrarLista1 = document.querySelector('.menu-lista');
    cerrarLista1.style.display ='none';

});

const cerrarBoton2 = document.querySelector('.btn2');

cerrarBoton2.addEventListener('click', function(){
    const cerrarLista2 = document.querySelector('.menu-lista');
    cerrarLista2.style.display ='none';
});

const activarLista = document.querySelector('.listabtn');

activarLista.addEventListener('click', function(){
    const abrirLista = document.querySelector('.menu-lista');
    abrirLista.style.display = 'block';
})





let linkRelacionados = [
    {
        nombre:'Universidad Central de Venezuela',
        img:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Logo_Universidad_Central_de_Venezuela.svg',
        url:'http://www.ucv.ve/organizacion/facultades/facultad-de-agronomia-ucv.html',
    },
    {
        nombre:'Fundacion Instituto de Ingenieria',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPo264W0xFe9qYeBqmao9ZaB9O0z2rt1O19f7IJqn15fzyBdbkutDCPN7V4VFaPqllqU&usqp=CAU',
        url:'https://www.facebook.com/Fiiidt/',
    },
    {
        nombre:'Banco ProCredit Ecuador',
        img:'https://play-lh.googleusercontent.com/d14XLK4DUWRaFPan9LHyH7HTaBXv9bAVP20SrWh2xr1fYF0qd3Ozf9MJCTjdPUihX-s',
        url:'https://bancoprocredit.com.ec/',
    },
    {
        nombre:'Rotaract',
        img:'https://upload.wikimedia.org/wikipedia/commons/3/31/Logo_de_Rotaract.png',
        url:'https://www.facebook.com/Rotaractmaracay/?locale=es_LA',
    },
    {
        nombre:'Techo',
        img:'https://actividades.techo.org/img/techo_logo_big.png',
        url:'https://www.facebook.com/TECHOecuador/',
    },
];

function crearHTMLLinksRelacionados(link){
    let nombreLink = document.createElement('h4');
    nombreLink.innerText = link.nombre;

    let imagenLink = document.createElement('img');
    imagenLink.src = link.img;

    let listLink = document.createElement('li');
    listLink.appendChild(nombreLink);
    listLink.appendChild(imagenLink);

    return listLink;
};

const listaLinks = document.querySelector('#links_relacionados');

linkRelacionados.forEach(function(link){
    let linkListRelacionado = crearHTMLLinksRelacionados(link);
    listaLinks.appendChild(linkListRelacionado);
});