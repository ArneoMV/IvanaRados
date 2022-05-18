let demo = document.getElementById("demo");
let img = document.createElement("img");

const post = []
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

img.src ="images/1.jpeg"
//demo.appendChild(img);

function placeImage(x)
{
    demo.innerHTML = ""; // clear images
    let imageIndex = 0;
    
    for (let counter = 1; counter <= 5; counter++) {
        var image=document.createElement("img");
        let item = {
            image: imagesPost[imageIndex]
        }
        post.push(item);
        imageIndex++;
        if (imageIndex > imagesPost.length - 1) imageIndex = 0;
        image.src="images/"+counter+".jpeg";
        demo.appendChild(image);

        console.log(post)
    }
}

window.onload = function() {
    placeImage();
};