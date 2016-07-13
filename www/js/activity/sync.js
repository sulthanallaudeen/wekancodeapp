$(document).ready(function () {

var appPath = localStorage.getItem("appPath");
//Initate Function Calling
checklogin();
//rendermenu();
renderAction();
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
		var full_name = localStorage.getItem("full_name");
		var user_tel = localStorage.getItem("user_tel");
		var user_email = localStorage.getItem("user_email");
		var user_emp_id = localStorage.getItem("user_emp_id");
		var user_designation = localStorage.getItem("user_designation");
		var user_image = appPath+'public/admin/images/team/'+localStorage.getItem("user_emp_id")+'.jpg';

		$("#user_name").html(user_name)
		$("#user_role").html(user_designation)
		$('#userImage').attr('src', user_image);
		$('.userImage').attr('src', user_image);
		$(".dashboardUserName").html(full_name)
		$("#dashboardUserDesignation").html(user_designation)
		$("#userTel").html(user_tel)
		$("#userEmail").html(user_email)
		
		
		

		//card-profile-image
	}	
}



function rendermenu()
{
	//$("#left-sidebar-nav").html('<ul id="slide-out" class="side-nav fixed leftside-navigation"><li class="user-details cyan darken-2"><div class="row"><div class="col col s4 m4 l4"><img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image"></div><div class="col col s8 m8 l8"><ul id="profile-dropdown" class="dropdown-content"><li><a href="#"><i class="mdi-action-face-unlock"></i> Profile</a></li><li><a href="#"><i class="mdi-action-settings"></i> Settings</a></li><li><a href="#"><i class="mdi-communication-live-help"></i> Help</a></li><li class="divider"></li><li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a></li><li><a href="logout.html"><i class="mdi-hardware-keyboard-tab"></i> Logout</a></li></ul><a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown" id="user_name"><i class="mdi-navigation-arrow-drop-down right"></i></a><p class="user-roal" id="user_role"></p></div></div></li><li class="bold active"><a href="dashboard.html" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a></li></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-view-carousel"></i> Tasks</a><div class="collapsible-body"><ul><li><a href="task-today.html">Todays Tasks</a></li><li><a href="task-all.html">All Tasks</a></li></ul></div></li></ul></li><li class="bold"><a href="food-order.html" class="waves-effect waves-cyan"><i class="mdi-maps-local-restaurant"></i> Food Order</a></li><li class="bold"><a href="calendar.html" class="waves-effect waves-cyan"><i class="mdi-editor-insert-invitation"></i>Calender Events</a></li><li class="bold"><a href="profile.html" class="waves-effect waves-cyan "><i class="mdi-social-people"></i>Employees</a></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-editor-format-indent-increase"></i> Request</a><div class="collapsible-body"><ul><li><a href="request-late.html">Late</a></li><li><a href="request-leave.html">Leave</a></li></ul></div></li><li><a href="documents.html"><i class="mdi-editor-insert-comment"></i> Documents</a><li><a href="media.html"><i class="mdi-image-image"></i> Media</a></li></ul></li></ul><a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="mdi-navigation-menu"></i></a>');

	//base
	var menu = '<ul id="slide-out" class="side-nav fixed leftside-navigation">';
	//top
	menu +='<li class="user-details cyan darken-2"><div class="row"><div class="col col s4 m4 l4">';
	
	menu +='<img src="images/team/'+localStorage.getItem("user_image")+'" alt="" class="circle responsive-img valign profile-image"></div><div class="col col s8 m8 l8"><ul id="profile-dropdown" class="dropdown-content"><li><a href="#"><i class="mdi-action-face-unlock"></i> Profile</a></li><li><a href="settings.html"><i class="mdi-action-settings"></i> Settings</a></li><li><a href="#"><i class="mdi-communication-live-help"></i> Help</a></li><li class="divider"></li><li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a></li><li><a href="logout.html"><i class="mdi-hardware-keyboard-tab"></i> Logout</a></li></ul><a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown" id="user_name"><i class="mdi-navigation-arrow-drop-down right"></i></a><p class="user-roal" id="user_role"></p>';
	//dashboard
	menu +='<li class="bold active"><a href="dashboard.html" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a></li></li>';
	//task
	//menu +='<li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-view-carousel"></i> Tasks</a><div class="collapsible-body"><ul><li><a href="task-today.html">Todays Tasks</a></li><li><a href="task-all.html">All Tasks</a></li></ul></div></li></ul></li>';
   	//food
   	menu +='<li class="bold"><a href="food-order.html" class="waves-effect waves-cyan"><i class="mdi-maps-local-restaurant"></i> Food Order</a></li>';
   	//calender
   	//menu +='<li class="bold"><a href="calendar.html" class="waves-effect waves-cyan"><i class="mdi-editor-insert-invitation"></i>Calender Events</a></li>';
   	//employoees
   	menu +='<li class="bold"><a href="profile.html" class="waves-effect waves-cyan "><i class="mdi-social-people"></i>Employees</a></li>';
   	//	request
   	//menu +='<li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-editor-format-indent-increase"></i> Request</a><div class="collapsible-body"><ul><li><a href="request-late.html">Late</a></li><li><a href="request-leave.html">Leave</a></li></ul></div></li>';
   //Documents
   //menu +='<li><a href="documents.html"><i class="mdi-editor-insert-comment"></i> Documents</a>';
   //Media
   menu +='<li><a href="media.html"><i class="mdi-image-image"></i> Media</a></li></ul></li>';
   
   //End
   menu +='</ul><a href="" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="mdi-navigation-menu"></i></a>';
	//$("#left-sidebar-nav").html('<ul id="slide-out" class="side-nav fixed leftside-navigation"><li class="user-details cyan darken-2"><div class="row"><div class="col col s4 m4 l4"><img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image"></div><div class="col col s8 m8 l8"><ul id="profile-dropdown" class="dropdown-content"><li><a href="#"><i class="mdi-action-face-unlock"></i> Profile</a></li><li><a href="#"><i class="mdi-action-settings"></i> Settings</a></li><li><a href="#"><i class="mdi-communication-live-help"></i> Help</a></li><li class="divider"></li><li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a></li><li><a href="logout.html"><i class="mdi-hardware-keyboard-tab"></i> Logout</a></li></ul><a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown" id="user_name"><i class="mdi-navigation-arrow-drop-down right"></i></a><p class="user-roal" id="user_role"></p></div></div></li><li class="bold active"><a href="dashboard.html" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a></li></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-view-carousel"></i> Tasks</a><div class="collapsible-body"><ul><li><a href="task-today.html">Todays Tasks</a></li><li><a href="task-all.html">All Tasks</a></li></ul></div></li></ul></li><li class="bold"><a href="food-order.html" class="waves-effect waves-cyan"><i class="mdi-maps-local-restaurant"></i> Food Order</a></li><li class="bold"><a href="calendar.html" class="waves-effect waves-cyan"><i class="mdi-editor-insert-invitation"></i>Calender Events</a></li><li class="bold"><a href="profile.html" class="waves-effect waves-cyan "><i class="mdi-social-people"></i>Employees</a></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-editor-format-indent-increase"></i> Request</a><div class="collapsible-body"><ul><li><a href="request-late.html">Late</a></li><li><a href="request-leave.html">Leave</a></li></ul></div></li><li><a href="documents.html"><i class="mdi-editor-insert-comment"></i> Documents</a><li><a href="media.html"><i class="mdi-image-image"></i> Media</a></li></ul></li></ul><a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="mdi-navigation-menu"></i></a>');
	$("#left-sidebar-nav").html(menu);

	//Float Action
	
	


}

