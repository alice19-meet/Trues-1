
 // var pathname = window.location.toString();
      var pathname = "";
      var x ="";
      var y = "";
      chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      pathname = tabs[0].url;

      do_things_with_url(tabs[0].url);
});

function do_things_with_url(url) {
  document.getElementById("URL").innerHTML = url;
        var slash = url.search("//");
        console.log(slash);
        for (var i = 0; i < websites.length; i++){
          // var link_revise = websites[i].link.concat("/");
          if (slash > 0 ) {
            var res = url.substr(slash+2);
            var split = res.split("/");
            var partOfLink = split[0];
              // document.getElementById("n").innerHTML = partOfLink;
              if (websites[i].link == partOfLink) {
                  category = websites[i].category;
                  document.getElementById("category").innerHTML = category; 
              }
          } else {
              var split = url.split("/");
              var partOfLink = split[0];
                // document.getElementById("n").innerHTML = partOfLink;
                if (websites[i].link == partOfLink){
                  category = websites[i].category;
                  document.getElementById("category").innerHTML = category;
          }
      }

    }

    for (var s = 0; s < websites.length; s++){
      // var link_revise = websites[i].link.concat("/");
      if (slash > 0 ) {
        var res = url.substr(slash+2);
        var split = res.split("/");
        var partOfLink = split[0];
          // document.getElementById("n").innerHTML = partOfLink;
          if (websites[s].link == partOfLink){
            Bias = websites[s].bias;
            document.getElementById("Bias").innerHTML = Bias;
          }
      } else {
          var split = url.split("/");
          var partOfLink = split[0];
            // document.getElementById("n").innerHTML = partOfLink;
            if (websites[s].link == partOfLink){
            Bias = websites[s].bias;
            document.getElementById("Bias").innerHTML = Bias;
    }
  }

}
return 0;
}

// document.getElementById("dem").innerHTML = pathname;
      
      // // iterate over each element in the array
      // for (var i = 0; i < obj.length; i++){
      //   // look for the entry with a matching `code` value
      //   if (obj[i].link == pathname){
      //      // we found it
      //     x = obj[i].category;
      //     document.getElementById("demo").innerHTML = x;
        
      //     // obj[i].name is the matched result
      //   }

      // }
      // for (var s = 0; s < obj.length; s++){
      //   // look for the entry with a matchinsg `code` value
      //   if (obj[s].link == pathname){
      //      // we found it
      //     x = obj[s].bias;
      //     document.getElementById("deo").innerHTML = x;
        
      //     // obj[i].name is the matched result
      //   }

      // }


      // const rp = require('request-promise');
      // const url = pathname;

      // rp(url)
      //   .then(function(html){
      //     //success!
      //     console.log(html);
      //   })
      //   .catch(function(err){
      //     //handle error
      //   });
function loading_factcheck() {
	console.log("hello");
	var claim = document.getElementById('claim').value;

	var a = new XMLHttpRequest();
	a.open('GET', "https://idir.uta.edu/factchecker/update_fm?claim=" + claim, true);
	a.onreadystatechange = function(response) {
		console.log("this worked");
		if(a.readyState == 4) {
			//console.log(a);
			console.log(a.responseText);
			var parser = new DOMParser();
			var htmlDoc = parser.parseFromString(a.responseText, 'text/html');
			console.log(htmlDoc);
			document.getElementsByClassName("hi")[0].innerHTML=a.responseText;
			// alert(htmlDoc.getElementsByClassName('component-title')[0].innerText);
			
		}
	};
	a.send();
}
	
// console.log("extension loaded");

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', test);
});


// // function test() {
// 	console.log("testing");
//       // a = $.ajax({

//       //   url: "https://idir.uta.edu/factchecker/update_fm",
//       //   // url: "https://www.google.com",
//       //   type: "GET",
//       //   headers: {
//       //     "Content-Type": "text/plain",
//       //   },
//       //   data: {"claim": "bananas are straight"},
//       //   success: function(data){
//       //     console.log(data);
//       //   },
//       //   error: function(data) {
//       //     console.log("error");
//       //     console.log(data);
//       // }});
// }



// document.getElementById("dem").innerHTML = pathname;
      
      // // iterate over each element in the array
      // for (var i = 0; i < obj.length; i++){
      //   // look for the entry with a matching `code` value
      //   if (obj[i].link == pathname){
      //      // we found it
      //     x = obj[i].category;
      //     document.getElementById("demo").innerHTML = x;
        
      //     // obj[i].name is the matched result
      //   }

      // }
      // for (var s = 0; s < obj.length; s++){
      //   // look for the entry with a matchinsg `code` value
      //   if (obj[s].link == pathname){
      //      // we found it
      //     x = obj[s].bias;
      //     document.getElementById("deo").innerHTML = x;
        
      //     // obj[i].name is the matched result
      //   }

      // }


      // const rp = require('request-proise');
      // const url = pathname;

      // rp(url)
      //   .then(function(html){
      //     //success!
      //     console.log(html);
      //   })
      //   .catch(function(err){
      //     //handle error
      //   })