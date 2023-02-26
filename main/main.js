function test(){
    alert("its working");
}


// nav bar drop box code
let navbar_ul = document.getElementById("navbar-ul")
let intro_flexbox = document.getElementsByClassName("intro-flexbox")[0]
let intro_bg = document.getElementsByClassName("intro-bg")[0]
let main_flexbox = document.getElementsByClassName("main-flexbox")[0]
let navbar_display = false                           
function drop_box()
{
    if(navbar_display == false)
    {
        navbar_display = true
        intro_flexbox.style.top = "20vh"    
        intro_bg.style.top = "10vh"
        main_flexbox.style.top = "10vh"
    }
    else{
        navbar_display = false
        intro_flexbox.style.top = "10vh"
        intro_bg.style.top = "0vh"
        main_flexbox.style.top = "0vh"
    }
}