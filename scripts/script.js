//Introduction screen

//First animations
$(window).ready();

//Resizing
$(window).resize(changeSize);

function changeSize() {
    changeButtonSize();
    changeBackgroundSize();
}

function changeButtonSize() {
    var width_button = $('#start').width();
    var top = width_button * 0.04;
    $('#start').css({
        "borderWidth" : width_button * 0.014
    });
    $('#start-button').css({
        "marginTop" : top + "px",
        "fontSize" : top,
        "height" : top * 1.5 + "px",
        "paddingTop" : top * 0.22
    })
    $('#start-text').css({
        "fontSize" : width_button * 0.23
    })
}

function changeBackgroundSize() {
    var height_picture = $(window).height();
    $('#intro-wrapper').css({"height" : height_picture});
}

//Click to go to the home page
$('#start-button').on('click', function(){
    
    var $wrapper = $('#intro-wrapper');
        
    $wrapper.velocity({
        'height' : '0px'
    }, 1500, 'swing');
    
});

//var homewrapper = "<div id='home-wrapper'><nav id='navigation'><div id='menu-wrapper'><img id='logo' src = 'images/Hockeybaas_print_groen.jpg' alt='logo'><ul><li><a href='https://www.youtube.com'>Home</a></li><li><a href='https://www.youtube.com'>TalentenProgramma</a></li><li><a href='https://www.youtube.com'>HockeyBazen</a></li><li><a href='https://www.youtube.com'>Supportersclub</a></li><li><a href='https://www.youtube.com'>Ons Team</a></li><li><a href='https://www.youtube.com'>Contact</a></li></ul></div></nav><section id='section'></section></div>";

