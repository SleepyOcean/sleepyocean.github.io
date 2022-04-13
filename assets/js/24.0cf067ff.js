(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{485:function(v,_,t){"use strict";t.r(_);var a=t(42),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("多线程基础知识提要")]),v._v(" "),t("p",[v._v("多线程是为了充分利用『多核CPU』产生的技术\n")]),v._v(" "),t("h2",{attrs:{id:"多线程概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多线程概要"}},[v._v("#")]),v._v(" 多线程概要")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("并行和并发的区别")])])]),v._v(" "),t("p",[v._v("并行：指在同一时刻，有多条指令在多个处理器上同时执行；")]),v._v(" "),t("p",[v._v("并发：指在同一时刻，只能有一条指令执行，但多个进程指令被快速轮换执行，使得在宏观上具有多个进程同时执行的效果。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("多线程的目的")])])]),v._v(" "),t("p",[v._v("多线程的目的是为了最大限度的利用CPU资源")]),v._v(" "),t("p",[v._v("例如，某一个线程它可能要处理I/O，访问内存等等。在这个时候，CPU就是闲置的。为了在这个时候也能使用CPU，所以引入了多线程。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("应用场景")])])]),v._v(" "),t("ol",[t("li",[v._v("多线程处理后台任务")])]),v._v(" "),t("p",[v._v("一般来说，我们需要在后台处理的任务，通常会使用定时器来开启后台线程处理，比如有些数据表的状态我需要定时去修改、我们搜索引擎里面的数据需要定时去采集、定时生成统计信息、定时清理上传的垃圾文件等。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("多线程异步处理任务")])]),v._v(" "),t("p",[v._v("当我们需要处理一个耗时操作并且不要立刻知道处理结果时，我们可以开启后台线程异步处理该耗时操作，这样可以提高用户体验。比如我之前做的一个项目需要上传简历附件，后台需要对简历附件进行解析，保存到数据表中，因为涉及多种格式的处理，所以我们开启多线程异步处理此操作，这样用户就不用等到我们的简历解析完就能看到服务端的响应了。再比如用户下载简历时，我们需要将数据表中的数据生成简历附件并且通过邮件发送到用户邮箱，该操作也可以开启多线程异步处理。")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("多线程分布式计算")])]),v._v(" "),t("p",[v._v("当我们处理一个比较大的耗时任务时，我们可以将该任务切割成多个小的任务，然后开启多个线程同时处理这些小的任务，切割的数量一般根据我们服务器CPU的核数，合理利用多核CPU的优势。比如下载操作可以使用多线程下载提高下载速度；清理文件时，开启多个线程，按目录并行处理等等。")]),v._v(" "),t("h2",{attrs:{id:"线程的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程的分类"}},[v._v("#")]),v._v(" 线程的分类")]),v._v(" "),t("p",[v._v("Java线程一共分成两种,"),t("strong",[v._v("用户线程")]),v._v("和"),t("strong",[v._v("守护线程")])]),v._v(" "),t("p",[v._v("默认就是用户线程，那么什么是守护线程？")]),v._v(" "),t("p",[v._v("当A线程去启动B线程的时候，如果当A线程死掉的时候，如果B是守护线程，则B也跟着死掉，反之B继续自己的业务逻辑。")]),v._v(" "),t("h2",{attrs:{id:"线程创建的几种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程创建的几种方式"}},[v._v("#")]),v._v(" 线程创建的几种方式")]),v._v(" "),t("ol",[t("li",[v._v("通过"),t("strong",[v._v("继承Thread类")]),v._v("实现，多个线程之间无法共享该线程类的实例变量。")]),v._v(" "),t("li",[t("strong",[v._v("实现Runnable接口")]),v._v("，较继承Thread类，避免继承的局限性，适合资源共享。")]),v._v(" "),t("li",[t("strong",[v._v("使用Callable")]),v._v("，方法中可以有返回值，并且抛出异常。")]),v._v(" "),t("li",[t("strong",[v._v("创建线程池")]),v._v("实现，线程池提供了一个线程队列，队列中保存所有等待状态的线程，避免创建与销毁额外开销，提高了响应速度。")])]),v._v(" "),t("h2",{attrs:{id:"同步与异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步与异步"}},[v._v("#")]),v._v(" 同步与异步")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("多线程中的『同步』和『异步』")])])]),v._v(" "),t("p",[t("strong",[v._v("同步")]),v._v("：A线程要请求某个资源，但是此资源正在被B线程使用中，因为同步机制存在，A线程请求\n不到，A线程只能等待下去")]),v._v(" "),t("p",[t("strong",[v._v("异步")]),v._v("：A线程要请求某个资源，但是此资源正在被B线程使用中，因为没有同步机制存在，A线程\n仍然请求的到，A线程无需等待")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("扩展")])])]),v._v(" "),t("p",[t("strong",[v._v("阻塞和非阻塞")]),v._v("： 强调的是程序在等待调用结果（消息，返回值）时的状态.  阻塞调用是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才会返回。非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程。 对于同步调用来说，很多时候当前线程还是激活的状态，只是从逻辑上当前函数没有返回而已，即同步等待时什么都不干，白白占用着资源。")]),v._v(" "),t("p",[t("strong",[v._v("同步和异步")]),v._v('：强调的是消息通信机制 (synchronous communication/ asynchronous communication)。所谓同步，就是在发出一个"调用"时，在没有得到结果之前，该“调用”就不返回。但是一旦调用返回，就得到返回值了。换句话说，就是由“调用者”主动等待这个“调用”的结果。而异步则是相反，"调用"在发出之后，这个调用就直接返回了，所以没有返回结果。换句话说，当一个异步过程调用发出后，调用者不会立刻得到结果。而是在"调用"发出后，"被调用者"通过状态、通知来通知调用者，或通过回调函数处理这个调用')]),v._v(" "),t("h2",{attrs:{id:"线程的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程的状态"}},[v._v("#")]),v._v(" 线程的状态")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://gallery.sleepyocean.cn/resource/img/9aa92a960f4024f336e1656fb68a1e59",alt:"线程的状态转换图"}})]),v._v(" "),t("p",[v._v("一个线程对象在它的生命周期内，需要经历5个状态。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("新生状态(New)")])])]),v._v(" "),t("p",[v._v("用new关键字建立一个线程对象后，该线程对象就处于新生状态。处于新生状态的线程有自己的内存空间，通过调用start方法进入就绪状态。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("就绪状态(Runnable)")])])]),v._v(" "),t("p",[v._v("处于就绪状态的线程已经具备了运行条件，但是还没有被分配到CPU，处于“线程就绪队列”，等待系统为其分配CPU。就绪状态并不是执行状态，当系统选定一个等待执行的Thread对象后，它就会进入执行状态。一旦获得CPU，线程就进入运行状态并自动调用自己的run方法。")]),v._v(" "),t("p",[v._v("有4种原因会导致线程进入就绪状态：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("新建线程：调用 start() 方法，进入就绪状态;")])]),v._v(" "),t("li",[t("p",[v._v("阻塞线程：阻塞解除，进入就绪状态;")])]),v._v(" "),t("li",[t("p",[v._v("运行线程：调用 yield() 方法，直接进入就绪状态;")])]),v._v(" "),t("li",[t("p",[v._v("运行线程：JVM将CPU资源从本线程切换到其他线程。")])])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("运行状态(Running)")])])]),v._v(" "),t("p",[v._v("在运行状态的线程执行自己run方法中的代码，直到调用其他方法而终止或等待某资源而阻塞或完成任务而死亡。如果在给定的时间片内没有执行结束，就会被系统给换下来回到就绪状态。也可能由于某些“导致阻塞的事件”而进入阻塞状态。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("阻塞状态(Blocked)")])])]),v._v(" "),t("p",[v._v("阻塞指的是暂停一个线程的执行以等待某个条件发生(如某资源就绪)。")]),v._v(" "),t("p",[v._v("有4种原因会导致阻塞：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("执行 sleep(int millsecond) 方法，使当前线程休眠，进入阻塞状态。当指定的时间到了后，线程进入就绪状态。")])]),v._v(" "),t("li",[t("p",[v._v("执行 wait() 方法，使当前线程进入阻塞状态。当使用 nofity() 方法唤醒这个线程后，它进入 就绪状态。")])]),v._v(" "),t("li",[t("p",[v._v("线程运行时，某个操作进入阻塞状态，比如执行IO流操作( read()/write() 方法本身就是阻塞的方法)。只有当引起该操作阻塞的原因消失后，线程进入就绪状态。")])]),v._v(" "),t("li",[t("p",[v._v("join() 线程联合: 当某个线程等待另一个线程执行结束后，才能继续执行时，使用 join() 方法。")])])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("死亡状态(Terminated)")])])]),v._v(" "),t("p",[v._v("死亡状态是线程生命周期中的最后一个阶段，当一个线程进入死亡状态以后，就不能再回到其它状态了。")]),v._v(" "),t("p",[v._v("线程死亡的原因有两个：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("正常运行的线程完成了run()方法内的全部工作;")])]),v._v(" "),t("li",[t("p",[v._v("程被强制终止，如通过执行 stop() 或 destroy() 方法来终止一个线程(已过时)。")])])]),v._v(" "),t("h2",{attrs:{id:"守护线程和非守护线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#守护线程和非守护线程"}},[v._v("#")]),v._v(" 守护线程和非守护线程")]),v._v(" "),t("p",[t("strong",[v._v("守护线程")]),v._v("：是依赖于用户线程，用户线程退出了，守护线程也就会退出，典型的守护线程如垃圾回收线程。")]),v._v(" "),t("p",[t("strong",[v._v("用户线程")]),v._v("(非守护线程)：是独立存在的，不会因为其他用户线程退出而退出。")]),v._v(" "),t("h2",{attrs:{id:"线程常见的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程常见的方法"}},[v._v("#")]),v._v(" 线程常见的方法")]),v._v(" "),t("h3",{attrs:{id:"join方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join方法"}},[v._v("#")]),v._v(" join方法")]),v._v(" "),t("p",[v._v("join方法的主要作用就是同步，它可以使得线程之间的并行执行变为串行执行。在A线程中调用了B线程的 join() 方法时，表示只有当B线程执行完毕时，A线程才能继续执行。")]),v._v(" "),t("h3",{attrs:{id:"yield-和wait-的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yield-和wait-的比较"}},[v._v("#")]),v._v(" yield()和wait()的比较")]),v._v(" "),t("p",[v._v("我们知道，wait()的作用是让当前线程由“运行状态”进入到“等待（阻塞）”的同时，也会释放同步锁。而yield()的作用是让步，它也是让当前线程离开“运行状态”。区别是：\n"),t("strong",[v._v("（1）wait()是让线程由“运行状态”进入到“等待（阻塞）状态”，而yield()是让线程由“运行状态”进入到“就绪状态”。")]),v._v(" "),t("strong",[v._v("（2）wait()是会让线程释放它所持有的对象的同步锁，而yield()方法不会释放对象的同步锁。")])]),v._v(" "),t("h3",{attrs:{id:"线程休眠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程休眠"}},[v._v("#")]),v._v(" 线程休眠")]),v._v(" "),t("p",[v._v("sleep()方法定义在Thread类中，sleep()的作用是让当前线程休眠，即当前线程会从“运行状态”进入到“休眠（阻塞）状态”。sleep()会指定休眠时间，线程休眠的时间会大于/等于该休眠时间；在线程重新被唤醒时，它会由“阻塞状态”变成“就绪状态”，从而等待CPU的调度执行。")]),v._v(" "),t("h3",{attrs:{id:"sleep-和wait-的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sleep-和wait-的比较"}},[v._v("#")]),v._v(" sleep()和wait()的比较")]),v._v(" "),t("p",[v._v("我们知道，wait()的作用是让当前的线程由“运行状态”进入到“等待（阻塞）状态”的同时，也会释放同步锁。但是sleep()的作用是让当前线程由“运行状态”进入到“休眠（阻塞）”状态。"),t("strong",[v._v("wait()会释放对象的同步锁，而sleep()则不会释放锁。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);