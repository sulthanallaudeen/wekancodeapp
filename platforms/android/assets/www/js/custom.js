$(document).ready(function () {



var pathname = window.location.href; // Returns path only


alert(pathname)
if(pathname.indexOf('android_asset') != -1){
    alert("Android");
}
else if(pathname.indexOf('localhost') != -1){
    alert("LocalHost");
}
else if(pathname.indexOf('localhost') != -1){
	alert('Online')
}
else
{
	alert("Error");	
}




//alert(pathname)






var mode = 'live';
//var mode = 'local';
if(mode=='live')
{
	var appPath = 'http://wekancode.com/wekancode/';
	//var appPath = 'http://localhost/wekancode/';
	var appPath = 'http://192.168.1.5/wekancode/';
}
else
{
	var appPath = 'http://localhost/wekancode/';
	var appPath = 'http://192.168.1.5/wekancode/';
}
localStorage.setItem("appPath", appPath);







});