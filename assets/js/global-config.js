var pbi = document.getElementById("popup_box_info");
var pbit = document.getElementById("popup_box_info_title");
var mc = document.getElementById("menu_categories");
var mci = document.getElementById("menu_categories_items");
var shoe = document.getElementById("show_home_options_event");
var pbip = document.querySelectorAll(".popup_box_info_param");
var pbis = document.querySelectorAll(".popup_box_info_subtitle");
var smiv = 0;

// Window Loading Configurations

// Navigation Menu Controller
function menu_desktop_controller() {
    document.getElementById("menu_categories").addEventListener("click", function() {
        mc.src = "assets\\contents\\F48B37dvb63vs7863v\\close.svg";
        smiv == 0 ? smiv = 1 : smiv = 0;
        if (smiv == 1) {
            mci.style.display = "inherit";
            mci.style.zIndex = "462";
            smiv = 1;
        } else {
            mc.src = "assets\\contents\\F48B37dvb63vs7863v\\squared_menu.svg";
            mci.style.display = "none";
            smiv = 0;
        }
    });
};

window.onload = () => {
    menu_desktop_controller();
    // if (!navigator.onLine) {
    //     document.body.style.filter = "blur(3px)";
    //     document.body.style.cursor = "none";
    //     document.body.style.pointerEvents = "none";
    //     document.body.style.overflow = "hidden";
    //     document.body.style.cursor = "none";
    // } else {
    //     if (!navigator.userAgent.substring(80, 87)) {
    //         document.body.innerHTML = "<p class='ircf-font text-dark d-block mr-20'>سرویس سخت سر، فقط از طریق مرورگر(جستجوگر) <strong>گوگل</strong> پشتیبانی می شود.</p>";
    //     }
    // }
    if(window.location.href.endsWith('product.html')){
        shoe.addEventListener("click", () => {
            if (shoe.id == "show_home_options_event") {
                pbit.innerText = "امکانات اقامتگاه";
                pbip[0].innerText = "تست" + ":";
                pbis[0].innerText = "1";
            }
        });
        // Close Box Information
        close_box_info = () => {
                pbi.style.display = "none";
                pbi.style.visibility = "hidden";
                pbi.style.opacity = "0";
            }
            // Open Box Information
        open_box_info = () => {
            pbi.style.display = "inherit";
            pbi.style.visibility = "visible";
            pbi.style.opacity = "1";
        }
    }
};
// Context Menu Controller
window.oncontextmenu = () => {
        return true;
    }
    // Link Generator
LnkG = (URL) => {
        window.location = URL;
    }
    // Line Downer Effect
line_downer = () => {
    window.scrollTo({
        top: 820,
        left: 0,
        behavior: 'smooth'
    });
};
// function development() {
//     let dsv = 0;
//     let grn1 = Math.floor(Math.random() * 48 + 1);
//     let grn2 = Math.floor(Math.random() * 49 + 1);
//     let development_calculate = grn1 + grn2;
//     if (dsv == 1) {
//         document.getElementById("development_status").style.display = "none";
//         dsv = 0;
//     } else {
//         var popup_development_status = prompt(grn1 + " + " + grn2 + ":");
//         if (popup_development_status !== "undefined" && popup_development_status == development_calculate) {
//             document.getElementById("development_status").style.display = "inherit";
//             dsv = 1;
//         }
//     }
// }

function OnlyNumber(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        return false;
    }
    return true;
}
