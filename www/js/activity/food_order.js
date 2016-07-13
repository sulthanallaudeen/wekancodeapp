$(document).ready(function () {





var appPath = localStorage.getItem("appPath");
//Initate Function Calling
checklogin();

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
var strDate = d.getDate()+' '+(monthNames[d.getMonth()])+', '+d.getFullYear();
$("#P1980604345").val(strDate);



$("#orderfood").click(function(){
	orderfood();
});
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
			
			var $input = $('#P1980604345')
			$input.on("change", function () {
			$(".picker__close").click()
            });

function orderfood()
{

	

	if($("#response").is(':checked')){
	    //Respone
	     var response = 2;
	} else {
		//No Respone
	     var response = 1;
	}





	if (localStorage.getItem("user_id") === null) {
	  	window.location.href = "index.html";
	}	
	else
	{
		//Get User Details
		var date = $(".picker__input").val();
		var food = $('input[name=group1]:checked').val();
		if(date=='')
		{
			swal("Please choose a date");
			return false;
		}
		if(food == undefined)
		{
			swal("Please choose any food type");
			return false;
		}


		
		
		
				
		
		
		
		
		$.ajax({
            url: appPath+'orderfood',
            type: 'POST',
            data: {user_id : localStorage.getItem("user_id"), date : date, food_id : food, response : response},
            success: function (message)
            {
                if (message.success == 1)
                {
                	swal(message.message);
                } else if(message.success == 2)
                {
                    swal(message.message);
                }
                else if(message.success == 3)
                {
                    swal('Insufficient Data');
                }
                else
                {
                	//window.location.href = "index.html";	
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