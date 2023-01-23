
function change_music(new_file) {
    let player = document.querySelector("#player > audio");

    player.src = "music/" + new_file;
    player.querySelector("a").href = "music/" + new_file;
    player.play();
}