var bestelling = 0
var fris = 0;
var bier = 0;
var wijn = 0;
var totaal = 0;


var snack = 0;
var frisb = 0;
var bierb = 0;
var wijnb = 0;
var snackb = 0;
var achtb = 0;
var zestienb = 0;

var acht = 0;
var zestien = 0;





while(bestelling != 'stop'){
	bestelling = prompt("Voer uw bestelling in.")
		if (bestelling == 'fris'){
			frisb = prompt("Hoeveel fris wilt u bestellen?")
			 fris = fris + parseInt(frisb)
		}
		
		if (bestelling == 'bier'){
			bierb = prompt("Hoeveel bier wilt u bestellen?")
			bier = bier + parseInt(bierb)
		}
		
		if (bestelling == 'wijn'){
			wijnb = prompt("Hoeveel wijn wilt u bestellen?")
			wijn = wijn + parseInt(wijnb)
		}

		if (bestelling == "snack"){
			snackb = prompt("Hoeveel bitterballen wilt u bestellen (kies 8 of 16)")
			snack = snack + parseInt(snackb)
			if (snackb == "8" ){
				achtb = prompt("Hoeveel schalen van 8 wilt u bestellen")
				acht = acht + parseInt(achtb)

	
			}
				else if (snackb == "16" ){
					zestienb = prompt("Hoeveel schalen van 16 wilt u bestellen")
					zestien = zestien + parseInt(zestienb)
	
				}
					else{
						alert("U kunt alleen 8 of 16 bitterballen bestellen.")
					}

		

		
		 
		}
}


bon(fris, bier, wijn);



function bon (fris, bier, wijn){
	if (fris > 0 ){
		document.write(fris + " fris: €" + fris*1.00 + "<br>")
	}
	if (bier > 0){
		document.write(bier + " bier: €" + bier*1.50 + "<br>")
	}
	if (wijn > 0){
		document.write(wijn + " wijn: €" + wijn*2.00 + "<br>")
	}

	if (acht > 0){
		document.write(acht + " schalen met 8 bitterballen: €" + acht*4.00 + "<br>")
	}
	if (zestien > 0){
		document.write(zestien + " schalen met 16 bitterballen: €" + zestien*8.00 + "<br>")
	}
	document.write("_________________________________________________________<br>")
	document.write("totaal: €")
	document.write(fris * 1.00 + bier * 1.50 + wijn * 2.00 + acht * 4.00 + zestien * 8.00 )
 	}