//Introduction screen

//First animations
$(window).ready(function() {
    setMarginTop();
    changeButtonSize();
    changeBackgroundSize();
    backgroundAnimation();
});

var $homewrapper = $('#home-wrapper');
var $introwrapper = $('#intro-wrapper');
var $intro = $('#intro');
var $logo = $('#intro-logo');
var $start = $('#start');
var $cover = $('#intro-cover');
var $startbutton = $('#start-button');

function setMarginTop() {
    $homewrapper.css({
        'top' : $(window).height() + 'px'
    });
}

function backgroundAnimation() {
    $cover.velocity({
        'top' : '1000px'
    }, 1500, 'easeInOutQuart')
    
    $intro.velocity({
        'top' : '0px'
    }, 1500, 'easeInOutQuart')
    
    $logo.velocity({
        'top' : '3%'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 600})
    
    $start.velocity({
        'top' : '25%'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 400})
    
    //color change $startbutton is done in CSS animations
}

//Resizing
$(window).resize(changeSize);

function changeSize() {
    changeButtonSize();
    changeBackgroundSize();
    setMarginTop();
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
$startbutton.on('click', function(){
    
    $logo.velocity({
        'top' : '-400px'
    }, {duration: 1300, easing: 'easeInOutQuart'})
    
    $start.velocity({
        'top' : '-400px'
    }, {duration: 1300, easing: 'easeInOutQuart', delay: 200})
        
    $homewrapper.velocity({
        'top' : '0px'
    }, {duration: 1300, easing: 'easeInOutQuart',delay: 400})
    
});

//var homewrapper = "<div id='home-wrapper'><nav id='navigation'><div id='menu-wrapper'><img id='logo' src = 'images/Hockeybaas_print_groen.jpg' alt='logo'><ul><li><a href='https://www.youtube.com'>Home</a></li><li><a href='https://www.youtube.com'>TalentenProgramma</a></li><li><a href='https://www.youtube.com'>HockeyBazen</a></li><li><a href='https://www.youtube.com'>Supportersclub</a></li><li><a href='https://www.youtube.com'>Ons Team</a></li><li><a href='https://www.youtube.com'>Contact</a></li></ul></div></nav><section id='section'></section></div>";

