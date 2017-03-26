var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>
&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
</b:loop></b:if>];
var relatedPostConfig = {
homePage: &quot;<data:blog.homepageUrl/>&quot;,
widgetTitle: &quot;&lt;h4&gt;Related Post:&lt;/h4&gt;&quot;,
numPosts: 5,
summaryLength: 170,
titleLength: &quot;auto&quot;,
thumbnailSize: 80,
noImage: &quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC&quot;,
containerId: &quot;related-post&quot;,
newTabLink: false,
moreText: &quot;Read More&quot;,
widgetStyle: 2,
callBack: function() {}
}; 
(function() {
    var po = document.createElement(&#39;script&#39;); po.type = &#39;text/javascript&#39;; po.async = true;
    po.src = &#39;https://apis.google.com/js/plusone.js&#39;;
    var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(po, s);
  })();
//<![CDATA[
		eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('z v(o){5 m=I.7,l=m.6("/j/w/")!=-1,a=l?m.Y(m.6("/j/w/")+14,m.X):"";a=a.6("?")!=-1?a.Y(0,a.6("?")):a;5 g=l?"/j/w/"+a+"?W-9=":"/j?W-9=",k=o.H.G.X,e=D.1a(k/3.r);4(e<=1){K}5 n=1,h=[""];l?h.C("/j/w/"+a+"?9-u="+3.r):h.C("/?9-u="+3.r);F(5 d=2;d<=e;d++){5 c=(d-1)*3.r-1,b=o.H.G[c].1d.$t,f=b.y(0,19)+b.y(10,16);f=17(f);4(m.6(f)!=-1){n=d}h.C(g+f+"&9-u="+3.r)}v.E(h,n,e)}v.E=z(f,e,a){5 d=D.12((3.s-1)/2),g=3.s-1-d,c=e-d;4(c<=0){c=1}8=e+g;4((8-c)<3.s){8=c+3.s-1}4(8>a){8=a;c=a-3.s+1}4(c<=0){c=1}5 b=\'<x 11="1b">1c \'+e+\' 1h \'+a+"</x> ";4(c>1){b+=\'<a 7="\'+f[1]+\'">\'+3.1f+"</a>"}4(e>1){b+=\'<a 7="\'+f[e-1]+\'">\'+3.1g+"</a>"}F(i=c;i<=8;++i){4(i==e){b+=\'<x>\'+i+"</x>"}Z{b+=\'<a 7="\'+f[i]+\'">\'+i+"</a>"}}4(e<a){b+=\'<a 7="\'+f[e+1]+\'">\'+3.1e+"</a>"}4(8<a){b+=\'<a 7="\'+f[a]+\'">\'+3.18+"</a>"}B.A(b)};(z(){5 b=I.7;4(b.6("?q=")!=-1||b.6(".15")!=-1){K}5 d=b.6("/j/w/")+14;4(d!=13){5 c=b.6("?"),a=(c==-1)?b.y(d):b.y(d,c);B.A(\'<p U="O/N" M="/V/L/P/-/\'+a+\'?Q=T-S-p&R=v&9-u=J"><\\/p>\')}Z{B.A(\'<p U="O/N" M="/V/L/P?Q=T-S-p&R=v&9-u=J"><\\/p>\')}})();',62,80,'|||pageNaviConf|if|var|indexOf|href|endPage|max||||||||||search||||||script||perPage|numPages||results|pageNavi|label|span|substring|function|write|document|push|Math|show|for|entry|feed|location|99999|return|posts|src|javascript|text|summary|alt|callback|in|json|type|feeds|updated|length|substr|else|23|class|floor|||html|29|encodeURIComponent|lastText||ceil|pages|Pages|published|nextText|firstText|prevText|of'.split('|'),0,{}))
		//]]>
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
var pres = document.getElementsByTagName(&quot;blockquote&quot;);
for (var i = 0; i &lt; pres.length; i++) {
  pres[i].addEventListener(&quot;dblclick&quot;, function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);   }, false); }
