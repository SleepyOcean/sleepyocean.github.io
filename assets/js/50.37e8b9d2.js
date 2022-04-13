(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{520:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("GitLab 是一个用于仓库管理系统的开源项目")]),s._v("，使用Git作为代码管理工具，并在此基础上搭建起来的Web服务，可通过Web界面进行访问公开的或者私人项目。它拥有与"),t("strong",[s._v("Github")]),s._v("类似的功能，能够浏览源代码，管理缺陷和注释。")]),s._v(" "),t("h2",{attrs:{id:"安装步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),t("p",[s._v("1、拉取镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull gitlab/gitlab-ce:13.7.4-ce.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2、启动容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -d  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9980")]),s._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9922")]),s._v(":22 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/docker-data/gitlab/etc:/etc/gitlab  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/docker-data/gitlab/log:/var/log/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/docker-data/gitlab/opt:/var/opt/gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --restart always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --privileged"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --name gitlab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n gitlab/gitlab-ce:13.7.4-ce.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("3、进入容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it gitlab /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("4、编辑gitlab配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("root@d83ffc7fd1ee:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nano /etc/gitlab/gitlab.rb")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后添加如下配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab访问地址，可以写域名，这里填写宿主机ip。如果端口不写的话默认为80端口")]),s._v("\nexternal_url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.120.150'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh主机ip")]),s._v("\ngitlab_rails"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_ssh_host'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.120.150'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh连接端口")]),s._v("\ngitlab_rails"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_shell_ssh_port'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("5、应用配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("root@d83ffc7fd1ee:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab-ctl reconfigure")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("6、重启gitlab")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("root@d83ffc7fd1ee:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab-ctl restart")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("7、退出容器，访问"),t("a",{attrs:{href:"http:%5C192.168.120.150:9980",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitLab"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"重置密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重置密码"}},[s._v("#")]),s._v(" 重置密码")]),s._v(" "),t("p",[s._v("官网也有相关的说法：https://docs.gitlab.com/ce/security/reset_root_password.html")]),s._v(" "),t("p",[s._v("1、要重置您的root密码，请首先使用root特权登录到服务器。使用以下命令启动Ruby on Rails控制台")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("gitlab-rails console -e production\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2、等待控制台加载完毕，有多种找到用户的方法，您可以搜索电子邮件或用户名")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("user = User.where(id:``1``).first\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("user = User.find_by(email:``'admin@example.com'``)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3、现在，您可以更改密码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("user.password =``'secret_pass'``user.password_confirmation =``'secret_pass'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("4、重要的是，您必须同时更改密码和password_confirmation才能使其正常工作，别忘了保存更改")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("user.save!\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如此，保存之后，我们就把root账号的密码改为了：secret_pass。")])])}),[],!1,null,null,null);a.default=n.exports}}]);