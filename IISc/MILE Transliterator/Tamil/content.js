var to = "T";
var status = "nok";

var kCount = 0;
var tCount = 0;
var dCount = 0;
var telcount = 0;
var bcount = 0;
var gcount = 0;
var mcount = 0;
var ocount = 0; 
var pcount = 0;
 
var San2Tam = {
	'अ':'அ', 'आ':'ஆ', 'इ':'இ', 'ई':'ஈ', 'उ':'உ', 'ऊ':'ஊ', 'ए':'ஏ', 'ऐ':'ஐ', 'ओ':'ஓ', 'औ':'ஔ',
	'क':'க','ख':'க', 'ग':'<b>க</b>','घ':'<b>க</b>', 'ङ':'ங', 'च':'ச', 'छ':'<b>ச</b>', 'ज':'ஜ', 'झ':'<b>ஜ</b>',
	'ञ':'ஞ','ट':'ட','ठ':'ட', 'ड':'<b>ட</b>', 'ढ':'<b>ட</b>', 'ण':'ண', 'त':'த','थ':'த','द':'<b>த</b>','ध':'<b>த</b>',
	'ः':':','न':'ந', 'प':'ப','फ':'ப','ब':'<b>ப</b>', 'भ':'<b>ப</b>','म':'ம', 'य':'ய','र':'ர', 'ल':'ல','व':'வ', 'ळ':'ழ', 
	'श':'ஶ','ष':'ஷ', 'स':'ஸ', 'ह':'ஹ','क्ष':'க்ஷ','श्री':'ஸ்ரீ','ा':'ா','ि':'ி','ी':'ீ','ु':'ு','ू':'ூ',
	'े':'ே', 'ै':'ை','ो':'ோ','ौ':'ௌ','्':'்','ं':'ம்', 'ृ':'்ரு','ॄ':'்ரூ','०':'0','१':'1','२':'2','३':'3','४':'4',
	'५':'5','६':'6','७':'7','८':'8','९':'9','ॐ':'ஓம்', 'ऎ':'எ','ऱ':'ற','ळ':'ள','ऴ':'ழ', 'ऒ':'ஒ','ॉ':'ா', 'ऋ':'ரு',
	'ॠ':'ரூ', 'ऌ':'லு', 'ॡ':'லூ'
};

var Kan2Tam = {
	'ಅ':'அ', '಼':'', 'ಆ':'ஆ', 'ಇ':'இ', 'ಈ':'ஈ', 'ಉ':'உ', 'ಊ':'ஊ', 'ಎ':'எ', 'ಏ':'ஏ','ಐ':'ஐ', 'ಒ':'ஒ', 'ಓ':'ஓ','ಔ':'ஔ',
	'ಕ':'க','ಖ':'க', 'ಗ':'<b>க</b>','ಘ':'<b>க</b>', 'ಙ':'ங', 'ಚ':'ச','ಛ':'<b>ச</b>', 'ಜ':'ஜ', 'ಝ':'<b>ஜ</b>',
	'ಞ':'ஞ','ಟ':'ட','ಠ':'ட', 'ಡ':'<b>ட</b>', 'ಢ':'<b>ட</b>', 'ಣ':'ண', 'ತ':'த','ಥ':'த','ದ':'<b>த</b>','ಧ':'<b>த</b>',
	'ಃ':':','ನ':'ந','ಪ':'ப', 'ಫ':'ப','ಬ':'<b>ப</b>', 'ಭ':'<b>ப</b>','ಮ':'ம', 'ಯ':'ய','ರ':'ர','ಲ':'ல','ವ':'வ', 'ಳ':'ழ', 
	'ಶ':'ஶ','ಷ':'ஷ', 'ಸ':'ஸ', 'ಹ':'ஹ','ಾ':'ா','ಿ':'ி','ೀ':'ீ','ು':'ு','ೂ':'ூ',
	'ೆ':'ெ','ೇ':'ே','ೈ':'ை','ೊ':'ொ','ೋ':'ோ','ೌ':'ௌ','್':'்','ಂ':'ம்', '೦':'ம்', 'ೃ':'்<b>ரு</b>','ೄ':'<b>்ரூ</b>','०':'0','೧':'1','೨':'2','೩':'3','೪':'4',
	'೫':'5','೬':'6','೭':'7','೮':'8','೯':'9','ಁ':'ம்','ಳ':'ள', 'ಋ':'ரு'
};

var HalfConsonants = {
	'ा':true,'ि':true,'ी':true,'ु':true,'ू':true,'े':true,'ै':true,'ो':true,'ौ':true,
	'्':true,'ं':true, 'ृ':true, 'ॄ':true, 'ॉ':true, 'ಾ':true,'ಿ':true,'ೀ':true,'ು':true,'ೂ':true,
	'ೆ':true,'ೇ':true,'ೈ':true,'ೊ':true,'ೋ':true,'ೌ':true,'್':true,'ಂ':true,'೦':true, 'ೃ':true,'ೄ':true	, 'ಃ':true
};

