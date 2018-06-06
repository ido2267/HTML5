function MyOnload(){
    var h1tag = document.getElementsByTagName("h1");
    h1tag[0].onclick = changecolor;
}
function changecolor(){
    this.innerHTML ="click again";
    var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.color = randomcolor;
}
onload = MyOnload;