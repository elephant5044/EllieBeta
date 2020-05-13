var recaptchachecked;
function recaptchaCallback() {
    //If we managed to get into this function it means that the user checked the checkbox.
    recaptchachecked = true;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function submit() {
  
  if (!recaptchachecked === true) {
       var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            window.location.href = "./v"
          }
        };
        xhttp.open("GET", `https://evida.glitch.me/w?user=${getUrlParameter('u')}`, true);
        xhttp.send();
  } else {
    window.alert("You need to check the box.")
  }
  
}