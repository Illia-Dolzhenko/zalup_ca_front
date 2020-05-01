const GET_POSTS_URL = "http://localhost:8080/getPosts";
const GET_POST_URL = "http://localhost:8080/getPost/";
const CREATE_POST_URL = "http://localhost:8080/createPost";
const ADD_COMMENT_URL = "http://localhost:8080/addComment";
const REGISTER_URL = "http://localhost:8080/register";
const CATEGORIES_URL = "http://localhost:8080/categories";
const RATE_URL = "http://localhost:8080/addRating";

const REGISTER_PAGE = "register.html";

function sendGet(url, success) {
    const user = getUser();

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
            if (xhr.status === 401) {
                window.location.href = REGISTER_PAGE;
            }
        }
    });
}

function sendPost(url, dataToSend, success) {
    const user = getUser()

    return $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + user);
        },
        data: JSON.stringify(dataToSend),
        processData: false,
        success: function (data) {
            success(data);
        },
        error: function (xhr) {
            if (xhr.status === 401) {
                window.location.href = REGISTER_PAGE;
            }
        }
    });
}

function getUser() {
    const user = localStorage.getItem("user");
    if (user == null) {
        window.location.href = REGISTER_PAGE;
        return null;
    }
    return user;
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

function getId() {
    return localStorage.getItem("postId");
}
