
let canteen_tango = document.getElementsByClassName("tango_")[0]
let canteen_udupi = document.getElementsByClassName("udupi_")[0]
let canteen_munch = document.getElementsByClassName("munch_")[0]

let udupi = document.getElementsByClassName("udupi")
let tango = document.getElementsByClassName("tango")
let munch = document.getElementsByClassName("munch")

function display_tango(){
    canteen_menu.style.display = "flex";

    for(let i = 0; i < udupi.length; i++)
    {
        udupi[i].style.display = "none"
    }
    for(let i = 0; i < tango.length; i++)
    {
        tango[i].style.display = "flex"
    }
    for(let i = 0; i < munch.length; i++)
    {
        munch[i].style.display = "none"
    }
}

function display_udupi(){
    canteen_menu.style.display = "flex";

    for(let i = 0; i < udupi.length; i++)
    {
        udupi[i].style.display = "flex"
    }
    for(let i = 0; i < tango.length; i++)
    {
        tango[i].style.display = "none"
    }
    for(let i = 0; i < munch.length; i++)
    {
        munch[i].style.display = "none"
    }
}
function display_munch(){
    canteen_menu.style.display = "flex";

    for(let i = 0; i < udupi.length; i++)
    {
        udupi[i].style.display = "none"
    }
    for(let i = 0; i < tango.length; i++)
    {
        tango[i].style.display = "none"
    }
    for(let i = 0; i < munch.length; i++)
    {
        munch[i].style.display = "flex"
    }
}

function canteen_clicked(name){
    canteen_tango.style.transition = ".5s";
    canteen_udupi.style.transition = ".5s";
    canteen_munch.style.transition = ".5s";
    switch(name){
        case "tango":
            canteen_tango.style.width = "50%";
            canteen_udupi.style.width = "20%";
            canteen_munch.style.width = "20%";
            display_tango()
            break

        case "udupi":
            canteen_tango.style.width = "20%";
            canteen_udupi.style.width = "50%";
            canteen_munch.style.width = "20%";
            display_udupi()
            break

        case "munch":
            canteen_tango.style.width = "20%";
            canteen_udupi.style.width = "20%";
            canteen_munch.style.width = "50%";
            display_munch()
            break

    }
}

let canteen_menu = document.getElementsByClassName("canteen-menu")[0];

function canteen_card(src, canteen_name){
    let array = src.split(".")
    let name = array[0]

    for(let i = 0; i < name.length; i++)
    {
        if(name[i] == "_"){
            name = name.replace("_", " ")
        }
    }

    array[0] = name



    let new_card = document.createElement("div")
    new_card.classList.add("canteen-card")
    new_card.classList.add(canteen_name)
    new_card.style.backgroundImage = `url('assets/${canteen_name}/${src}'), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .5))`
    new_card.style.backgroundBlendMode = "overlay";

    let label = document.createElement("label")
    label.innerHTML = array[0]
    new_card.appendChild(label)

    let price = document.createElement("p")
    price.innerHTML = "₹" + array[1]
    new_card.appendChild(price)

    let veg_non_veg = document.createElement("img")
    veg_non_veg.src = `${array[2]}.png`
    new_card.appendChild(veg_non_veg)


    canteen_menu.appendChild(new_card)

    
}

let udupi_list = [
    'butter_fruit_juice.50.veg.jpg',
    'coffee.20.veg.jpg',
    'gobi_manchuri.60.veg.jpg',
    'masal_dosa.45.veg.jpg',
    'samosa.20.veg.jpg',
    'tate_idli.45.veg.jpg',
    'tea.10.veg.jpg',
    ]

let tango_list = [
    'chicken_roll.70.non-veg.jpg',
    'egg_roll.60.non-veg.jpg',
    'honey_cake.30.non-veg.jpg',
    'paneer_roll.60.veg.jpg',
    ]

let munch_list = [
    'biryani.90.non-veg.jpg',
    'cheese_dosa.45.veg.jpg',
    'chicken_kabab.70.non-veg.jpg',
    'gobi_manchuri.50.veg.jpg',
    ]

for(i = 0; i < udupi_list.length; i++)
{

    canteen_card(udupi_list[i], "udupi")
}

for(i = 0; i < tango_list.length; i++)
{

    canteen_card(tango_list[i], "tango")
}

for(i = 0; i < munch_list.length; i++)
{

    canteen_card(munch_list[i], "munch")
}


canteen_menu.style.display = "none";


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