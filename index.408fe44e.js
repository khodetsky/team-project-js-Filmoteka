!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("4smAb",(function(e,t){var n=i("j1lrD");n.spinner.spin(n.target),window.addEventListener("load",(function(e){n.spinner.stop()}))})),i.register("j1lrD",(function(t,n){e(t.exports,"target",(function(){return o})),e(t.exports,"spinner",(function(){return s}));var r=i("b62ED");const o=document.getElementById("spinner"),s=new(0,r.Spinner)({lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-shrink",direction:-1,color:"#ff6b08",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"})})),i.register("b62ED",(function(t,n){e(t.exports,"Spinner",(function(){return o}),(function(e){return o=e}));var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},o=function(){function e(e){void 0===e&&(e={}),this.opts=r(r({},i),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),s(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",r="none";!0===t.shadow?r="0 2px 4px #000":"string"==typeof t.shadow&&(r=t.shadow);for(var i=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],r=0,i=e.split(",");r<i.length;r++){var o=i[r].match(t);if(null!==o){var s=+o[2],a=+o[5],d=o[4],l=o[7];0!==s||d||(d=l),0!==a||l||(l=d),d===l&&n.push({prefix:o[1]||"",x:s,y:a,xUnits:d,yUnits:l,end:o[8]})}}return n}(r),o=0;o<t.lines;o++){var l=~~(360/t.lines*o+t.rotate),p=s(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:a(t.fadeColor,o),borderRadius:n,transformOrigin:"left",transform:"rotate("+l+"deg) translateX("+t.radius+"px)"}),u=o*t.direction/t.lines/t.speed;u-=1/t.speed;var f=s(document.createElement("div"),{width:"100%",height:"100%",background:a(t.color,o),borderRadius:n,boxShadow:d(i,l),animation:1/t.speed+"s linear "+u+"s infinite "+t.animation});p.appendChild(f),e.appendChild(p)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function s(e,t){for(var n in t)e.style[n]=t[n];return e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function d(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r],s=l(o.x,o.y,t);n.push(o.prefix+s[0]+o.xUnits+" "+s[1]+o.yUnits+o.end)}return n.join(", ")}function l(e,t,n){var r=n*Math.PI/180,i=Math.sin(r),o=Math.cos(r);return[Math.round(1e3*(e*o+t*i))/1e3,Math.round(1e3*(-e*i+t*o))/1e3]}})),i("4smAb")}();
//# sourceMappingURL=index.408fe44e.js.map
