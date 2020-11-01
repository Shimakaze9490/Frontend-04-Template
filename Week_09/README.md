学习笔记

'重学css'
----
css 标准2.1
----
**css产生式(StyleSheet):**
 最开始允许零或者一个charset 就是@chartset的结构
 接下来允许出现若干个(可以多个)import,必须放在最前,charset后面
 接下来支持: 长列表:三种结构  **ruleset** **media** **page** 其他的都是空白符
 [ S | CDO | CDC ]*    CDO COC是html注释的起点和终点(历史包袱,早年css为了支持css不显示出来,兼容旧版本浏览器). 
 [ rules | media | page ]   可以重复的规则分为三种: ruleset media page
 ruleset 选择器
 media 2.1就有了 (3版本 Media Query) 
 page 打印的信息
 []代表分组 ?可以存在可以不存在 |表示或 *表示0个或者多个 

 - @charset
 - @import
 - rules
  - media
  - page
  - rule
 总体结构: at-rules(@charset @import @media @page)   rule分解
-------
**第二步: CSS @规则的研究 9种**
@charset @import @media(媒体查询) @page(分页媒体)
@counter-style(列表项目符号) @keyframes(动画关键帧) @fontface(web font字体文件, icon font) 
@supports(检查css功能是否存在兼容性,本身也有兼容性问题) @namespace(sgv MathML 空间 完备性)
-------
**CSS规则**
选择器部分 + 声明部分: selector + declaration

选择器: level3 level4 

css varibale 使得key有两种: 属性properties  变量(--)variables

value 可以是函数类型;calc函数;

**Selector level3**

selectors_group : selector [ COMMA* selector ] 由逗号分割(优先级最低的)
simple_selector_sequence 连接符有,  加号(PLUS) 大于号(GREATER) 波浪线(TILDE) S+ 最经典的空格选择器

simple_selector_sequence : [ type_selector | universal | HASH | class | attrib | pseudo | negation ]

类型选择器; 星号通用选择器; #id选择器; .class选择器; 属性选择器([ attr=value ]); 伪类(伪元素)选择器pseudo; NOT选择器(negation)
-------
**选择器语法**
 简单选择器:
 - *通用选择器
 - div svg|a   type selector类型选择器(tagName属性); 有三个命名空间: html, svg, MathML
 - .cls class选择器 空白作为分隔符
 - #id 严格匹配
 - [ attr=value ] 属性选择器: 囊括了class和id选择器.
 - :hover 伪类 (来自于交互,带函数的)
 - ::before 伪元素 . 不存在的元素
-------
**复合选择器**
 1. <简单选择器><简单选择器><简单选择器>
 2. *或者div必须在最前面
-------
**复杂选择器**
<复合选择器> < sp > <复合选择器>
<复合选择器> ">" <复合选择器>
<复合选择器> "~" <复合选择器>
<复合选择器> "+" <复合选择器>
<复合选择器> "||" <复合选择器>
-------
**选择器优先级:specificity计算原理**
#id div.a#id [0, 2, 1, 1]
N是很大的进制,比如取10000(65536)
S = 0 * N^3 + 2 * N^2 + 1 * N^1 + 1
-------
**伪类选择器**
超链接所用 :any-link匹配所有超链接 :link匹配未访问的超链接 :visited :hover :active :focus :target
hover最初只对超链接生效;
focus所有可以获取焦点的元素
target 作为锚地的a标签

树形结构相关的伪类
:empty
:nth-child() 需要支持: even odd , 4n+1, 
:nth-last-child() 从后往前数(破坏compute时机,破坏回溯原则,性能不太好)
:first-child  :last-child  :only-child

逻辑型(兼容性不好)
:not
:where  :has (css level4 不稳定)
-------
**伪元素**
::before (应用了before,after的元素, declaration里面可以写content这个属性!! 就像真实dom一样生成盒,参与排版渲染)
::after
::first-line (在排版渲染后,不存在的元素把需要的 括起来)
::first-letter

"修饰性的内容"
<::before />
 content content
 content content
<::after />

first-letter可以设置成display:float,为什么first-line不行?

::first-line伪元素不会选择内联元素的第一行文字。也就是说，::first-line属性对于display: inline的元素无效，它只对display属性为block、inline-block、table-cell、table-caption或list-item的元素有效。

一段文字的第一行是多少个字，取决于页面的宽度和字体大小等各种因素。

如果是在一个块级元素（如<div>）中包含一段文本（如<p>元素），那么<div>元素的::first-line匹配的是<p>元素的第一行。

<div>
   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
</div>
display为table-cell或inline-block的元素的第一行不能作为其父元素的第一行。所以下面的例子中，<div>元素的第一行不是first。

<div>
   <p style="display: inline-block">
       first
       <br>
       section
   </p>
   third
</div>
考虑以下的一段文本，如果在文本之前使用了<br>换行符，那么::first-line将不会选择任何东西。

<p><br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
-------