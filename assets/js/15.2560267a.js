(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(t,e,o){"use strict";o.r(e);var s={data:()=>({emoji:["🌑","🌒","🌓","🌔","🌝","🌖","🌗","🌘"]}),watch:{$route(){this.setEmoji()}},methods:{setEmoji(){Math.random()},setLoopEmoji(){location.search=this.emoji[Math.floor(Date.now()/100%this.emoji.length)],setTimeout(this.setLoopEmoji,200)}},mounted(){}},i=o(0),a=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("span")},[],!1,null,"4b39ae44",null);e.default=a.exports}}]);