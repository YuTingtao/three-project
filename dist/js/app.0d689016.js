(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return u.p+"js/"+({sphere:"sphere"}[e]||e)+"."+{sphere:"917ceef4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={sphere:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({sphere:"sphere"}[e]||e)+"."+{sphere:"1cfc1349"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===i))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],d=c.getAttribute("data-href");if(d===r||d===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}i[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27f6":function(e,t,n){},4039:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],a={data:function(){return{}},created:function(){}},s=a,u=n("2877"),c=Object(u["a"])(s,o,i,!1,null,null,null),d=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"three-container"})},h=[],f=(n("ac1f"),n("00b4"),n("5a89")),m=n("4721"),v={data:function(){return{scene:null,camera:null,renderer:null}},mounted:function(){this.init(this.$el),window.addEventListener("resize",this.handleResize)},methods:{init:function(e){var t=this;this.scene=new f["k"],this.camera=new f["i"](75,window.innerWidth/window.innerHeight,1,2e3),this.camera.position.set(0,0,.01),this.renderer=new f["r"]({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight);var n=window.devicePixelRatio<1.5?1.5:window.devicePixelRatio;this.renderer.setPixelRatio(n),e.appendChild(this.renderer.domElement);var r=new m["a"](this.camera,this.renderer.domElement);r.autoRotate=!0,r.autoRotateSpeed=1,r.enableDamping=!0,r.dampingFactor=.2,r.rotateSpeed=.2,r.enableZoom=!0;var o=null;r.addEventListener("start",(function(){o&&clearTimeout(o),r.autoRotate=!1})),r.addEventListener("end",(function(){o=setTimeout((function(){r.autoRotate=!0}),2e3)})),r.update();var i=new f["b"](50,50,50);i.scale(1,1,-1);var a=(new f["c"]).setPath(this.getPath()+"/img/").load(["pano_l.jpg","pano_r.jpg","pano_d.jpg","pano_u.jpg","pano_f.jpg","pano_b.jpg"]),s=new f["h"]({color:16777215,envMap:a}),u=new f["f"](i,s);this.scene.add(u);var c=new f["a"](16777215);this.scene.add(c);var d=function e(){requestAnimationFrame(e),r.update(),t.renderer.render(t.scene,t.camera)};d()},handleResize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},getPath:function(){return/github/gi.test(location.hostname)?"/three-project/dist":""}},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},w=v,g=(n("c072"),Object(u["a"])(w,p,h,!1,null,null,null)),b=g.exports;r["a"].use(l["a"]);var y=[{path:"/",name:"index",component:b},{path:"/sphere",name:"sphere",component:function(){return n.e("sphere").then(n.bind(null,"fb86"))}}],j=new l["a"]({routes:y}),_=j,E=n("2f62");r["a"].use(E["a"]);var P=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("27f6");r["a"].config.productionTip=!1,new r["a"]({router:_,store:P,render:function(e){return e(d)}}).$mount("#app")},c072:function(e,t,n){"use strict";n("4039")}});