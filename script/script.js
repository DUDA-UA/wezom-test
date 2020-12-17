let bgHead = document.querySelector('.bg-black');
let popUpHead = document.querySelector('.header__btn');
let closeHead = document.querySelector('#close');

popUpHead.onclick = () =>{
    bgHead.style.display = 'block';
}

closeHead.onclick = () =>{
    bgHead.style.display = 'none';
}

let validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

let validate = () => {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        $result.text(email + " is valid");
        $result.css("color", "green");
        $result.css("fontSize", "12px");
    } else {
        $result.text(email + " is not valid");
        $result.css("color", "red");
        $result.css("fontSize", "12px");
    }

        const $result1 = $("#result1");
        const $password = $("#password").val();
        $result1.text("");
    
        if ($password.length < 4) {
            $result1.text(`Вы ввели меньше трёх символов`);
            $result1.css("color", "red");
            $result1.css("fontSize", "12px");
        } else {
            $result1.text(`Всё ок`);
            $result1.css("color", "green");
            $result1.css("fontSize", "12px");
        }
        return false;
    }

$(".popUp__btn button").on("click", validate);

let bgCall = document.querySelector('.bg-call');
let popUpCall = document.querySelector('.telbox__call');
let closeCall = document.querySelector('#call-close');

popUpCall.onclick = () =>{
    bgCall.style.display = 'block';
}

closeCall.onclick = () =>{
    bgCall.style.display = 'none';
}

window.onclick = (e) =>{
    if(e.target == bgCall){
        bgCall.style.display = 'none';
    }
}

let select = () =>{
    let selectHeader = document.querySelectorAll('.select__header');

selectHeader.forEach(item =>{
    item.addEventListener('click', function(){
        this.parentElement.classList.toggle('is-active')
    })
})
}

select();

let validateSearch = () =>{
        const $result2 = $("#result2");
        const $search = $("#search").val();
        $result2.text("");
    
        if ($search.length < 2) {
            $result2.text(`Вы ввели меньше двух символов`);
            $result2.css("color", "red");
            $result2.css("fontSize", "12px");
        } else {
            $result2.text(`Всё ок`);
            $result2.css("color", "green");
            $result2.css("fontSize", "12px");
        }
        return false;
    }

$(".menu__right__search__btn").on("click", validateSearch);
document.querySelectorAll('.products__mainBtn').forEach((item) =>{
    item.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#','');

        document.querySelectorAll('.products__mainBtn').forEach((child) => {
            child.classList.remove('activeTab');
        })

        document.querySelectorAll('.selectBox').forEach((child) => {
            child.classList.remove('visualTab');
        })

        item.classList.add('activeTab');
        document.getElementById(id).classList.add('visualTab');
    })
});

document.querySelector('.products__mainBtn').click();

document.querySelector('#productsBtnClear').onclick = () =>{
    document.querySelectorAll('.products-field').forEach((it) => {
        it.value = '';
    })
    document.querySelectorAll('input[type ="number"]').forEach((it1) => {
        it1.value = '';
    })
};

var counter = 1;
var counter2 = 1;

document.querySelectorAll('.compare__text').forEach((itm) => {
    itm.addEventListener('click', function(e){
            if(e.target.classList.contains('ok')){
                return false;
            }
            else{
                itm.innerHTML = 'В сравнении';
                document.querySelector('#compareNumb').innerHTML = counter;
                itm.classList.add('ok');
                if(counter == 4){
                    return false;
                }
                return counter++;
            }
    })
})

document.querySelectorAll('.favorites__text').forEach((itm2) => {
    itm2.addEventListener('click', function(e){
        if(e.target.classList.contains('ok1')){
            return false;
        }
        itm2.innerHTML = 'В избранном';
        document.querySelector('#favoritesNumb').innerHTML = counter2;
        itm2.classList.add('ok1');
        if(counter2 == 4){
            return false;
        }
        return counter2++;
    })
})

let validateEmailBlock = (x) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(x);
}

const closeBlock = document.querySelector('#closeBlock');

let validateBlock = () => {
    const emailBlock = $("#emailBlock").val();
    const resBlock = $('#resultBlock');
    resBlock.text("");

    if (validateEmailBlock(emailBlock)) {
        document.querySelector('.bg-block').style.display = 'block';
    } 
    else {
        resBlock.text('Введите коректный e-mail');
        $result.css("color", "red");
        $result.css("fontSize", "12px");
}
resBlock.text("");
}

$(".blocksBoxLeft__main__searchField__btn").on("click", validateBlock);

closeBlock.onclick = () =>{
    document.querySelector('.bg-block').style.display = 'none';
}


