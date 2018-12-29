//menu javascript

// test

function click() {
    let menu = document.getElementById('hiddenMenu');
    menu.addEventListener('click', function() {
	menu.style.backgroundColor = 'blue';
	let menuLength = menu.children.length;
	console.log(menuLength);
	// hide the first element, show the second element
	menu.children[0].style.display = 'none';
	menu.children[1].style.display = 'flex';
	//menu.children[2].style.display = 'flex';
	let openHiddenMenu = document.getElementById('openHiddenMenu');
	openHiddenMenu.style.display = 'flex';
    });
    
}

click();
