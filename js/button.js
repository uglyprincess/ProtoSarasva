var p = document.getElementsByTagName('p')[0];
var button = document.querySelector('button');

button.addEventListener('click', function(){
	p.classList.toggle("tistheseason");
});