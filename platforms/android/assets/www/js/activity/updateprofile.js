$(document).ready(function () {

var appPath = localStorage.getItem("appPath");
//Initate Function Calling
checklogin();
//getprofile();

//Functions

var user_about = localStorage.getItem("user_about");
$(".materialize-textarea").html(user_about)


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

$("#updateprofile").click(function(){

updateAboutMe();

});

function updateAboutMe()
{
    var data = $(".materialize-textarea").val();

	$.ajax({
            url: appPath+'updateaboutme',
            type: 'POST',
            data: {id : localStorage.getItem("user_id") , data : data},
            success: function (message)
            {
                console.log(message)
                if (message.success == 1)
                {
                	swal(message.data);

                	
                } else
                {
                    swal('Error in update')
                }


            }
        });

	//$("#left-sidebar-nav").html('<ul id="slide-out" class="side-nav fixed leftside-navigation"><li class="user-details cyan darken-2"><div class="row"><div class="col col s4 m4 l4"><img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image"></div><div class="col col s8 m8 l8"><ul id="profile-dropdown" class="dropdown-content"><li><a href="#"><i class="mdi-action-face-unlock"></i> Profile</a></li><li><a href="#"><i class="mdi-action-settings"></i> Settings</a></li><li><a href="#"><i class="mdi-communication-live-help"></i> Help</a></li><li class="divider"></li><li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a></li><li><a href="logout.html"><i class="mdi-hardware-keyboard-tab"></i> Logout</a></li></ul><a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown" id="user_name"><i class="mdi-navigation-arrow-drop-down right"></i></a><p class="user-roal" id="user_role"></p></div></div></li><li class="bold active"><a href="dashboard.html" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a></li></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-view-carousel"></i> Tasks</a><div class="collapsible-body"><ul><li><a href="task-today.html">Todays Tasks</a></li><li><a href="task-all.html">All Tasks</a></li></ul></div></li></ul></li><li class="bold"><a href="food-order.html" class="waves-effect waves-cyan"><i class="mdi-maps-local-restaurant"></i> Food Order</a></li><li class="bold"><a href="calendar.html" class="waves-effect waves-cyan"><i class="mdi-editor-insert-invitation"></i>Calender Events</a></li><li class="bold"><a href="profile.html" class="waves-effect waves-cyan "><i class="mdi-social-people"></i>Employees</a></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-editor-format-indent-increase"></i> Request</a><div class="collapsible-body"><ul><li><a href="request-late.html">Late</a></li><li><a href="request-leave.html">Leave</a></li></ul></div></li><li><a href="documents.html"><i class="mdi-editor-insert-comment"></i> Documents</a><li><a href="media.html"><i class="mdi-image-image"></i> Media</a></li></ul></li></ul><a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="mdi-navigation-menu"></i></a>');
}


});