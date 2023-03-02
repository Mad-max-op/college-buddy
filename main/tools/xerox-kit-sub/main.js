//visting tool pages

function visit(url)
{
    window.location.href = url
}


//toggle

$(".template-1").click(() => {
    $(".template-2").toggle(()=>{
        console.log("1")
    });
});

$(".template-2").click(() => {
    $(".template-1").toggle(()=>{
        console.log("2")
    });
});