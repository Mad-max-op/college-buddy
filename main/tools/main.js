//visting tool pages

function visit(url)
{
    window.location.href = url
}
//nav bar drop down code

let navbar_ul = document.getElementById("navbar-ul")
function drop_box()
{
    if(navbar_ul.style.height == "10.1vh")
    {
        navbar_ul.style.height = "0vh"
    }else{
        navbar_ul.style.height = "10.1vh"
    }
}