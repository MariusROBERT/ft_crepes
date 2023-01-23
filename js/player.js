
function change_music(new_file, new_title) {
    let player = document.querySelector("#player > audio");

    player.src = "music/" + new_file;
    player.querySelector("a").href = "music/" + new_file;
    player.play();
    document.querySelector("#player h3:nth-child(2)").innerHTML = new_title;
}