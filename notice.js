function handleClick(el) {
    console.log(el.nextElementSibling)
    const next = el.nextElementSibling;
    next.classList.toggle('hiddenWr');
    console.log($(this).next('.hiddenWr').toggle())
}


// 팝업

let popup = document.querySelector('.popup');
let addNotice = document.querySelector('.addNotice');
let cancel = document.querySelector('#cancel');

function togglePopup() {
    popup.classList.toggle("show-popup");
}

function showPopup() {
    $('.popup').css('opacity', '1');
    $('.popup').css('visibility', 'visible');
}

$('.addNotice').click(function() {
    $('.popup').css('opacity', '1');
    $('.popup').css('visibility', 'visible');
})

$('#cancel').click(function() {
    $('.popup').css('opacity', '0');
    $('.popup').css('visibility', 'hidden');
})

$('#submit').click(function(){
    let ul = document.getElementById('noticeId');
    let li = document.createElement('li');
    let day = new Date();
    let headTitle = document.getElementById('headTitle').value;
    let newMessage = document.getElementById('newMessage').value;
    li.innerHTML = `<button type="button" class="serviceItems" onclick="handleClick(this)">
    <p>주요 공지</p>
    <div class="serviceItemsStyle">
        <p> ${headTitle} </p>
        <p>${day.getFullYear()}</p>
    </div>
</button>
<div class="hiddenWr">
    <p>${newMessage}</p>
</div>`;

// li.insertAdjacentHTML("beforeend", `<span>${headTitle}</span>`)

console.log(ul);
console.log(li);
console.log(headTitle);
console.log(day);
console.log(newMessage);

ul.append(li);

    $('.popup').css('opacity', '0');
    $('.popup').css('visibility', 'hidden');
})


// topic 변경
// $('.topic2').on('click', function(){
//     $('.topic2').attr('border-bottom:' , '1px solid rgb(36, 36, 36)');
//     $('.topic1').attr('border-bottom:', '0px');
// })

function changeTopic() {
    let topic1 = document.querySelector('.topic1');
    let topic2 = document.querySelector('.topic2');
    // const topic1Style = window.getComputedStyle(topic1);
    // const topic1Border = topic1Style.getPropertyValue("border-bottom");
    // const topic2Style = window.getComputedStyle(topic2);
    // const topic2Border = topic2Style.getPropertyValue("border-bottom");


    const topic1Selected = window.getComputedStyle(topic1).getPropertyPriority("border-bottom") !== 'none';
    const topic2Selected = window.getComputedStyle(topic2).getPropertyPriority("border-bottom") !== 'none';


    topic1.style.borderBottom = 'none';
    topic2.style.borderBottom = 'none';


    if(topic1Selected){
        topic2.style.borderBottom = '1px solid rgb(36, 36, 36)';
    }else {
        topic1.style.borderBottom = '1px solid rgb(36, 36, 36)';
    }

    // if(topic1Border != ''){
    //     topic1.style.borderBottom = 'none';
    //     topic2.style.borderBottom = '1px solid rgb(36, 36, 36)';
    // } else if(topic2Border != ''){
    //     topic2.style.borderBottom = 'none';
    //     topic1.style.borderBottom = '1px solid rgb(36, 36, 36)';
    // }
}

// onclick="handleClick()"
{/* <p>${day.getFullYear()}"-"${dat.getMonth()}"-"${dat.getDate()}</p> */}
