
/* Hamburger Animation */
(function($) {    
    $('.hamburger').on('click', function() {
       if($(this).hasClass('active-in')) {
          $(this).removeClass('active-in');
          $(this).addClass('active-out');
       } 
         else {
          $(this).removeClass('active-out');
          $(this).addClass('active-in');
       }
    });
 })(jQuery);



/* Back to Top */
var btn = document.getElementById('back-to-top');
window.onscroll = function() {
    scrollFunction();
}
function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = 'flex';
    }
    else {
        btn.style.display = 'none';
    }
}

function clickToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/* Check Animation */
var check = document.getElementById('wrap-checkbox');
function checkAnimation() {
    if(check.classList.contains('bg-checkbox')) {
        check.classList.remove('bg-checkbox');
        check.style.border = '1px solid rgba(45,45,45,.3)';
    }
    else {
        check.classList.add('bg-checkbox');
        check.style.border = 'none';
    }
}


/* Check Data Post Up Server */
function checkDataPost() {
    var dataComment = document.getElementById('textarea').value;
    var dataName = document.getElementById('name').value;
    var dataEmail = document.getElementById('email').value;

    if(dataComment.length === 0) {
        window.alert('Please Enter Your Comment!');
        return;
    }

    if(dataName.length === 0) {
        window.alert('Please Enter Your Name!');
        return;
    }

    if(dataEmail.length === 0) {
        window.alert('Please Enter Your Email!');
        return;
    }
}