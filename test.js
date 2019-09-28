var img1 = new Image(); 
img1.src = "x.gif";
img1.alt = 'alt';
document.body.appendChild(img1);
alert(document.images[0].src);


for (var i = 0; i < 9;i++){
	document.getElementById('game').innerHTML+='<div class="block"> </div>'
}

var newImg = document.createElement('img');

document.getElementById('game').onclick = function(event){
	console.log(event);
	

	var x = new Image();

	var o = new Image();
	o.src = "o.gif";

	

	if(event.target.className == 'block'){
		

	event.target.appendChild(x);
	alert(document.images[0].src);
		
	
	
	}
}


export function foo() { 
	alert("Foo");
}