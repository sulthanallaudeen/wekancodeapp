$(document).ready(function () {

var currentpath = window.location.href; 
//Getting Current Path

//Checking and Setting App Path

if(currentpath.indexOf('android_asset') != -1){
//Current App is Android
var appPath = 'http://wekancode.com/wekancode/';

}
else if(currentpath.indexOf('localhost') != -1){
//Current App is Localhost
var appPath = 'http://localhost/wekancode/';
}
else if(currentpath.indexOf('wekancode.com') != -1){
//Current App is Online
var appPath = 'http://wekancode.com/wekancode/';
}
else
{
//Can't detect the App state, So concluding as localhost
var appPath = 'http://192.168.1.9/wekancode/';
}
//Setting the localstorage for API Calls
//var appPath = 'http://wekancode.com/wekancode/';


localStorage.setItem("currentPath", currentpath);

localStorage.setItem("appPath", appPath);


});