(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(s,t,i){"use strict";i.r(t);const a=i(61),e=i(62);var n={data:()=>({audio:null,playing:!1}),computed:{icon(){return this.playing?e:a}},methods:{loadMusic(){this.audio||(this.audio=document.getElementById("bg-music"));const s=()=>{this.audio.play(),this.playing=!0,document.body.removeEventListener("click",s)};document.body.addEventListener("click",s)},musicHandler(){this.audio&&(this.playing?(this.audio.pause(),this.playing=!1):(this.audio.play(),this.playing=!0))}},mounted(){this.loadMusic()}},o=(i(63),i(0)),c=Object(o.a)(n,function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"music-player"},[t("img",{staticClass:"playerComtrols",attrs:{src:this.icon},on:{click:this.musicHandler}}),this._v(" "),t("audio",{staticClass:"bg-music",attrs:{id:"bg-music",controls:"false",autoplay:"autoplay",loop:"",download:"false"}},[t("source",{attrs:{src:this.$withBase("/time-travel.mp3")}})])])},[],!1,null,"349a83d8",null);t.default=c.exports},55:function(s,t,i){},61:function(s,t,i){s.exports=i.p+"assets/img/play.4615e8bc.svg"},62:function(s,t,i){s.exports=i.p+"assets/img/pause.a4ca21bf.svg"},63:function(s,t,i){"use strict";var a=i(55);i.n(a).a}}]);