(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{313:function(t,i,n){},341:function(t,i,n){"use strict";n(313)},367:function(t,i,n){"use strict";var s=n(311),e={name:"Home",components:{NavLink:s.a},mounted:function(){this.initTwikoo(),this.initJs()},methods:{initTwikoo:function(){try{twikoo.init({envId:"tobackrise-twikoo-7e4a7a514ad2c3"})}catch(t){}},initJs:function(){var t=this.$refs.twikooJs;t&&(t.onload=this.initTwikoo,this.$router.afterEach(this.onRoute))},onRoute:function(t,i){t.path!==i.path&&this.initTwikoo()}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},a=(n(341),n(44)),o=Object(a.a)(e,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e(),t._v(" "),t._m(0)]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(i,s){return n("div",{key:s,staticClass:"feature"},[n("h2",[t._v(t._s(i.title))]),t._v(" "),n("p",[t._v(t._s(i.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),n("div",{staticClass:"hidden"},[n("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"}}),t._v(" "),n("script",{attrs:{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",integrity:"sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",crossorigin:"anonymous"}}),t._v(" "),n("script",{attrs:{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js",integrity:"sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa",crossorigin:"anonymous"}}),t._v(" "),n("div",{attrs:{id:"twikoo"}}),t._v(" "),n("script",{ref:"twikooJs",attrs:{src:"https://cdn.jsdelivr.net/npm/twikoo@1.4.0/dist/twikoo.all.min.js"}})]),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("p",{staticClass:"action"},[i("a",{staticClass:"nav-link action-button",attrs:{href:"/article/"}})])}],!1,null,null,null);i.a=o.exports},369:function(t,i,n){"use strict";n.r(i);var s=n(366),e={name:"Layout",components:{ParentLayout:s.a},mounted:function(){this.initTwikoo(),this.initJs()},methods:{initTwikoo:function(){try{twikoo.init({envId:"tobackrise-twikoo-7e4a7a514ad2c3"})}catch(t){}},initJs:function(){var t=this.$refs.twikooJs;t&&(t.onload=this.initTwikoo,this.$router.afterEach(this.onRoute))},onRoute:function(t,i){t.path!==i.path&&this.initTwikoo()}}},a=n(44),o=Object(a.a)(e,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ParentLayout",{scopedSlots:t._u([{key:"page-bottom",fn:function(){return[n("div",{staticClass:"page-edit"},[n("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"}}),t._v(" "),n("script",{attrs:{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",integrity:"sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",crossorigin:"anonymous"}}),t._v(" "),n("script",{attrs:{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js",integrity:"sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa",crossorigin:"anonymous"}}),t._v(" "),n("div",{attrs:{id:"twikoo"}}),t._v(" "),n("script",{ref:"twikooJs",attrs:{src:"https://cdn.jsdelivr.net/npm/twikoo@1.4.0/dist/twikoo.all.min.js"}})])]},proxy:!0}])})}),[],!1,null,null,null);i.default=o.exports}}]);