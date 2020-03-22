function particles(width, height, type, box){

	const newBox = document.getElementById(box);
	const validArea = [window.innerWidth - width - 20, window.innerHeight - height - 10];

	const particleUpdate = document.getElementsByTagName('span');

	if(particleUpdate.length < 200){
		for(let i = 0; i < 10; i++){
			const particle = document.createElement('span');
			newBox.appendChild(particle);
		}
	}


	for(let i = 0; i < particleUpdate.length; i++){
		let newW = Math.floor(Math.random() * (validArea[0]));
		let newH = Math.floor(Math.random() * (validArea[1]));

		const classAttr = document.createAttribute('class');
		classAttr.value = `${type}`;

		particleUpdate[i].setAttributeNode(classAttr);
		particleUpdate[i].style.left = newW + "px";
		particleUpdate[i].style.top =  newH + "px";
		particleUpdate[i].style.width = width + "px";
		particleUpdate[i].style.height = height + "px";

		for(let c = height; c <= height*50; c+=height){
			if((newH + c) < validArea[1]){
				setTimeout( () => { particleUpdate[i].style.top = ( newH + c) + "px"; }, 200);
			}
		}
	}

}
setInterval( () => { particles(10, 10, 'cube', "particles");}, 100);