
function change_music(new_file) {
    document.querySelector("#player > audio > source").src = new_file;
    document.querySelector("#player > audio").play();
}