function renderAction()
{
	menu = '<div class="fixed-action-btn" style="bottom: 50px; right: 19px;"><a class="btn-floating btn-large"><i class="mdi-action-stars"></i></a><ul>';
	//menu +='<li><a href="css-helpers.html" class="btn-floating red"><i class="large mdi-communication-live-help"></i></a></li>'
	menu +='<li><a href="media.html" class="btn-floating yellow darken-1"><i class="large mdi-image-image"></i></a></li>'
	menu +='<li><a href="profile.html" class="btn-floating green"><i class="large mdi-social-people"></i></a></li>'
	menu +='<li><a href="food-order.html" class="btn-floating blue"><i class="large mdi-maps-local-restaurant"></i></a></li>';
    menu +='</ul></div>';
    $("#float_action").html(menu);

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
                    //localStorage.setItem("user_name", message.data.first_name+' '+message.data.last_name);
                    var first_name = message.data.first_name;
                    var last_name = message.data.last_name;
                    var name = first_name+" "+last_name;
                    name = name.slice(0, 7)+"..";
                    localStorage.setItem("user_name", name);
                    localStorage.setItem("user_email", message.data.email);
                    localStorage.setItem("user_designation", message.data.designation);
                    localStorage.setItem("user_designation", message.data.designation);
                    localStorage.setItem("user_about", message.data.about);
                    localStorage.setItem("user_emp_id", message.data.employee_id);


                } else
                {
                    window.location.href = "index.html";
                }


            }
        });

		//User Logged in
		var user_name = localStorage.getItem("user_name");
		var user_designation = localStorage.getItem("user_designation");
		var user_about = localStorage.getItem("user_about");
		$("#user_name").html(user_name)
		$("#user_role").html(user_designation)
		$(".profileAboutMe").html(user_about)
		
		
	}	
}


});