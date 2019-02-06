window.addEventListener("scroll", function() { 
var deplacement = ((window.scrollY+ window.innerHeight)/document.body.offsetHeight )*100;
document.getElementById('progress_bar').value = deplacement;});
function myScroll() { 
var progress = document.getElementById('progress_bar').value;
progress = progress+(document.body.offsetHeight-window.innerHeight)/200;
window.scroll(0,progress);}