var drs_value1 = 0,
    drs_value2 = 0,
    drs_value3 = 0,
    drs_value4 = 0;


function DashboardRouteState() {
    $("#show_user_profile_items_list_dropdown1").click(function() {
        if (drs_value1 == 1) {
            $("#user_profile_items_list_dropdown1").addClass("d-none");
            $("#show_user_profile_items_list_dropdown1 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(0deg)",
                "margin-top": "-0px"
            });
            $(this).css("font-weight", "inherit");
            drs_value1 = 0;
        } else {
            if (drs_value2 == 1 || drs_value3 == 1 || drs_value4 == 1) {
                for (var i = 1; i < 5; i++) {
                    $("#user_profile_items_list_dropdown" + i).addClass("d-none");
                    $("#show_user_profile_items_list_dropdown" + i + " > i").css({
                        "display": "flex",
                        "align-items": "center",
                        "align-self": "inherit",
                        "transform": "rotate(0deg)",
                        "margin-top": "-0px"
                    });
                    $("#show_user_profile_items_list_dropdown" + i).css("font-weight", "normal");
                    if (i == 1) { continue; }
                }
                drs_value2 = drs_value3 = drs_value4 = 0;
            }
            $("#user_profile_items_list_dropdown1").removeClass("d-none");
            $("#show_user_profile_items_list_dropdown1 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(180deg)",
                "margin-top": "-0px"
            });
            $(this).css("font-weight", "bold");
            drs_value1 = 1;
        }
    });
    $("#show_user_profile_items_list_dropdown2").click(function() {
        if (drs_value2 == 1) {
            $("#user_profile_items_list_dropdown2").addClass("d-none");
            $("#show_user_profile_items_list_dropdown2 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(0deg)",
                "margin-top": "-0px"
            });
            $("#show_user_profile_items_list_dropdown2").css("font-weight", "inherit");
            drs_value2 = 0;
        } else {
            if (drs_value1 == 1 || drs_value3 == 1 || drs_value4 == 1) {
                for (var i = 1; i < 5; i++) {
                    $("#user_profile_items_list_dropdown" + i).addClass("d-none");
                    $("#show_user_profile_items_list_dropdown" + i + " > i").css({
                        "display": "flex",
                        "align-items": "center",
                        "align-self": "inherit",
                        "transform": "rotate(0deg)",
                        "margin-top": "-0px"
                    });
                    $("#show_user_profile_items_list_dropdown" + i).css("font-weight", "normal");
                    if (i == 2) { continue; }
                };
                drs_value1 = drs_value3 = drs_value4 = 0;
            }
            $("#user_profile_items_list_dropdown2").removeClass("d-none");
            $("#show_user_profile_items_list_dropdown2 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(180deg)",
                "margin-top": "-0px"
            });
            $(this).css("font-weight", "bold");
            drs_value2 = 1;
        }
    });
    $("#show_user_profile_items_list_dropdown3").click(function() {
        if (drs_value3 == 1) {
            $("#user_profile_items_list_dropdown3").addClass("d-none");
            $("#show_user_profile_items_list_dropdown3 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(0deg)",
                "margin-top": "-0px"
            });
            $("#show_user_profile_items_list_dropdown3").css("font-weight", "inherit");
            drs_value3 = 0;
        } else {
            if (drs_value1 == 1 || drs_value2 == 1 || drs_value4 == 1) {
                for (var i = 1; i < 5; i++) {
                    $("#user_profile_items_list_dropdown" + i).addClass("d-none");
                    $("#show_user_profile_items_list_dropdown" + i + " > i").css({
                        "display": "flex",
                        "align-items": "center",
                        "align-self": "inherit",
                        "transform": "rotate(0deg)",
                        "margin-top": "-0px"
                    });
                    $("#show_user_profile_items_list_dropdown" + i).css("font-weight", "normal");
                    if (i == 3) { continue; }
                };
                drs_value1 = drs_value2 = drs_value4 = 0;
            }
            $("#user_profile_items_list_dropdown3").removeClass("d-none");
            $("#show_user_profile_items_list_dropdown3 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(180deg)",
                "margin-top": "-0px"
            });
            $(this).css("font-weight", "bold");
            drs_value3 = 1;
        }
    });
    $("#show_user_profile_items_list_dropdown4").click(function() {
        if (drs_value4 == 1) {
            $("#user_profile_items_list_dropdown4").addClass("d-none");
            $("#show_user_profile_items_list_dropdown4 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(0deg)",
                "margin-top": "-0px"
            });
            $("#show_user_profile_items_list_dropdown4").css("font-weight", "inherit");
            drs_value4 = 0;
        } else {
            if (drs_value1 == 1 || drs_value2 == 1 || drs_value3 == 1) {
                for (var i = 1; i < 5; i++) {
                    $("#user_profile_items_list_dropdown" + i).addClass("d-none");
                    $("#show_user_profile_items_list_dropdown" + i + " > i").css({
                        "display": "flex",
                        "align-items": "center",
                        "align-self": "inherit",
                        "transform": "rotate(0deg)",
                        "margin-top": "-0px"
                    });
                    $("#show_user_profile_items_list_dropdown" + i).css("font-weight", "normal");
                    if (i == 4) { continue; }
                };
                drs_value1 = drs_value2 = drs_value3 = 0;
            }
            $("#user_profile_items_list_dropdown4").removeClass("d-none");
            $("#show_user_profile_items_list_dropdown4 > i").css({
                "display": "flex",
                "align-items": "center",
                "align-self": "inherit",
                "transform": "rotate(180deg)",
                "margin-top": "-0px"
            });
            $(this).css("font-weight", "bold");
            drs_value4 = 1;
        }
    });
};