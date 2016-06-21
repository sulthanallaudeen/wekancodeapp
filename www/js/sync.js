$(document).ready(function () {


//Initate Function Calling
checklogin();
updateprofile();



//Functions

function checklogin()
{
	if (localStorage.getItem("user_id") === null) {
	  	//Do No Action
	  	window.location.href = "index.html";
	}	
	else
	{
		
		//User Logged in
		var user_name = localStorage.getItem("user_name");
		var user_designation = localStorage.getItem("user_designation");
		$("#user_name").html(user_name)
		$("#user_role").html(user_designation)
	}	
}

function updateprofile()
{
	if (localStorage.getItem("user_id") === null) {
	  	window.location.href = "index.html";
	}	
	else
	{
		//Get User Details
		$.ajax({
            url: appPath+'getuserprofile',
            type: 'POST',
            data: {id : localStorage.getItem("user_id")},
            success: function (message)
            {
                if (message.success == 1)
                {
                	localStorage.setItem("user_id", message.data.id);
                    localStorage.setItem("user_name", message.data.first_name+' '+message.data.last_name);
                    localStorage.setItem("user_email", message.data.email);
                    localStorage.setItem("user_designation", message.data.designation);
                } else
                {
                    window.location.href = "index.html";
                }


            }
        });

		//User Logged in
		var user_name = localStorage.getItem("user_name");
		var user_designation = localStorage.getItem("user_designation");
		$("#user_name").html(user_name)
		$("#user_role").html(user_designation)
	}	
}





});