const form = document.forms['myform'];
if (form) {
    form.addEventListener('submit', validateForm);
}


function validateForm(event) {
    event.preventDefault();
    let title = document.getElementById("titleinput").value;
    let post = document.getElementById("main").value;
    if (title == "") {
        document.getElementById("message").innerText = "Please enter your title!"
    } else if (title != "" && title.length > 70) {
        document.getElementById("message").innerText = "Your title is too long!(within 70 characters)"
    } else if (post == "") {
        document.getElementById("message").innerText = "Please enter your main post!"
    } else {
        alert("post successful!")
        form.submit();
    }
}