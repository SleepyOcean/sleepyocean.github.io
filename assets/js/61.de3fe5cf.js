(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{511:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"📺-docker-搭建-plex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📺-docker-搭建-plex"}},[s._v("#")]),s._v(" 📺 Docker 搭建 PLEX")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--network"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--device"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/dri:/dev/dri "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name plex "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PGID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asia/shanghai"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-h plex "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/plex/config:/config "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/plex/transcode:/transcode "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/ocean/3-mount:/data2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nlinuxserver/plex\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop plex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" plex\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"一、安装流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装流程"}},[s._v("#")]),s._v(" 一、安装流程")]),s._v(" "),t("p",[t("strong",[s._v("1）使用docker拉取并运行PLEX")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取plex镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull cloudb0x/plex\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 运行plex")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cloudb0x版")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name plex -v /home/sleepy/theater:/data --network"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host cloudb0x/plex\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("2）通过SMB挂载影视资源")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有samba访问工具，首先在linux上安装samba访问工具")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" smbclient\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cifs-utils\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t cifs //192.168.121.106/0-Cinema0 theater-0 -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("read,password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("3）访问本地plex服务：http://192.168.200.128:32400/web。开始配置PLEX。")])]),s._v(" "),t("p",[t("strong",[s._v("4）资源库备份方案一： 打包镜像，上传到私人Docker镜像仓库")])]),s._v(" "),t("p",[s._v("Docker私人镜像仓库配置参考："),t("a",{attrs:{href:"https://sleepyocean.github.io/pages/33ebb9/",target:"_blank",rel:"noopener noreferrer"}},[s._v("DockerHub私有容器仓库搭建"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交容器修改并打包镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sleepyocean"')]),s._v(" -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plex:movie index completed"')]),s._v(" plex "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".128.100:5000/plex:v20210606\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送镜像")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".128.100:5000/plex:v20210606\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"安装三方插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装三方插件"}},[s._v("#")]),s._v(" 安装三方插件")]),s._v(" "),t("h4",{attrs:{id:"_1-下载插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载插件"}},[s._v("#")]),s._v(" 1）下载插件")]),s._v(" "),t("p",[s._v("插件文件夹名称： xxx.bundle")]),s._v(" "),t("h4",{attrs:{id:"_2-移入docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-移入docker"}},[s._v("#")]),s._v(" 2）移入docker")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" WangYiYun.bundle plex:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/config/Library/Application Support/Plex Media Server/Plug-ins/'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录")]),s._v(" "),t("p",[t("strong",[s._v("1）其他参考文档")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/plexinc/pms-docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("Official Docker container for Plex Media Server ReadMe"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.emengweb.com/p/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[s._v("分享Plex数据包时，数据库及配置信息的脱敏及媒体路径替换方法")]),t("OutboundLink")],1)]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"👋jellyfin篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#👋jellyfin篇"}},[s._v("#")]),s._v(" 👋Jellyfin篇")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8096")]),s._v(":8096 -name jellyfin -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v(":/media jellyfin/jellyfin \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);