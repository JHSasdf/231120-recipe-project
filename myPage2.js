function changeImg() {
    document.getElementById('inputImg').click();
}

function previewFile() {
    let preview = document.getElementById('previewImg');
    let file = document.getElementById('inputImg').files[0];
    let reader = new FileReader();

    reader.onload = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = './Profile_icon.png';
    }
}

function Good(){
    let count = document.getElementById('count')
    let val = count.innerText;
    
    console.log(count.innerText);

    val++
    count.innerText = val;
}
