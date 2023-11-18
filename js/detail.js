const swiper1 = new Swiper('.mainSlider', {
    navigation: {
        nextEl: '.mainSlider .swiper-button-next',
        prevEl: '.mainSlider .swiper-button-prev',
    },
});

const swiper2 = new Swiper('.ingredients .featRecipe', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.ingredients .swiper-button-next',
        prevEl: '.ingredients .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
    },
} );//관련레시피 : 본문
const swiper3 = new Swiper('#ingredients .featRecipe', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '#ingredients .swiper-button-next',
        prevEl: '#ingredients .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
    },
} );//관련레시피 : 팝업

function onPrint() {
    window.print();
}

//뒤로가기 버튼
let $btnBack = document.querySelector('.btnBack');
$btnBack.addEventListener('click',function(e){
    window.history.back();
});

//처음(상단)으로 가기 버튼
let btnGroup = document.querySelector(".airBtns");
const el = document.querySelector(".detailHead");
const observer = new IntersectionObserver( 
    ([e]) =>btnGroup.classList.toggle("show", e.intersectionRatio < 1),
    { threshold: [1] }
);

observer.observe(el);

let rootElement = document.documentElement;
let scrollToTopBtn = document.querySelector(".btnTop");
function scrollToTop() {
    rootElement.scrollTo({ top: 0, behavior: "smooth" });
}
scrollToTopBtn.addEventListener("click", scrollToTop);


$(function(){
    $('.btnTWX').click(function(e){
        let linkUrl = window.location.href;
        e.preventDefault();
        window.open(
            `https://twitter.com/intent/tweet?text=${linkUrl}`,'','width=500,height=500'
        )
    });
    $('.btnFB').click(function(e){
        let linkUrl = window.location.href;
        e.preventDefault();
        window.open( 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(linkUrl),'','width=500,height=500' );
    });
    $('.btnCopy').click(function(e){
        var url = '';
        var textarea = document.createElement("textarea");
        e.preventDefault();
        document.body.appendChild(textarea);
        url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다.")
    });

    //팝업: 재료
    $('.ingredients p a').click(function(e){
        e.preventDefault();
        let tit=$(this).prev().text().split("(")[0];//더미 타이틀 가저오기
        $('#ingredients .modal-title').text(tit);//더미 타이틀 삽입
    });
    //팝업: 계량방법 
    $('.weightBtns input').click(function(e){
        let idx = this.id.split('btnradio')[1]-1;
        console.log(idx);
        $('.weight_con').hide();
        if($(this).is(":checked")){
            $('.weight_con').eq(idx).show();
        }
    });
});