ymq_define("Util",["jquery"],(function(t){return class e{constructor(t){this.instance=null,this.init()}init(){this.dateFormat().initSpotlight()}jstrigger(t,e){if(document.all)t.fireEvent("on"+e);else{var r=document.createEvent("Events");r.initEvent(e,!0,!0),t.dispatchEvent(r)}}getParenthesesStr(t){var e="";if(""==t)return e;var r=t.match(/\((.+?)\)/g);if(""!=r){let t=r[0];""!=t&&(e=t.substring(1,t.length-1))}return e}getShopifySmallImg(t){if(-1!=t.indexOf("shopify")&&-1==t.indexOf("x")){var e=t.lastIndexOf(".");return t.substring(0,e)+"_200x200"+t.substring(e,t.length)}return t}formatCurrency(t){t=t.toString().replace(/\$|\,/g,""),isNaN(t)&&(t="0");var e=t==(t=Math.abs(t)),r=(t=Math.floor(100*t+.50000000001))%100;t=Math.floor(t/100).toString(),r<10&&(r="0"+r);for(var n=0;n<Math.floor((t.length-(1+n))/3);n++)t=t.substring(0,t.length-(4*n+3))+","+t.substring(t.length-(4*n+3));return(e?"":"-")+t+"."+r}changeUriByVariantId(t){var e=this.makeJsonByGet(),r=document.URL,n=r.indexOf("?"),a=r.substring(0,n),s=[];e.variant=t,Object.keys(e).forEach((function(t){""!==e[t]&&s.push(`${t}=${e[t]}`)})),history.pushState(null,null,`${a}${s.length>0?"?":""}${s.join("&")}`)}htmlSpecialChars(t){return"string"==typeof(t=this.reHtmlSpecialChars(t))&&(t=(t=(t=(t=(t=t.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")).replace(/'/g,"&#39;")),t}reHtmlSpecialChars(t){return"string"==typeof t&&(t=(t=(t=(t=(t=t.replace(/&amp;/g,"&")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&quot;/g,'"')).replace(/&#39;/g,"'")),t}variantIsSelect(t,e){return t==e||this.htmlSpecialChars(t)==e}makeJsonByGet(){for(var t=this,e={},r={},n=window.location.href,a=(n=n.replace(/.*\?/,"")).split("&"),s=0;s<a.length;s++)e[a[s].split("=")[0]]="";return Object.keys(e).forEach((function(e){var n=t.getUrlParam(e);n&&(r[e]=n)})),r}getUrlParam(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(e);return null!=r?decodeURI(r[2]):null}getValue(t,e,r){return t.hasOwnProperty(e)?t[e]:r}dateFormat(){return Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t},this}initSpotlight(){var e,r,n=!1;t("#spotlight .drag").mousedown((function(t){e=t.pageX,r=t.pageY,n=!1})),t("#spotlight .drag").mouseup((function(t){(Math.abs(Number(e)-Number(t.pageX))>7||Math.abs(Number(r)-Number(t.pageY))>7)&&(n=!0)})),t(document).on("click","#spotlight .drag",(function(){n||(t(".preloader").removeClass("show"),t("#spotlight .icon.close").click())})),t(document).on("#spotlight .icon.close",(function(){t(".preloader").removeClass("show")}))}static getInstance(){return this.instance||(this.instance=new e),this.instance}}}));