var MahaPrana = {
	'ग':true,'घ':true,'छ':true,'झ':true,'ड':true,'ढ':true,'द':true,'ध':true,'ब':true,'भ':true,'ಗ':true,'ಘ':true,'ಛ':true
	,'ಝ':true, 'ಡ':true, 'ಡ':true,'ದ':true,'ಧ':true,'ಬ':true, 'ಭ':true
};


var kaVarga ={
	'क':true,'ख':true,'ग':true,'घ':true,'ಕ':true,'ಖ':true, 'ಗ':true,'ಘ':true
};

var chaVarga ={
	'च':true,'छ':true,'ज':true,'झ':true,'ಚ':true,'ಛ':true, 'ಜ':true, 'ಝ':true
};

var TaVarga ={
	'ट':true,'ठ':true,'ड':true,'ढ':true,'ಟ':true,'ठ':true, 'ಡ':true, 'ಢ':true
};

var taVarga ={
	'त':true,'थ':true,'द':true,'ध':true, 'ತ':true,'ಥ':true,'ದ':true,'ಧ':true
};

var paVarga ={
	'प':true,'फ':true,'ब':true,'भ':true,'ಪ':true,'‌‌ಫ':true,'ಬ':true, 'ಭ':true
};
// ಫ್ರೆ೦ಚ್

