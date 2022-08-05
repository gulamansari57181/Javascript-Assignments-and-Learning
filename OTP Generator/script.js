function stringGen() {
    var text = "";
    var len = document.getElementById("num").value;
    var char_list =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    document.getElementById("result").innerHTML = text;
    return text;
}