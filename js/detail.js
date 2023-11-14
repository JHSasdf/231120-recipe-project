const swiper1 = new Swiper('.mainSlider', {
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiper2 = new Swiper('.featRecipe', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});
function onPrint() {
    const body = document.querySelector('body');
    const printContents = document.querySelector('.detailContent').innerHTML;
    const printDiv = document.createElement("textarea");
    printDiv.className = "print-div";

    // body.appendChild(printDiv);
    // printDiv.value = printContents;
    // document.body.style.display = 'none';
    // window.print();
    // printDiv.print();
    //document.body.style.display = 'block';
    // printDiv.style.display = 'none';
    window.print();
}

$(function(){
    /* $('.single-item').slick({
        adaptiveHeight: true,
        prevArrow:$('.mainSlider .btnPrev'),
        nextArrow:$('.mainSlider .btnNext')
    }); */
    /* $('.featRecipe .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite:false,
        prevArrow:$('.featRecipe .btnPrev'),
        nextArrow:$('.featRecipe .btnNext')
    }); */
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

    //팝업
    $('.btnWeight').click(function(e){
        $('#weight').addClass('d-block');
    });
    $('.weightBtns input').click(function(e){
        let idx = this.id.split('btnradio')[1]-1;
        console.log(idx);
        $('.weight_con').hide();
        if($(this).is(":checked")){
            $('.weight_con').eq(idx).show();
        }
    });
    $('.btn-close').click(function(e){
        $(this).closest('.modal').removeClass('d-block');
    });
});