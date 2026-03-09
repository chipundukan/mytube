
function loadVideos(){

let container = document.getElementById("videoList");
container.innerHTML="";

videos.forEach((v,index) => {
container.innerHTML += `
<div class="video" onclick="playVideo(${index})">

<img class="thumbnail" src="${v.thumbnail}">
<div class="video-info">

<img class="channel-icon" src="https://via.placeholder.com/35">

<div>
<div class="video-title">${v.title}</div>
<div class="video-meta">${v.channel}<br>${v.views} views • ${v.time}</div>
<div class="video-meta">👍 ${v.likes} Likes | 💬 ${v.comments.length} Comments</div>
</div>

</div>
</div>
`;
});
}

function playVideo(index){
let v = videos[index];
let player = window.open("", "_blank");
player.document.write(`
<html>
<head><title>${v.title}</title></head>
<body>
<h2>${v.title}</h2>
<p>${v.channel} • ${v.views} views • ${v.time}</p>
<iframe width="100%" height="400px" src="${v.link}" frameborder="0" allowfullscreen></iframe>
<p>👍 ${v.likes} Likes | 💬 ${v.comments.length} Comments</p>

<h3>Comments</h3>
<div id="comments"></div>

<input id="commentInput" type="text" placeholder="Add a comment">
<button onclick="addComment()">Post</button>

<script>
let comments = ${JSON.stringify(v.comments)};

function displayComments(){
let container = document.getElementById("comments");
container.innerHTML="";
comments.forEach(c => { container.innerHTML += "<p>👤 " + c + "</p>"; });
}

function addComment(){
let text = document.getElementById("commentInput").value;
if(text !== ""){ comments.push(text); displayComments(); document.getElementById("commentInput").value=""; }
}

displayComments();
</script>

</body>
</html>
`);
}

function searchVideos(){
let text = document.getElementById("search").value.toLowerCase();
let filtered = videos.filter(v => v.title.toLowerCase().includes(text));
let container = document.getElementById("videoList");
container.innerHTML="";
filtered.forEach((v,index) => {
container.innerHTML += `
<div class="video" onclick="playVideo(${index})">

<img class="thumbnail" src="${v.thumbnail}">
<div class="video-info">
<img class="channel-icon" src="https://via.placeholder.com/35">
<div>
<div class="video-title">${v.title}</div>
<div class="video-meta">${v.channel}<br>${v.views} views • ${v.time}</div>
<div class="video-meta">👍 ${v.likes} Likes | 💬 ${v.comments.length} Comments</div>
</div>
</div>
</div>
`;
});
}

loadVideos();
