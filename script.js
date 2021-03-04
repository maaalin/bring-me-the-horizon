
// typewriter effect
var i = 0;
var txt = 'nah... sorry all the concerts are fake'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typew").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// blue mode
if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav") != null) {
        getFav = localStorage.fav;
        $(".all").addClass('lightMode');
    }
}
$(document).ready(function () {
    $('.blueMode').on('click', function () {
        getFav = localStorage.fav;
        //$(".item").removeClass('favorites');
        //localStorage.removeItem('background');
        $(this).closest(".all").toggleClass('lightMode');
		if ($(this).closest(".all").hasClass('lightMode')) {
        localStorage.setItem('fav', 'lightMode');
        
    }else{
		localStorage.removeItem('fav');
	}
        
    });
});