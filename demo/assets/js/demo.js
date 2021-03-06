// Facebook js functions
$(function(){
  $(document).fbStarter({
    appId              : 'APP ID',
    pageId             : 'PAGE ID',
    locales            : 'fr_FR',
    canvasUrl          : '//demo.fbdoctor.com/fbpagestarter/',
    dialogSuccess      : function(){
      console.log('dialog success');
    },
    dialogFail      : function(){
      console.log('user close dialog');
    },
    permissionsSuccess : function(){
      FB.api('/me', function(response) {
        var userName = "<em>user name:</em> " + response.name,
            userID = "<em>user id:</em> " + response.id,
            userBirthday = "<em>user birthday:</em> " + response.birthday,
            userLocale = "<em>user locale:</em> " + response.locale,
            userEmail = "<em>user email:</em> " + response.email,
            userLink = "<em>user link:</em> " + response.link,
            userPicture = '<img src="//graph.facebook.com/'+response.username+'/picture?width=60&height=60">',
            userData = userName+'<br>'+userID+'<br>'+userBirthday+'<br>'+userLocale+'<br>'+userEmail+'<br>'+userLink+'<br>'+userPicture;
        $('#user-info').append('<p>Yes! we got permissions!</p>'+userData);
      });
    }
  });

});