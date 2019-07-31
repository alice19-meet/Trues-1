$('#Grammar_Button').click(function grammar(){
  var sentence =document.getElementById("s").value;
  console.log(sentence)
  var params ="text="+sentence+"&language=en-US&enabedOnly=false";
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", 'https://languagetool.org/api/v2/check?'+params, true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader('Accept', 'application/json');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var j = JSON.parse(this.responseText);
    	console.log(this.responseText)
    	alert(j.matches.length);
      	document.getElementById("demo").innerHTML = json.matches;
    }
  }
  xhttp.send();
});
