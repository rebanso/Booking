var navigation_top_box = document.querySelector("#navigation_top_box");
window.onscroll = () =>{
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        navigation_top_box.style.backgroundColor = "rgba(30,30,30,0.9)";
    }else{
        navigation_top_box.style.backgroundColor = "rgba(30,30,30,0.4)";
    }
}

function OnlyEnglishCharacter(event) {
    return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57)
}