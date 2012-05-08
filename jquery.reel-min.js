/*
 Copyright (c) 2009-2012 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1.4-devel
 Updated: 2012-05-08

 Requires jQuery 1.5 or higher
*/
jQuery.reel||function(k,sb,Ba,p){function Ub(g){return r.instances.push(g[0])&&g}function Vb(g){return(r.instances=r.instances.not(Ca(g.attr(ea))))&&g}function Y(g){return r.instances.first().data(g)}function Wb(g){return"data:image/gif;base64,R0lGODlh"+g}function T(g){return"<"+g+"/>"}function t(g){return"."+(g||"")}function Xa(g){return g.replace(ma,r.cdn)}function Da(g){return"url("+Ya(g)+")"}function tb(g,j){return typeof j==Za?j[g]:j}function na(g,j,q){return ub(g,$a(j,q))}function Xb(g){function j(){k.fn[this]||
(k.fn[this]=function(){return this})}k.each(g,j)}function ab(g,j){return O(g)*(j?-1:1)}function Ea(g){return Fa?g.touch||g.originalEvent.touches[0]:g}function z(g){return g===p?0:typeof g==vb?g:g+"px"}function Ca(g){return"#"+g}function Yb(g,j,q){for(;g.length<j;)g=q+g;return g}function Ya(g){return encodeURI(decodeURI(g))}function wb(g){try{console.warn("Deprecation - Please consult https://github.com/pisi/Reel/wiki/Deprecations")}catch(j){}return g}if(+k().jquery.replace(t(),"").substr(0,2)<15)throw"VersionError: far too old jQuery for running Reel";
var r=k.reel={version:"1.1.4-devel",def:{frame:1,frames:36,loops:true,clickfree:false,draggable:true,scrollable:true,steppable:true,throwable:true,wheelable:true,cw:false,revolution:p,stitched:0,directional:false,row:1,rows:0,orbital:0,vertical:false,inversed:false,footage:6,spacing:0,horizontal:true,suffix:"-reel",image:p,images:"",path:"",preload:"fidelity",speed:0,delay:0,timeout:2,rebound:0.5,entry:p,opening:0,brake:0.23,velocity:0,tempo:36,laziness:6,cursor:p,hint:"",indicator:0,klass:"",preloader:2,
area:p,attr:{},annotations:p,graph:p,monitor:p,step:p,steps:p},fn:{reel:function(){var g=arguments,j=k(this),q=j.data(),v=g[0]||{},u=g[1];if(typeof v=="object"){var a=k.extend({},r.def,v);g=function(l){var e=[];l.filter(bb).each(function(){var c=k(this),x=a.images.length&&a.images||a.sequence||a.image||a.attr.src||c.attr("src"),E=oa(a.attr.width||c.css(cb)),A=oa(a.attr.height||c.css(xb));x&&x!=J&&E&&A&&e.push(c)});l.filter(t(y)).each(function(){e.push(k(this).unreel())});return k(e)}(this);var P=
[];a.step&&(a.frame=a.step);a.steps&&(a.frames=a.steps);g.each(function(){var l=k(this),e=function(d,b){return l.reel(d,b)&&b},c=function(d){return l.reel(d)},x={setup:function(){if(!l.hasClass(y)){e(Ga,a);var d=l.attr(a.attr).attr("src"),b=e(ea,l.attr(ea)||l.attr(ea,y+"-"+ +new Date).attr(ea)),f=l.attr(pa),h=k.extend({},l.data()),i=r.re.sequence.exec(a.images);i=e(Z,i?r.sequence(i,a,c):a.images||[]);var m=a.stitched,n=a.loops,o={x:oa(l.css(cb)||a.attr.width),y:oa(l.css(xb)||a.attr.height)},fa=e(G,
a.orbital&&a.footage||a.rows<=1&&i.length||a.frames),B=a.rows>1||a.orbital,K=a.revolution;e(Ha,tb("x",K)||m/2||o.x*2);e(yb,!B?0:tb("y",K)||(a.rows>3?o.y:o.y/(5-a.rows)));B=m?1:qa(fa/a.footage);b=Ca(b+a.suffix);K=l[0].className||J;var L=k(T(ra),{id:b.substr(1),"class":K+C+Zb+C+zb+"0"});L=l.wrap(L.addClass(a.klass)).attr({"class":y});P.push(Ub(L)[0]);L=L.parent().bind(x.instance);e(db,i.length?J:a.image||d.replace(r.re.image,"$1"+a.suffix+".$2"));e(Ab,[]);e(Bb,a.spacing);e(eb,B);e(H,o);e(Ia,1/(fa-(n&&
!m?0:1)));e(fb,m);e(Cb,m-(n?0:o.x));e(gb,0);e(Db,b);e(M,e(sa,a.speed)<0);e(ga,a.velocity||0);e(ha,a.vertical);e(Q,0);e(ia,ab(1,!a.cw&&!m));e(Ja,{});e(ta,false);e(Ka,e(hb,0));e(La,e(Ma,0));e(ua,false);e(U,false);e(Eb,a.brake);e(ib,!!a.orbital);e($,a.tempo/(r.lazy?a.laziness:1));e(ja,-1);e(Na,a.annotations||L.unbind(t(Na))&&{});e(Fb,{src:d,classes:K,style:f||J,data:h});a.steppable||L.unbind("click.steppable");a.indicator||L.unbind(".indicator");D(J,{width:o.x,height:o.y,overflow:jb,position:"relative"});
D(aa+C+t(y),{display:Gb});R.bind(x.pool);l.trigger("setup")}},instance:{teardown:function(){var d=l.data(Fb);l.parent().unbind(x.instance);c(pa).remove();c(Oa).enableTextSelect();Vb(l.unbind(V).removeData().siblings().unbind(V).remove().end().attr({"class":d.classes,src:d.src,style:d.style}).data(d.data).unwrap());Pa();R.unbind(x.pool);S.unbind(W)},setup:function(){function d(i){return function(m){if(m.button==$b)return m.preventDefault()||l.trigger("down",[Ea(m).clientX,Ea(m).clientY])&&i}}var b=
c(H);c(G);l.attr(ea);var f=l.parent();area=e(Oa,k(a.area||f));if(Fa){D(C+t(y),{WebkitUserSelect:Qa,WebkitBackgroundSize:c(Z).length?p:c(fb)&&z(c(fb))+C+z(b.y)||z(b.x*a.footage)+C+z(b.y*c(eb)*(a.rows||1)*(a.directional?2:1))});area.bind(ac,d())}else{b=a.cursor==Hb?bc:a.cursor||cc;var h=a.cursor==Hb?dc+C+"!important":p;D(J,{cursor:Xa(b)});D(t(kb),{cursor:"wait"});D(t(Ra)+aa+t(Ra)+" *",{cursor:Xa(h||b)},true);area.bind(a.wheelable?ec:J,function(i,m){return i.preventDefault()||!m||l.trigger("wheel",[m])&&
false}).bind(a.clickfree?fc:gc,d()).disableTextSelect()}a.hint&&area.attr("title",a.hint);a.indicator&&f.append(va("x"));a.rows>1&&a.indicator&&f.append(va("y"));a.monitor&&f.append(Ib=k(T(ra),{"class":Jb}))&&D(C+t(Jb),{position:Sa,left:0,top:0});D(C+t(Kb),{display:Qa})},preload:function(){function d(L,Lb){setTimeout(function(){Lb.parent().length&&Lb.attr({src:Ya(L)})},(fa-o.length)*2)}var b=c(H),f=l.parent(),h=c(Z),i=!h.length,m=c(G),n=r.preload[a.preload]||r.preload[r.def.preload],o=i?[c(db)]:n(h.slice(0),
a,c),fa=o.length;e(Q,i?0.5:0);h=[];f.addClass(kb).append(ka());e(pa,k("<"+pa+' type="text/css">'+D.rules.join("\n")+"</"+pa+">").prependTo(lb));for(l.trigger("stop");o.length;){n=a.path+o.shift();var B=b.x*(!i?1:a.footage),K=b.y*(!i?1:m/a.footage)*(!a.directional?1:2);B=k(T(bb)).attr({"class":Kb,width:B,height:K}).appendTo(f);B.bind("load error abort",function(){return!!k(this).parent().length&&l.trigger("preloaded")&&false});d(n,B);h.push(n)}e(Ab,h)},preloaded:function(){var d=c(Z).length||1,b=e(Q,
$a(c(Q)+1,d));if(b===d){l.parent().removeClass(kb).unbind(Q,x.instance.preloaded);l.trigger("loaded")}b===1&&l.trigger("frameChange",[p,c(X)])},loaded:function(){c(Z).length>1||l.css({backgroundImage:Da(a.path+c(db))}).attr({src:Xa(hc)})},opening:function(){if(!a.opening)return l.trigger("openingDone");e(U,true);e(mb,!c(sa));var d=a.entry||a.speed,b=c(w),f=a.opening;e(w,b-d*a.opening);e(ja,qa(f*Y($)))},openingDone:function(){e(wa,false);e(U,false);var d=la+t(U);R.unbind(d,x.pool[d]);if(a.delay>0)N=
setTimeout(function(){l.trigger("play")},a.delay*1E3);else l.trigger("play")},play:function(d,b){b=e(sa,b||c(sa));e(M,b<0);d=e(wa,!!b);e(mb,!d);ba()},pause:function(){e(wa,false);F()},stop:function(){var d=e(mb,true);e(wa,!d)},down:function(d,b,f){function h(m){return function(n){n.preventDefault();l.trigger("pan",[Ea(n).clientX,Ea(n).clientY,n]);return m}}function i(m){return function(n){n.preventDefault();l.trigger("up",[n]);return m}}if(a.draggable){e(ta,c(X));e(ga,0);d=!c(ua)||a.rows<=1||!a.orbital||
a.scrollable;Ta=Ua(c(Ha),b,f);F();Pa();s=false;k(Mb,S).addClass(Ra);Fa?S.bind(ic,h(!d)).bind(jc+C+kc,i()):(a.clickfree?c(Oa):S).bind(lc,h()).bind(a.clickfree?mc:nc,i())}},up:function(){if(a.draggable){e(ta,false);e(ua,false);ca=e(ga,!a.throwable?0:O(xa[0]+xa[1])/60)?1:0;F();Pa();k(Mb,S).removeClass(Ra);(a.clickfree?c(Oa):S).unbind(W)}},pan:function(d,b,f,h){if(a.draggable&&nb){nb=false;F();d=h&&!k(h.currentTarget).is(R)&&oc.offset()||{left:0,top:0};b-=d.left;f-=d.top;var i={x:b-Ta.x,y:f-Ta.y};if(O(i.x)>
0||O(i.y)>0){s=true;Ta={x:b,y:f};d=c(Ha);h=c(Ja);var m=c(ha),n=e(w,Nb(m?f-h.y:b-h.x,c(Ka),d,c(La),c(Ma),c(ia),m?f-h.y:b-h.x));e(ua,c(ua)||c(X)!=c(ta));(i=Ob(m?i.y:i.x||0))&&e(M,i<0);if(a.orbital&&c(ib)){e(ha,O(f-h.y)>O(b-h.x));h=Ua(d,b,f)}if(a.rows>1){c(H);i=c(yb);m=c(hb);var o=-m*i;e(ya,r.math.envelope(f-h.y,m,i,o,o+i,-1))}!(n%1)&&!a.loops&&Ua(d,b,f)}}},wheel:function(d,b){if(b){d=qa(da.sqrt(O(b))/2);d=ab(d,b>0);b=0.0833*c(Ha);Ua(b);d&&e(M,d<0);e(ga,0);e(w,Nb(d,c(Ka),b,c(La),c(Ma),c(ia)));F();l.trigger("up");
return false}},fractionChange:function(d,b,f){if(b!==p)return wb(e(w,b));d=1+Va(f/c(Ia));b=a.rows>1;f=a.orbital;e(ib,!!f&&(d<=f||d>=a.footage-f+2));if(b)d+=(c(za)-1)*c(G);e(X,d)},tierChange:function(d,b,f){if(b===p){d=e(za,I(Aa(f,1,a.rows)));b=c(G);f=c(X)%b||b;e(X,f+d*b-b)}},rowChange:function(d,b,f){if(b!==p)return e(za,b);e(ya,1/(a.rows-1)*(f-1))},frameChange:function(d,b,f){if(b!==p)return wb(e(X,b));this.className=this.className.replace(r.re.frame_klass,zb+f);b=c(G);var h=f%b||b;d=!!c(Q);var i=
((f-h)/b+1-1)/(a.rows-1),m=I(Aa(i,1,a.rows));d&&m===c(za)?c(ya):e(ya,i);i=$a((h-1)/(b-1),0.9999);h=c(za)*b-b;b=I(Aa(i,h+1,h+b));h=O((c(w)||0)-i)<1/(c(G)-1);d&&b===f&&h?c(w):e(w,i);var n=a.footage;if(a.orbital&&c(ha)){f=a.inversed?n+1-f:f;f+=n}b=a.horizontal;h=c(Z);var o=!h.length;m=c(H);if(o){if(a.stitched){f=e(gb,I(Aa(i,0,c(Cb)))%a.stitched);f=[z(-f),z(0)]}else{d=f%n-1;d=d<0?n-1:d;i=Va((f-0.1)/n);i+=a.rows>1?0:c(M)?0:c(eb);f=c(Bb);i=i*((b?m.y:m.x)+f);f=d*((b?m.x:m.y)+f);f=h.length?[0,0]:b?[z(-f),
z(-i)]:[z(-i),z(-f)]}l.css({backgroundPosition:f.join(C)})}else{f=h[f-1];d&&l.attr({src:Ya(a.path+f)})}},"fractionChange.indicator":function(d,b,f){if(b===p&&a.indicator){d=c(H);d=a.orbital&&c(ha)?d.y:d.x;var h=a.orbital?a.footage:a.images.length||c(G);b=a.indicator;h=qa(d/h);d-=h;f=I(Aa(f,0,d));f=!a.cw||a.stitched?f:d-f;va.$x.css(c(ha)?{left:0,top:z(f),bottom:Pb,width:b,height:h}:{bottom:0,left:z(f),top:Pb,width:h,height:b})}},"tierChange.indicator":function(d,b,f){if(b===p&&a.rows>1&&a.indicator){var h=
c(H).y;d=a.indicator;b=qa(h/a.rows);h-=b;f=I(f*h);va.$y.css({left:0,top:f,width:d,height:b})}},"setup.annotations":function(){c(H);var d=l.parent();k.each(c(Na),function(b,f){var h=typeof f.node==vb?k(f.node):f.node||{};h=h.jquery?h:k(T(ra),h);h=h.attr({id:b}).addClass(pc);var i=f.image?k(T(bb),f.image):k(),m=f.link?k(T("a"),f.link):k();D(Ca(b),{display:Qa,position:Sa},true);f.image||f.link&&h.append(m);f.link||f.image&&h.append(i);f.link&&f.image&&h.append(m.append(i));h.appendTo(d)})},"frameChange.annotations":function(d,
b,f){c(Q)&&b===p&&k.each(c(Na),function(h,i){h=k(Ca(h));var m=i.start||1,n=i.end,o=f-1,fa=i.at?i.at[o]=="+":false;o=i.at?o:o-m+1;var B=typeof i.x!=Za?i.x:i.x[o],K=typeof i.y!=Za?i.y:i.y[o];i=B!==p&&K!==p&&(i.at?fa:o>=0&&(!n||o<=n-m));B=!a.stitched?B:B-c(gb);i={display:i?Gb:Qa,left:z(B),top:z(K)};h.css(i)})},"up.annotations":function(d,b){if(!s)(d=b&&k(b.target).attr("href"))&&(s=!!(sb.location.href=d))},"up.steppable":function(d){if(s)return E(d,false);l.trigger(c(Ja).x-l.offset().left>0.5*c(H).x?
"stepRight":"stepLeft")},"stepLeft stepRight":function(){F()},stepLeft:function(){e(M,false);e(w,c(w)-c(Ia)*c(ia))},stepRight:function(){e(M,true);e(w,c(w)+c(Ia)*c(ia))},"setup.fu":function(){e(X,a.frame+(a.row-1)*c(G));l.trigger("preload")},"clean.fu":function(){l.trigger("teardown")},"loaded.fu":function(){l.trigger("opening")}},pool:{"tick.reel.preload":function(){var d=c(H),b=oa(ka.$.css(cb)),f=c(Z).length||1,h=I(1/f*c(Q)*d.x);ka.$.css({width:b+(h-b)/3+1});if(c(Q)===f&&b>d.x-1){ka.$.fadeOut(300,
function(){ka.$.remove()});R.unbind(la+t(Qb),x.pool[la+t(Qb)])}},"tick.reel":function(d){var b=c(ga),f=Y($);if(ca){b=b-c(Eb)/f*ca;b=e(ga,b>0.1?b:(ca=A=0))}a.monitor&&Ib.text(c(a.monitor));b&&ca++;A&&A++;Ob(0);nb=true;if(A&&!b)return E(d);if(c(ta))return E(d,F());if(!(c(ja)>0)){if(!a.loops&&a.rebound){!A&&!(c(w)%1)?ob++:(ob=0);ob>=a.rebound*1E3/f&&e(M,!c(M))}d=c(ia)*ab(1,c(M));b=(!c(wa)?b:O(c(sa))+b)/Y($);e(w,c(w)-b*d)}},"tick.reel.opening":function(){if(c(U)){var d=(a.entry||a.speed)/Y($)*(a.cw?-1:
1),b=e(ja,c(ja)-1);e(w,c(w)+d);b||l.trigger("openingDone")}}}},E=function(d,b){return d.stopImmediatePropagation()||b},A,ca=0,ba=function(){return A=0},F=function(){clearTimeout(N);R.unbind(la+t(U),x.pool[la+t(U)]);e(ja,0);return A=-a.timeout*Y($)},s=false,N,Ib=k(),ka=function(){D(C+t(Rb),{position:Sa,left:0,top:c(H).y-a.preloader,height:a.preloader,overflow:jb,backgroundColor:"#000"});return ka.$=k(T(ra),{"class":Rb})},va=function(d){D(C+t(Sb)+t(d),{position:Sa,width:0,height:0,overflow:jb,backgroundColor:"#000"});
return va["$"+d]=k(T(ra),{"class":Sb+C+d})},D=function(d,b,f){function h(i){var m=[];k.each(i,function(n,o){m.push(n.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+z(o)+";")});return"{"+m.join(J)+"}"}f=f?J:c(Db);d=d.replace(/^/,f).replace(aa,aa+f);return D.rules.push(d+h(b))&&b},ob=0,Ta={x:0,y:0},Ob=function(d){return xa.push(d)&&xa.shift()&&d},Pa=function(){return xa=[0,0]},xa=Pa(),Nb=a.graph||r.math[a.loops?"hatch":"envelope"],Ua=function(d,b,f){var h=e(Ka,c(w));e(hb,c(ya));e(La,a.loops?0:-h*d);e(Ma,
a.loops?d:d-h*d);return b&&e(Ja,{x:b,y:f})||p},nb=true,S;try{S=k.unique(R.add(sb.top.document))}catch(sc){S=R}var oc=top===self?k():function(d){k("iframe",S.last()).each(function(){try{if(k(this).contents().find(lb).html()==k(lb).html())return(d=k(this))&&false}catch(b){}});return d}();D.rules=[];x.setup()});Wa=Wa||function l(){var e=+new Date,c=Y($);if(!c)return Wa=null;R.trigger(la);r.cost=(+new Date+r.cost-e)/2;return Wa=setTimeout(l,ub(4,1E3/c-r.cost))}();return k(P)}else if(typeof v=="string")if(g.length==
1){u=q[v];j.trigger("recall",[v,u]);return u}else{if(u!==p){try{u=r.normal[v](u,q)}catch(pb){}if(q[v]!==u)j.trigger(v+"Change",[p,q[v]=u])}return j.trigger("store",[v,u])}},unreel:function(){return this.trigger("teardown")}},re:{image:/^(.*)\.(jpg|jpeg|png|gif)\??.*$/,touchy_agent:/iphone|ipod|ipad|android|fennec|rim tablet/i,lazy_agent:/\(iphone|ipod|android|fennec|blackberry/i,frame_klass:/frame-\d+/,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.cz/",
math:{envelope:function(g,j,q,v,u,a){return j+na(v,u,-g*a)/q},hatch:function(g,j,q,v,u,a){g=(g<v?u:0)+g%u;g=j+-g*a/q;return g-Va(g)},interpolate:function(g,j,q){return j+g*(q-j)}},preload:{fidelity:function(g,j,q){function v(l,e,c){function x(N){for(;!(N>=1&&N<=ba);)N+=N<1?+ba:-ba;return pb[c+N]||(pb[c+N]=!!E.push(N))}if(!l.length)return[];var E=[],A=4*e,ca=j.frame,ba=l.length;e=true;for(var F=ba/A,s=0;s<A;s++)x(ca+I(s*F));for(;F>1;){s=0;A=E.length;F/=2;for(e=!e;s<A;s++)x(E[s]+(e?1:-1)*I(F))}for(s=
0;s<=ba;s++)x(s);for(s=0;s<E.length;s++)E[s]=l[E[s]-1];return E}var u=j.orbital?2:j.rows||1,a=j.orbital?j.footage:q(G);q=(j.row-1)*a;var P=[].concat(g),pb=new Array(g.length+1);g=u<2?[]:P.slice(q,q+a);return v(g,1,q).concat(v(P,u,0))},linear:function(g){return g}},normal:{fraction:function(g,j){return j[Ga].loops?g-Va(g):na(0,1,g)},tier:function(g){return na(0,1,g)},row:function(g,j){return I(na(1,j[Ga].rows,g))},frame:function(g,j){var q=j[Ga];j=j[G]*(q.orbital?2:q.rows||1);g=I(q.loops?g%j||j:na(1,
j,g));return g<0?g+j:g}},sequence:function(g,j){if(g.length<=1)return j.images;var q=[],v=g[1],u=g[2],a=+g[4]||1,P=j.orbital?2:j.rows||1;j=j.orbital?j.footage:j.frames;P=+(g[5]||P*j);g=+g[7]||1;for(j=0;j<P;){q.push(v.replace(u,Yb(a+j+J,u.length,"0")));j+=g}return q},instances:k(),leader:Y,cost:0},R=k(Ba);Ba=+k.browser.version.split(t()).slice(0,2).join(t());var qb=k.browser.msie,qc=!qb||qb&&Ba>6,Tb=navigator.userAgent,Wa,y="reel",Zb=y+"-overlay",Sb=y+"-indicator",Rb=y+"-preloader",Kb=y+"-cached",
Jb=y+"-monitor",pc=y+"-annotation",Ra=y+"-panning",kb=y+"-loading",zb="frame-",da=Math,I=da.round,Va=da.floor,qa=da.ceil,$a=da.min,ub=da.max,O=da.abs,oa=parseInt,Aa=r.math.interpolate,Na="annotations",Oa="area",Pb="auto",Fb="backup",M="backwards",Ia="bit",Eb="brake",Ab="cached",ib="center",ta="clicked",Ja="clicked_location",Ka="clicked_on",hb="clicked_tier",ia="cwish",H="dimensions",w="fraction",X="frame",G="frames",Ma="hi",jb="hidden",db="image",Z="images",U="opening",ja=U+"_ticks",La="lo",Ga="options",
wa="playing",Q="preloaded",ua="reeling",Ha="revolution",yb="revolution_y",za="row",eb="rows",Bb="spacing",sa="speed",Db="stage",fb="stitched",gb="stitched_shift",Cb="stitched_travel",mb="stopped",pa="style",$="tempo",ya="tier",ga="velocity",ha="vertical",V=t(y),W=".pan"+V,gc="mousedown"+V,fc="mouseenter"+V,mc="mouseleave"+W,lc="mousemove"+W,nc="mouseup"+W,ec="mousewheel"+V,la="tick"+V,kc="touchcancel"+W,jc="touchend"+W,ac="touchstart"+V,ic="touchmove"+W,J="",C=" ",aa=",",Sa="absolute",Gb="block",
ma="@CDN@",ra="div",Hb="hand",lb="head",xb="height",Mb="html",ea="id",bb="img",rb="jquery."+y,Qa="none",Za="object",Qb="preload",vb="string",cb="width",hc=qc?Wb("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):ma+"blank.gif",cc=Da(ma+rb+".cur")+aa+"move",bc=Da(ma+rb+"-drag.cur")+aa+"move",dc=Da(ma+rb+"-drag-down.cur")+aa+"move",Fa=r.touchy=r.re.touchy_agent.test(Tb);r.lazy=r.re.lazy_agent.test(Tb);var $b=Fa?p:qb&&Ba<=8?1:0,rc=k.cleanData;k.cleanData=function(g){rc(k(g).each(function(){k(this).triggerHandler("clean")}))};
Xb("disableTextSelect enableTextSelect".split(/ /));k.extend(k.fn,r.fn)}(jQuery,window,document);
