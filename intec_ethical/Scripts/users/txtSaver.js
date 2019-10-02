$(function () {

    $('#submitButton').on('click', function () {

        var username = $('#ft_un').val();
        var password = $('#ft_pd').val();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "api/Usuario/AddUser?username=" + username + "&password=" + password,
            "method": "POST"
        };

        $.ajax(settings).then(function (response) {
            window.location.replace('/Home/Success');
            console.log(response);
        }, function (error) { console.error(error); });
    });

});