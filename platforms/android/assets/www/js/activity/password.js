$(document).ready(function () {
//Setting App Path
var appPath = localStorage.getItem("appPath");
//Checking for User's Login
checklogin()
function checklogin()
{
	if (localStorage.getItem("user_id") === null) {
	  	//Not Logged in
        window.location.href = "logout.html";        
	}	
	else
	{
		//User Logged in
		
	}
}

//Login User

$("#updatepassword").click(function(){
var error = '';
var old_password = $("#opass").val();
var password = $("#pass").val();
var password_confirm = $("#newpass").val();
console.log(old_password)
console.log(password)
console.log(password_confirm)

if(password != password_confirm)
{
error = "Password and New Passwords should be same";
}

if(old_password==0)
{
error = "Old Password is required";
}
if(password==0)
{
error = "New Password is required";
}
if(password_confirm==0)
{
error = "Confirm Password is required";
}




if(error.length!=0)
{
	swal(error);
	error = '';
	return false;
}
else
{
    

    var user_id = localStorage.getItem("user_id");
	$.ajax({
            url: appPath+'changepassword',
            type: 'POST',
            data: {user_id : user_id, old_password : old_password, password : password},
            success: function (message)
            {
                if (message.success == 1)
                {
                    swal(message.message);	
                } else
                {
                    swal(message.message);
                }


            }
        });
}


});



});