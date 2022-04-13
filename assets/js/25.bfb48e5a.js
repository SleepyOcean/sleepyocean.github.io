(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{479:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在当今计算机的CPU计算速度非常快的情况下，为了能够充分利用CPU性能提高程序运行效率我们在程序中使用了线程。但是在高并发情况下会频繁的创建和销毁线程，这样就变相的阻碍了程序的执行速度，所以为了管理线程资源和减少线程创建以及销毁的性能消耗就引入了线程池。\n")]),t._v(" "),s("h2",{attrs:{id:"_1-什么场景下适合使用线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么场景下适合使用线程池"}},[t._v("#")]),t._v(" 1. 什么场景下适合使用线程池")]),t._v(" "),s("p",[t._v("当服务器接收到大量任务时，如果使用线程池可以大量减少线程的创建与销毁次数，从而提升程序执行效率。")]),t._v(" "),s("p",[t._v("在实际开发中，如果需要创建5个以上的线程，那么就可以使用线程池来管理。")]),t._v(" "),s("h2",{attrs:{id:"_2-线程池参数介绍以及特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程池参数介绍以及特点"}},[t._v("#")]),t._v(" 2. 线程池参数介绍以及特点")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("corePoolSize")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("核心线程数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("maxPoolSize")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最大线程数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("keepAliveTime")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("long")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("保持存活时间")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("workQueue")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("BlockingQueue")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("任务存储队列")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("threadFactory")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("ThreadFactory")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当线程池需要新的线程的时候，会使用threadFactory来生成新的线程")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Handler")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("RejectedExecutionHandler")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("由于线程池无法接收你所提交的的任务时的拒绝策略")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-1-corepoolsize-和-maxpoolsize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-corepoolsize-和-maxpoolsize"}},[t._v("#")]),t._v(" 2.1 corePoolSize 和 maxPoolSize")]),t._v(" "),s("p",[t._v("corePoolSize：线程池在创建完时，里面并没有线程，只有当任务到来时再去创建线程。")]),t._v(" "),s("p",[t._v("maxPoolSize：线程池可能会在核心线程数的基础上额外增加一些线程，但是线程数量的上限是maxPoolSize。")]),t._v(" "),s("h4",{attrs:{id:"_2-1-1-添加线程的规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-添加线程的规则"}},[t._v("#")]),t._v(" 2.1.1 添加线程的规则")]),t._v(" "),s("p",[t._v("当线程数量小于 corePoolSize 即使线程没有在执行任务，也会创建新的线程。")]),t._v(" "),s("p",[t._v("如果线程数量等于（或大于）corePoolSize，但小于 maxPoolSize 则将任务放入队列。")]),t._v(" "),s("p",[t._v("如果队列已满，并且线程数小于 maxPoolSize，则创建新的线程运行任务。")]),t._v(" "),s("p",[t._v("如果队列已满，并且线程数大于或等于 maxPoolSize，则拒绝该任务。")]),t._v(" "),s("h4",{attrs:{id:"_2-1-2-增减线程的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-增减线程的特点"}},[t._v("#")]),t._v(" 2.1.2 增减线程的特点")]),t._v(" "),s("ul",[s("li",[t._v("将 corePoolSize 和 maxPoolSize 设置为相同的值，那么就会创建固定大小的线程池。")]),t._v(" "),s("li",[t._v("线程池希望保持更少的线程数，并且只有在负载变得很大时才会增加它。")]),t._v(" "),s("li",[t._v("如果将线程池的maxPoolSize参数设置为很大的值，例如Integer.MAX_VALUE，可以允许线程池容纳任意数量的并发任务。")]),t._v(" "),s("li",[t._v("只有在队列满了的时候才会去创建大于 corePoolSize 的线程，所以如果使用了无界队列（如：LinkedBlockingQueue）就不会创建到超过 corePoolSize 的线程数。")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-keepalivetime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-keepalivetime"}},[t._v("#")]),t._v(" 2.2 keepAliveTime")]),t._v(" "),s("p",[t._v("如果线程池当前的线程数大于 corePoolSize，那么如果多余的线程的空闲时间大于 keepAliveTime，它们就会被终止。")]),t._v(" "),s("p",[t._v("keepAliveTime 参数的使用可以减少线程数过多，冗余时的资源消耗。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-threadfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-threadfactory"}},[t._v("#")]),t._v(" 2.3 threadFactory")]),t._v(" "),s("p",[t._v("新的线程由 ThreadFactory 创建，默认使用 Executors.defaultThreadFactory()，创建出来的线程都在同一个线程组，拥有同样的 NORM_PRIORITY 优先级并且都不是守护线程。如果自己指定 ThreadFactory，那么就可以改变线程名、线程组、优先级、是否是守护线程等。通常情况下直接使用 defaultThreadFactory 就行。")]),t._v(" "),s("h3",{attrs:{id:"_2-4-workqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-workqueue"}},[t._v("#")]),t._v(" 2.4 workQueue")]),t._v(" "),s("p",[t._v("直接交接（SynchronousQueue）：任务不多时，只需要用队列进行简单的任务中转，这种队列无法存储任务，在使用这种队列时，需要将 maxPoolSize 设置的大一点。")]),t._v(" "),s("p",[t._v("无界队列（LinkedBlockingQueue）：如果使用无界队列当作 workQueue，将 maxQueue 设置的多大都没有用，使用无界队列的优点是可以防止流量突增，缺点是如果处理任务的速度跟不上提交任务的速度，这样就会导致无界队列中的任务越来越多，从而导致OOM异常。")]),t._v(" "),s("p",[t._v("有界队列（ArrayBlockingQueue）：使用有界队列可以设置队列大小，让线程池的 maxPoolSize 有意义。")]),t._v(" "),s("h2",{attrs:{id:"_3-线程池应该手动创建还是自动创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程池应该手动创建还是自动创建"}},[t._v("#")]),t._v(" 3. 线程池应该手动创建还是自动创建")]),t._v(" "),s("p",[t._v("手动创建更好，因为这样可以让我们更加了解线程池的运行规则，避免资源耗尽的风险。")]),t._v(" "),s("h3",{attrs:{id:"_3-1-直接调用jdk封装好的线程池会带来的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-直接调用jdk封装好的线程池会带来的问题"}},[t._v("#")]),t._v(" 3.1 直接调用JDK封装好的线程池会带来的问题")]),t._v(" "),s("h4",{attrs:{id:"_3-1-1-newfixedthreadpool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-newfixedthreadpool"}},[t._v("#")]),t._v(" 3.1.1 newFixedThreadPool")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建线程池")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFixedThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newFixedThreadPool方法源码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFixedThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" nThreads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nThreads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nThreads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MILLISECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newLinkedBlockingQueue"),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnabl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("newFixedThreadPool 线程池通过传入相同的 corePoolSize 和 maxPoolSize 可以保证线程数量固定，0L 的 keepAliveTime 表示时刻被销毁，workQueue 使用的是无界队列。")]),t._v(" "),s("p",[t._v("这样潜在的问题就是当处理任务的速度赶不上任务提交的速度的时候，就可能会让大量任务堆积在workQueue中，从而引发OOM异常。")]),t._v(" "),s("h4",{attrs:{id:"_3-1-2-newsinglethreadexecutor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-newsinglethreadexecutor"}},[t._v("#")]),t._v(" 3.1.2 newSingleThreadExecutor")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建线程池")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newSingleThreadExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newSingleThreadExecutor 方法源码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newSingleThreadExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FinalizableDelegatedExecutorService")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MILLISECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedBlockingQueue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("从源码可以看出 newSingleThreadExecutor 和 newFixedThreadPool 基本类似，不同的只是 corePoolSize 和 maxPoolSize 的值，所以 newSingleThreadExecutor 也存在内存溢出问题。")]),t._v(" "),s("h4",{attrs:{id:"_3-1-3-newcachedthreadpool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-newcachedthreadpool"}},[t._v("#")]),t._v(" 3.1.3 newCachedThreadPool")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建线程池")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCachedThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newCachedThreadPool 方法源码")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCachedThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SynchronousQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("newCachedThreadPool也被称为可缓存线程池，它是一个无界线程池，具有自动回收多余线程的功能。")]),t._v(" "),s("p",[t._v("newCachedThreadPool的maxPoolSize设置的值为Integer.MAX_VALUE，所以可能会导致线程被无限创建，最终导致OOM异常。")]),t._v(" "),s("h4",{attrs:{id:"_3-1-4-newscheduledthreadpool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-newscheduledthreadpool"}},[t._v("#")]),t._v(" 3.1.4 newScheduledThreadPool")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新建线程池")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledExecutorService")]),t._v(" scheduledExecutorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newScheduledThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscheduledExecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleAtFixedRate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// newScheduledThreadPoo 方法源码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledExecutorService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newScheduledThreadPoo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NANOSECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DelayedWorkQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("该线程池支持周期性任务的执行")]),t._v(" "),s("h3",{attrs:{id:"_3-2-线程池里的线程数量设置多少比较合适"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-线程池里的线程数量设置多少比较合适"}},[t._v("#")]),t._v(" 3.2 线程池里的线程数量设置多少比较合适")]),t._v(" "),s("p",[t._v("CPU密集型（加密、计算hash等）：最佳线程数设置为CPU核心数的1——2倍。")]),t._v(" "),s("p",[t._v("耗时I/O型（读写数据库、文件、网络读写等）：最佳线程数一般会大于CPU核心数很多倍，以JVM监控显示繁忙情况为依据，保证线程空闲可以衔接上。参考Brain Goezt推荐的计算方法：线程数 = CPU核心数 × (1 + 平均等待时间 / 平均工作时间)")]),t._v(" "),s("h3",{attrs:{id:"_3-3-对比各线程池的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-对比各线程池的特点"}},[t._v("#")]),t._v(" 3.3 对比各线程池的特点")]),t._v(" "),s("ul",[s("li",[t._v("FixedThreadPool：通过手动传入 corePoolSize 和 maxPoolSize ，以固定的线程数来执行任务")]),t._v(" "),s("li",[t._v("SingleThreadExecutor：corePoolSize 和 maxPoolSize 默认都是1，全程只以1条线程执行任务")]),t._v(" "),s("li",[t._v("CachedThreadPool：它没有需要维护的核心线程数，每当需要线程的时候就进行创建，因为它的线程存活时间是60秒，所以它也凭借着这个参数实现了自动回收的功能。")]),t._v(" "),s("li",[t._v("ScheduledThreadPool：这个线程池可以执行定时任务，corePoolSize 是通过手动传入的，它的 maxPoolSize 为 Integer.MAX_VALUE，并且具有自动回收线程的功能。")])]),t._v(" "),s("h4",{attrs:{id:"_3-3-1-为什么-fixedthreadpool-和-singlethreadexecutor-的-queue-是-linkedblockingqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-为什么-fixedthreadpool-和-singlethreadexecutor-的-queue-是-linkedblockingqueue"}},[t._v("#")]),t._v(" 3.3.1 为什么 FixedThreadPool 和 SingleThreadExecutor 的 Queue 是 LinkedBlockingQueue？")]),t._v(" "),s("p",[t._v("因为这两个线程池的核心线程数和最大线程数都是相同的，也就无法预估任务量，所以需要在自身进行改进，就使用了无界队列。")]),t._v(" "),s("h4",{attrs:{id:"_3-3-2-为什么-cachedthreadpool-使用的-queue-是-synchronousqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-为什么-cachedthreadpool-使用的-queue-是-synchronousqueue"}},[t._v("#")]),t._v(" 3.3.2 为什么 CachedThreadPool 使用的 Queue 是 SynchronousQueue？")]),t._v(" "),s("p",[t._v("因为缓存线程池的最大线程数是“无上限”的，每当任务来的时候直接创建线程进行执行就好了，所以不需要使用队列来存储任务。这样避免了使用队列进行任务的中转，提高了执行效率。")]),t._v(" "),s("h4",{attrs:{id:"_3-3-3-为什么-scheduledthreadpool-使用延迟队列-delayedworkqueue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-为什么-scheduledthreadpool-使用延迟队列-delayedworkqueue"}},[t._v("#")]),t._v(" 3.3.3 为什么 ScheduledThreadPool 使用延迟队列 DelayedWorkQueue？")]),t._v(" "),s("p",[t._v("因为 ScheduledThreadPool 是延迟任务线程池，所以使用延迟队列有利于对执行任务的时间做延迟。")]),t._v(" "),s("h4",{attrs:{id:"_3-3-4-jdk1-8中加入的workstealingpool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-jdk1-8中加入的workstealingpool"}},[t._v("#")]),t._v(" 3.3.4 JDK1.8中加入的workStealingPool")]),t._v(" "),s("p",[t._v("workStealingPool适用于执行产生子任务的环境，例如进行二叉树的遍历。")]),t._v(" "),s("p",[t._v("workStealingPool具有窃取能力。")]),t._v(" "),s("p",[t._v("使用时最好不要加锁，而且不保证执行顺序。")]),t._v(" "),s("h2",{attrs:{id:"_3-停止线程池的正确方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-停止线程池的正确方法"}},[t._v("#")]),t._v(" 3. 停止线程池的正确方法")]),t._v(" "),s("p",[t._v("shutdown：调用了shutdown()方法不一定会立即停止，这个方法仅仅是初始整个关闭过程。因为线程池中的线程有可能正在运行，并且队列中也有待处理的任务，不可能说停就停。所以每当调用该方法时，线程池会把正在执行的任务和队列中等待的任务都执行完毕再关闭，并且在此期间如果接收到新的任务会被拒绝。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFixedThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// isShutdown：可以用于判断线程池是否被shutdown了")]),t._v("\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isShutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// isTerminated：可以判断线程是否被完全终止了")]),t._v("\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTerminated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// awaitTermination：传入等待时间，等待时间达到时判断是否停止了，主要用于检测。")]),t._v("\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitTermination")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shutdownNow：调用了这个方法时，线程池会立即终止，并返回没有被处理完的任务。如果需要继续执行这里的任务可以再次让线程池执行这些返回的任务。")]),t._v("\nexecutorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdownNow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"_4-任务太多-怎么拒绝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-任务太多-怎么拒绝"}},[t._v("#")]),t._v(" 4. 任务太多，怎么拒绝")]),t._v(" "),s("h3",{attrs:{id:"_4-1-拒绝的时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-拒绝的时机"}},[t._v("#")]),t._v(" 4.1 拒绝的时机")]),t._v(" "),s("p",[t._v("当Executor关闭时，新提交的任务会被拒绝。")]),t._v(" "),s("p",[t._v("以及Executor对最大线程数和工作队列容量使用有限边界并且已经饱和时。")]),t._v(" "),s("h3",{attrs:{id:"_4-2-拒绝策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-拒绝策略"}},[t._v("#")]),t._v(" 4.2 拒绝策略")]),t._v(" "),s("ul",[s("li",[t._v("AbortPolicy（中断策略）：直接抛出异常进行拒绝")]),t._v(" "),s("li",[t._v("DiscardPolicy（丢弃策略）：不会得到通知，默默的抛弃掉任务")]),t._v(" "),s("li",[t._v("DiscardOldestPolicy（丢弃最老的）：由于队列中存储了很多任务，这个策略会丢弃在队列中存在时间最久的任务。")]),t._v(" "),s("li",[t._v("CallerRunsPolicy：比如主线程给线程池提交任务，但是线程池已经满了，在这种策略下会让提交任务的线程去执行。")])]),t._v(" "),s("p",[t._v("总结：第四种拒绝策略相对于前三种更加“机智”一些，可以避免前面三种策略产生的损失。在第四种策略下可以降低提交的速度，达到负反馈的效果。")]),t._v(" "),s("h2",{attrs:{id:"_5-线程池实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-线程池实现原理"}},[t._v("#")]),t._v(" 5. 线程池实现原理")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gallery.sleepyocean.cn/resource/img/05e59db0daf17c1bc1cd0ad16c516428",alt:"线程池调度流程图"}})]),t._v(" "),s("h3",{attrs:{id:"_5-1-线程池组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-线程池组成部分"}},[t._v("#")]),t._v(" 5.1 线程池组成部分")]),t._v(" "),s("ul",[s("li",[t._v("线程池管理器")]),t._v(" "),s("li",[t._v("工作线程")]),t._v(" "),s("li",[t._v("任务队列")]),t._v(" "),s("li",[t._v("任务")])]),t._v(" "),s("h3",{attrs:{id:"_5-2-线程池实现任务复用的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-线程池实现任务复用的原理"}},[t._v("#")]),t._v(" 5.2 线程池实现任务复用的原理")]),t._v(" "),s("p",[t._v("总结：核心原理就是获取到task,如果task不为空就调用run()方法，这样就实现了线程的复用，达到让相同的线程执行不同任务的目的。")]),t._v(" "),s("h3",{attrs:{id:"_5-3-线程池状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-线程池状态"}},[t._v("#")]),t._v(" 5.3 线程池状态")]),t._v(" "),s("ul",[s("li",[t._v("RUNNING：接受新任务并处理排队任务")]),t._v(" "),s("li",[t._v("SHUTDOWN：不接受新的任务但是处理排队任务")]),t._v(" "),s("li",[t._v("STOP：不接受新的任务，也不处理排队的任务，并中断正在执行的任务，就是调 shutdownNow() 带来的效果")]),t._v(" "),s("li",[t._v("TIDYING：中文意思是整洁，意思就是说任务都已经终止，workerCount 为零时线程会转换到 TIDYING 状态，并将运行 terminate() 钩子方法")]),t._v(" "),s("li",[t._v("TERMINATED：terminate() 运行完成")])]),t._v(" "),s("h3",{attrs:{id:"_5-4-使用线程池的注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-使用线程池的注意点"}},[t._v("#")]),t._v(" 5.4 使用线程池的注意点")]),t._v(" "),s("ul",[s("li",[t._v("避免任务的堆积（堆积容易产生内存溢出）")]),t._v(" "),s("li",[t._v("避免线程数过多增加（缓存线程池会导致线程数过度增加）")]),t._v(" "),s("li",[t._v("排查线程泄漏（线程已经执行完毕却无法被回收）")])])])}),[],!1,null,null,null);a.default=n.exports}}]);