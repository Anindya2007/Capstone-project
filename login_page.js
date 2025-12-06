function login() {
    let password = document.getElementById('password').value;
    let upper = 0;
    let lower = 0;
    let digit = 0;
    for (let i of password) {
        if ('0123456789'.includes(i)) {
            digit += 1;
        }
        else if (i >= 'A' && i <= 'Z') {
            upper += 1
        }
        else if (i >= 'a' && i <= 'z') {
            lower += 1;
        }

    }
    if (digit > 0 && upper > 0 && lower > 0 && password.length > 7) {
        let login = document.getElementById('login_button_java');
        login.innerHTML = `
        <a style='cursor: pointer; background-color: blue; display: block;
        margin-top: 40px; margin-left: 170px; height: 49px; border-radius: 8px;
        color: white; width: 270px; font-size: 20px; text-align: center;
        line-height: 49px; border: 2px solid black; text-decoration: none;
        ' href="dashboard.html">Log in</a>
            <br>
        `
    }
    else{
        document.getElementById('login_button_java').innerHTML=''
    }
}

