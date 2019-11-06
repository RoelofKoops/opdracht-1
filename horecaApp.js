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

var acht;
var zestien;





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
	
			}
				else if (snackb == "16" ){
	
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

	if (snack == "8"){
		snack = acht
		document.write("8 bitterballen: €4<br>")
	}
	if (snack == "16"){
		snack = zestien
		document.write("16 bitterballen: €8<br>")
	}
	document.write("_________________________________________________________<br>")
	document.write("totaal: €")
	document.write(fris * 1.00 + bier * 1.50 + wijn * 2.00 + snackb*0.5 )
 	}