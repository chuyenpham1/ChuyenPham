function checkAddress(checkbox)
{
    if (checkbox.checked)
    {
        // document.body.style.background = "black"
        document.body.style.color = "white"
        document.getElementById("side-box").style.background = "rgba(169,169,169,0.9)"
        document.getElementById("content").style.background = "rgba(169,169,169,0.9)"
        console.log("checkbox activated");
    }
    else {
        // document.body.style.background = "lightgray"
        document.body.style.color = "black"
        document.getElementById("side-box").style.background = "rgba(255, 255, 255, 0.8)"
        document.getElementById("content").style.background = "rgba(255, 255, 255, 0.8)"
        console.log("deactivated");
    }
}