function transliterate(text) // Transliteration function
{
	var prana = false
	var prev = ' '
	if(from == "D")
	{
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 

			if(cur == 'ं'){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += San2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,San2Tam[cur]+"</b>");
				prana = false
			}

			else if((cur == 'न' && nxt == '्') || (cur == 'म' && nxt == '्')){
				if(nxt2 in kaVarga ){
					SaveText += 'ங';
				}
				else if(nxt2 in chaVarga ){
					SaveText += 'ஞ';
				}
				else if(nxt2 in TaVarga ){
					SaveText += 'ண';
				}
				else if(nxt2 in taVarga ){
					SaveText += 'ந';
				}
				else if(nxt2 in paVarga ){
					SaveText += 'ம';
				}
				else if(cur == 'न'){
					SaveText += 'ன';
				}
				else{
					SaveText += San2Tam[cur]	
				}
				prana = false
			}


			else if(cur == 'न'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			// else if(cur == 'स'){
			// 	if(prev == " " ){
			// 		SaveText += 'ச';
			// 	}
			// 	else{
			// 		SaveText += San2Tam[cur]
			// 	}
			// 	prana = falseடி
			// }

			else if(!(cur in San2Tam)){
				SaveText += cur
				prana =false
			}

			else{
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += San2Tam[cur];
			}
		}
		return SaveText;	
	}
	else if(from == "K")
	{
		
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 
			
			if(cur == 'ಂ' || cur == '೦' ){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += Kan2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,Kan2Tam[cur]+"</b>");
				prana = false
			}

			
			else if(cur == 'ನ'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			else if(cur in Kan2Tam){
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += Kan2Tam[cur];
			} 

			else if(!(cur in Kan2Tam)){
				SaveText += cur
				prana =false
			}

		}
		return SaveText;	
	}
	else if(from == "P")
	{
		text = punToKan(text);
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 
			
			if(cur == 'ಂ' || cur == '೦' ){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += Kan2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,Kan2Tam[cur]+"</b>");
				prana = false
			}

			
			else if(cur == 'ನ'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			else if(cur in Kan2Tam){
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += Kan2Tam[cur];
			} 

			else if(!(cur in Kan2Tam)){
				SaveText += cur
				prana =false
			}

		}
		return SaveText;
	}
	else if(from == "TEL")
	{
		text = telToKan(text);
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 
			
			if(cur == 'ಂ' || cur == '೦' ){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += Kan2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,Kan2Tam[cur]+"</b>");
				prana = false
			}

			// else if((cur == 'ನ' && nxt == '$')){
			// 	if(nxt2 in kaVarga ){
			// 		SaveText += 'ங';
			// 	}
			// 	else if(nxt2 in chaVarga ){
			// 		SaveText += 'ஞ';
			// 	}
			// 	else if(nxt2 in TaVarga ){
			// 		SaveText += 'ண';
			// 	}
			// 	else if(nxt2 in taVarga ){
			// 		SaveText += 'ந';
			// 	}
			// 	else if(nxt2 in paVarga ){
			// 		SaveText += 'ம';
			// 	}
			// 	else if(cur == 'न'){
			// 		SaveText += 'ன';
			// 	}
			// 	else{
			// 		SaveText += Kan2Tam[cur]	
			// 	}
			// 	prana = false
			// }


			else if(cur == 'ನ'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			else if(cur in Kan2Tam){
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += Kan2Tam[cur];
			} 

			else if(!(cur in Kan2Tam)){
				SaveText += cur
				prana =false
			}

		}
		return SaveText;
	}
	else if(from == "B")
	{
		text = benToKan(text);
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 
			
			if(cur == 'ಂ' || cur == '೦' ){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += Kan2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,Kan2Tam[cur]+"</b>");
				prana = false
			}

			// else if((cur == 'ನ' && nxt == '$')){
			// 	if(nxt2 in kaVarga ){
			// 		SaveText += 'ங';
			// 	}
			// 	else if(nxt2 in chaVarga ){
			// 		SaveText += 'ஞ';
			// 	}
			// 	else if(nxt2 in TaVarga ){
			// 		SaveText += 'ண';
			// 	}
			// 	else if(nxt2 in taVarga ){
			// 		SaveText += 'ந';
			// 	}
			// 	else if(nxt2 in paVarga ){
			// 		SaveText += 'ம';
			// 	}
			// 	else if(cur == 'न'){
			// 		SaveText += 'ன';
			// 	}
			// 	else{
			// 		SaveText += Kan2Tam[cur]	
			// 	}
			// 	prana = false
			// }


			else if(cur == 'ನ'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			else if(cur in Kan2Tam){
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += Kan2Tam[cur];
			} 

			else if(!(cur in Kan2Tam)){
				SaveText += cur
				prana =false
			}

		}
		return SaveText;
	}
	else if(from == "G")
	{
		text = gujToKan(text);
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 
			
			if(cur == 'ಂ' || cur == '೦' ){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += Kan2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,Kan2Tam[cur]+"</b>");
				prana = false
			}

			// else if((cur == 'ನ' && nxt == '$')){
			// 	if(nxt2 in kaVarga ){
			// 		SaveText += 'ங';
			// 	}
			// 	else if(nxt2 in chaVarga ){
			// 		SaveText += 'ஞ';
			// 	}
			// 	else if(nxt2 in TaVarga ){
			// 		SaveText += 'ண';
			// 	}
			// 	else if(nxt2 in taVarga ){
			// 		SaveText += 'ந';
			// 	}
			// 	else if(nxt2 in paVarga ){
			// 		SaveText += 'ம';
			// 	}
			// 	else if(cur == 'न'){
			// 		SaveText += 'ன';
			// 	}
			// 	else{
			// 		SaveText += Kan2Tam[cur]	
			// 	}
			// 	prana = false
			// }


			else if(cur == 'ನ'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			else if(cur in Kan2Tam){
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += Kan2Tam[cur];
			} 

			else if(!(cur in Kan2Tam)){
				SaveText += cur
				prana =false
			}

		}
		return SaveText;
	}
	else if(from == "O")
	{
		text = oriToKan(text);
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 
			
			if(cur == 'ಂ' || cur == '೦' ){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += Kan2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,Kan2Tam[cur]+"</b>");
				prana = false
			}

			// else if((cur == 'ನ' && nxt == '$')){
			// 	if(nxt2 in kaVarga ){
			// 		SaveText += 'ங';
			// 	}
			// 	else if(nxt2 in chaVarga ){
			// 		SaveText += 'ஞ';
			// 	}
			// 	else if(nxt2 in TaVarga ){
			// 		SaveText += 'ண';
			// 	}
			// 	else if(nxt2 in taVarga ){
			// 		SaveText += 'ந';
			// 	}
			// 	else if(nxt2 in paVarga ){
			// 		SaveText += 'ம';
			// 	}
			// 	else if(cur == 'न'){
			// 		SaveText += 'ன';
			// 	}
			// 	else{
			// 		SaveText += Kan2Tam[cur]	
			// 	}
			// 	prana = false
			// }


			else if(cur == 'ನ'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			else if(cur in Kan2Tam){
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += Kan2Tam[cur];
			} 

			else if(!(cur in Kan2Tam)){
				SaveText += cur
				prana =false
			}

		}
		return SaveText;
	}
	else if(from == "M")
	{
		text = malToKan(text);
		SaveText = ''
		for(var i=0;i<text.length;i++){
			if(i>0)
				prev = text.charAt(i-1)
			cur = text.charAt(i)
			nxt = text.charAt(i+1) 
			nxt2 = text.charAt(i+2) 
			
			if(cur == 'ಂ' || cur == '೦' ){
				if(nxt in kaVarga ){
					SaveText += 'ங்';
				}
				else if(nxt in chaVarga ){
					SaveText += 'ஞ்';
				}
				else if(nxt in TaVarga ){
					SaveText += 'ண்';
				}
				else if(nxt in taVarga ){
					SaveText += 'ந்';
				}
				else if(nxt in paVarga ){
					SaveText += 'ம்';
				}
				else{
					SaveText += Kan2Tam[cur]
				}
			}


			else if(cur in HalfConsonants && prana == true){
				SaveText = SaveText.replace(/<\/b>$/,Kan2Tam[cur]+"</b>");
				prana = false
			}

			// else if((cur == 'ನ' && nxt == '$')){
			// 	if(nxt2 in kaVarga ){
			// 		SaveText += 'ங';
			// 	}
			// 	else if(nxt2 in chaVarga ){
			// 		SaveText += 'ஞ';
			// 	}
			// 	else if(nxt2 in TaVarga ){
			// 		SaveText += 'ண';
			// 	}
			// 	else if(nxt2 in taVarga ){
			// 		SaveText += 'ந';
			// 	}
			// 	else if(nxt2 in paVarga ){
			// 		SaveText += 'ம';
			// 	}
			// 	else if(cur == 'न'){
			// 		SaveText += 'ன';
			// 	}
			// 	else{
			// 		SaveText += Kan2Tam[cur]	
			// 	}
			// 	prana = false
			// }


			else if(cur == 'ನ'){
				if(prev == " " ){
					SaveText += 'ந';
				}
				else if(nxt == " ")
					SaveText += 'ன';
				else 
					SaveText += 'ன';
				prana =false
			}

			else if(cur in Kan2Tam){
				prana =false
				if(cur in MahaPrana)
					prana = true
				SaveText += Kan2Tam[cur];
			} 

			else if(!(cur in Kan2Tam)){
				SaveText += cur
				prana =false
			}

		}
		return SaveText;
	}

}

function punToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			if(unicode == 0x0A01)
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if(unicode == 0x0A59)
			{
				answer += String.fromCharCode(0x0C96);
			}
			else if(unicode == 0x0A5A)
			{
				answer += String.fromCharCode(0x0C98);
			}
			else if(unicode == 0x0A5B)
			{
				answer += String.fromCharCode(0x0C9C);
			}
			else if(unicode == 0x0A5C)
			{
				answer += String.fromCharCode(0x0CB0);
			}
			else if(unicode == 0x0A66)
			{
				answer += String.fromCharCode(0x0CAB);
			}
			else if(unicode == 0x0A70)
			{
				answer += String.fromCharCode(0x0C82); 
			}			
			else if((unicode == 0x0A51) || ((unicode >= 0x0A71) && (unicode <= 0x0A75)))
			{
				answer += "";
			}
			else
			{
				unicode += 0x0280;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	var lastChar = answer.charCodeAt(answer.length - 1);
	if((lastChar >= 0x0C95) && (lastChar <= 0x0CB9) && (answer.length > 1))
	{
		answer += String.fromCharCode(0x0CCD);
	}
	return answer;
}

function telToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			if(unicode == 0x0C00)
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if(unicode == 0x0C01)
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if(unicode == 0x0C34)
			{
				answer += String.fromCharCode(0x0CB3);
			}
			else if(unicode == 0x0C58)
			{
				answer += String.fromCharCode(0x0CA4) + String.fromCharCode(0x0CCD) + String.fromCharCode(0x0CB8);
			}
			else if(unicode == 0x0C59)
			{
				answer += String.fromCharCode(0x0CA6) + String.fromCharCode(0x0CCD) + String.fromCharCode(0x0C9C);
			}
			else if((unicode >= 0x0C70) && (unicode <= 0x0C7F))
			{
				answer += "";
			}
			else
			{
				unicode += 0x0080;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function oriToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			if(unicode == 0x0B01)
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if(unicode == 0x0B0F)
			{
				answer += String.fromCharCode(0x0C8E);
			}
			else if(unicode == 0x0B13)
			{
				answer += String.fromCharCode(0x0C92);
			}
			else if((unicode == 0x0B5C) || (unicode == 0x0B5D))
			{
				answer += String.fromCharCode(0x0CB0);
			}
			else if(unicode == 0x0B5F)
			{
				answer += String.fromCharCode(0x0CAF);
			}
			else if(((unicode >= 0x0B70) && (unicode <= 0x0B7F)) || (unicode == 0x0B57))
			{
				answer += "";
			}
			else
			{
				unicode += 0x0180;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function malToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			var kvarg = [0x0D15, 0x0D16, 0x0D17, 0x0D18];
			var cvarg = [0x0D1A, 0x0D1B, 0x0D1C, 0x0D1D];
			var tvarg = [0x0D1F, 0x0D20, 0x0D21, 0x0D22];
			var thvarg = [0x0D24, 0x0D25, 0x0D26, 0x0D27];
			var pvarg = [0x0D2A, 0x0D2B, 0x0D2C, 0x0D2D];
			if((unicode == 0x0D19) && (text.charCodeAt(i + 1) == 0x0D4D) && (text.charCodeAt(i + 2) == 0x0D19))
			{
				answer += String.fromCharCode(0x0C82) + String.fromCharCode(0x0C97) + String.fromCharCode(0x0C82) + String.fromCharCode(0x0C97); 
				i += 2;
			}
			else if((unicode == 0X0D2E) && (text.charCodeAt(i + 1) == 0x0D4D) && (pvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0D28) && (text.charCodeAt(i + 1) == 0x0D4D) && (thvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0D23) && (text.charCodeAt(i + 1) == 0x0D4D) && (tvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0D1E) && (text.charCodeAt(i + 1) == 0x0D4D) && (cvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0D19) && (text.charCodeAt(i + 1) == 0x0D4D) && (kvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if(unicode == 0x0D01)
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if(unicode == 0x0D29)
			{
				answer += String.fromCharCode(0x0CA8);
			}
			else if(unicode == 0x0D31)
			{
				answer += String.fromCharCode(0x0CB0);
			}
			else if(unicode == 0x0D34)
			{
				answer += String.fromCharCode(0x0CB0);
			}
			else if(unicode == 0x0D3A)
			{
				answer += String.fromCharCode(0x0C9F);
			}
			else if((unicode == 0x0D4E) || (unicode == 0x0D57) || ((unicode >= 0x0D70) && (unicode <= 0x0D7F)))
			{
				answer += "";
			}
			else
			{
				unicode -= 0x0080;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function devToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			var kvarg = [0x0915, 0x0916, 0x0917, 0x0918];
			var cvarg = [0x091A, 0x091B, 0x091C, 0x091D];
			var tvarg = [0x091F, 0x0920, 0x0921, 0x0922];
			var thvarg = [0x0924, 0x0925, 0x0926, 0x0927];
			var pvarg = [0x092A, 0x092B, 0x092C, 0x092D];
			if((unicode == 0X092E) && (text.charCodeAt(i + 1) == 0x094D) && (pvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0928) && (text.charCodeAt(i + 1) == 0x094D) && (thvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0923) && (text.charCodeAt(i + 1) == 0x094D) && (tvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X091E) && (text.charCodeAt(i + 1) == 0x094D) && (cvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0919) && (text.charCodeAt(i + 1) == 0x094D) && (kvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0x0900) || (unicode == 0x0901))
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if((unicode == 0x0904))
			{
				answer += String.fromCharCode(0x0C85);
			}
			else if((unicode == 0x090D) || (unicode == 0x090F))
			{
				answer += String.fromCharCode(0x0C8E);
			}
			else if((unicode == 0x0911) || (unicode == 0x0913))
			{
				answer += String.fromCharCode(0x0C92);
			}
			else if((unicode == 0x0929))
			{
				answer += String.fromCharCode(0x0CA8);
			}
			else if((unicode == 0x0931))
			{
				answer += String.fromCharCode(0x0CB0);
			}
			else if((unicode == 0x0934))
			{
				answer += String.fromCharCode(0x0CB3);
			}
			else if((unicode == 0x0949))
			{
				answer += String.fromCharCode(0x0CCA);
			}
			else if((unicode == 0x094F))
			{
				answer += String.fromCharCode(0x0CCC);
			}
			else if((unicode == 0x0950))
			{
				answer += String.fromCharCode(0x0950);
			}
			else if((unicode == 0x0958))
			{
				answer += String.fromCharCode(0x0C95);
			}
			else if((unicode == 0x0959))
			{
				answer += String.fromCharCode(0x0C96);
			}
			else if((unicode == 0x095A))
			{
				answer += String.fromCharCode(0x0C97);
			}
			else if((unicode == 0x095B))
			{
				answer += String.fromCharCode(0x0C9C);
			}
			else if((unicode == 0x095C))
			{
				answer += String.fromCharCode(0x0CA1);
			}
			else if((unicode == 0x095D))
			{
				answer += String.fromCharCode(0x0CA2);
			}
			else if((unicode == 0x095E))
			{
				answer += String.fromCharCode(0x0CAB);
			}
			else if((unicode == 0x095F))
			{
				answer += String.fromCharCode(0x0CAF);
			}
			else if((unicode == 0x0964) || (unicode == 0x0965))
			{
				answer += ".";
			}
			else if(((unicode >= 0x0970) && (unicode <= 0x097F)) || ((unicode >= 0x0951) && (unicode <= 0x0957)) || (unicode == 0x094E) || (unicode == 0x0945) || (unicode == 0x093A) || (unicode == 0x093B))
			{
				answer += "";
			}
			else
			{
				unicode += 0x0380;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function hinToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			var kvarg = [0x0915, 0x0916, 0x0917, 0x0918];
			var cvarg = [0x091A, 0x091B, 0x091C, 0x091D];
			var tvarg = [0x091F, 0x0920, 0x0921, 0x0922];
			var thvarg = [0x0924, 0x0925, 0x0926, 0x0927];
			var pvarg = [0x092A, 0x092B, 0x092C, 0x092D];
			if((unicode == 0X092E) && (text.charCodeAt(i + 1) == 0x094D) && (pvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0928) && (text.charCodeAt(i + 1) == 0x094D) && (thvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0923) && (text.charCodeAt(i + 1) == 0x094D) && (tvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X091E) && (text.charCodeAt(i + 1) == 0x094D) && (cvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0X0919) && (text.charCodeAt(i + 1) == 0x094D) && (kvarg.indexOf(text.charCodeAt(i + 2)) > -1))
			{
				answer += String.fromCharCode(0x0C82); 
				i += 1;
			}
			else if((unicode == 0x0900) || (unicode == 0x0901))
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if((unicode == 0x0904))
			{
				answer += String.fromCharCode(0x0C85);
			}
			else if((unicode == 0x090D) || (unicode == 0x090F))
			{
				answer += String.fromCharCode(0x0C8E);
			}
			else if((unicode == 0x0911) || (unicode == 0x0913))
			{
				answer += String.fromCharCode(0x0C92);
			}
			else if((unicode == 0x0929))
			{
				answer += String.fromCharCode(0x0CA8);
			}
			else if((unicode == 0x0931))
			{
				answer += String.fromCharCode(0x0CB0);
			}
			else if((unicode == 0x0934))
			{
				answer += String.fromCharCode(0x0CB3);
			}
			else if((unicode == 0x0949))
			{
				answer += String.fromCharCode(0x0CCA);
			}
			else if((unicode == 0x094F))
			{
				answer += String.fromCharCode(0x0CCC);
			}
			else if((unicode == 0x0950))
			{
				answer += String.fromCharCode(0x0950);
			}
			else if((unicode == 0x0958))
			{
				answer += String.fromCharCode(0x0C95);
			}
			else if((unicode == 0x0959))
			{
				answer += String.fromCharCode(0x0C96);
			}
			else if((unicode == 0x095A))
			{
				answer += String.fromCharCode(0x0C97);
			}
			else if((unicode == 0x095B))
			{
				answer += String.fromCharCode(0x0C9C);
			}
			else if((unicode == 0x095C))
			{
				answer += String.fromCharCode(0x0CA1);
			}
			else if((unicode == 0x095D))
			{
				answer += String.fromCharCode(0x0CA2);
			}
			else if((unicode == 0x095E))
			{
				answer += String.fromCharCode(0x0CAB);
			}
			else if((unicode == 0x095F))
			{
				answer += String.fromCharCode(0x0CAF);
			}
			else if((unicode == 0x0964) || (unicode == 0x0965))
			{
				answer += ".";
			}
			else if(((unicode >= 0x0970) && (unicode <= 0x097F)) || ((unicode >= 0x0951) && (unicode <= 0x0957)) || (unicode == 0x094E) || (unicode == 0x0945) || (unicode == 0x093A) || (unicode == 0x093B))
			{
				answer += "";
			}
			else
			{
				unicode += 0x0380;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	var lastChar = answer.charCodeAt(answer.length - 1);
	if((lastChar >= 0x0C95) && (lastChar <= 0x0CB9) && (answer.length > 1))
	{
		answer += String.fromCharCode(0x0CCD);
	}
	return answer;
}

function gujToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			if(unicode == 0x0A81)
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if((unicode == 0x0A8D) || (unicode == 0x0A8F))
			{
				answer += String.fromCharCode(0x0C8E);
			}
			else if((unicode == 0x0A91) || (unicode == 0x0A93))
			{
				answer += String.fromCharCode(0x0C92);
			}
			else if((unicode == 0x0AC5))
			{
				answer += String.fromCharCode(0x0CC6);
			}
			else if((unicode == 0x0AC9))
			{
				answer += String.fromCharCode(0x0CCA);
			}
			else if((unicode == 0x0AD0))
			{
				answer += String.fromCharCode(0x0AD0);
			}
			else if((unicode == 0x0AF0))
			{
				answer += ".";
			}
			else if((unicode == 0x0AF1))
			{
				answer += String.fromCharCode(0x20B9);
			}
			else
			{
				unicode += 0x0200;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	var lastChar = answer.charCodeAt(answer.length - 1);
	if((lastChar >= 0x0C95) && (lastChar <= 0x0CB9) && (answer.length > 1))
	{
		answer += String.fromCharCode(0x0CCD);
	}
	return answer;
}

function benToKan(text)
{
	var answer = "";
	var patt = new RegExp(/\s/);
	for(var i = 0; i < text.length; i++)
	{
		if(patt.test(text.charAt(i)) == true)
		{
			answer += text.charAt(i);
		}
		else
		{
			var unicode = text.charCodeAt(i);
			if(unicode == 0x0981)
			{
				answer += String.fromCharCode(0x0C82);
			}
			else if(unicode == 0x098F)
			{
				answer += String.fromCharCode(0x0C8E);
			}
			else if(unicode == 0x0993)
			{
				answer += String.fromCharCode(0x0C92);
			}
			else if(unicode == 0x09CE)
			{
				answer += String.fromCharCode(0x0CA4);
			}
			else if((unicode == 0x09DC) || (unicode == 0x09DD) || (unicode == 0x09F0) || (unicode == 0x09F1))
			{
				answer += String.fromCharCode(0x0CB0);
			}
			else if(unicode == 0x09DF)
			{
				answer += String.fromCharCode(0x0CAF);
			}
			else if((unicode == 0x09F2) || (unicode == 0x09F3) || (unicode == 0x09FB))
			{
				answer += String.fromCharCode(0x20B9);
			}
			else if((unicode == 0x0980) || (unicode == 0x09D7) || ((unicode >= 0x09F4) && (unicode <= 0x09FA)))
			{
				answer += "";
			}
			else
			{
				unicode += 0x300;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	var lastChar = answer.charCodeAt(answer.length - 1);
	if((lastChar >= 0x0C95) && (lastChar <= 0x0CB9) && (answer.length > 1))
	{
		answer += String.fromCharCode(0x0CCD);
	}
	return answer;
}



function intelliSense()
{
	var doc = document.getElementsByTagName('html');
	var docText = doc[0].innerHTML;

	var arr = docText.split(/[^\u0C80-\u0CF2\u0B82-\u0BFA\u0900-\u097F\u0A00-\u0A7F\u0C00-\u0C7F\u0B00-\u0B7F\u0D01-\u0D7F\u0A80-\u0AFF\u0980-\u09FF]+/g);

	var tpatt = new RegExp(/[\u0B82-\u0BFA]+/g);
	var kpatt = new RegExp(/[\u0C80-\u0CF2]+/g);
	var dpatt = new RegExp(/[\u0900-\u097F]+/g);
	var telpatt = new RegExp(/[\u0C00-\u0C7F]+/g);
	var mpatt = new RegExp(/[\u0D01-\u0D7F]+/g);
	var gpatt = new RegExp(/[\u0A80-\u0AFF]+/g);
	var bpatt = new RegExp(/[\u0980-\u09FF]+/g);
	var opatt = new RegExp(/[\u0B00-\u0B7F]+/g);
	var ppatt = new RegExp(/[\u0A00-\u0A7F]+/g);

	for(var i = 0; i < arr.length; i++)
	{
		if(kpatt.test(arr[i]) == true)
		{
			kCount++;
		}
		else if(mpatt.test(arr[i]) == true)
		{
			mcount++;
		}
		else if(bpatt.test(arr[i]) == true)
		{
			bcount++;
		}
		else if(tpatt.test(arr[i]) == true)
		{
			tCount++;
		}
		else if(dpatt.test(arr[i]) == true)
		{
			dCount++;
		}
		else if(telpatt.test(arr[i]) == true)
		{
			telcount++;
		}	
		else if(gpatt.test(arr[i]) == true)
		{
			gcount++;
		}
		else if(ppatt.test(arr[i]) == true)
		{
			pcount++;
		}
		else if(opatt.test(arr[i]) == true)
		{
			ocount++;
		}	
	}
	var lArr = ["d", "k", "t", "tel", "m", "g", "b", "p", "o"];
	var vArr = [dCount, kCount, tCount, telcount, mcount, gcount, bcount, pcount, ocount];
	for(var i = 0; i < vArr.length - 1; i++)
	{
		for(var j = i + 1; j < vArr.length; j++)
		{
			if(vArr[i] < vArr[j])
			{
				var temp = vArr[i];
				vArr[i] = vArr[j];
				vArr[j] = temp;
				temp = lArr[i];
				lArr[i] = lArr[j];
				lArr[j] = temp; 
			}
		}
	}
	console.log(lArr);
	console.log(vArr);
	

	if(lArr[0] == "t")
	{
		chrome.runtime.sendMessage('tamMajority', function(response)
		{
			console.log("Content to Background: Tamil Words Majority. Response: " + response);
		});
		from = "T";
	}
	else if(lArr[0] == "k")
	{
		chrome.runtime.sendMessage('kanMajority', function(response)
		{
			console.log("Content to Background: Kannada Words Majority. Response: " + response);
		});
		from = "K";
	}
	else if(lArr[0] == "b")
	{
		chrome.runtime.sendMessage('benMajority', function(response)
		{
			console.log("Content to Background: Bengali Words Majority. Response: " + response);
		});
		from = "B";
	}
	else if(lArr[0] == "g")
	{
		chrome.runtime.sendMessage('gujMajority', function(response)
		{
			console.log("Content to Background: Gujarati Words Majority. Response: " + response);
		});
		from = "G";
	}
	else if(lArr[0] == "d")
	{
		chrome.runtime.sendMessage('devMajority', function(response)
		{
			console.log("Content to Background: Devnagari Words Majority. Response: " + response);
		});
		from = "D";
	}
	else if(lArr[0] == "tel")
	{
		chrome.runtime.sendMessage('telMajority', function(response)
		{
			console.log("Content to Background: Telugu Words Majority. Response: " + response);
		});
		from = "TEL";
	}
	else if(lArr[0] == "m")
	{
		chrome.runtime.sendMessage('malMajority', function(response)
		{
			console.log("Content to Background: Malayalam Words Majority. Response: " + response);
		});
		from = "M";
	}
	else if(lArr[0] == "o")
	{
		chrome.runtime.sendMessage('oriMajority', function(response)
		{
			console.log("Content to Background: Oriya Words Majority. Response: " + response);
		});
		from = "O";
	}
	else if(lArr[0] == "p")
	{
		chrome.runtime.sendMessage('punMajority', function(response)
		{
			console.log("Content to Background: Punjabi Words Majority. Response: " + response);
		});
		from = "P";
	}
}

intelliSense();

chrome.runtime.sendMessage('transliterate', function(response) // Should the page be transliterated?
{
    console.log("Content to Background: Transliterate?. Response: " + response);
    var arr = response.split("_");
    status = arr[0];
    if(status == "ok") // proceed to transliterate
    {
        var transliteratedText = "";
        var body = document.getElementsByTagName('html');
        var fullText = body[0].innerHTML;
        var indicArray;
        var nonindicArray;
        if(from == "K")
        {
            indicArray = fullText.split(/[^\u0C80-\u0CF2]+/g);
            nonindicArray = fullText.split(/[\u0C80-\u0CF2]+/g);
        }
        else if(from == "T")
        {
            indicArray = fullText.split(/[^\u0B82-\u0BFA]+/g);
            nonindicArray = fullText.split(/[\u0B82-\u0BFA]+/g);    
        }
        else if(from == "D")
        {
        	indicArray = fullText.split(/[^\u0900-\u097F]+/g);
            nonindicArray = fullText.split(/[\u0900-\u097F]+/g);
        }
        else if(from == "TEL")
        {
        	indicArray = fullText.split(/[^\u0C00-\u0C7F]+/g);
            nonindicArray = fullText.split(/[\u0C00-\u0C7F]+/g);
        }
        else if(from == "M")
        {
        	indicArray = fullText.split(/[^\u0D01-\u0D7F]+/g);
            nonindicArray = fullText.split(/[\u0D01-\u0D7F]+/g);
        }
        else if(from == "G")
        {
        	indicArray = fullText.split(/[^\u0A80-\u0AFF]+/g);
            nonindicArray = fullText.split(/[\u0A80-\u0AFF]+/g);
        }
        else if(from == "O")
        {
        	indicArray = fullText.split(/[^\u0B00-\u0B7F]+/g);
            nonindicArray = fullText.split(/[\u0B00-\u0B7F]+/g);
        }
        else if(from == "P")
        {
        	indicArray = fullText.split(/[^\u0A00-\u0A7F]+/g);
            nonindicArray = fullText.split(/[\u0A00-\u0A7F]+/g);
        }
        else if(from == "B")
        {
        	indicArray = fullText.split(/[^\u0980-\u09FF]+/g);
            nonindicArray = fullText.split(/[\u0980-\u09FF]+/g);
        }
        for(var i = 0; i < nonindicArray.length; i++)
        {
            transliteratedText += nonindicArray[i];
            if(i < indicArray.length)
                transliteratedText += transliterate(indicArray[i + 1]);
        }
        body[0].innerHTML = transliteratedText;
        chrome.runtime.sendMessage('reset', function(res) // Transliteration done. Reset the transliterate variable
        {
            console.log("Content to Background: Transliteration Done. Reset Please. Response: " + res)
        });
    }
    else
    {
        status = "nok";
    }
});