//Always runs in the background

var from = "K";
var to = "TEL";
var reloadable = false;
var transliterate = false;

function clickHandler(info, tab)
{
	to = info.menuItemId;
	chrome.tabs.getSelected(null, function(tab)
	{
		if(tab.url.substring(0, 7) == "chrome:") // if the page is a chrome settings page or if from and to values are the same
		{
			reloadable = false;
		}
		else
		{
			transliterate = true;
			reloadable = true;
			chrome.tabs.reload();
		}
	});
}

chrome.runtime.onInstalled.addListener(function()
{
	chrome.contextMenus.create(
	{
		"title" : "Transliterate To Telugu",
		"contexts": ["page"],
		"id": "TEL"
	});
});

chrome.contextMenus.onClicked.addListener(clickHandler);


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) 
{
	if(message == "tamMajority")
	{
		from = "T";
		sendResponse("Tamil Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});
	}
	else if(message == "devMajority")
	{
		from = "D";
		sendResponse("Devanagari Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});		
	}
	else if(message == "punMajority")
	{
		from = "P";
		sendResponse("Punjabi Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});		
	}
	else if(message == "oriMajority")
	{
		from = "O";
		sendResponse("Oriya Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});		
	}
	else if(message == "benMajority")
	{
		from = "B";
		sendResponse("Bengali Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});		
	}
	else if(message == "gujMajority")
	{
		from = "G";
		sendResponse("Gujarati Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});		
	}
	else if(message == "malMajority")
	{
		from = "M";
		sendResponse("Malayalam Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});		
	}
	else if(message == "kanMajority")
	{
		from = "K";
		sendResponse("Kannada Majority");
		chrome.contextMenus.update("TEL", {"enabled":true});
		chrome.contextMenus.update("TEL", {"title":"To Telugu"});
	}
	else if(message == "telMajority")
	{
		from = "TEL";
		sendResponse("Telugu Majority");
		chrome.contextMenus.update("TEL", {"enabled":false});
		chrome.contextMenus.update("TEL", {"title":"Page already in Telugu"});
	}
	else if(message == "transliterate")
	{
		if(transliterate == true)
			sendResponse("ok_" + from + "_" + to); // If transliteratinong has been requested, grant permission to transliterate
		else
			sendResponse("notOk"); 
	}
	else if(message == 'reset') // Once transliteration is done, reset message is received
	{
		transliterate = false;
		sendResponse("backgroundReset");
	}
});