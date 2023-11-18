
// 동영상 레시피 캐러셀
let items = document.querySelectorAll('.four .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// 북마크
let blank = document.querySelectorAll('.bi-bookmark')
let bookmarkBox = document.querySelector('.bookmarkBox')


// 북마크 추가
blank.forEach((el) => {
    el.addEventListener('click', function () {
        // console.log(el.nextSibling.nextSibling);
        // blanck 에서 fill로 아이콘 바뀜
        el.nextSibling.nextSibling.classList.add('active')

        // 저장한 레시피로 복제해서 추가
        const parent = el.parentNode.parentNode;
        const clone = parent.cloneNode(true);
        // clone.classList.add('col-md-3')
        bookmarkBox.prepend(clone)
        
        let toBlank = el.nextSibling.nextSibling; // 바깥 콘텐츠에 붙어있는 북마크-fill

        // 북마크 해제
        let fill = document.querySelectorAll('.bi-bookmark-fill')
        fill.forEach((el) => {
            el.addEventListener('click', function () {
                el.classList.remove('active')  // 복제 콘텐츠 북마크-fill 해제
                toBlank.classList.remove('active') // 바깥 콘텐츠에 붙어있는 북마크-fill 해제

                // 콘텐츠 삭제
                let inactiveBookmark = el.parentNode.parentNode  // 복제 콘텐츠
                inactiveBookmark.classList.add('inactive')
                clone.classList.add('inactive')
            }) 
        })
        
        
    })
})



// fill.forEach((el) => {
//     el.addEventListener('click', function () {
//         el.classList.remove('active')
//     })
// })

// 북마크 해제

// fill.forEach((el) => {
//     el.addEventListener('click', function () {
//         el.classList.remove('active')

//         const parent = el.parentNode.parentNode;
//         // console.log(parent.classList[0])

//         // console.log(bookmarkBox.querySelector(parent.classList[0]))


//         console.log(bookmarkBox.children)
//         for (let i = 0; i < bookmarkBox.children.length; i++) {
//             console.log(bookmarkBox.children[i].classList.contains(parent.classList[0]))
//         }

//         // const child = bookmarkBox.querySelector(`.bookmarkBox > ${parent.classList[0]}`)
//         // console.log(child)
//     })
// })

// let fillClone = document.querySelectorAll('.bookmarkBox .bi-bookmark-fill')
// fillClone.forEach((el) => {
//     el.addEventListener('click', function () {
//         el.classList.remove('active')
//     })
// })





// let fillClone = document.querySelectorAll('.bookmarkBox .bi-bookmark-fill')

// console.log(fillClone)

// let bookmarRow = document.querySelector('.')

// document.querySelector('.a #no').addEventListener('click', () => document.querySelector('.b #no').style.display = 'none');


// 이달의 레시피
let kFood = document.querySelector('.kFood');
let wFood = document.querySelector('.wFood');
let cFood = document.querySelector('.cFood');
let jFood = document.querySelector('.jFood');

let korean = document.querySelector('.korean');
let western = document.querySelector('.western');
let china = document.querySelector('.china');
let japan = document.querySelector('.japan');

kFood.addEventListener('click', function() {
    korean.classList.add('active')
    western.classList.remove('active')
    china.classList.remove('active')
    japan.classList.remove('active')
});

wFood.addEventListener('click', function() {
    western.classList.add('active')
    china.classList.remove('active')
    japan.classList.remove('active')
    korean.classList.remove('active')


});

cFood.addEventListener('click', function() {
    korean.classList.remove('active')
    china.classList.add('active')
    western.classList.remove('active')
    japan.classList.remove('active')


});

jFood.addEventListener('click', function() {
    korean.classList.remove('active')
    japan.classList.add('active')
    western.classList.remove('active')
    china.classList.remove('active')

});
