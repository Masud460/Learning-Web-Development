const imgContainer = document.querySelector('#image_container');
const urlAPI = 'https://picsum.photos/v2/list?page=2&limit=100';


const getPictures = () => {
    fetch(urlAPI).then(data => data.json()).then(items => {
        items.forEach(function (photoObject) {
            const newContainer = document.createElement('div');
            newContainer.classList.add('image_container_item');

            const newImg = document.createElement('img');
            newImg.src = photoObject.download_url;
            newContainer.appendChild(newImg);

            const newAuthor = document.createElement('p');
            newAuthor.textContent = photoObject.author;
            newContainer.appendChild(newAuthor);

            imgContainer.appendChild(newContainer);
        })
    })
}
getPictures()