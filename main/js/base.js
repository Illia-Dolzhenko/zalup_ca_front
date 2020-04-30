function sendGet(url, success) {

    const user = localStorage.getItem("user");

    if(user == null){
        window.location.href="register.html";
        return;
    }

    $.ajax
    ({
        type: "GET",
        url: url,
        dataType: 'json',
        crossDomain: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + user);
        },
        success: function (data) {
            success(data);
        },
        error: function (xhr) {
            console.log(xhr.status);
            if(xhr.status === 401){
                window.location.href="register.html";
            }
        }
    });
}

function register(url, user, response) {

    return $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        contentType: 'application/json',
        crossDomain: true,
        data: JSON.stringify(user),
        success: function (data) {
            response = data;
            //console.log(data);
        },
        error: function (data) {
            response = data;
            //console.log(data);
        }
    });
}