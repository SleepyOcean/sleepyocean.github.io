(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{526:function(s,a,n){"use strict";n.r(a);var e=n(42),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("环境搭建主要两步")]),s._v(" "),n("ol",[n("li",[s._v("拉镜像： "),n("code",[s._v("docker pull xxx")])]),s._v(" "),n("li",[s._v("创建容器启动镜像: "),n("code",[s._v("docker run xxx")])])]),s._v(" "),n("h2",{attrs:{id:"_1-elasticsearch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-elasticsearch"}},[s._v("#")]),s._v(" 1. elasticsearch")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取elasticsearch镜像（此处使用的时6.5.4版本的es）")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull elasticsearch:6.5.4\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地镜像列表")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" image "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动es")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -u "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(":1000 --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --privileged"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --name es -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/data:/usr/share/elasticsearch/data -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/conf/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml  -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v("  -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xpack.security.enabled=false"')]),s._v("  -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TZ=Asia/Shanghai"')]),s._v("  -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 elasticsearch:6.5.4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_2-mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql"}},[s._v("#")]),s._v(" 2. mysql")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取Mysql镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --privileged"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true --name mysql -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/conf:/etc/mysql/conf.d -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/logs:/logs -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/data:/var/lib/mysql -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" -d mysql:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_3-redis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis"}},[s._v("#")]),s._v(" 3. redis")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取Redis镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 --restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --privileged"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/redis/conf/redis.conf:/usr/local/etc/redis/redis.conf -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/redis/data:/data --name redis redis redis-server /usr/local/etc/redis/redis.conf --appendonly "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_4-jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-jenkins"}},[s._v("#")]),s._v(" 4. Jenkins")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取Jenkins镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull jenkins\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动镜像 (注：jenkins_home是文件夹，localtime是文件)")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18080")]),s._v(":8080 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/jenkins_home:/var/jenkins_home -v "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/localtime:/etc/localtime --name jenkins jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_5-kibana"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-kibana"}},[s._v("#")]),s._v(" 5. Kibana")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取Kibana镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull kibana:6.5.4\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动镜像")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name kibana -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ELASTICSEARCH_URL")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.88.128:9200 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v(":5601 -d kibana:6.5.4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[n("code",[s._v("docker run")]),s._v(" 语句中，文件映射部分，须提前准备好对应的目录和配置文件，否则会报错无法启动容器。")])]),s._v(" "),n("h3",{attrs:{id:"docker-run语句中参数解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-run语句中参数解释"}},[s._v("#")]),s._v(" docker run语句中参数解释：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("-d")]),s._v("：代表后台运行")]),s._v(" "),n("li",[n("code",[s._v("-p")]),s._v("：指定端口映射，格式为："),n("strong",[s._v("主机(宿主)端口 : 容器端口")])]),s._v(" "),n("li",[n("code",[s._v("--name")]),s._v("： 为容器指定一个名称")]),s._v(" "),n("li",[n("code",[s._v("--volume 或 -v")]),s._v("： 绑定一个卷 ，映射文件到本地， 格式为： "),n("strong",[s._v("主机（宿主）目录 : 容器目录")])]),s._v(" "),n("li",[n("code",[s._v("-e")]),s._v("： 设置环境变量")])])])}),[],!1,null,null,null);a.default=t.exports}}]);