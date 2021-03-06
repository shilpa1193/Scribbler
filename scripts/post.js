/* Get the Index corresponding to the post clicked */
function getPostIndex(id) {
    var i;

    for (i=0;i<5;i++) {
        if (posts[i].id == id)
            return i;
    }
    return i;
}

/* Dump the details of the clicked post */
function postDump() {
    var id = localStorage.getItem("postid");
    var index = getPostIndex(id);

    if (index > 4)
        return;

    document.getElementById("ftitle").value = posts[index].title;
    document.getElementById("fauthor").value = posts[index].author;
    document.getElementById("fcontent").value = posts[index].content;
}

/* Set Border Property */
function setBorderProperty(classname, borderp) {
    var x, i;

    x = document.getElementsByClassName(classname);
    for (i = 0; i < x.length; i++) {
        x[i].style.border = borderp;
    }
}

/* Toggle between Edit and Save Button */
function toggleEditable(edit) {
    var value;
    var template;
    var index;
    var id = localStorage.getItem("postid");

    if (edit == 1) {
        /* Enable Edit Option */
        document.getElementById("ftitle").style.pointerEvents = "all";
        document.getElementById("fcontent").style.pointerEvents = "all";
        value = document.getElementById("sauthor").value;
        /* Change from 'Edit' to 'Save' */
        template = "<input type='text' class = 'post-form post-form-author' id= 'fauthor' name='author'>";
        template += "<span id = 'save-id' class='btn-edit-save' title='Save' onclick=toggleEditable(0)>Save  <i class='fa fa-floppy-o' aria-hidden='true'></i></span>";
        document.getElementById("save-id").innerHTML = template;
        document.getElementById("sauthor").value = value;

        setBorderProperty("post-form-title", "solid green");
        setBorderProperty("post-form-content", "solid green");
    
    } else {
        /* Disable Edit Option */
        document.getElementById("ftitle").style.pointerEvents = "none";
        document.getElementById("fsontent").style.pointerEvents = "none";
        value = document.getElementById("fauthor").value;
        /* Change from 'Edit' to 'Save' */
        template = "<input type='text' class = 'post-form post-form-author' id= 'fauthor' name='author'>";
        template += "<span id = 'save-id' class='btn-edit-save' title='Edit' onclick=toggleEditable(1)>Edit  <i class='fa fa-pencil-square-o' aria-hidden='true'></i></span>";
        document.getElementById("save-id").innerHTML = template;
        document.getElementById("fauthor").value = value;
        index = getPostIndex(id);
        
        if (index > 4)
        return;

        /* Save the updated data back to posts */
        posts[index].title = document.getElementById("ftitle").value;
        posts[index].content = document.getElementById("fcontent").value;


        setBorderProperty("post-form-title", "none");
        setBorderProperty("post-form-content", "none");
    }
}

/* Track the number of likes and display the same */
var postlike = 0;
function postLiked() {
    postlike += 1;
    console.log(document.getElementById("like-button"));
    document.getElementById("like-button").innerHTML = "<span class='btn-like' id = 'like-button' title='like' onclick=postLiked()><i class='fa fa-thumbs-o-up' aria-hidden='true'></i> Liked</span>";
    document.getElementById("like-note").textContent = postlike + " person likes this!";
}

/* Track the number of comments and display the same */
var post_comment = [];
var num_comments = 0;

function postComment() {
    var template;
    var x, i;

    post_comment[num_comments] = document.getElementById("fcomment").value;
    x = document.getElementsByClassName("post-comments");
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
        console.log(x[i]);
        x[i].style.display = "block";
    }
    document.getElementById("fcomment").value = "";
    num_comments += 1;
    document.getElementById("pcomments").innerHTML = "";
    /* Display in the reverse order */
    for (i = num_comments - 1; i >= 0; i--) {
        document.getElementById("pcomments").innerHTML += "<div class='comment-box'>" + post_comment[i] + "</div>"
    }
}