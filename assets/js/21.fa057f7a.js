(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{537:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("本文是对Java中核心的知识总结，Java核心对于基础很看重的公司非常重要，务必全部掌握哦~\n")]),a._v(" "),t("h2",{attrs:{id:"_1-关于-object-类的探究"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于-object-类的探究"}},[a._v("#")]),a._v(" 1. 关于 Object 类的探究")]),a._v(" "),t("p",[a._v("1.1 关于Java中的hash")]),a._v(" "),t("ul",[t("li",[a._v("Java类中的hashCode() 和 equals()方法的关系：\n"),t("ul",[t("li",[a._v("如果调用equals方法得到的结果为true，则两个对象的hashcode值必定相等")]),a._v(" "),t("li",[a._v("如果equals方法得到的结果为false，则两个对象的hashcode值不一定不同")]),a._v(" "),t("li",[a._v("如果两个对象的hashcode值不等，则equals方法得到的结果必定为false")]),a._v(" "),t("li",[a._v("如果两个对象的hashcode值相等，则equals方法得到的结果未知")])])])]),a._v(" "),t("p",[a._v("1.2  "),t("code",[a._v("object.equals(null)")]),a._v("和"),t("code",[a._v("object == null")]),a._v("的区别")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" object "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nobject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("；\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 会抛出异常，后续代码不执行")]),a._v("\nobject "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true，继续执行后续代码")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);