var to = "B";
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Tam2Rom = {
'அ':'a', 'ஆ':'aa', 'இ':'i', 'ஈ': 'ee', 'உ':'u', 'ஊ':'U', ' ':'R', 'எ':'e', 'ஏ':'E', 'ஐ':'ai', 'ஒ':'o','ஓ':'O','ஔ':'au',
'ஃ':'aH','க':'ka','ங':'n', 'ச':'cha', 'ஞ':'n','ட':'Ta', 'ண':'Na', 'த':'tha', 'ந':'na', 'ப':'pa', 'ம':'ma', 'ய':'ya',
'ர':'ra', 'ல':'la','வ':'va', 'ழ':'La', 'ள':'La','ற':'ra', 'ன':'na', 'ஜ':'ja', 'ஷ':'sha', 'ஸ':'sa', 'ஹ':'ha', 'க்ஷ':'ksha',
'ஸ்ரீ':'shri',
'ா':'aa','ி':'i','ீ':'I','ு':'u','ூ':'oo','ெ':'e', 'ே':'E', 'ை':'ai', 'ொ':'o', 'ோ':'O',
 'ௌ':'au','்':''
};

var TamHalfConso = {'ா':true,'ி':true,'ீ':true,'ு':true,'ூ':true,'ெ':true, 'ே':true, 'ை':true, 'ொ':true, 'ோ':true,
 'ௌ':true,'்':true
};

var TranslitToKannada = {'a':'ಅ', 'b':'ಬ್', 'c':'ಕ್', 'd':'ದ್', 'e':'ಎ', 'f':'‌‌ಫ್','g':'ಗ್', 'h':'ಹ್', 'i':'ಇ', 'j':'ಜ್','k':'ಕ್','l':'ಲ್',
'm':'ಮ್', 'n':'ನ್', 'o':'ಒ', 'p':'ಪ್', 'r':'ರ್', 's':'ಸ್', 't':'ತ್', 'u':'ಉ', 'w':'ವ್', 'v':'ವ್', 'y':'ಯ್', ' ':'','kh':'ಖ್',
'gh':'ಘ್', 'ch':'ಚ್', 'jh':'ಝ್', 'th':'ತ್', 'dh':'ಧ್', 'nh':'ಣ್', 'ph':'ಫ್', 'bh':'ಭ್', 'sh':'ಶ್','L':'ಳ್', 'D':'ಡ್', 'Sh':'ಷ್',
'Th':'ಥ್', 'R':'ೃ','N':'ಣ್', 'T':'ಟ್', 'I':'ಈ', 'O':'ಓ', 'A':'ಆ', 'E':'ಏ','U':'ಊ', 'CH':'ಛ್'};

var vowels = {'a':true, 'e':true, 'i':true, 'o':true, 'u':true, 'A':true, 'E':true, 'I':true, 'O':true, 'U':true};
var consonants = {'b':true, 'c':true, 'd':true, 'f':true, 'g':true, 'h':true, 'j':true, 'k':true, 'l':true, 'm':true,'n':true,'p':true, 'q':true, 'r':true, 's':true, 't':true, 'v':true, 'x':true, 'y':true, 'z':true,'B':true, 'C':true, 'D':true, 'G':true,'H':true, 'J':true, 'K':true, 'L':true, 'M':true, 'N':true, 'P':true, 'Q':true,'R':true, 'S':true, 'T':true, 'U':true, 'V':true,'W':true, 'X':true, 'Y':true, 'Z':true, ' ':true};
var hList = {'k':true, 'g':true, 'c':true, 'j':true, 't':true, 'd':true, 'p':true, 'b':true, 's':true, 'm':true, 'T':true, 'S':true};
var nasalConsonants = {'k':true, 'g':true, 'c':true, 'j':true, 't':true, 'd':true, 'p':true, 'b':true, 's':true, 'h':true};

