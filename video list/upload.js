function uploadVideo(){
let title = document.getElementById("title").value;
let channel = document.getElementById("channel").value;
let views = Number(document.getElementById("views").value);
let thumbnail = document.getElementById("thumbnail").value;
let link = document.getElementById("link").value;

if(title && channel && views && thumbnail && link){
videos.push({title, channel, views, time:"Just now", thumbnail, link, likes:0, comments:[]});
alert("Video uploaded!");
window.location.href = "index.html";
}else{
alert("Please fill all fields!");
}
}
