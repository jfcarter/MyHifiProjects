(function() {

// Every great app starts with a great name (keep it short so that it can fit in the tablet button)
var APP_NAME = "NAV";
// Link to your app's HTML file
var APP_URL = "C:/Users/0425-DESKTOP-PC/Downloads/Screen.html";
//Link to Navigation ICON
var APP_ICON = "https://hifi-content.s3.amazonaws.com/jedon/Game_Creater_Toolkit/AI_Nav/Navigation_Icon.png";
// Get a reference to the tablet
var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");

// "Install" your cool new app to the tablet
// The following lines create a button on the tablet's menu screen
var button = tablet.addButton({
icon: APP_ICON,
text: APP_NAME
});

// When user click the app button, we'll display our app on the tablet screen
function onClicked() {
	tablet.gotoWebScreen(APP_URL);
}
button.clicked.connect(onClicked);

function cleanup(){
	tablet.removeButton(button);
}
Script.scriptEnding.connect(cleanup);
}());