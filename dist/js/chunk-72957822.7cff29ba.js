(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72957822"],{"0f7a":function(e,t,l){"use strict";l("4193")},4193:function(e,t,l){},4420:function(e,t,l){"use strict";l.r(t);var c=l("7a23"),a=Object(c["bb"])("data-v-5006c6b6");Object(c["I"])("data-v-5006c6b6");var s={class:"display-container"},i={class:"display-preview"},n={class:"display-list"};Object(c["G"])();var r=a((function(e,t,l,a,r,o){return Object(c["F"])(),Object(c["k"])("div",s,[Object(c["n"])("div",i,[Object(c["n"])("img",{src:r.preview},null,8,["src"])]),Object(c["n"])("div",n,[(Object(c["F"])(!0),Object(c["k"])(c["b"],null,Object(c["L"])(r.images,(function(e,t){return Object(c["F"])(),Object(c["k"])("div",{class:["display-list-item",{"item-selected":e.selected}],key:t,onClick:function(t){return o.onSelect(e.url)}},[Object(c["n"])("img",{src:e.url},null,8,["src"])],10,["onClick"])})),128))])])})),o=(l("159b"),l("c968")),p={name:"Display",data:function(){return{images:[{url:"./wall/wall-0.jpg",selected:!1},{url:"./wall/wall-1.jpg",selected:!1},{url:"./wall/wall-2.jpg",selected:!0},{url:"./wall/wall-3.jpg",selected:!1},{url:"./wall/wall-4.jpg",selected:!1},{url:"./wall/wall-5.jpg",selected:!1}],preview:o["a"].getLocalstorage("wallpaper","")}},computed:{wallpaper:function(){return this.$store.state.core.wallpaper}},created:function(){this.selectwallpaper()},methods:{selectwallpaper:function(){var e=this;this.images.forEach((function(t){t.url===e.wallpaper?t.selected=!0:t.selected=!1}))},onSelect:function(e){this.preview=e,this.$store.commit("core/SET_WALLPAPER",e),this.selectwallpaper(),this.$store.commit("message/PUSH_MESSAGE",{type:"notification",content:"切换成功1111111111111111111111111111111111111111111111111111111111111111",title:"更换壁纸"})}}};l("0f7a");p.render=r,p.__scopeId="data-v-5006c6b6";t["default"]=p}}]);
//# sourceMappingURL=chunk-72957822.7cff29ba.js.map