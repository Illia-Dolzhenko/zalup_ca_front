$(document).ready(
    renderHeader()
);

function renderHeader() {
    sendGet(CURRENT_USER, function (data) {
        $("#currentUserLogin").html("[" + data.login + " : ");
        $("#currentUserPoints").html(data.points + " pts.]");
    })
}

$(document).on("click", "#logOutAction", function (e) {
    localStorage.removeItem("user");
    localStorage.removeItem("postId");
    localStorage.removeItem("login");
    window.location.href = REGISTER_PAGE;
});