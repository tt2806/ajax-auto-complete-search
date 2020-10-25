function showResult(str) {
  if (str.length == 0) {
    document.getElementById("livesearch").innerHTML = "";
    document.getElementById("livesearch").style.border = "0px";
    return;
  }
  
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status = 200) {
      document.getElementById("livesearch").innerHTML = xmlhttp.responseText;
      document.getElementById("livesearch").style.border = "1px solid #A5ACB2";
    }
   }
   
   xmlhttp.open("GET", "livesearch.php?q=" + str, true);
   xmlhttp.send();
  }
