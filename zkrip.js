$(document).ready(function(){

	$(&quot;#backtop&quot;).hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() &gt; 100) {
				$(&#39;#backtop&#39;).fadeIn();
			} else {
				$(&#39;#backtop&#39;).fadeOut();
			}
		});

		$(&#39;#backtop&#39;).click(function () {
			$(&#39;body,html&#39;).animate({
				scrollTop: 0
			}, 900);
			return false;
		});
	});

});
//<![CDATA[
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('!2(a){"17 16";3 b=2(b,c){3 d=5;d.6=b,d.$6=a(b),d.4=d.$6.t(),d.k=a.13({},a.q.7.Y,c),d.s=0,d.U()};b.14={U:2(){3 a=5;a.4.P&&(a.T(),a.11())},T:2(){3 b=5,c=b.k,d=c.o,e=c.S;b.r=[],b.$z=b.$6.1i(\'<Q m="\'+e+\'" />\').l("."+e),b.4.1j(\'<Q m="\'+c.R+\'" />\'),b.4.y(2(c,e){3 f,g=a(e),h=d;f=g.l(h).u(":n").B().1c(),b.r.1h(f)}),a.L(c.10)&&c.10.I(b.6)},11:2(){1f(3 b,c=5,d=c.k,e=d.W,f=c.r,g="<"+e+\' m="\'+d.X+\'">\',h=0,i=f.P,j=2(){3 a=18;p d.V.G.A(/\\{[0-9]\\}/g,2(b){3 c=15(b.A(/\\D/g,""));p a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$8=a(g).1g(c.$z),b=c.$8.l(":n")[0].1k.1e(),c.$8.1d("E",b,2(b){3 d=a(5),e=d.1b();c.w(e),b.19()}).l(":n").1a("E")},w:2(b){3 c=5,d=c.k,e=d.Z;c.4.B().u(":N("+b+")").w(),c.$8.t().1q(e).u(":N("+b+")").1z(e),a.L(d.v)&&b!==c.s&&d.v.I(c.6,b),c.s=b},1y:2(){3 a=5,b=a.k.o;a.$8.1l(),a.4.J().J(),a.4.F("O"),a.4.t(b+":n").F("O"),a.$6.1F("7")}},a.q.7=2(c,d){p 5.y(2(){3 e,f=a(5),g=f.C("7");e="1D"==K c&&c,g||f.C("7",g=1n b(5,e)),"1t"==K c&&g[c](d)})},a.q.7.Y={S:"4",R:"4-1s",Z:"1u-12",o:"1m, 1o, 1p, 1v, 1w, 1C",X:"4-1A",W:"1x",V:{G:\'<M m="12-{0}"><H>{1}</H></M>\'},v:1r}}(x.1E,x,1B);',62,104,'||function|var|tabs|this|element|mtabs|tabs_menu||||||||||||options|find|class|first|tab_text_el|return|fn|tab_names|current_tab|children|filter|onTabSelect|show|window|each|wrapper|replace|hide|data||click|removeAttr|tabsmenu_tab|span|call|unwrap|typeof|isFunction|li|eq|style|length|div|tabs_container_class|container_class|build|init|tmpl|tabsmenu_el|tabsmenu_class|defaults|active_tab_class|onReady|buildTabMenu|tab|extend|prototype|Number|strict|use|arguments|preventDefault|trigger|index|text|on|toLowerCase|for|prependTo|push|wrapInner|wrapAll|nodeName|remove|h1|new|h2|h3|removeClass|null|content|string|active|h4|h5|ul|destroy|addClass|menu|document|h6|object|jQuery|removeData'.split('|'),0,{}))
//]]>
//<![CDATA[
var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){if($(this).next().length>0){$(this).addClass("parent")}});$(".push").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){if(ww<768){$(".push").css("display","inline-block");if(!$(".push").hasClass("active")){$(".nav").hide()}else{$(".nav").show()}$(".nav li").unbind("mouseenter mouseleave");$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("hover")})}else if(ww>=768){$(".push").css("display","none");$(".nav").show();$(".nav li").removeClass("hover");$(".nav li a").unbind("click");$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")})}}
//]]>
//<![CDATA[
/*! Related Post Widget for Blogger by Taufik Nurrohman => http://gplus.to/tovic */
var randomRelatedIndex, showRelatedPost;
(function(a, b, c) {
// Default configuration data
var def = {
widgetTitle: "<h4>Related Post:</h4>",
widgetStyle: 1,
homePage: "//zkrip.blogspot.com",
numPosts: 7,
summaryLength: 170,
titleLength: "auto",
thumbnailSize: 72,
noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
containerId: "related-post",
newTabLink: false,
moreText: "Baca Selengkapnya",
callBack: function() {}
};
// Check if the base variable is exist
if (typeof relatedPostConfig == 'object') {
// Replace the default variable with variable value of `relatedPostConfig` if any
for (var i in relatedPostConfig) {
def[i] = relatedPostConfig[i];
}
}
// Remove trailing slash and `?m=1` or `?m=0` query string in the base URL if any
def.homePage = def.homePage.replace(/\/?\?m=\d+|\/+$/, "");
// Dynamic JavaScript loader (using `<script>` tag)
var lo = function(url) {
var s = b.createElement('script');
s.type = 'text/javascript';
s.src = url;
c.appendChild(s);
},
// Generate random number from the range of `min` to `max`
ri = function(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
},
// Function to randomize array(s)
shu = function(arr) {
var i = arr.length, j, temp;
if (i === 0) return false;
while (--i) {
j = Math.floor(Math.random() * (i + 1));
temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
return arr;
},
// Check if the base variable for the tag/label list does not exist or empty
la = (typeof labelArray == 'object' && labelArray.length > 0) ? '/-/' + shu(labelArray)[0] : "",
// A "random related index" function
// Generate random `start-index` value by loading an empty JSON feed entry
// to get only the `json.feed.openSearch$totalResults.$t` data to fill
// the `max` parameter of the `ri()` function above
rri = function(json) {
var to = json.feed.openSearch$totalResults.$t - def.numPosts,
si = ri(1, (to > 0 ? to : 1)); // Get random `start-index` with the `ri()` function
// Loading the original related post data ...
lo(def.homePage + '/feeds/posts/summary' + la + '?alt=json-in-script&orderby=updated&start-index=' + si + '&max-results=' + def.numPosts + '&callback=showRelatedPost');
},
// A "show related post" function
srp = function(json) {
var ct = b.getElementById(def.containerId),
entry = shu(json.feed.entry),
st = def.widgetStyle,
sk = def.widgetTitle + '<ul class="related-post-style-' + st + '">',
tg = def.newTabLink ? ' target="_blank"' : '',
cl = '<span style="display:block;clear:both;"></span>',
link, tt, title, img, summary;
if (!ct) return;
var entryLength = entry.length;
for (var i = 0; i < def.numPosts; i++) {
if (i === entryLength) break;
tt = entry[i].title.$t;
title = (def.titleLength !== 'auto' && def.titleLength < tt.length) ? tt.substring(0, def.titleLength) + '&hellip;' : tt;
img = ("media$thumbnail" in entry[i] && def.thumbnailSize !== false) ? entry[i].media$thumbnail.url.replace(/\/s\d+(\-c)?\//, '/s' + def.thumbnailSize + '-c/') : def.noImage;
summary = ("summary" in entry[i] && def.summaryLength > 0) ? entry[i].summary.$t.replace(/<br *\/?>/gi, ' ').replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, def.summaryLength) + '&hellip;' : "";
for (var j = 0, jen = entry[i].link.length; j < jen; j++) {
if (entry[i].link[j].rel == "alternate") {
link = entry[i].link[j].href;
break;
}
}
if (st == 2) {
sk += '<li><img alt="" class="related-post-item-thumbnail" src="' + img + '" width="' + def.thumbnailSize + '" height="' + def.thumbnailSize + '"><a class="related-post-item-title" title="' + tt + '" href="' + link + '"' + tg + '>' + title + '</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + summary + '</span> <a href="' + link + '" class="related-post-item-more"' + tg + '>' + def.moreText + '</a></span>' + cl + '</li>';
} else if (st == 3 || st == 4) {
sk += '<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="' + link + '"' + tg + '><img alt="" class="related-post-item-thumbnail" src="' + img + '" width="' + def.thumbnailSize + '" height="' + def.thumbnailSize + '"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="' + tt + '" href="' + link + '"' + tg + '>' + title + '</a></div>' + cl + '</li>';
} else if (st == 5) {
sk += '<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="' + link + '" title="' + tt + '"' + tg + '><img alt="" class="related-post-item-thumbnail" src="' + img + '" width="' + def.thumbnailSize + '" height="' + def.thumbnailSize + '"><span class="related-post-item-tooltip">' + title + '</span></a>' + cl + '</li>';
} else if (st == 6) {
sk += '<li><a class="related-post-item-title" title="' + tt + '" href="' + link + '"' + tg + '>' + title + '</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="' + img + '" width="' + def.thumbnailSize + '" height="' + def.thumbnailSize + '"><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + summary + '</span></span>' + cl + '</div></li>';
} else {
sk += '<li><a title="' + tt + '" href="' + link + '"' + tg + '>' + title + '</a></li>';
}
} ct.innerHTML = sk += '</ul>' + cl;
def.callBack(json);
};
randomRelatedIndex = rri;
showRelatedPost = srp;
// Generate random `start-index` data before loading the original related post data ...
lo(def.homePage + '/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex');
})(window, document, document.getElementsByTagName('head')[0]);
//]]>
var numposts = 1;
var numposts2 = 5;
var showpostthumbnails = true;
var showpostthumbnails2 = true;
var displaymore = true;
var displaymore2 = false;
var showcommentnum = true;
var showcommentnum2 = true;
var showpostdate = true;
var showpostdate2 = true;
var showpostsummary = true;
var numchars = 90;
var thumb_width = 300;
var thumb_height = 140;
var thumb_width2 = 60;
var thumb_height2 = 60;
var no_thumb = &#39;http://4.bp.blogspot.com/-2lY4EG6da1M/U7u04iBlXLI/AAAAAAAAAY4/HFx3YtnRQDY/s1600/Taklong_noimage1.png&#39;
var no_thumb2 = &#39;http://2.bp.blogspot.com/-Lyw1Fo2I9Ko/U7u04hBTXeI/AAAAAAAAAY8/GcOGEHbQrsQ/s1600/Taklong_noimage3.png&#39;
//<![CDATA[
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1A 1M(G){J(3 i=0;i<1G;i++){3 2=G.K.2[i];3 y=2.x.$t;3 p;e(i==G.K.2.C)M;J(3 k=0;k<2.j.C;k++){e(2.j[k].L==\'1a\'&&2.j[k].1e==\'1f/1j\'){3 o=2.j[k].x;3 U=2.j[k].n}e(2.j[k].L==\'19\'){p=2.j[k].n;M}}3 v;1g{v=2.1k$13.14;v=v.V("/15-c/","/w"+1m+"-h"+1o+"-c/")}17(16){s=2.I.$t;a=s.z("<P");b=s.z("O=\\"",a);c=s.z("\\"",b+5);d=s.1l(b+5,c-b-5);e((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){v=d}F v=1O}3 r=2.1u.$t;3 W=r.q(0,4);3 T=r.q(5,7);3 X=r.q(8,10);6.9(\'<N m="A-B-1c">\');6.9(\'<R>\');e(1Q==E)6.9(\'<a n="\'+p+\'"><H m="A-B-1t"><f m="1P"></f><P 1r="\'+1m+\'" 1q="\'+1o+\'" 1n="\'+y+\'" O="\'+v+\'"/></H></a>\');6.9(\'<f m="A-B-x"><a n="\'+p+\'" Y ="12">\'+y+\'</a></f>\');3 u=\'\';6.9(u);6.9(\'</f>\');6.9(\'<f m="A-B-11">\');e("I"1i 2){3 l=2.I.$t}F e("11"1i 2){3 l=2.11.$t}F 3 l="";3 18=/<\\S[^>]*>/g;l=l.V(18,"");e(1E==E){e(l.C<1b){6.9(\'\');6.9(l);6.9(\'\')}F{6.9(\'\');l=l.q(0,1b);3 1d=l.1w(" ");l=l.q(0,1d);6.9(l+\'...\');6.9(\'\')}}6.9(\'</f>\');6.9(\'</R>\');6.9(\'</N>\')}6.9(\'<N m="Q-1c">\');J(3 i=1;i<1C;i++){3 2=G.K.2[i];3 y=2.x.$t;3 p;e(i==G.K.2.C)M;J(3 k=1;k<2.j.C;k++){e(2.j[k].L==\'1a\'&&2.j[k].1e==\'1f/1j\'){3 o=2.j[k].x;3 U=2.j[k].n}e(2.j[k].L==\'19\'){p=2.j[k].n;M}}3 D;1g{D=2.1k$13.14.V("/15-c/","/w"+1s+"-h"+1p+"-c/")}17(16){s=2.I.$t;a=s.z("<P");b=s.z("O=\\"",a);c=s.z("\\"",b+5);d=s.1l(b+5,c-b-5);e((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){D=d}F D=1F}3 r=2.1u.$t;3 W=r.q(0,4);3 T=r.q(5,7);3 X=r.q(8,10);e(1K==E)6.9(\'<a n="\'+p+\'"><H m="Q-1t"><P 1r="\'+1s+\'" 1q="\'+1p+\'" 1n="\'+y+\'" O="\'+D+\'"/></H></a>\');6.9(\'<R>\');6.9(\'<f m="A-B-x A-B-1v"><a n="\'+p+\'" Y ="12">\'+y+\'</a></f>\');3 u=\'\';6.9(\'<f m="Q-1J 1y">\');e(1z==E){u=u+\'<f m="1B Q-1D">\'+X+\'/\'+T+\'/\'+W+\'</f>\'}e(1L==E){e(o==\'1 Z\')o=\'1 1H\';e(o==\'0 Z\')o=\'1I Z\';o=\'<f m="1h-1N 1h-1x"><a n="\'+U+\'" Y ="12">\'+o+\'</a></f>\';u=u+o}6.9(u);6.9(\'</f>\');6.9(\'</R>\')}6.9("</N>")}',62,115,'||entry|var|||document|||write|||||if|span||||link||postcontent|class|href|commenttext|posturl|substring|postdate|||towrite|thumburl||title|posttitle|indexOf|recent|post|length|thumburl2|true|else|json|div|content|for|feed|rel|break|ul|src|img|recentpost|li||cdmonth|commenturl|replace|cdyear|cdday|target|Comments||summary|_top|thumbnail|url|s72|error|catch|re|alternate|replies|numchars|thumbs|quoteEnd|type|text|try|recenpost|in|html|media|substr|thumb_width|alt|thumb_height|thumb_height2|height|width|thumb_width2|thumb|published|title2|lastIndexOf|comment2|recentpost2|showpostdate2|function|recentpostdate|numposts2|date|showpostsummary|no_thumb2|numposts|Comment|No|meta|showpostthumbnails2|showcommentnum2|labelthumbs|comment|no_thumb|thumbsnail|showpostthumbnails'.split('|'),0,{}))
//]]>
(function() {
    var po = document.createElement(&#39;script&#39;); po.type = &#39;text/javascript&#39;; po.async = true;
    po.src = &#39;https://apis.google.com/js/plusone.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(po, s);
  })();
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;js.async=true;
  js.src = &quot;//connect.facebook.net/en_US/all.js#xfbml=1&quot;;
  fjs.parentNode.insertBefore(js, fjs);
}(document, &#39;script&#39;, &#39;facebook-jssdk&#39;));
  var pres = document.getElementsByTagName(&quot;blockquote&quot;);
for (var i = 0; i &lt; pres.length; i++) {
  pres[i].addEventListener(&quot;dblclick&quot;, function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);   }, false); }
