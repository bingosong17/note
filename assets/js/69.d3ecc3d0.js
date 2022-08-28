(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{385:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"web-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-components"}},[t._v("#")]),t._v(" Web components")]),t._v(" "),s("p",[t._v("Web Components是一套不同的技术，允许您创建可重用的定制元素")]),t._v(" "),s("h2",{attrs:{id:"custom-elements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-elements"}},[t._v("#")]),t._v(" Custom elements")]),t._v(" "),s("p",[t._v("Custom elements（自定义元素）：一组JavaScript API，允许您定义custom elements及其行为，然后可以在您的用户界面中按照需要使用它们。\nHTML templates（HTML模板）："),s("code",[t._v("<template>")]),t._v(" 和 "),s("code",[t._v("<slot>")]),t._v(" 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。")]),t._v(" "),s("h2",{attrs:{id:"html-imports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-imports"}},[t._v("#")]),t._v(" HTML Imports")]),t._v(" "),s("p",[t._v("HTML Imports（HTML导入）：一旦定义了自定义组件，最简单的重用它的方法就是使其定义细节保存在一个单独的文件中，然后使用导入机制将其导入到想要实际使用它的页面中。HTML 导入就是这样一种机制，尽管存在争议 — Mozilla 根本不同意这种方法，并打算在将来实现更合适的。")]),t._v(" "),s("h2",{attrs:{id:"shadow-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shadow-dom"}},[t._v("#")]),t._v(" shadow DOM")]),t._v(" "),s("p",[t._v("Shadow DOM接口是Web components关键所在，它可以将一个隐藏的、独立的DOM添加到一个元素上，video 标签就是一个很好的例子。")]),t._v(" "),s("h3",{attrs:{id:"使用步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),s("ol",[s("li",[t._v("定义一个影子宿主，如果是自定义组件则用-隔开如"),s("code",[t._v("<g-button>")]),t._v("或"),s("code",[t._v("<g-input>")]),t._v(",防止与html标签重名")]),t._v(" "),s("li",[t._v("宿主内部创建一个 "),s("strong",[t._v("(影子根)shadow root")]),t._v(" 作为 "),s("strong",[t._v("shadow tree")]),t._v(" 的根节点")]),t._v(" "),s("li",[t._v("根节点的内容 createShadowRoot().appendChild(clone)")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'host-dom'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.定义一个影子宿主")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShadowRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.宿主内部创建一个根节点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p\">我是影子根的内容</p>'")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.根节点的内容")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" examples")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 影子宿主（shadow host）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" shadowHost "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.shadowhost'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建影子根（shadow root）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" shadowRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" shadowHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShadowRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 影子根作为影子树的第一个节点，其他的节点比如p节点都是它的子节点。")]),t._v("\nshadowRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p\">我是影子根标签的内容</p>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"宿主样式-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宿主样式-host"}},[t._v("#")]),t._v(" 宿主样式:host")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*当前宿主*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".different"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*仅当宿主元素是 .different 的后代元素时*/")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);