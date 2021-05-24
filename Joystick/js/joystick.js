$(document).ready(function(){
    // _________________________________________________________________
    // Joystick
    //__________________________________________________________________
    
    var static = nipplejs.create({
        zone: document.getElementById("joystick"),
        mode: 'static',
        position: {left: "50%", top:"50%"},
        color: '#1d3557',
        dynamicPage: true,
        size: 130,
        fadeTime: 500
    });

    static.on('move', function (event, data){
        console.log(data);
    })

    // _________________________________________________________________
    // Battery - level
    //__________________________________________________________________
    var battery_level = 59;
    
    var color_battery_low_level =  "#d00000";  // 0% - 20%
    var color_battery_upper_medium_level = '#f6aa1c'; //21% - 50% 
    var color_battery_lower_medium_level = "#ff6d00";
    var color_battery_normal_level = '#006400'; //51% - 100%

    $("#battery-level").text(battery_level + "%");
    $("#progress-bar-color").css("width", battery_level+"%");

    if (battery_level > 0 && battery_level<=25){
        $("#progress-bar-color").css("background-color", color_battery_low_level);
    }else if(battery_level > 25 && battery_level<=50){
        $("#progress-bar-color").css("background-color", color_battery_lower_medium_level);
    }else if(battery_level > 51 && battery_level<=75){
        $("#progress-bar-color").css("background-color", color_battery_upper_medium_level);
    }else{
        $("#progress-bar-color").css("background-color", color_battery_normal_level);
    }

    if(battery_level<10){
        // $("#progress-bar-color").addClass("battery-low-blink");
        (function blink(){
            $("#progress-bar-color").fadeOut(500).fadeIn(500, blink);
        })();
        
    }
    


});


