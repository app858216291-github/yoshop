(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-detail~pages-custom-index~pages-goods-detail~pages-index-index"],{"24c9":function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",{class:(t.selectable?"_select ":"")+"_root",style:t.containerStyle,attrs:{id:"_root"}},[t.nodes[0]?r("node",{attrs:{childs:t.nodes,opts:[t.lazyLoad,t.loadingImg,t.errorImg,t.showImgMenu],name:"span"}}):t._t("default")],2)},a=[]},"27cd":function(t,n,r){r("99af"),r("caad"),r("c975"),r("baa5"),r("a434"),r("d3b7"),r("acd8"),r("e25e"),r("ac1f"),r("25f0"),r("2532"),r("5319"),r("1276"),r("498a");var e={trustTags:c("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:c("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:c("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:c("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",strike:"text-decoration:line-through",u:"text-decoration:underline"},svgDict:{animatetransform:"animateTransform",lineargradient:"linearGradient",viewbox:"viewBox",attributename:"attributeName",repeatcount:"repeatCount",repeatdur:"repeatDur"}},i={},a=uni.getSystemInfoSync(),s=a.windowWidth,o=c(" ,\r,\n,\t,\f"),l=0;function c(t){for(var n=Object.create(null),r=t.split(","),e=r.length;e--;)n[r[e]]=!0;return n}function h(t,n){var r=t.indexOf("&");while(-1!==r){var i=t.indexOf(";",r+3),a=void 0;if(-1===i)break;"#"===t[r+1]?(a=parseInt(("x"===t[r+2]?"0":"")+t.substring(r+2,i)),isNaN(a)||(t=t.substr(0,r)+String.fromCharCode(a)+t.substr(i+1))):(a=t.substring(r+1,i),(e.entities[a]||"amp"===a&&n)&&(t=t.substr(0,r)+(e.entities[a]||"&")+t.substr(i+1))),r=t.indexOf("&",r+1)}return t}function d(t){this.options=t||{},this.tagStyle=Object.assign({},e.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[],this.pre=(this.options.containerStyle||"").includes("white-space")&&this.options.containerStyle.includes("pre")?2:0}function u(t){this.handler=t}e.ignoreTags.iframe=void 0,e.trustTags.iframe=!0,e.ignoreTags.embed=void 0,e.trustTags.embed=!0,d.prototype.parse=function(t){for(var n=this.plugins.length;n--;)this.plugins[n].onUpdate&&(t=this.plugins[n].onUpdate(t,e)||t);new u(this).parse(t);while(this.stack.length)this.popNode();return this.nodes},d.prototype.expose=function(){for(var t=this.stack.length;t--;){var n=this.stack[t];if(n.c||"a"===n.name||"video"===n.name||"audio"===n.name)return;n.c=1}},d.prototype.hook=function(t){for(var n=this.plugins.length;n--;)if(this.plugins[n].onParse&&!1===this.plugins[n].onParse(t,this))return!1;return!0},d.prototype.getUrl=function(t){var n=this.options.domain;return"/"===t[0]?"/"===t[1]?t=(n?n.split("://")[0]:"http")+":"+t:n&&(t=n+t):!n||t.includes("data:")||t.includes("://")||(t=n+"/"+t),t},d.prototype.parseStyle=function(t){var n=t.attrs,r=(this.tagStyle[t.name]||"").split(";").concat((n.style||"").split(";")),e={},i="";n.id&&!this.xml&&(this.options.useAnchor?this.expose():"img"!==t.name&&"a"!==t.name&&"video"!==t.name&&"audio"!==t.name&&(n.id=void 0)),n.width&&(e.width=parseFloat(n.width)+(n.width.includes("%")?"%":"px"),n.width=void 0),n.height&&(e.height=parseFloat(n.height)+(n.height.includes("%")?"%":"px"),n.height=void 0);for(var a=0,l=r.length;a<l;a++){var c=r[a].split(":");if(!(c.length<2)){var h=c.shift().trim().toLowerCase(),d=c.join(":").trim();if("-"===d[0]&&d.lastIndexOf("-")>0||d.includes("safe"))i+=";".concat(h,":").concat(d);else if(!e[h]||d.includes("import")||!e[h].includes("import")){if(d.includes("url")){var u=d.indexOf("(")+1;if(u){while('"'===d[u]||"'"===d[u]||o[d[u]])u++;d=d.substr(0,u)+this.getUrl(d.substr(u))}}else d.includes("rpx")&&(d=d.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"})));e[h]=d}}}return t.attrs.style=i,e},d.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"===this.tagName&&(this.xml=(this.xml||0)+1)},d.prototype.onAttrName=function(t){t=this.xml?t:t.toLowerCase(),"data-"===t.substr(0,5)?"data-src"!==t||this.attrs.src?"img"===this.tagName||"a"===this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},d.prototype.onAttrVal=function(t){var n=this.attrName||"";"style"===n||"href"===n?this.attrs[n]=h(t,!0):n.includes("src")?this.attrs[n]=this.getUrl(h(t,!0)):n&&(this.attrs[n]=t)},d.prototype.onOpenTag=function(t){var n=Object.create(null);n.name=this.tagName,n.attrs=this.attrs,this.options.nodes.length&&(n.type="node"),this.attrs=Object.create(null);var r=n.attrs,a=this.stack[this.stack.length-1],o=a?a.children:this.nodes,c=this.xml?t:e.voidTags[n.name];if(i[n.name]&&(r.class=i[n.name]+(r.class?" "+r.class:"")),"embed"===n.name&&this.expose(),"video"!==n.name&&"audio"!==n.name||("video"!==n.name||r.id||(r.id="v"+l++),r.controls||r.autoplay||(r.controls="T"),n.src=[],r.src&&(n.src.push(r.src),r.src=void 0),this.expose()),c){if(!this.hook(n)||e.ignoreTags[n.name])return void("base"!==n.name||this.options.domain?"source"===n.name&&a&&("video"===a.name||"audio"===a.name)&&r.src&&a.src.push(r.src):this.options.domain=r.href);var h=this.parseStyle(n);if("img"===n.name){if(r.src&&(r.src.includes("webp")&&(n.webp="T"),r.src.includes("data:")&&!r["original-src"]&&(r.ignore="T"),!r.ignore||n.webp||r.src.includes("cloud://"))){for(var d=this.stack.length;d--;){var u=this.stack[d];if("a"===u.name){n.a=u.attrs;break}u.c=1}r.i=this.imgList.length.toString();var p=r["original-src"]||r.src;this.imgList.push(p),this.options.lazyLoad&&(r["data-src"]=r.src,r.src=void 0)}"inline"===h.display&&(h.display=""),r.ignore&&(h["max-width"]=h["max-width"]||"100%",r.style+=";-webkit-touch-callout:none"),parseInt(h.width)>s&&(h.height=void 0),h.width&&(h.width.includes("auto")?h.width="":(n.w="T",isNaN(parseInt(h.height))||(n.h="T")))}else if("svg"===n.name)return o.push(n),this.stack.push(n),void this.popNode();for(var f in h)h[f]&&(r.style+=";".concat(f,":").concat(h[f].replace(" !important","")));r.style=r.style.substr(1)||void 0}else("pre"===n.name||(r.style||"").includes("white-space")&&r.style.includes("pre"))&&2!==this.pre&&(this.pre=n.pre=1),n.children=[],this.stack.push(n);o.push(n)},d.prototype.onCloseTag=function(t){var n;for(t=this.xml?t:t.toLowerCase(),n=this.stack.length;n--;)if(this.stack[n].name===t)break;if(-1!==n)while(this.stack.length>n)this.popNode();else if("p"===t||"br"===t){var r=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;r.push({name:t,attrs:{class:i[t],style:this.tagStyle[t]}})}},d.prototype.popNode=function(){var t=this.stack.pop(),n=t.attrs,r=t.children,i=this.stack[this.stack.length-1],a=i?i.children:this.nodes;if(!this.hook(t)||e.ignoreTags[t.name])return"title"===t.name&&r.length&&"text"===r[0].type&&this.options.setTitle&&uni.setNavigationBarTitle({title:r[0].text}),void a.pop();if(t.pre&&2!==this.pre){this.pre=t.pre=void 0;for(var o=this.stack.length;o--;)this.stack[o].pre&&(this.pre=1)}var l={};if("svg"===t.name){if(this.xml>1)return void this.xml--;var c="",h=n.style;return n.style="",n.xmlns="http://www.w3.org/2000/svg",function t(n){if("text"!==n.type){var r=e.svgDict[n.name]||n.name;for(var i in c+="<"+r,n.attrs){var a=n.attrs[i];a&&(c+=" ".concat(e.svgDict[i]||i,'="').concat(a,'"'))}if(n.children){c+=">";for(var s=0;s<n.children.length;s++)t(n.children[s]);c+="</"+r+">"}else c+="/>"}else c+=n.text}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,"+c.replace(/#/g,"%23"),style:h,ignore:"T"},t.children=void 0,void(this.xml=!1)}if(n.align&&("table"===t.name?"center"===n.align?l["margin-inline-start"]=l["margin-inline-end"]="auto":l.float=n.align:l["text-align"]=n.align,n.align=void 0),n.dir&&(l.direction=n.dir,n.dir=void 0),"font"===t.name&&(n.color&&(l.color=n.color,n.color=void 0),n.face&&(l["font-family"]=n.face,n.face=void 0),n.size)){var d=parseInt(n.size);isNaN(d)||(d<1?d=1:d>7&&(d=7),l["font-size"]=["x-small","small","medium","large","x-large","xx-large","xxx-large"][d-1]),n.size=void 0}if((n.class||"").includes("align-center")&&(l["text-align"]="center"),Object.assign(l,this.parseStyle(t)),"table"!==t.name&&parseInt(l.width)>s&&(l["max-width"]="100%",l["box-sizing"]="border-box"),e.blockTags[t.name]?t.name="div":e.trustTags[t.name]||this.xml||(t.name="span"),"a"===t.name||"ad"===t.name||"iframe"===t.name)this.expose();else if("ul"!==t.name&&"ol"!==t.name||!t.c){if("table"===t.name){var u=parseFloat(n.cellpadding),p=parseFloat(n.cellspacing),f=parseFloat(n.border);if(t.c&&(isNaN(u)&&(u=2),isNaN(p)&&(p=2)),f&&(n.style+=";border:"+f+"px solid gray"),t.flag&&t.c){l.display="grid",p?(l["grid-gap"]=p+"px",l.padding=p+"px"):f&&(n.style+=";border-left:0;border-top:0");var g=[],v=[],m=[],y={};(function t(n){for(var r=0;r<n.length;r++)"tr"===n[r].name?v.push(n[r]):t(n[r].children||[])})(r);for(var b=1;b<=v.length;b++){for(var x=1,_=0;_<v[b-1].children.length;_++,x++){var w=v[b-1].children[_];if("td"===w.name||"th"===w.name){while(y[b+"."+x])x++;var k=w.attrs.style||"",T=k.indexOf("width")?k.indexOf(";width"):0;if(-1!==T){var N=k.indexOf(";",T+6);-1===N&&(N=k.length),w.attrs.colspan||(g[x]=k.substring(T?T+7:6,N)),k=k.substr(0,T)+k.substr(N)}if(k+=(f?";border:".concat(f,"px solid gray")+(p?"":";border-right:0;border-bottom:0"):"")+(u?";padding:".concat(u,"px"):""),w.attrs.colspan&&(k+=";grid-column-start:".concat(x,";grid-column-end:").concat(x+parseInt(w.attrs.colspan)),w.attrs.rowspan||(k+=";grid-row-start:".concat(b,";grid-row-end:").concat(b+1)),x+=parseInt(w.attrs.colspan)-1),w.attrs.rowspan){k+=";grid-row-start:".concat(b,";grid-row-end:").concat(b+parseInt(w.attrs.rowspan)),w.attrs.colspan||(k+=";grid-column-start:".concat(x,";grid-column-end:").concat(x+1));for(var S=1;S<w.attrs.rowspan;S++)for(var O=0;O<(w.attrs.colspan||1);O++)y[b+S+"."+(x-O)]=1}k&&(w.attrs.style=k),m.push(w)}}if(1===b){for(var I="",$=1;$<x;$++)I+=(g[$]?g[$]:"auto")+" ";l["grid-template-columns"]=I}}t.children=m}else t.c&&(l.display="table"),isNaN(p)||(l["border-spacing"]=p+"px"),(f||u)&&function t(n){for(var r=0;r<n.length;r++){var e=n[r];"th"===e.name||"td"===e.name?(f&&(e.attrs.style="border:".concat(f,"px solid gray;").concat(e.attrs.style||"")),u&&(e.attrs.style="padding:".concat(u,"px;").concat(e.attrs.style||""))):e.children&&t(e.children)}}(r);if(this.options.scrollTable&&!(n.style||"").includes("inline")){var C=Object.assign({},t);t.name="div",t.attrs={style:"overflow:auto"},t.children=[C],n=C.attrs}}else if("td"!==t.name&&"th"!==t.name||!n.colspan&&!n.rowspan){if("ruby"===t.name){t.name="span";for(var L=0;L<r.length-1;L++)"text"===r[L].type&&"rt"===r[L+1].name&&(r[L]={name:"div",attrs:{style:"display:inline-block;text-align:center"},children:[{name:"div",attrs:{style:"font-size:50%;"+(r[L+1].attrs.style||"")},children:r[L+1].children},r[L]]},r.splice(L+1,1))}else if(t.c){t.c=2;for(var z=t.children.length;z--;)t.children[z].c&&"table"!==t.children[z].name||(t.c=1)}}else for(var E=this.stack.length;E--;)if("table"===this.stack[E].name){this.stack[E].flag=1;break}}else{var j={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};j[n.type]&&(n.style+=";list-style-type:"+j[n.type],n.type=void 0);for(var A=r.length;A--;)"li"===r[A].name&&(r[A].c=1)}if((l.display||"").includes("flex")&&!t.c)for(var q=r.length;q--;){var B=r[q];B.f&&(B.attrs.style=(B.attrs.style||"")+B.f,B.f=void 0)}var V=i&&(i.attrs.style||"").includes("flex")&&!t.c;for(var M in V&&(t.f=";max-width:100%"),l)if(l[M]){var P=";".concat(M,":").concat(l[M].replace(" !important",""));V&&(M.includes("flex")&&"flex-direction"!==M||"align-self"===M||"-"===l[M][0]||"width"===M&&P.includes("%"))?(t.f+=P,"width"===M&&(n.style+=";width:100%")):n.style+=P}n.style=n.style.substr(1)||void 0},d.prototype.onText=function(t){if(!this.pre){for(var n,r="",e=0,i=t.length;e<i;e++)o[t[e]]?(" "!==r[r.length-1]&&(r+=" "),"\n"!==t[e]||n||(n=!0)):r+=t[e];if(" "===r&&n)return;t=r}var a=Object.create(null);if(a.type="text",a.text=h(t),this.hook(a)){var s=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;s.push(a)}},u.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var n=this.content.length;-1!==this.i&&this.i<n;)this.state()},u.prototype.checkClose=function(t){var n="/"===this.content[this.i];return!!(">"===this.content[this.i]||n&&">"===this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=n?2:1,this.start=this.i,this.handler.onOpenTag(n),"script"===this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!==this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},u.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!==this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"===t||"!"===t||"?"===t){this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i));var n=this.content[this.i+2];if("/"===t&&(n>="a"&&n<="z"||n>="A"&&n<="Z"))return this.i+=2,this.start=this.i,void(this.state=this.endTag);var r="--\x3e";"!"===t&&"-"===this.content[this.i+2]&&"-"===this.content[this.i+3]||(r=">"),this.i=this.content.indexOf(r,this.i),-1!==this.i&&(this.i+=r.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},u.prototype.tagName=function(){if(o[this.content[this.i]]){this.handler.onTagName(this.content.substring(this.start,this.i));while(o[this.content[++this.i]]);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},u.prototype.attrName=function(){var t=this.content[this.i];if(o[t]||"="===t){this.handler.onAttrName(this.content.substring(this.start,this.i));var n="="===t,r=this.content.length;while(++this.i<r)if(t=this.content[this.i],!o[t]){if(this.checkClose())return;if(n)return this.start=this.i,void(this.state=this.attrVal);if("="!==this.content[this.i])return this.start=this.i,void(this.state=this.attrName);n=!0}}else this.checkClose("onAttrName")||this.i++},u.prototype.attrVal=function(){var t=this.content[this.i],n=this.content.length;if('"'===t||"'"===t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1===this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<n;this.i++){if(o[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}while(o[this.content[++this.i]]);this.i<n&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},u.prototype.endTag=function(){var t=this.content[this.i];if(o[t]||">"===t||"/"===t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!==t&&(this.i=this.content.indexOf(">",this.i),-1===this.i))return;this.start=++this.i,this.state=this.text}else this.i++},t.exports=d},"2ac4":function(t,n,r){"use strict";var e=r("7b05"),i=r.n(e);i.a},"31bc":function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* a 标签默认效果 */._a[data-v-18858ca4]{padding:1.5px 0 1.5px 0;color:#3284e6;word-break:break-all}\r\n/* a 标签点击态效果 */._hover[data-v-18858ca4]{text-decoration:underline;opacity:.7}\r\n/* 图片默认效果 */._img[data-v-18858ca4]{display:block;max-width:100%;-webkit-touch-callout:none}\r\n/* 内部样式 */._block[data-v-18858ca4]{display:block}._b[data-v-18858ca4],\r\n._strong[data-v-18858ca4]{font-weight:700}._code[data-v-18858ca4]{font-family:monospace}._del[data-v-18858ca4]{text-decoration:line-through}._em[data-v-18858ca4],\r\n._i[data-v-18858ca4]{font-style:italic}._h1[data-v-18858ca4]{font-size:2em}._h2[data-v-18858ca4]{font-size:1.5em}._h3[data-v-18858ca4]{font-size:1.17em}._h5[data-v-18858ca4]{font-size:.83em}._h6[data-v-18858ca4]{font-size:.67em}._h1[data-v-18858ca4],\r\n._h2[data-v-18858ca4],\r\n._h3[data-v-18858ca4],\r\n._h4[data-v-18858ca4],\r\n._h5[data-v-18858ca4],\r\n._h6[data-v-18858ca4]{display:block;font-weight:700}._image[data-v-18858ca4]{height:1px}._ins[data-v-18858ca4]{text-decoration:underline}._li[data-v-18858ca4]{display:list-item}._ol[data-v-18858ca4]{list-style-type:decimal}._ol[data-v-18858ca4],\r\n._ul[data-v-18858ca4]{display:block;padding-left:40px;margin:1em 0}._q[data-v-18858ca4]::before{content:'\"'}._q[data-v-18858ca4]::after{content:'\"'}._sub[data-v-18858ca4]{font-size:smaller;vertical-align:sub}._sup[data-v-18858ca4]{font-size:smaller;vertical-align:super}._thead[data-v-18858ca4],\r\n._tbody[data-v-18858ca4],\r\n._tfoot[data-v-18858ca4]{display:table-row-group}._tr[data-v-18858ca4]{display:table-row}._td[data-v-18858ca4],\r\n._th[data-v-18858ca4]{display:table-cell;vertical-align:middle}._th[data-v-18858ca4]{font-weight:700;text-align:center}._ul[data-v-18858ca4]{list-style-type:disc}._ul ._ul[data-v-18858ca4]{margin:0;list-style-type:circle}._ul ._ul ._ul[data-v-18858ca4]{list-style-type:square}._abbr[data-v-18858ca4],\r\n._b[data-v-18858ca4],\r\n._code[data-v-18858ca4],\r\n._del[data-v-18858ca4],\r\n._em[data-v-18858ca4],\r\n._i[data-v-18858ca4],\r\n._ins[data-v-18858ca4],\r\n._label[data-v-18858ca4],\r\n._q[data-v-18858ca4],\r\n._span[data-v-18858ca4],\r\n._strong[data-v-18858ca4],\r\n._sub[data-v-18858ca4],\r\n._sup[data-v-18858ca4]{display:inline}\r\n\r\n",""]),t.exports=n},"3d78":function(t,n,r){"use strict";r.r(n);var e=r("a904"),i=r.n(e);for(var a in e)"default"!==a&&function(t){r.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},6628:function(t,n,r){"use strict";r.r(n);var e=r("9039"),i=r("3d78");for(var a in i)"default"!==a&&function(t){r.d(n,t,(function(){return i[t]}))}(a);r("76b2");var s,o=r("f0c5"),l=r("d710"),c=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"18858ca4",null,!1,e["a"],s);"function"===typeof l["a"]&&Object(l["a"])(c),n["default"]=c.exports},"69cf":function(t,n,r){var e=r("31bc");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=r("4f06").default;i("cfdcfeee",e,!0,{sourceMap:!1,shadowMode:!1})},7416:function(t,n,r){"use strict";r.r(n);var e=r("a77d"),i=r.n(e);for(var a in e)"default"!==a&&function(t){r.d(n,t,(function(){return e[t]}))}(a);n["default"]=i.a},"76b2":function(t,n,r){"use strict";var e=r("69cf"),i=r.n(e);i.a},"7b05":function(t,n,r){var e=r("a525");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=r("4f06").default;i("5feaf690",e,!0,{sourceMap:!1,shadowMode:!1})},9039:function(t,n,r){"use strict";var e;r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",{class:"_block _"+t.name+" "+t.attrs.class,style:t.attrs.style,attrs:{id:t.attrs.id}},[t._l(t.childs,(function(n,e){return["img"===n.name&&(t.opts[1]&&!t.ctrl[e]||t.ctrl[e]<0)?r("v-uni-image",{key:e+"_0",staticClass:"_img",style:n.attrs.style,attrs:{src:t.ctrl[e]<0?t.opts[2]:t.opts[1],mode:"widthFix"}}):t._e(),"img"===n.name?r("img",{key:e+"_1",class:"_img "+n.attrs.class,style:(-1===t.ctrl[e]?"display:none;":"")+n.attrs.style,attrs:{id:n.attrs.id,src:n.attrs.src||(t.ctrl.load?n.attrs["data-src"]:""),"data-i":e},on:{load:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLoad.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)},longpress:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLongTap.apply(void 0,arguments)},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.imgTap.apply(void 0,arguments)}}}):n.text?r("v-uni-text",{attrs:{"user-select":n.us,decode:!0}},[t._v(t._s(n.text))]):"br"===n.name?r("v-uni-text",[t._v("\\n")]):"a"===n.name?r("v-uni-view",{class:(n.attrs.href?"_a ":"")+n.attrs.class,style:"display:inline;"+n.attrs.style,attrs:{id:n.attrs.id,"hover-class":"_hover","data-i":e},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.linkTap.apply(void 0,arguments)}}},[r("node",{staticStyle:{display:"inherit"},attrs:{name:"span",childs:n.children,opts:t.opts}})],1):"video"===n.name?r("v-uni-video",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,autoplay:n.attrs.autoplay,controls:n.attrs.controls,loop:n.attrs.loop,muted:n.attrs.muted,poster:n.attrs.poster,src:n.src[t.ctrl[e]||0],"data-i":e},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"iframe"===n.name?r("iframe",{style:n.attrs.style,attrs:{allowfullscreen:n.attrs.allowfullscreen,frameborder:n.attrs.frameborder,src:n.attrs.src}}):"embed"===n.name?r("embed",{style:n.attrs.style,attrs:{src:n.attrs.src}}):"audio"===n.name?r("v-uni-audio",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,author:n.attrs.author,controls:n.attrs.controls,loop:n.attrs.loop,name:n.attrs.name,poster:n.attrs.poster,src:n.src[t.ctrl[e]||0],"data-i":e},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"table"===n.name&&n.c||"li"===n.name?r("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id}},["li"===n.name?r("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,e){return r("v-uni-view",{key:e,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},["td"===n.name||"th"===n.name?r("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,e){return["td"===n.name||"th"===n.name?r("v-uni-view",{key:e+"_0",class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[r("node",{attrs:{childs:n.children,opts:t.opts}})],1):r("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},t._l(n.children,(function(n,e){return r("v-uni-view",{key:e,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[r("node",{attrs:{childs:n.children,opts:t.opts}})],1)})),1)]}))],2)}))],2):t.handler.use(n)?r("v-uni-rich-text",{style:n.f,attrs:{id:n.attrs.id,nodes:[n]}}):2===n.c?r("v-uni-view",{class:"_block _"+n.name+" "+n.attrs.class,style:n.f+";"+n.attrs.style,attrs:{id:n.attrs.id}},t._l(n.children,(function(n,e){return r("node",{key:e,style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})})),1):r("node",{style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})]}))],2)},a=[]},a525:function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 根节点样式 */._root[data-v-421e9c1c]{padding:1px 0;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}\r\n/* 长按复制 */._select[data-v-421e9c1c]{-webkit-user-select:text;user-select:text}\r\n",""]),t.exports=n},a77d:function(t,n,r){"use strict";var e=r("4ea4");r("99af"),r("a9e3"),r("d3b7"),r("e25e"),r("ac1f"),r("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(r("6628")),a=[],s=r("27cd"),o={name:"mp-html",data:function(){return{nodes:[]}},props:{containerStyle:{type:String,default:""},content:{type:String,default:""},copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},components:{node:i.default},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=a.length;t--;)this.plugins.push(new a[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,n,r){t&&n&&r&&(this._in={page:t,selector:n,scrollTop:r})},navigateTo:function(t,n){var r=this;return new Promise((function(e,i){if(r.useAnchor){n=n||parseInt(r.useAnchor)||0;var a=" ",s=uni.createSelectorQuery().in(r._in?r._in.page:r).select((r._in?r._in.selector:"._root")+(t?"".concat(a,"#").concat(t):"")).boundingClientRect();r._in?s.select(r._in.selector).scrollOffset().select(r._in.selector).boundingClientRect():s.selectViewport().scrollOffset(),s.exec((function(t){if(t[0]){var a=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+n;r._in?r._in.page[r._in.scrollTop]=a:uni.pageScrollTo({scrollTop:a,duration:300}),e()}else i(Error("Label not found"))}))}else i(Error("Anchor is disabled"))}))},getText:function(t){var n="";return function t(r){for(var e=0;e<r.length;e++){var i=r[e];if("text"===i.type)n+=i.text.replace(/&amp;/g,"&");else if("br"===i.name)n+="\n";else{var a="p"===i.name||"div"===i.name||"tr"===i.name||"li"===i.name||"h"===i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";a&&n&&"\n"!==n[n.length-1]&&(n+="\n"),i.children&&t(i.children),a&&"\n"!==n[n.length-1]?n+="\n":"td"!==i.name&&"th"!==i.name||(n+="\t")}}}(t||this.nodes),n},getRect:function(){var t=this;return new Promise((function(n,r){uni.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):r(Error("Root label not found"))}))}))},setContent:function(t,n){var r=this;n&&this.imgList||(this.imgList=[]);var e,i=new s(this).parse(t);this.$set(this,"nodes",n?(this.nodes||[]).concat(i):i),this._videos=[],this.$nextTick((function(){r._hook("onLoad"),r.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){r.getRect().then((function(t){t.height===e&&(r.$emit("ready",t),clearInterval(r._timer)),e=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var n=a.length;n--;)this.plugins[n][t]&&this.plugins[n][t]()}}};n.default=o},a904:function(t,n,r){"use strict";var e=r("4ea4");r("caad"),r("e25e"),r("ac1f"),r("2532"),r("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(r("6628")),a={name:"node",options:{},data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:i.default},mounted:function(){var t=this;if(this.$nextTick((function(){for(t.root=t.$parent;"mp-html"!==t.root.$options.name;t.root=t.root.$parent);})),this.opts[0]){var n;for(n=this.childs.length;n--;)if("img"===this.childs[n].name)break;-1!==n&&(this.observer=uni.createIntersectionObserver(this).relativeToViewport({top:500,bottom:500}),this.observer.observe("._img",(function(n){n.intersectionRatio&&(t.$set(t.ctrl,"load",1),t.observer.disconnect())})))}},beforeDestroy:function(){this.observer&&this.observer.disconnect()},methods:{play:function(t){if(this.root.pauseVideo){for(var n=!1,r=t.target.id,e=this.root._videos.length;e--;)this.root._videos[e].id===r?n=!0:this.root._videos[e].pause();if(!n){var i=uni.createVideoContext(r,this);i.id=r,this.root._videos.push(i)}}},imgTap:function(t){var n=this.childs[t.currentTarget.dataset.i];n.a?this.linkTap(n.a):n.attrs.ignore||(n.attrs.src=n.attrs.src||n.attrs["data-src"],this.root.$emit("imgtap",n.attrs),this.root.previewImg&&uni.previewImage({current:parseInt(n.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var n=t.currentTarget.dataset.i;(this.opts[1]&&!this.ctrl[n]||-1===this.ctrl[n])&&this.$set(this.ctrl,n,1)},linkTap:function(t){var n=t.currentTarget?this.childs[t.currentTarget.dataset.i]:{},r=n.attrs||t,e=r.href;this.root.$emit("linktap",Object.assign({innerText:this.root.getText(n.children||[])},r)),e&&("#"===e[0]?this.root.navigateTo(e.substring(1)).catch((function(){})):e.split("?")[0].includes("://")?this.root.copyLink&&window.open(e):uni.navigateTo({url:"/"+e,fail:function(){uni.switchTab({url:"/"+e,fail:function(){}})}}))},mediaError:function(t){var n=t.currentTarget.dataset.i,r=this.childs[n];if("video"===r.name||"audio"===r.name){var e=(this.ctrl[n]||0)+1;if(e>r.src.length&&(e=0),e<r.src.length)return void this.$set(this.ctrl,n,e)}else"img"===r.name&&this.opts[2]&&this.$set(this.ctrl,n,-1);this.root&&this.root.$emit("error",{source:r.name,attrs:r.attrs,errMsg:t.detail.errMsg})}}};n.default=a},b3c7:function(t,n,r){"use strict";r.r(n);var e=r("24c9"),i=r("7416");for(var a in i)"default"!==a&&function(t){r.d(n,t,(function(){return i[t]}))}(a);r("2ac4");var s,o=r("f0c5"),l=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"421e9c1c",null,!1,e["a"],s);n["default"]=l.exports},d710:function(t,n,r){"use strict";var e=function(t){(t.options.wxs||(t.options.wxs={}))["handler"]=function(t){var n={abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,i:!0,ins:!0,label:!0,q:!0,small:!0,span:!0,strong:!0,sub:!0,sup:!0};return t.exports={use:function(t){return!t.c&&(!n[t.name]&&-1==(t.attrs.style||"").indexOf("display:inline"))}},t.exports}({exports:{}})};n["a"]=e}}]);