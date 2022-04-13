(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{525:function(s,a,n){"use strict";n.r(a);var e=n(42),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Spring Boot项目部署到docker\n")]),s._v(" "),n("ol",[n("li",[s._v("将Spring Boot项目打成jar包，拷贝到工作目录，创建dockerfile文件，用于build后面的docker镜像")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("// 举个例子，我的工作目录为 /DockerDev， 打包后的jar为 blog-server.jar\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/DockerDev\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nblog-server.jar\ndockerfile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("编辑dockerfile")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker image for springboot file run")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VERSION 0.1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: sleepyocean")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础镜像使用java")]),s._v("\nFROM java:8\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将jar包复制到容器中的/sleepy目录下，并更名为so-blog-server.jar")]),s._v("\nCOPY blog-server.jar /sleepy/so-blog-server.jar\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对外端口")]),s._v("\nEXPOSE "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行命令 java -jar so-blog-server.jar")]),s._v("\nCMD "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/sleepy/so-blog-server.jar"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("构建镜像")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在工作目录下（如/DockerDev）执行镜像构建命令, 构建镜像的名称为 blogserver:0.1(blogserver 为镜像名， 0.1为镜像的tag)， 注意最后的'.'别忘了")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t blogserver:0.1 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("启动容器")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\nREPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nblogserver               "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("                 xxxxxxxxxxx        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" minutes ago       705MB\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动创建好的镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v(":9999 --name blogserver --link zen_engelbart:localhost blogserver:0.1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("由于要引入mysql，所以需要添加链接到另一个容器，使用--link。")]),s._v(" "),n("p",[n("code",[s._v("--link")]),s._v("： 添加链接到另一个容器，格式为： "),n("strong",[s._v("docker中启动mysql镜像的容器名称 : 需要映射的名称")])]),s._v(" "),n("p",[s._v("这里我在spring boot中配置的数据库连接："),n("code",[s._v("url: jdbc:mysql://localhost:3306/test")]),s._v("，所以我这里映射的名称为"),n("code",[s._v("localhost")])])])}),[],!1,null,null,null);a.default=t.exports}}]);