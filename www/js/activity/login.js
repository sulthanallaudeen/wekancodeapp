$(document).ready(function () {
//Setting App Path
var appPath = localStorage.getItem("appPath");
//Checking for User's Login
checklogin()
function checklogin()
{
	if (localStorage.getItem("user_id") === null) {
	  	//Not Logged in
	}	
	else
	{
		//User Logged in
		window.location.href = "dashboard.html";		
	}
}

//Login User

$("#loginuser").click(function(){
var error = '';
var employee_id = $("#employee_id").val();
var password = $("#password").val();
if(employee_id==0 && password==0)
{
error = "Employee Id and Password is required";
}
else if (employee_id==0 & password!=0)
{
error = "Employee Id required";
}
else if (employee_id!=0 & password==0)
{
error = "Password is required";		
}
else
{
//error = '';
}


if(error.length!=0)
{
	swal(error);
	error = '';
	return false;
}
else
{
	$.ajax({
            url: appPath+'loginuser',
            type: 'POST',
            data: {employee_id : employee_id, password : password},
            success: function (message)
            {
                if (message.success == 1)
                {
                	localStorage.setItem("user_id", message.data.id);
                    localStorage.setItem("user_name", message.data.first_name+' '+message.data.last_name);
                    localStorage.setItem("user_email", message.data.email);
                    localStorage.setItem("user_designation", message.data.designation);
                    window.location.href = "dashboard.html";
                } else
                {
                    swal(message.message);
                }


            }
        });
}


});

//Forgot Password

$("#resetpassword").click(function(){

var error = '';
var employee_id = $("#employee_id").val();
if(employee_id==0)
{
error = "Employee Id is required";
}

else
{
//error = '';
}


if(error.length!=0)
{
	swal(error);
	error = '';
	return false;
}
else
{
	$.ajax({
            url: appPath+'resetpassword',
            type: 'POST',
            data: {employee_id : employee_id},
            success: function (message)
            {
                if (message.success == 1)
                {
                	swal({ 
						  title: "Reset Success",
						   text: "Check your mail to enter new password",
						    type: "success" 
						  },
						  function(){
						    window.location.href = 'index.html';
				});

                } else
                {
                    swal(message.message);
                }

                

            }
        });
}


});





});