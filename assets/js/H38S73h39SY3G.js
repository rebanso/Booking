// Variables
isture = true;
let  like_post_value = 0;
let getter_price = document.getElementById("getter_price");
let set_persons = document.getElementById("set_persons");
let set_price_value1 = document.getElementById("set_price_value1");
let set_price_value2 = document.getElementById("set_price_value2");
let mc = document.getElementById("menu_categories");
let mci = document.getElementById("menu_categories_items");
let gnp = document.getElementById("get_num_person_val");
let scpr = document.getElementById("showcountPersonErr");
let rlcb = document.getElementById("ruls_login_check_box");
let cbm = document.getElementById("checkboxMsg");
let sprv1 = document.getElementById("set_price_renger_value1");
let sprv2 = document.getElementById("set_price_renger_value2");
let gnpv = document.getElementById("get_num_person_val");
//  dqlike = document.querySelector(".like_post");
searchbar_hider = () => {
    document.getElementById("SearchTarget").style.display = "none";
    document.getElementById("SearchTargetIcon1").style.display = "none";
    document.getElementById("SearchTargetIcon2").style.display = "none";
    document.getElementById("mobile_navigation_controller").style.display = 'inherit';
};
show_searchbar_top_box = () => {
    document.getElementById("SearchTarget").style.display = 'inherit';
    document.getElementById("SearchTargetIcon1").style.display = "inherit";
    document.getElementById("SearchTargetIcon2").style.display = "inherit";
    document.getElementById("mobile_navigation_controller").style.display = 'none';
};
show_advance_searchbar = () => {
    document.getElementById("search_by_price_in_service").style.display = "inherit";
    document.getElementById("get_num_person_val").style.display = "inherit";
}
hide_menu_list = () => {
    show_service_menus();
}
// add_favorite_post = () => {
//     like_post_value == 0 ? like_post_value = 1 : like_post_value = 0;
//     document.addEventListener("click",()=>{
//         if(like_post_value==1){
//             dqlike.src = "N73b830N39SN3\\V734b7dsb4m4s6\\V73Fs63vjd93BS\\heart.svg";
//            like_post_value = 0;
//         }else{
//             dqlike.src = "N73b830N39SN3\\V734b7dsb4m4s6\\V73Fs63vjd93BS\\hearted.svg";
//             like_post_value = 1;
//         }
//     })
// }
show_getter_price = () => {
    getter_price.classList.remove("d-none");
    getter_price.classList.add("d-show");
};
hide_getter_price = () => {
    getter_price.classList.remove("d-show");
    getter_price.classList.add("d-none");
};
onrange_change1 = () => {
    sprv1.innerText = set_price_value1.value * Math.round(9);
};
onrange_change2 = () => {
    sprv2.innerText = set_price_value2.value.slice(0,2).replace(0,'');
};

function fillrulsbgcheckbox() {
    if (isture) {
        rlcb.style.backgroundColor = "var(--bg-bluely)";
        rlcb.style.border = "3px solid var(--bg-purply)";
        cbm.classList.remove("d-none");
        isture = false;
        if(isture==false){
            let chejxuxyrbs = setInterval(() => {
                cbm.classList.add("d-none");
            clearInterval(chejxuxyrbs);
            }, 2345);
        }
    } else {
        cbm.classList.add("d-none");
        rlcb.style.borderRadius = "5px";
        rlcb.style.backgroundColor = "transparent";
        isture = true;
    }
};
add_person_count_value = () => {
    gnpv.value == 0 ? gnpv.value = 0 : gnpv.value = gnpv.value;
    gnpv.value < 1 ? gnpv.value = 1 : gnpv.value >= 30 ? gnpv.value = 30 : gnpv.value++;
    
}
remove_person_count_value = () =>  {
    gnpv.value <= 1 ? gnpv.value = 1 : gnpv.value--;
}