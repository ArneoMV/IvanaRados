'use strict'

const images = document.getElementsByTagName("img");
const container = document.querySelector('.container');

let post = []
const imagesPost = [
    'https://dr.savee-cdn.com/things/6/1/947fc7825d592e073f3906.jpg',
    'https://dr.savee-cdn.com/things/6/0/ddba20ea875e5eba5e8856.jpg',
    'https://dr.savee-cdn.com/things/5/e/68f35e1404e45961765299.gif',
    'https://dr.savee-cdn.com/things/6/1/83d88d67b030d9aef082f8.jpg',
    'https://dr.savee-cdn.com/things/6/1/80259167b030d9aef046f9.jpg',
    'https://dr.savee-cdn.com/things/5/f/de5cc54d5cb418bb2bcaea.png',
    'https://dr.savee-cdn.com/things/6/1/6c578f1ff504a6334769b4.jpg',
    'https://dr.savee-cdn.com/things/6/1/76ebbcfd9b0f8e00cf35d8.jpg',
    'https://dr.savee-cdn.com/things/6/1/64711b0e69492ef09b7fd0.jpg'
]

// Pozovi slike 
let imageIndex = 0;
for(let i = 1; i <= 9; i++) {
    let item = {
        //id: i,
        image: imagesPost[imageIndex]
    }
    post.push(item);
    imageIndex++;
    if (imageIndex > imagesPost.length - 1) imageIndex = 0;
}


// Ubaci link u backgreound image
for (let i = 0; i < images.length; i++) {
    images[i].style.backgroundImage = `url(${post[i].image})`;
}

// Geeneriraj Grid
function generateMasonryGrid(columns, post) {
    container.innerHTML = '';
    let columnWrappers = [];
    let column = '';
    let columnPost = [];

    for(let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = [];
    }

    for(let i = 0; i < post.length; i++){
        column = i % columns;
        columnWrappers[`column${column}`].push(post[i]);
    }

    for(let i = 0; i < columns; i++){
        columnPost = columnWrappers[`column${i}`];
        let div = document.createElement('div');
        div.classList.add('column');

        columnPost.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;

            // columnPost.forEach(image => {
            //     let clonedSection = image.cloneNode(true);
            //     clonedSection.classList.add('clone')
            //     content.appendChild(clonedSection)
            // })

            let clonedSection = postDiv.cloneNode(true);
            clonedSection.classList.add('clone');
            

            postDiv.append(image);
            div.appendChild(postDiv);
            
            // columnPost.appendChild(clonedSection);
    
        });
        container.appendChild(div);
    }

}

window.onload = function() {
    //placeImage();
    generateMasonryGrid(3, post);
};
