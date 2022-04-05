
function GUSTFunction() {
  document.getElementById("GUSTDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function AIUFunction() {
    document.getElementById("AIUDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function AUMFunction() {
    document.getElementById("AUMDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function select() {
    if(type =="AIU") {
        document.getElementsByClassName("AIUdropdown").style.display = "flex";
}else if (type =="GUST"){
    document.getElementsByClassName("GUSTdropdown").style.display = "flex";
}else if (type=="AUM"){
    document.getElementsByClassName("AUMdropdown").style.display = "flex";
}
}

// AIU college
let AIUobject = {
  art:{
    colloge:"كلية العمارة",
    major1:"فنون التصميم الجرافيكي",
    major2:"فنون التصميم الداخلي",
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13914.795184767501!2d47.6923386!3d29.3205098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x626cfa20f16ad882!2z2KfZhNis2KfZhdi52Kkg2KfZhNij2YXYsdmK2YPZitipINin2YTYr9mI2YTZitip!5e0!3m2!1sar!2skw!4v1649089959421!5m2!1sar!2skw",
    insta:"https://www.instagram.com/aiu_kw/",
    number:"tel:22262500",
    email:"mailto:info@aiu.edu.kw",
    web:"https://www.aiu.edu.kw/",
  },

  engineering:{
    college:"كلية الهندسة",
    major1:"هندسة طبية",
    major2:"هندسة كهربائية",
    location:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13914.795184767501!2d47.6923386!3d29.3205098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x626cfa20f16ad882!2z2KfZhNis2KfZhdi52Kkg2KfZhNij2YXYsdmK2YPZitipINin2YTYr9mI2YTZitip!5e0!3m2!1sar!2skw!4v1649089959421!5m2!1sar!2skw",
    insta:"https://www.instagram.com/aiu_kw/",
    number:"tel:22262500",
    email:"mailto:info@aiu.edu.kw",
    web:"https://www.aiu.edu.kw/",
  }
}

function AIUcollege (key){
  document.getElementById("details").style.display="flex"
  let infoCollege = AIUobject[key]["college"];
  let infoMajor1 = AIUobject[key]["major1"];
  let infoMajor2 = AIUobject[key]["major2"];
  let infoLocation = AIUobject[key]["location"];
  let infoInsta = AIUobject[key]["insta"];
  let infoNumber = AIUobject[key]["number"];
  let infoEmail = AIUobject[key]["email"];
  let infoWeb = AIUobject[key]["web"];
  document.getElementById("major1").innerHTML =infoMajor1;
  document.getElementById("major2").innerHTML =infoMajor2;
  document.getElementById("map").src = infoLocation;
  document.getElementById("insta").src = infoInsta;
  document.getElementById("number").src = infoNumber;
  document.getElementById("email").src = infoEmail;
  document.getElementById("web").src = infoWeb;
}

