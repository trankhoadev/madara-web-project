/* Rating */
var star_1 = document.getElementById('star-1');
var star_2 = document.getElementById('star-2');
var star_3 = document.getElementById('star-3');
var star_4 = document.getElementById('star-4');
var star_5 = document.getElementById('star-5');

var  x = 10;


var data = [5, 4, 5, 4, 3, 5, 4, 5, 5, 5, 4, 5, 4, 5, 3, 4, 5, 5, 5, 4, 3, 5];
var sum = 0;
var currentLength = 0;
var tempLength = 0;


window.onload = function() {
    let result = 0;
    data.forEach(index => {
        sum += index;
        currentLength++;
    });
    tempLength = currentLength;
    result = parseFloat(sum/currentLength).toFixed(1);
    document.getElementById('displayStar').innerHTML = result;

    console.log(result);

    if(result <= 0.5) {
        star_1.style.color = 'inherit';
        star_2.style.color = 'inherit';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 0.5 && result <= 1) {
        star_1.style.color = '#ffd900';
        star_2.style.color = 'inherit';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 1 && result <= 1.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = 'inherit';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }
    
    if(result > 1.5 && result <= 2) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 2 && result <= 2.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = 'inherit';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 2.5 && result <= 3) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 3 && result <= 3.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = 'inherit';
        star_5.style.color = 'inherit';
    }

    if(result > 3.5 && result <= 4) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = '#ffd900';
        star_5.style.color = 'inherit';
    }

    if(result > 4 && result <= 4.5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = '#ffd900';
        star_5.style.color = 'inherit';
    }

    if(result > 4.5 && result <= 5) {
        star_1.style.color = '#ffd900';
        star_2.style.color = '#ffd900';
        star_3.style.color = '#ffd900';
        star_4.style.color = '#ffd900';
        star_5.style.color = '#ffd900';
    }
}

function push(data, index) {
    data.push(index);
}

function getLength() {
    return data.length;
}

/* Click */
star_1.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = 'inherit';
    star_3.style.color = 'inherit';
    star_4.style.color = 'inherit';
    star_5.style.color = 'inherit';

    if(getLength() === tempLength) {
        push(data,1);
    }
})


star_2.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = 'inherit';
    star_4.style.color = 'inherit';
    star_5.style.color = 'inherit';
})


star_3.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = '#ffd900';
    star_4.style.color = 'inherit';
    star_5.style.color = 'inherit';
})

star_4.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = '#ffd900';
    star_4.style.color = '#ffd900';
    star_5.style.color = 'inherit';
})

star_5.addEventListener('click', function() {
    star_1.style.color = '#ffd900';
    star_2.style.color = '#ffd900';
    star_3.style.color = '#ffd900';
    star_4.style.color = '#ffd900';
    star_5.style.color = '#ffd900';
})


/* Show More and Less */
var divShow = document.getElementById('divShow');
var show = document.getElementById('show');
show.innerHTML = '<span>Show more</span> &nbsp; <i class="fas fa-sort-down"></i>';

function clickShow() {
    if(show.innerHTML == '<span>Show more</span> &nbsp; <i class="fas fa-sort-down"></i>') {
        show.innerHTML = '<span>Show less</span> &nbsp; <i class="fas fa-sort-up"></i>';
        divShow.style.transform = 'translateY(0px)';
        divShow.style.boxShadow = 'none';
        divShow.style.transition = 'all ease-in-out .5s';
    }
    else {
        show.innerHTML = '<span>Show more</span> &nbsp; <i class="fas fa-sort-down"></i>';
        divShow.style.transform = 'translateY(-130px)';
        divShow.style.boxShadow = '0px -20px 20px rgba(255,255,255,.8)';
        divShow.style.transition = 'all ease-in-out .5s';
    }
}

/* Swap chapter */
var arr_chapter = [
    {chapter : 'Chapter 1', time : 'October 18, 2017'},
    {chapter : 'Chapter 2', time : 'November 15, 2019'},
    {chapter : 'Chapter 3', time : 'October 11, 2020'},
    {chapter : 'Chapter 4', time : 'September 24, 2021'},
    {chapter : 'Chapter 5', time : 'October 15, 2020'},
    {chapter : 'Chapter 6', time : 'July 08, 2019'}
]

var length_chapter = arr_chapter.length;

var swap_list = document.getElementById('swap-list');

var stringTempArray = [];
for(let i = 0; i < length_chapter; ++i) {
    swap_list.innerHTML = stringTempArray += '<li><a href="chapter.html">' + arr_chapter[i].chapter + '</a> <span>' + arr_chapter[i].time + '</span></li>'; 
    stringTempArray = swap_list.innerHTML;
}

swap_list.classList.add('normal');

function swapChapter() {
    /* Add class Normal or Prev into ul */
    if(swap_list.classList.contains('prev')) {
        swap_list.classList.remove('prev');
        swap_list.classList.add('normal');
    }
    else {
        swap_list.classList.remove('normal');
        swap_list.classList.add('prev');
    }

    if(swap_list.innerHTML == stringTempArray) {
        swap_list.innerHTML = '';
        
        for(let i = length_chapter - 1; i >= 0; --i) {
            swap_list.innerHTML += '<li><a href="chapter.html">' + arr_chapter[i].chapter + '</a> <span>' + arr_chapter[i].time + '</span></li>'; 
        }

        return;
    }
    else {
        swap_list.innerHTML = '';   

        for(let i = 0; i < length_chapter; ++i) {
            swap_list.innerHTML += '<li><a href="chapter.html">' + arr_chapter[i].chapter + '</a> <span>' + arr_chapter[i].time + '</span></li>'; 
        }
    }
}


/* Show chapter */
var show_chapter = document.getElementById('show-chapter');
show_chapter.innerHTML = "-";
function show_Chapter() {
    if(show_chapter.innerHTML == "-") {
        show_chapter.innerHTML = "+"
        swap_list.innerHTML = '';
        return;
    }
    
    else {
        show_chapter.innerHTML = "-";
        if(swap_list.classList.contains('normal')) {
            for(let i = 0; i < length_chapter; ++i) {
                swap_list.innerHTML += '<li><a href="chapter.html">' + arr_chapter[i].chapter + '</a> <span>' + arr_chapter[i].time + '</span></li>'; 
            }
        }

        else {
            for(let i = 0; i < length_chapter; ++i) {
                swap_list.innerHTML += '<li><a href="chapter.html">' + arr_chapter[i].chapter + '</a> <span>' + arr_chapter[i].time + '</span></li>'; 
            }
        }
    }
}