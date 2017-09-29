function showBanner(){
	document.getElementById('banner').style.visibility = 'visible';
}

//This takes a list, makes an array, and then checks it
function checkZipcode(zip){
	var list = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var allowedZips = [];
	for (i = 0; i < list.length; i++) {
		var arrValue = list[i].innerHTML;;
		allowedZips.push(arrValue);
	}
	
	var zipcode=Number(zip);
	for(i=0; i<allowedZips.length; i++){
		if(zipcode==Number(allowedZips[i])){
			alert("valid value");
			return true;
		}
	}
	alert("invalid value");
	return false;
}
