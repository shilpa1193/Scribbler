/* Function to Dump all the Posts */
var posts = [
    {id:"post1",author:"Srishti Gupta",title:" 'Let' me be a 'const'(ant), not a 'var'(iable)!",
    short:"Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript.",
    content:"Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."},
    {id:"post2",author:"Colby Fayock",title:"What is linting and how can it save you time?",
    short:"One of the biggest challenges in software development is time. It's something we can't easily get more of, but linting can help us make",
    content:"One of the biggest challenges in software development is time. It's something we can't easily get more of, but linting can help us make the most out of the time we have."},
    {id:"post3",author:"Yazeed Bzadough",title:"How to Get More Views on Your Tech Blog",
    short:"If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want",
    content:"If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."},
    {id:"post4",author:"Cedd Burge",title:"How to write easily describable code",
    short:"When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run",
    content:"When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."},
    {id:"post5",author:"Srishti Gupta",title:"Everything you should know about 'module' & 'require' in Node.js",
    short:"Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code",
    content:"Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that youÃ¢â‚¬â„¢ve created a module named xyz."}
];
var activepost="";

/* Modal Form - Diplay and Close */
function displayDelete(id, postid, toggle) {
    console.log(id, toggle);
    if (toggle == 0) {
        document.getElementById(id).style.display='block';
        activepost = postid;
    } else {
        document.getElementById(id).style.display='none';
    }
}

/* Function to delete an active post */
function deletePost() {
    displayDelete('deletepost',"", 1);
    document.getElementById(activepost).remove();
}

/* Function to load all the Posts */
function loadPosts(id) {
    var template="";

    template += "<div class='flex-parent'>";

    for (var i=0;i<5;i++) {
        template += "<div class = 'flex-child'" + "id = " + posts[i].id + ">";
        template += "<div class = 'flex-title'>" + "<p>" + posts[i].author + "</p>" + "</div>";
        template += "<div class = 'flex-body'>";
        template += "<p class = 'title-post'>" + posts[i].title + "</p>";
        template += "<p class = 'content-post'>" + posts[i].short + "</p>";
        template += "<span class='fa fa-trash close-post' aria-hidden='true' title='Delete' onclick=displayDelete('deletepost'," + "'" + posts[i].id + "'" + ",0)></span>";
        template += "<span class='fa fa-ellipsis-h full-post' aria-hidden='true' title='Post' onclick=openPostPage('post.html'," + "'" + posts[i].id + "'" + ")></span>";
        template += "</div>";
        template += "</div>";
    }
    template += "</div>";

    document.getElementById(id).innerHTML += template;
}

/* Open a page in the same window */
function openPostPage(page, id) {
    localStorage.setItem("postid",id);
    console.log(id);
    window.open(page,'_self');
}