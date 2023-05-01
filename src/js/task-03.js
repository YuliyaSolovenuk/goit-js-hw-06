const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');


const galleryItems = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-style-item"><img url = '${url}' alt = '${alt}' width="315" height="177"></li>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', galleryItems);
console.log(galleryList);

galleryList.classList.add('gallery-style');
console.log(galleryList);

// const item = document.querySelectorAll('li')
// console.log(item)
