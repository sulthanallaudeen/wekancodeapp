$(document).ready(function () {

    //var ghDomain = $.cookie('ghDomain')
    
    var ghDomain = localStorage.getItem("appPath");
    var btnUpload = jQuery('#profile_image');
    var status = jQuery('#statuss');
    new AjaxUpload(btnUpload, {
        action: ghDomain + '/s3/profile.php',
        name: 'uploadfile',
        onSubmit: function (file, ext) {
            if (!(ext && /^(jpg|jpeg|gif|png)$/.test(ext))) {
                // extension is not allowed 
                status.text('Only JPG or GIF or PNG files are allowed');
                return false;
            }
            status.text('Uploading...');
        },
        onComplete: function (file, response) {
            //On completion clear the status
            status.text('');
            //split the response
            var resp = response.split('-');
            //Add uploaded file to list
            if (resp[0] == 1) {
                var img = resp[1];
                console.log(resp[1])
                $('.userImage').attr('src', resp[1]);
                $('.profile-image').attr('src', resp[1]);
                
            } else {
                alert("Error in uploading image")
            }
        }
    });

});