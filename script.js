function m() {
    var r = '', c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < 5; i++) {
        r += c.charAt(Math.floor(Math.random() * 36));
    }
    return r;
}

if (location.host !== "google.com" || location.pathname === "/error") {
    location.href = "https://www.google.com/error" + m();
}

document.head.innerHTML = `
<style>
  /* ... (your existing styles) ... */
</style>
`;

document.body = document.createElement("body");

document.toggleFunction = function (id) {
    var clickedRow = document.getElementById(id);
    chrome.management.setEnabled(id, clickedRow.children[0].children[0].children[0].checked);
};

document.newBodyData = "<table>"
console.log(document.newBodyData)
document.newBodyData += ""

chrome.management.getAll(function () {
    arguments[0].forEach(function (extension) {
        document.newBodyData += "<tr id=" + extension.id + ">"
        /*
        if ("icons" in extension) {
            document.newBodyData += "<td><img src='"+extension.icons[0]['url']+"'/></td>"
        }    
        */
        document.newBodyData += "<td><label class='switch'><input type='checkbox' " + (extension.enabled ? "checked" : "") + " onclick=\"toggleFunction('" + extension.id + "')\"><span class='slider round'></span></label></td>"
        document.newBodyData += "<td>" + extension.name + "</td>"
        document.newBodyData += "<td>" + extension.id + "</td>"
        document.newBodyData += "<td>" + extension.installType + "</td>"

        document.newBodyData += "</tr>"
    });
    document.newBodyData += "</table>"
    document.body.innerHTML = document.newBodyData;
});
