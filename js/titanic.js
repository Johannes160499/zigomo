var Titanic;(function(){var j=0;var d=13;var b=27;function i(){this.anim.playSegments([j,d],true);this.state=1}function h(){this.anim.playSegments([d+1,b],true);this.state=0}function g(){this.anim.playSegments([j,b],true);this.state=0}function m(){if(this.state===0){this.on()}else{this.off()}}var l=function(o,r,p,n){var q=this;q.titanicToken=r;q.state=0;q.anim=bodymovin.loadAnimation({container:o,renderer:"svg",loop:false,autoplay:false,path:n+r+".json"});q.on=i.bind(q);q.off=h.bind(q);q.play=g.bind(q);q.toggle=m.bind(q);if(p.click){o.addEventListener("click",q.toggle)}if(p.hover){o.addEventListener("pointerenter",q.toggle);o.addEventListener("pointerleave",q.toggle)}};var k=[];var f=false;function e(p,o){var n=p.baseURL;document.addEventListener("DOMContentLoaded",function(){var t=document.getElementsByClassName("titanic");var r=t.length;while(r){var q=t[--r];var s=q.className.match(/titanic-([^\s]+)/);if(s&&s.length&&s[1]){k.unshift(new l(q,s[1],p,n))}}f=true;if(typeof o==="function"){o()}})}function c(o){if(!f){return}for(var n=k.length-1;n>=0;n--){if(k[n].titanicToken===o){return k[n]}}}function a(n,o){var p=c(n);if(p&&typeof p[o]==="function"){p[o]()}}Titanic=function(n){this.options={baseURL:n.baseURL||"https://cdn.rawgit.com/icons8/titanic/master/dist/icons/",hover:n.hover!==undefined?n.hover:true,click:n.click!==undefined?n.click:false};var o=this;e(this.options,function(){o.items=k;o.isInitialized=function(){return f};o.on=function(p){a(p,"on")};o.off=function(p){a(p,"off")};o.play=function(p){a(p,"play")}})}})();