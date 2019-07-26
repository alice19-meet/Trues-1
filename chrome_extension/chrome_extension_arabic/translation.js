function parseStrDate(dateString) {
	try{
	    var dateTimeObj = dateutil.parse( dateString );
	    console.log(dataTimeObj)
		return dateTimeObj;
}	
	catch(err){
		return null;
}}

function _extractFromURL(url) {
	if (m) {
		m = url.search(r'([\./\-_]{0,1}(19|20)\d{2})[\./\-_]{0,1}(([0-3]{0,1}[0-9][\./\-_])|(\w{3,5}[\./\-_]))([0-3]{0,1}[0-9][\./\-]{0,1})?')
		var d = parseStrDate(m[0]);
		return d;
}
	return  null;
}
// might have an issue here cuz of type='application/ld+json'
function _extractFromLDJson(parsedHTML) {
  var jsonDate = null;
  try{
  	var script = parsedHTML.search('script');
  	if (script= null){
  		return null;
  	}
  
  	else{
  		var data = json.loads(script.text);--------------------------
  		try{
  			var jsonDate = parseStrDate(data['datePublished']);
  		}
		catch(e){}
		try{
			var jsonDate = parseStrDate(data['dateCreated']);
		}
		catch(e){}
	}}
	catch(e){
		return null;
	}
	return jsonDate;
}

function _extractFromMeta(parsedHTML) {
	var metaDate = null;
	for (meta in parsedHTML.search("meta")){
		var metaName = meta.get('name', '').lower()
        var itemProp = meta.get('itemprop', '').lower()
        var httpEquiv = meta.get('http-equiv', '').lower()
        var metaProperty = meta.get('property', '').lower()
	}
// 			if ('pubdate' == metaName){
// 		            metaDate = meta['content'].strip()
// 		            break
// 		    }

// 	        if ('publishdate' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('timestamp' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('dc.date.issued' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('article:published_time' == metaProperty){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('date' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('bt:pubdate' == metaProperty){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('sailthru.date' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('article.published' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('published-date' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('article.created' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }

// 	        if ('article_date_original' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }

// 	        if ('cxenseparse:recs:publishtime' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }
// 	        if ('date_published' == metaName){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }

// 	        if ('datepublished' == itemProp){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }

// 	        if ('datecreated' == itemProp){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }

// 	        if ('og:image' == metaProperty || "image" == itemProp){
// 	            var url = meta['content'].strip()----
// 	            var possibleDate = _extractFromURL(url)
// 	            if (possibleDate is not null){-----
// 	                return  possibleDate
// 	            }
// 	        }

// 	        if ('date' == httpEquiv){
// 	            metaDate = meta['content'].strip()
// 	            break
// 	        }

// 		    if (metaDate !== null){-----
// 		        return parseStrDate(metaDate)----
// 		    }

//     return null
// }

// function _extractFromHTMLTag(parsedHTML) {
//   return p1 * p2;
// }

// function  extractArticlePublishedDate(articleLink, html = null) {
//   return p1 * p2;
// }
