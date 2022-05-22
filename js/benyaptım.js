
function likedislike(x) {
  x.classList.toggle("fa-thumbs-down");
}




function mesajbas() {
  alert("Reklamları Gizlediniz");
}




var options = {
  bottom: '64px', 
  right: 'unset', 
  left: '32px', 
  time: '0.5s', 
  mixColor: '#fff', 
  backgroundColor: '#fff', 
  buttonColorDark: '#100f2c',  
  buttonColorLight: '#fff', 
  saveInCookies: false, 
  label: '&#x1f313;', 
  autoMatchOsTheme: true 
}

const darkmode = new Darkmode(options);
darkmode.showWidget();




const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();




function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}




var i = 0;
function move() {
if (i == 0) {
  i = 1;
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width  + "%";
    }
  }
}
}



function display() {
document.getElementById("myID").style.filter = "brightness(50%)";
document.getElementById("myID").style.filter = "contrast(50%)";
document.getElementById("myID1").style.filter = "brightness(50%)";
document.getElementById("myID1").style.filter = "contrast(50%)";
document.getElementById("myID2").style.filter = "brightness(50%)";
document.getElementById("myID2").style.filter = "contrast(50%)";
document.getElementById("myID3").style.filter = "brightness(50%)";
document.getElementById("myID3").style.filter = "contrast(50%)";
document.getElementById("myID4").style.filter = "brightness(50%)";
document.getElementById("myID4").style.filter = "contrast(50%)";
document.getElementById("myID5").style.filter = "brightness(50%)";
document.getElementById("myID5").style.filter = "contrast(50%)";

}



function displayout() {
 document.getElementById("myID").style.filter = "brightness(100%)";
 document.getElementById("myID").style.filter = "contrast(100%)";
 document.getElementById("myID1").style.filter = "brightness(100%)";
 document.getElementById("myID1").style.filter = "contrast(100%)";
 document.getElementById("myID2").style.filter = "brightness(100%)";
 document.getElementById("myID2").style.filter = "contrast(100%)";
 document.getElementById("myID3").style.filter = "brightness(100%)";
 document.getElementById("myID3").style.filter = "contrast(100%)";
 document.getElementById("myID4").style.filter = "brightness(100%)";
 document.getElementById("myID4").style.filter = "contrast(100%)";
 document.getElementById("myID5").style.filter = "brightness(100%)";
 document.getElementById("myID5").style.filter = "contrast(100%)";
}



function acsana()
{

document.getElementById("gizle").style.visibility="visible";

}




function on() {
document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";
}


  var close = document.getElementsByClassName("closebtn");
  document.getElementById("gizle").style.visibility="hidden";
  var k;


  for (k = 0; k < close.length; k++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function(){ div.style.display = "none"; }, 600);
    }
  }

 

        $(document).ready(function(){
          $(".flip").click(function(){
            $(".panel").slideToggle("slow");
          });
        });
        


    $(document).ready(function(){
      $("#hide").click(function(){
        $("iframe").hide();
      });
      $("#show").click(function(){
        $("iframe").show();
      });
    });
 


    $(document).ready(function(){
      $("a").click(function(){
        $(this).css("background-color", "Blue");
      });
      $("a").blur(function(){
        $(this).css("background-color", "black");
      });
    });
 
