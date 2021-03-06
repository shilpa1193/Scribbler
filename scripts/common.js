/* Function to build header used in all the pages */
function buildHeader(id) {
    var template;

    template = "<div class = 'header'>";

    template = 
    "<div class='top-left'>" + 
    "<h1>ScriBBler</h1>" + 
    "<h3>Explore, Imagine, Create</h3>" + 
    "</div>";
    document.getElementById(id).innerHTML += template;

    template += 
    "<div class='top-right'>" + 
    "<button class = 'btn-head' onclick=displayForm('signin',0)>Sign In </button>" + 
    "<button class = 'btn-head' onclick=displayForm('signup',0)>Sign Up </button>" + 
    "</div>";
    document.getElementById(id).innerHTML = template;

    template += "</div>";

    template = 
    "<div id='signup' class='modal'>" + 
    "<form class='modal-content'>" +
    "<span onclick=displayForm('signup',1) class='close-form fa fa-times' title='Close'></span>" +
    "<h2>Get Started</h2>" + 
    "<hr size='2' width='95%' color='black'>" + 
    "<div class='container'>" +
    "<label for='fname'><b>Name</b></label>" +
    "<input type='text' placeholder='Enter your name' name='fname' required>" +
    "<label for='uname'><b>Username</b></label>" +
    "<input type='text' placeholder='Enter your username' name='uname' required>" +
    "<label for='psw'><b>Password</b></label>" +
    "<input type='password' placeholder='Enter your Password' name='psw' required>" +
    "<label for='rpsw'><b>Confirm Password</b></label>" +
    "<input type='password' placeholder='Re-enter Password' name='rpsw' required>" +
    "<button type='submit' class = 'btn-sign'>Sign Up</button>" +
    "</div>" +
    "</form>" +
    "</div>";
    document.getElementById(id).innerHTML += template;

    template = 
    "<div id='signin' class='modal'>" +
    "<form class='modal-content'>" +
    "<span onclick=displayForm('signin',1) class='close-form fa fa-times' title='Close'></span>" +
    "<h2>Welcome Back!</h2>" +
    "<hr size='2' width='95%' color='black'>" + "</hr>" +
    "<div class='container'>" +
    "<label for='uname'><b>Username</b></label>" +
    "<input type='text' placeholder='Enter your username' name='uname' required>" +
    "<label for='psw'><b>Password</b></label>" +
    "<input type='password' placeholder='Enter your Password' name='psw' required>" +
    "<button type='submit' class = 'btn-sign'>Sign In</button>" +
    "<h4>Not a member? <span onclick=swapForm('signin','signup') class='toggle-form'>Sign Up</span></h2>" +
    "</div>" +
    "</form>" +
    "</div>";
    document.getElementById(id).innerHTML += template;
}

/* Modal Form - Diplay and Close */
function displayForm(id, toggle) {
    if (toggle == 0) {
        document.getElementById(id).style.display='block';
    } else {
        document.getElementById(id).style.display='none';
    }
}

/* Toggle between 2 Modal Forms */
function swapForm(closeid, displayid) {
    document.getElementById(closeid).style.display='none';
    document.getElementById(displayid).style.display='block';
}