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


