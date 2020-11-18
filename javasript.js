function angledTriangle(){
	var a = document.getElementById("a").value;
	
	if (a <= 0) {
		alert('Inputkan bilangan lebih dari nol');
	}

	var display = '';
	for (let baris = 1; baris <= a; baris++){
		for (let bintang = 1; bintang <= baris; bintang++) {
			display += '*';			
		}
		display += '<br>';
	}
	document.getElementById("displayAngled").innerHTML = display;
}

function isocelesTriangle(){
	var b = document.getElementById("b").value;

	if (b <= 0) {
		alert('Inputkan bilangan lebih dari nol');
	}

	var display = '';
	for (var baris = 1; baris <= b; baris++) {
		for (var spasi = 1; spasi <= b - baris; spasi++) {
			display += '&nbsp';
		}
		for (var bintang = 1; bintang <= baris; bintang++) {
			display += '*';
		}
		display += '<br>';
	}
	document.getElementById("displayIsoceles").innerHTML = display;
}

function xPattern(){
	var c = document.getElementById("c").value;

	if (c <= 0) {
		alert('Inputkan bilangan lebih dari nol');
	}

	var display = '';
	var batas = c;
	for (var baris = 1; baris <= c; baris++) {
		for (var bintang = 1; bintang <= c; bintang++) {
			if (baris == bintang || bintang == batas){
				display += '*';
			}else {
				display += '&nbsp' + '&nbsp';
			}
		}
		batas--;
		display += '<br>';
	}
	document.getElementById("displayXPattern").innerHTML = display;
}

function diamond(){
	var d = document.getElementById("d").value;

	if (d <= 0) {
		alert('Inputkan bilangan lebih dari nol');
	}

	var display = '';
	for (var baris = 1; baris <= d; baris++) {
		for (var spasi = 1; spasi <= d - baris; spasi++) {
			display += '&nbsp' + '&nbsp';
		}
		for (var bintang = 1; bintang <= (2 * baris - 1); bintang++) {
			display += '*';
		}
		display += '<br>';
	}
	for (var baris = 1; baris <= d - 1; baris++) {
		for (var spasi = 1; spasi <= baris; spasi++){
			display += '&nbsp' + '&nbsp';
		}
		for (var bintang = 1; bintang <= (2 * (d - baris - 1) + 1); bintang++){
			display += '*';
		}
		display += '<br>';
	}
	document.getElementById("displayDiamond").innerHTML = display;
}