function ToKannada(x){
    var prevIsConsonant = false;
    var SaveText = '';
    var NasalPressed = false;
    var DoubleVowel = false;
    var hNext = false;

    x =  x + " ";

    for(var i=0;i<x.length;i++){
        var cur = x.charAt(i);
        var nxt = x.charAt(i+1);
        if(DoubleVowel){
            DoubleVowel = false;
            continue;
        }

        else if(hNext){
            hNext = false;
            continue;
        }

        else if(cur in consonants){
            if(nxt == 'h'){
                hNext = true;
                if(cur in hList){
                    if((cur+nxt) in TranslitToKannada){
                        SaveText = SaveText + TranslitToKannada[cur + nxt];
                    }
                    else
                        SaveText = SaveText + cur;

                }
            }

            else if(!prevIsConsonant && (cur == 'n' || cur == 'm') && nxt in nasalConsonants){
                SaveText = SaveText + 'ಂ';
                prevIsConsonant = false;
            }

            else{
                if(cur == 'R')
                    SaveText = SaveText + 'ೃ';
                else{
                    if(cur in TranslitToKannada)
                        SaveText = SaveText + TranslitToKannada[cur];
                    else
                        SaveText = SaveText + cur;
                }
            }
            prevIsConsonant = true;
        }

        else if(cur in vowels && prevIsConsonant){
            prevIsConsonant = false;
            SaveText = SaveText.replace(/್$/,"");

            if(cur == 'a' && nxt == 'a'){
                SaveText = SaveText + 'ಾ';
                DoubleVowel = true;
            }

            else if(cur == 'e' && nxt == 'e'){
                SaveText = SaveText + 'ೀ';
                DoubleVowel = true;
            }

            else if(cur == 'o' && nxt == 'o'){
                SaveText = SaveText + 'ೂ';
                DoubleVowel = true;
            }

            else if(cur == 'a' && nxt == 'i'){
                SaveText = SaveText + 'ೈ';
                DoubleVowel = true;
            }

            else if(cur == 'a' && nxt == 'u'){
                SaveText = SaveText + 'ೌ';
                DoubleVowel = true;
            }

            else if(cur == 'a' && nxt == 'H'){
                SaveText = SaveText + 'ಃ';
                DoubleVowel = true;
            }

            else if(cur == 'a')
                continue;

            else if(cur == 'e')
                SaveText = SaveText + 'ೆ';

            else if(cur == 'E')
                SaveText = SaveText + 'ೇ';

            else if(cur == 'i')
                SaveText = SaveText + 'ಿ';

            else if(cur == 'I')
                SaveText = SaveText + 'ೀ';

            else if(cur == 'o')
                SaveText = SaveText + 'ೊ';

            else if(cur == 'O')
                SaveText = SaveText + 'ೋ';

            else if(cur == 'u')
                SaveText = SaveText + 'ು';

            else if(cur == 'U')
                SaveText = SaveText + 'ೂ';

            else{
                if(cur in TranslitToKannada)
                    SaveText = SaveText + TranslitToKannada[cur];
                else
                    SaveText = SaveText + cur;
            }
        }

        else{
            if(cur == 'a' && nxt == 'a'){
                SaveText = SaveText + 'ಆ';
                DoubleVowel = true;
            }

            else if(cur == 'e' && nxt == 'e'){
                SaveText = SaveText + 'ಈ';
                DoubleVowel = true;
            }

            else if(cur == 'o' && nxt == 'o'){
                SaveText = SaveText + 'ಊ';
                DoubleVowel = true;
            }

            else if(cur == 'a' && nxt == 'i'){
                SaveText = SaveText + 'ಐ';
                DoubleVowel = true;
            }


            else if(cur == 'a' && nxt == 'u'){
                SaveText = SaveText + 'ಔ';
                DoubleVowel = true;
            }

            else if(cur in vowels){
                if(cur in TranslitToKannada)
                    SaveText = SaveText + TranslitToKannada[cur];
                else
                    SaveText = SaveText + cur;
            }
        }
    }

    SaveText = SaveText + " ";
    if(nxt in TranslitToKannada)
        return  SaveText + TranslitToKannada[nxt];
    return SaveText + cur;
}
function pronunciation(text)
{
	var vocalics = ["ಂ","ಃ", "ಕ", "ಖ", "ಗ", "ಘ", "ಚ", "ಛ", "ಜ", "ಝ", "ಟ", "ಠ", "ಡ", "ಢ", "ತ", "ಥ", "ದ", "ಧ", "ಪ", "ಫ", "ಬ", "ಭ", "ಯ","ರ","ಲ","ಳ","ವ","ಶ","ಷ","ಸ","ಹ","ಾ","ಿ","ೀ","ು","ೂ","ೆ","ೇ","ೊ","ೋ"];
	var res = "";
	for(var i = 0; i < text.length; i++)
	{
		var done = false;
		var cur = text.charAt(i);
		var prev = "";
		var prevprev = "";
		var nxt = "";
		var nxtnxt = "";
		if(i > 0)
		{
			prev = text.charAt(i - 1);
		}
		if(i > 1)
		{
			prevprev = text.charAt(i - 2);
		}
		if(i < text.length - 1)
		{
			nxt = text.charAt(i + 1);
		}
		if(i < text.length - 2)
		{
			nxtnxt = text.charAt(i + 1);
		}
		if(cur == "ಕ" && prev == "ಂ" )
		{
			res += "ಗ";
			done = true;
		}
		if(cur == "ಚ" && prev == "ಂ")
		{
			res += "ಜ";
			done = true;
		}
		if(cur == "ಟ" && prev == "ಂ" )
		{
			res += "ಡ";
			done = true;
		}
		if(cur == "ತ" && prev == "ಂ" )
		{
			res += "ದ";
			done = true;
		}
		if(cur == "ಪ" && prev == "ಂ" )
		{
			res += "ಬ";
			done = true;
		}

		if(!done && (vocalics.indexOf(prev) != -1) && (vocalics.indexOf(nxt) != -1) && (cur == "ಕ"))
		{
			res += "ಹ";
			done = true;
		}
		if(!done && (vocalics.indexOf(prev) != -1) && (vocalics.indexOf(nxt) != -1) && (cur == "ಟ"))
		{
			res += "ಡ";
			done = true;
		}
		if(!done && (vocalics.indexOf(prev) != -1) && (vocalics.indexOf(nxt) != -1) && (cur == "ತ"))
		{
			res += "ದ";
			done = true;
		}
		if(!done && (vocalics.indexOf(prev) != -1) && (vocalics.indexOf(nxt) != -1) && (cur == "ಪ"))
		{
			res += "ಬ";
			done = true;
		}
		if(!done && (vocalics.indexOf(prev) != -1) && (vocalics.indexOf(nxt) != -1) && (cur == "ಚ"))
		{
			res += "ಶ";
			done = true;
		}

		if(i == 0 && cur == "ಚ")
		{
			res += "ಸ";

			done = true;
		}

		if(i == 0 && cur =="ಟ")
		{
			res += "ಡ";
			done = true;
		}

		if(!done)
			res += cur;
	}

	return res;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function transliterate(text) // Transliteration function
{
    if((from == "T") && (to == "B"))
    {
    	var x = '';
        for (var i = 0; i < text.length; i++){
            if(text.charAt(i) in Tam2Rom){
                if(text.charAt(i) in TamHalfConso)
                    x = x.replace(/a$/,"");
                x += Tam2Rom[text.charAt(i)];
            }
            else
                x += text.charAt(i);
        }
        return kanToBen(pronunciation(ToKannada(x)));
    }
    else if((from == "D") && (to == "B"))
    {
    	return devToBen(text);
    }
    else if((from == "G") && (to == "B"))
    {
    	return gujToBen(text);
    }
    else if((from == "P") && (to == "B"))
    {
    	return punToBen(text);
    }
    else if((from == "O") && (to == "B"))
    {
    	return oriToBen(text);
    }
    else if((from == "K") && (to == "B"))
    {
    	return kanToBen(text);
    }
    else if((from == "TEL") && (to == "B"))
    {
    	return telToBen(text);
    }
    else if((from == "M") && (to == "B"))
    {
    	return malToBen(text);
    }
    else
    {
    	alert("Not supported");
    	return text;
    }
}

function malToBen(text)
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
			if(unicode == 0x0D0E)
			{
				answer += String.fromCharCode(0x098F);
			}
			else if(unicode == 0x0D12)
			{
				answer += String.fromCharCode(0x0993);
			}
			else if(unicode == 0x0D29)
			{
				answer += String.fromCharCode(0x09A8);
			}
			else if(unicode == 0x0D31)
			{
				answer += String.fromCharCode(0x09DC);
			}
			else if((unicode == 0x0D33))
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if((unicode == 0x0D34))
			{
				answer += String.fromCharCode(0x09B0);
			}
			else if(unicode == 0x0D35)
			{
				answer += String.fromCharCode(0x09AC);
			}
			else if(unicode == 0x0D3A)
			{
				answer += String.fromCharCode(0x099F);
			}
			else if(unicode == 0x0D46)
			{
				answer += String.fromCharCode(0x09C7);
			}
			else if(unicode == 0x0D4A)
			{
				answer += String.fromCharCode(0x09CB);
			}
			else if((unicode == 0x0D4E) || ((unicode >= 0x0D70) && (unicode <= 0x0D7F)))
			{
				answer += "";
			}
			else
			{
				unicode -= 0x0380;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function telToBen(text)
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
				answer += String.fromCharCode(0x0981);
			}
			else if(unicode == 0x0C0E)
			{
				answer += String.fromCharCode(0x098F);
			}
			else if(unicode == 0x0C12)
			{
				answer += String.fromCharCode(0x0993);
			}
			else if(unicode == 0x0C31)
			{
				answer += String.fromCharCode(0x09DC);
			}
			else if((unicode == 0x0C33) || (unicode == 0x0C34))
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if(unicode == 0x0C35)
			{
				answer += String.fromCharCode(0x09AC);
			}
			else if(unicode == 0x0C46)
			{
				answer += String.fromCharCode(0x09C7);
			}
			else if(unicode == 0x0C4A)
			{
				answer += String.fromCharCode(0x09CB);
			}
			else if(((unicode >= 0x0C50) && (unicode <= 0x0C5F)) || ((unicode >= 0x0C70) && (unicode <= 0x0C7F)))
			{
				answer += "";
			}
			else
			{
				unicode -= 0x0280;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function kanToBen(text)
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
			if(unicode == 0x0C8E)
			{
				answer += String.fromCharCode(0x098F);
			}
			else if(unicode == 0x0C92)
			{
				answer += String.fromCharCode(0x0993);
			}
			else if(unicode == 0x0CB1)
			{
				answer += String.fromCharCode(0x09DC);
			}
			else if(unicode == 0x0CB3)
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if(unicode == 0x0CB5)
			{
				answer += String.fromCharCode(0x09AC);
			}
			else if(unicode == 0x0CC6)
			{
				answer += String.fromCharCode(0x09C7);
			}
			else if(unicode == 0x0CCA)
			{
				answer += String.fromCharCode(0x09CB);
			}
			else if((unicode == 0x0CD5) || (unicode == 0x0CD6) || (unicode == 0x0CDE) || ((unicode >= 0x0A71) && (unicode <= 0x0A75)))
			{
				answer += "";
			}
			else
			{
				unicode -= 0x0300;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function oriToBen(text)
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
			if(unicode == 0x0B33)
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if(unicode == 0x0B35)
			{
				answer += String.fromCharCode(0x09AC);
			}
			else if((unicode == 0x0B56) || ((unicode >= 0x0B70) && (unicode <= 0x0B7F)))
			{
				answer += "";
			}
			else
			{
				unicode -= 0x0180;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function punToBen(text)
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
			if(unicode == 0x0A33)
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if(unicode == 0x0A35)
			{
				answer += String.fromCharCode(0x09AC);
			}
			else if(unicode == 0x0A59)
			{
				answer += String.fromCharCode(0x0996);
			}
			else if(unicode == 0x0A5A)
			{
				answer += String.fromCharCode(0x0998);
			}
			else if(unicode == 0x0A5B)
			{
				answer += String.fromCharCode(0x099C) + String.fromCharCode(0x09BC);
			}
			else if(unicode == 0x0A5C)
			{
				answer += String.fromCharCode(0x09B0);
			}
			else if(unicode == 0x0A5E)
			{
				answer += String.fromCharCode(0x09AB);
			}
			else if(unicode == 0x0A70)
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if((unicode >= 0x0A71) && (unicode <= 0x0A75))
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

function gujToBen(text)
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
			if(unicode == 0x0A8D)
			{
				answer += String.fromCharCode(0x098F);
			}
			else if(unicode == 0x0A91)
			{
				answer += String.fromCharCode(0x0993);
			}
			else if(unicode == 0x0AB3)
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if(unicode == 0x0AB5)
			{
				answer += String.fromCharCode(0x09AC);
			}
			else if(unicode == 0x0AC5)
			{
				answer += String.fromCharCode(0x09C7);
			}
			else if(unicode == 0x0AC9)
			{
				answer += String.fromCharCode(0x09CB);
			}
			else if(unicode == 0x0AD0)
			{
				answer += String.fromCharCode(0x0AD0);
			}
			else if(unicode == 0x0AF0)
			{
				answer += ".";
			}
			else if(unicode == 0x0AF1)
			{
				answer += String.fromCharCode(0x20B9);
			}
			else
			{
				unicode -= 0x0100;
				answer += String.fromCharCode(unicode);
			}
		}
	}
	return answer;
}

function devToBen(text)
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
			if(unicode == 0x0904)
			{
				answer += String.fromCharCode(0x0985);
			}
			else if((unicode == 0x090D) || (unicode == 0x090E))
			{
				answer += String.fromCharCode(0x098F);
			}
			else if((unicode == 0x0911) || (unicode == 0x0912))
			{
				answer += String.fromCharCode(0x0993);
			}
			else if((unicode == 0x0929))
			{
				answer += String.fromCharCode(0x09A8);
			}
			else if((unicode == 0x0931))
			{
				answer += String.fromCharCode(0x09B0);
			}
			else if((unicode == 0x0933) || (unicode == 0x0934))
			{
				answer += String.fromCharCode(0x09B2);
			}
			else if((unicode == 0x0935) || (unicode == 0x09AC))
			{
				answer += String.fromCharCode(0x098F);
			}
			else if((unicode == 0x0945) || (unicode == 0x0946))
			{
				answer += String.fromCharCode(0x09C7);
			}
			else if((unicode == 0x0949) || (unicode == 0x094A))
			{
				answer += String.fromCharCode(0x09CB);
			}
			else if((unicode == 0x0950))
			{
				answer += String.fromCharCode(0x0950);
			}
			else if((unicode == 0x0951))
			{
				answer += String.fromCharCode(0x0957);
			}
			else if((unicode == 0x0958))
			{
				answer += String.fromCharCode(0x0995);
			}
			else if((unicode == 0x0959))
			{
				answer += String.fromCharCode(0x0996);
			}
			else if((unicode == 0x095A))
			{
				answer += String.fromCharCode(0x0997);
			}
			else if((unicode == 0x095B))
			{
				answer += String.fromCharCode(0x099C);
			}
			else if((unicode == 0x095C))
			{
				answer += String.fromCharCode(0x09A1);
			}
			else if((unicode == 0x095D))
			{
				answer += String.fromCharCode(0x09A2);
			}
			else if((unicode == 0x095E))
			{
				answer += String.fromCharCode(0x09AB);
			}
			else if((unicode == 0x095F))
			{
				answer += String.fromCharCode(0x09AF);
			}
			else if((unicode == 0x0964))
			{
				answer += String.fromCharCode(0x0964);
			}
			else if((unicode == 0x0965))
			{
				answer += String.fromCharCode(0x0965);
			}
			else if((unicode == 0x0900) || (unicode == 0x093A) || (unicode == 0x093B) || (unicode == 0x094E) || (unicode == 0x094F) || ((unicode >= 0x0951) && (unicode <= 0x0957)) || ((unicode >= 0x0970) && (unicode <= 0x097F)))
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
// this function is used to check which language is present majorly in the page
function intelliSense()
{
	var doc = document.getElementsByTagName('html');
	var docText = doc[0].innerHTML;

	var arr = docText.split(/[^\u0C80-\u0CF2\u0B82-\u0BFA\u0900-\u097F\u0C00-\u0C7F\u0D01-\u0D7F\u0A80-\u0AFF\u0980-\u09FF\u0B00-\u0B7F\u0A00-\u0A7F]+/g);

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
		else if(opatt.test(arr[i]) == true)
		{
			ocount++;
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
	}
	var lArr = ["d", "k", "t", "tel", "m", "g", "b", "o", "p"];
	var vArr = [dCount, kCount, tCount, telcount, mcount, gcount, bcount, ocount, pcount];
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
	else if(lArr[0] == "p")
	{
		chrome.runtime.sendMessage('punMajority', function(response)
		{
			console.log("Content to Background: Punjabi Words Majority. Response: " + response);
		});
		from = "P";
	}
	else if(lArr[0] == "o")
	{
		chrome.runtime.sendMessage('oriMajority', function(response)
		{
			console.log("Content to Background: Oriya Words Majority. Response: " + response);
		});
		from = "O";
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
        else if(from == "B")
        {
        	indicArray = fullText.split(/[^\u0980-\u09FF]+/g);
            nonindicArray = fullText.split(/[\u0980-\u09FF]+/g);
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
