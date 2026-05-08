function authenticate() {
    let username, pwd, granted, denied;
    username = document.getElementById("uname").value;
    pwd = document.getElementById("pwd").value;
    granted = "Welcome " + username + "!";
    denied = "Access denied. Account locked after 3 attempts!";

    let status = "";

    if (username === "student01" && pwd === "12345678") {
        status = "success";
    } else {
        status = "failed";
    }


    switch (status) {
        case "success":
            alert(granted);
            attempt_counter = 0;
            document.getElementById("display").innerHTML = "";
            window.location.href = "notebooks.html";  
            break;

        case "failed":
            attempt_counter++;
            document.getElementById("display").innerHTML =
                "Incorrect username and/or password. Attempt " + attempt_counter + " of 3";

            for (let i = attempt_counter; i >= 3; i++) {
                alert(denied);
                document.getElementById("loginBTN").disabled = true;
                break; 
            }
            break;
    }
}
