$(function () {

    $('#submitButton').on('click', function () {

        var username = $('#ft_un').val();
        var password = $('#ft_pd').val();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "api/Usuario/AddUser?username=" + username + "&password=" + password,
            "method": "GET",
            "headers": {
                "cache-control": "no-cache",
                "Postman-Token": "1a9320b9-6a4c-49ae-ac1a-9458c608dc3e"
            }
        };

        $.ajax(settings).done(function (response) {
            window.location.replace('/Home/Success');
            console.log(response);
        }, function (error) { console.error(error); });
    });

});