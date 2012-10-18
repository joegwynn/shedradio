$(document).ready(function(){

	setInterval(marquee, 8000);
		
function marquee(){
	var width = $('.jp-title ul li').width() + "px";
	$('.jp-title ul li').css('left','100%');
	$('.jp-title ul li').stop(true,true).animate({'left':'-' + width}, 8000, 'linear', function(){
		$('.jp-title ul li').css('left','100%');
	});
    }


	


var now = new Date();   
var time = now.getHours();
if (time == 0) {
    var mediafilefile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20ED"
    var show = "Even.Don"
} else if (time == 1) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20SW"
    var show = "Seaward"
} else if (time == 2) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/Da%25CC%2581niel.M%20SHOW%20EP%20001"
    var show = "Daniel.M"
} else if (time == 3) {
    var mediafile = "http://archive.org/download/Sept2012_535/5.09.12B"
    var show = "Bestival"
} else if (time == 4) {
    var mediafile = "http://archive.org/download/Sept2012_535/5.09.12Cld"
    var show = "Chansons De La Nuit"
} else if (time == 5) {
    var mediafile = "http://archive.org/download/IntergalacticCommentaries/18.09.12Ic"
    var show = "Intergalactic Commentaries"
} else if (time == 6) {
    var mediafile = "http://archive.org/download/Sept2012_535/RadioLouder"
    var show = "Four on the Floor"
} else if (time == 7) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20ED"
    var show = "Even.Don"
} else if (time == 8) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20SW"
    var show = "Seaward"
} else if (time == 9) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/Da%25CC%2581niel.M%20SHOW%20EP%20001"
    var show = "Daniel.M"
} else if (time == 10) {
    var mediafile = "http://archive.org/download/Sept2012_535/5.09.12B"
    var show = "Bestival"
} else if (time == 11) {
    var mediafile = "http://archive.org/download/Sept2012_535/5.09.12Cld"
    var show = "Chansons De La Nuit"
} else if (time == 12) {
    var mediafile = "http://archive.org/download/IntergalacticCommentaries/18.09.12Ic"
    var show = "Intergalactic Commentaries"
} else if (time == 13) {
    var mediafile = "http://archive.org/download/Sept2012_535/RadioLouder"
    var show = "Four on the Floor"
} else if (time == 14) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20ED"
    var show = "Even.Don"
} else if (time == 15) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20SW"
    var show = "Seaward"
} else if (time == 16) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/Da%25CC%2581niel.M%20SHOW%20EP%20001"
    var show = "Daniel.M"
} else if (time == 17) {
    var mediafile = "http://archive.org/download/Sept2012_535/5.09.12B"
    var show = "Bestival"
} else if (time == 18) {
    var mediafile = "http://archive.org/download/Sept2012_535/5.09.12Cld"
    var show = "Chansons De La Nuit"
} else if (time == 19) {
    var mediafile = "http://archive.org/download/IntergalacticCommentaries/18.09.12Ic"
    var show = "Intergalactic Commentaries"
} else if (time == 20) {
    var mediafile = "http://archive.org/download/Sept2012_535/RadioLouder"
    var show = "Four on the Floor"
} else if (time == 21) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20ED"
    var show = "Even.Don"
} else if (time == 22) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/02%3A10%3A12%20SW"
    var show = "Seaward"
} else if (time == 23) {
    var mediafile = "http://archive.org/download/021012SHEDRadio/Da%25CC%2581niel.M%20SHOW%20EP%20001"
    var show = "Daniel.M"
}


$('.jp-title li').text(show);

$("#shed_24").jPlayer({
        ready: function () {
            	       	 
          $(this).jPlayer("setmedia", {
            mp3: mediafile+".mp3",
            oga: mediafile+".ogg"
          });
        },
        swfPath: "/javascript",
        supplied: "m4a, oga"
              
      });
     
$(".jp-play").click(function() {
var now = new Date();    
var minutes = now.getMinutes()*60;
var seconds = now.getSeconds();

var secs = minutes+seconds;

$("#jquery_jplayer_1").jPlayer("play", secs);

});     
});


