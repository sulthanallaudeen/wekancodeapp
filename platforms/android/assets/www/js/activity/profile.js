$(document).ready(function () {

var appPath = localStorage.getItem("appPath");
//Initate Function Calling
checklogin();
getprofile();

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



function getprofile()
{
	$.ajax({
            url: appPath+'getusers',
            type: 'POST',
            data: {id : localStorage.getItem("user_id")},
            success: function (message)
            {
                if (message.success == 1)
                {
                	console.log(message.data);
                	var htmls = ''
                	$.each(message.data, function( k, user ) {

                	var username = user.first_name+' '+user.last_name;
                    //var username = user.first_name;
                    //var userimage = appPath+'public/admin/images'+user.image;
                	var html = '';
                	html = '<div class="blog"><div class="card"><div class="card-image waves-effect waves-block waves-light">';
                    html += '<a ><img src="'+user.image+'" alt="blog-img"></a>'
                    html += '</div><ul class="card-action-buttons"><li><a class="btn-floating waves-effect waves-light light-blue"><i class="mdi-action-info activator"></i></a></li></ul>';
                    html += '<div class="card-content"><p class="row"><span class="left"><a href="#">'+user.designation+'</a></span><span class="right">'+user.doj+'</span></p>';
					html += '<h4 class="card-title grey-text text-darken-4"><a href="#" class="grey-text text-darken-4">'+username+'</a>';
					html += '<p><i class="mdi-action-perm-phone-msg cyan-text text-darken-2"></i> <a href="tel:'+user.phone+'">'+user.phone+'</a></p><p><i class="mdi-communication-email cyan-text text-darken-2"></i><a href="mailto:'+user.email+"?Subject=Hey%20"+username+'" target="_top">'+user.email+'</a></p></h4></div>';
                    html += '<div class="card-reveal"><span class="card-title grey-text text-darken-4"><i class="mdi-navigation-close right"></i> <b>'+username+'</b></span>';
                    html += '<p>'+user.about+'</p>';
                    html += '</div></div></div>';


                	//html = '';
                    //var html = '<div class="blog"><div class="card"><div class="card-image waves-effect waves-block waves-light"><a href="#"><img src="images/team/sathya.jpg" alt="blog-img"></a></div><ul class="card-action-buttons"><li><a class="btn-floating waves-effect waves-light light-blue"><i class="mdi-action-info activator"></i></a></li></ul><div class="card-content"><p class="row"><span class="left"><a href="#">Co-Founder</a></span><span class="right">18th June, 2015</span></p><h4 class="card-title grey-text text-darken-4"><a href="#" class="grey-text text-darken-4">Sathyanarayanaa Nellore Sampat</a><p><i class="mdi-action-perm-phone-msg cyan-text text-darken-2"></i> +1 (612) 222 8989</p><p><i class="mdi-communication-email cyan-text text-darken-2"></i> mail@domain.com</p></h4></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"><i class="mdi-navigation-close right"></i> <b>Sathyanarayanaa Nellore Sampat</b></span><p>sup</p></div></div></div>';
					$("#profile").append(html)
					

					});

					var $containerBlog = $("#blog-posts");
    $containerBlog.imagesLoaded(function() {
      $containerBlog.masonry({
        itemSelector: ".blog",
        columnWidth: ".blog-sizer",
      });
    });


                	//$("#bb").html(html)
                } else
                {
                    
                }


            }
        });

	//$("#left-sidebar-nav").html('<ul id="slide-out" class="side-nav fixed leftside-navigation"><li class="user-details cyan darken-2"><div class="row"><div class="col col s4 m4 l4"><img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image"></div><div class="col col s8 m8 l8"><ul id="profile-dropdown" class="dropdown-content"><li><a href="#"><i class="mdi-action-face-unlock"></i> Profile</a></li><li><a href="#"><i class="mdi-action-settings"></i> Settings</a></li><li><a href="#"><i class="mdi-communication-live-help"></i> Help</a></li><li class="divider"></li><li><a href="#"><i class="mdi-action-lock-outline"></i> Lock</a></li><li><a href="logout.html"><i class="mdi-hardware-keyboard-tab"></i> Logout</a></li></ul><a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown" id="user_name"><i class="mdi-navigation-arrow-drop-down right"></i></a><p class="user-roal" id="user_role"></p></div></div></li><li class="bold active"><a href="dashboard.html" class="waves-effect waves-cyan"><i class="mdi-action-dashboard"></i> Dashboard</a></li></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-action-view-carousel"></i> Tasks</a><div class="collapsible-body"><ul><li><a href="task-today.html">Todays Tasks</a></li><li><a href="task-all.html">All Tasks</a></li></ul></div></li></ul></li><li class="bold"><a href="food-order.html" class="waves-effect waves-cyan"><i class="mdi-maps-local-restaurant"></i> Food Order</a></li><li class="bold"><a href="calendar.html" class="waves-effect waves-cyan"><i class="mdi-editor-insert-invitation"></i>Calender Events</a></li><li class="bold"><a href="profile.html" class="waves-effect waves-cyan "><i class="mdi-social-people"></i>Employees</a></li><li class="no-padding"><ul class="collapsible collapsible-accordion"><li class="bold"><a class="collapsible-header waves-effect waves-cyan"><i class="mdi-editor-format-indent-increase"></i> Request</a><div class="collapsible-body"><ul><li><a href="request-late.html">Late</a></li><li><a href="request-leave.html">Leave</a></li></ul></div></li><li><a href="documents.html"><i class="mdi-editor-insert-comment"></i> Documents</a><li><a href="media.html"><i class="mdi-image-image"></i> Media</a></li></ul></li></ul><a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="mdi-navigation-menu"></i></a>');
}


});