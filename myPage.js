
let bestMove = 0;
// bestSlides
function nextSlidesBe() {
    bestMove += 200;
    let container = document.getElementsByClassName('bestSlides')[0];
    container.style.right = bestMove + 'px';
    for(let i=0; i < container.length; i++){
        container.append(container.index[i]);
        console.log(container.index[i]);
    }
}


function prevSlidesBe() {
    if(bestMove > 0){
        bestMove -= 200;
        let container = document.getElementsByClassName('bestSlides')[0];
        container.style.right = bestMove + 'px';
    }
}

//recentSlides
let recentMove = 0;
function nextSlidesRe() {
    recentMove += 200;
    let container = document.getElementsByClassName('recentSlides')[0];
    container.style.right = recentMove + 'px';
    console.log(recentMove);
    console.log(container.style.right = recentMove + 'px');
}
function prevSlidesRe() {
    if(recentMove > 0){
        recentMove -= 200;
        let container = document.getElementsByClassName('recentSlides')[0];
        container.style.right = recentMove + 'px';
    }
}

const cloneElement = () => {

}