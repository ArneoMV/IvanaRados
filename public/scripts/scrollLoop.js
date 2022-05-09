


// Scroll Loop

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

const scrollable = document.querySelector('.scrollable');
const content = document.querySelector('.content');
const imgSections = [...document.querySelectorAll('.img-section')];
const images= [...document.querySelectorAll('.img')];


// Pozovi post koliko puta zelis
let imageIndex = 0;
for(let i = 1; i <= 5; i++) {
    let item = {
        id: i,
        // title: `Post ${i}`,
        // date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: imagesPost[imageIndex]
    }
    post.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}
console.log(post);


// Ubaci link u backgreound image
images.forEach((image, idx, post) => {
    // image.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`
    // image.style.backgroundImage = `url($(post.image))`
    // image.style.backgroundImage = `url(" +  post[imagee] + ");`
})

// Reesponsive za Mobitele
let isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if(!isMobile) {
    imgSections.forEach(section => {
        let clonedSection = section.cloneNode(true);
        clonedSection.classList.add('clone')
        content.appendChild(clonedSection)
    })
}

const menuTog = document.querySelector('.menu-tog');


// Set scroll dimensions
function init(){
    document.body.style.height = `${content.getBoundingClientRect().height}px`;
}
window.addEventListener('resize', init);

let target = 1;
let reverse = false;

document.addEventListener('click', () => reverse = !reverse)

function scroll(){
    target = window.scrollY;

    if(!isMobile){
        if(target <= 0){
            target = (content.offsetHeight / 2) - 1;
            window.scrollTo(0, target);
        }else if( target >= content.offsetHeight / 2){
            target = 1;
            window.scrollTo(0, target);
        }
    }
    scrollable.style.transform = `translateY(-${target}px)`;
    requestAnimationFrame(scroll)
}

init()
document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 200)
    scroll()
})