let x = document.getElementById('menu')
let menubtn = document.getElementById('menu-icon')
let closebtn = document.getElementById('close-icon')


function openmenu(){
    x.style.scale = "1"
    menubtn.style.display = "none"
    closebtn.style.display = "block"
}
function closemenu(){
    x.style.scale = "0"
    menubtn.style.display = "block"
    closebtn.style.display = "none"
}