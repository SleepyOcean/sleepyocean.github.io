(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{493:function(_,s,v){"use strict";v.r(s);var e=v(42),i=Object(e.a)({},(function(){var _=this,s=_.$createElement,v=_._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("本文会很长，建议根据目录，逐个食用。\n")]),_._v(" "),v("h2",{attrs:{id:"分布式缓存-redis篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式缓存-redis篇"}},[_._v("#")]),_._v(" 分布式缓存 - Redis篇")]),_._v(" "),v("h3",{attrs:{id:"_1-redis有哪些优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis有哪些优缺点"}},[_._v("#")]),_._v(" 1. Redis有哪些优缺点")]),_._v(" "),v("p",[v("strong",[_._v("优点")])]),_._v(" "),v("ul",[v("li",[_._v("读写性能优异， Redis能读的速度是110000次/s，写的速度是81000次/s。")]),_._v(" "),v("li",[_._v("支持数据持久化，支持AOF和RDB两种持久化方式。")]),_._v(" "),v("li",[_._v("支持事务，Redis的所有操作都是原子性的，同时Redis还支持对几个操作合并后的原子性执行。")]),_._v(" "),v("li",[_._v("数据结构丰富，除了支持string类型的value外还支持hash、set、zset、list等数据结构。")]),_._v(" "),v("li",[_._v("支持主从复制，主机会自动将数据同步到从机，可以进行读写分离。")])]),_._v(" "),v("p",[v("strong",[_._v("缺点")])]),_._v(" "),v("ul",[v("li",[_._v("数据库容量受到物理内存的限制，不能用作海量数据的高性能读写，因此Redis适合的场景主要局限在较小数据量的高性能操作和运算上。")]),_._v(" "),v("li",[_._v("Redis 不具备自动容错和恢复功能，主机从机的宕机都会导致前端部分读写请求失败，需要等待机器重启或者手动切换前端的IP才能恢复。")]),_._v(" "),v("li",[_._v("主机宕机，宕机前有部分数据未能及时同步到从机，切换IP后还会引入数据不一致的问题，降低了系统的可用性。")]),_._v(" "),v("li",[_._v("Redis 较难支持在线扩容，在集群容量达到上限时在线扩容会变得很复杂。为避免这一问题，运维人员在系统上线时必须确保有足够的空间，这对资源造成了很大的浪费。")])]),_._v(" "),v("h3",{attrs:{id:"_2-redis为什么这么快"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis为什么这么快"}},[_._v("#")]),_._v(" 2. Redis为什么这么快")]),_._v(" "),v("ol",[v("li",[_._v("完全基于内存，绝大部分请求是纯粹的内存操作，非常快速。数据存在内存中，类似于 HashMap，HashMap 的优势就是查找和操作的时间复杂度都是O(1)；")]),_._v(" "),v("li",[_._v("数据结构简单，对数据操作也简单，Redis 中的数据结构是专门进行设计的；")]),_._v(" "),v("li",[_._v("采用单线程，避免了不必要的上下文切换和竞争条件，也不存在多进程或者多线程导致的切换而消耗 CPU，不用去考虑各种锁的问题，不存在加锁释放锁操作，没有因为可能出现死锁而导致的性能消耗；")]),_._v(" "),v("li",[_._v("使用多路 I/O 复用模型，非阻塞 IO；")]),_._v(" "),v("li",[_._v("使用底层模型不同，它们之间底层实现方式以及与客户端之间通信的应用协议不一样，Redis 直接自己构建了 VM 机制 ，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求；")])]),_._v(" "),v("h3",{attrs:{id:"_3-redis的应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis的应用场景"}},[_._v("#")]),_._v(" 3. Redis的应用场景")]),_._v(" "),v("p",[v("strong",[_._v("计数器：")]),_._v("\n可以对 String 进行自增自减运算，从而实现计数器功能。Redis 这种内存型数据库的读写性能非常高，很适合存储频繁读写的计数量。")]),_._v(" "),v("p",[v("strong",[_._v("缓存：")]),_._v("\n将热点数据放到内存中，设置内存的最大使用量以及淘汰策略来保证缓存的命中率。")]),_._v(" "),v("p",[v("strong",[_._v("会话缓存：")]),_._v("\n可以使用 Redis 来统一存储多台应用服务器的会话信息。当应用服务器不再存储用户的会话信息，也就不再具有状态，一个用户可以请求任意一个应用服务器，从而更容易实现高可用性以及可伸缩性。")]),_._v(" "),v("p",[v("strong",[_._v("全页缓存（FPC）：")]),_._v("\n除基本的会话token之外，Redis还提供很简便的FPC平台。以Magento为例，Magento提供一个插件来使用Redis作为全页缓存后端。此外，对WordPress的用户来说，Pantheon有一个非常好的插件 wp-redis，这个插件能帮助你以最快速度加载你曾浏览过的页面。")]),_._v(" "),v("p",[v("strong",[_._v("查找表：")]),_._v("\n例如 DNS 记录就很适合使用 Redis 进行存储。查找表和缓存类似，也是利用了 Redis 快速的查找特性。但是查找表的内容不能失效，而缓存的内容可以失效，因为缓存不作为可靠的数据来源。")]),_._v(" "),v("p",[v("strong",[_._v("消息队列(发布/订阅功能)：")]),_._v("\nList 是一个双向链表，可以通过 lpush 和 rpop 写入和读取消息。不过最好使用 Kafka、RabbitMQ 等消息中间件。")]),_._v(" "),v("p",[v("strong",[_._v("分布式锁实现：")]),_._v("\n在分布式场景下，无法使用单机环境下的锁来对多个节点上的进程进行同步。可以使用 Redis 自带的 SETNX 命令实现分布式锁，除此之外，还可以使用官方提供的 RedLock 分布式锁实现。")]),_._v(" "),v("p",[v("strong",[_._v("其它：")]),_._v("\nSet 可以实现交集、并集等操作，从而实现共同好友等功能。ZSet 可以实现有序性操作，从而实现排行榜等功能。")]),_._v(" "),v("h3",{attrs:{id:"_3-redis线程模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis线程模型"}},[_._v("#")]),_._v(" 3. Redis线程模型")]),_._v(" "),v("p",[_._v("Redis基于Reactor模式开发了网络事件处理器，这个处理器被称为文件事件处理器（file event handler）。它的组成结构为4部分：多个套接字、IO多路复用程序、文件事件分派器、事件处理器。因为文件事件分派器队列的消费是单线程的，所以Redis才叫单线程模型。")]),_._v(" "),v("p",[_._v("文件事件处理器使用 I/O 多路复用（multiplexing）程序来同时监听多个套接字，并根据套接字目前执行的任务来为套接字关联不同的事件处理器。")]),_._v(" "),v("p",[_._v("当被监听的套接字准备好执行连接应答（accept）、读取（read）、写入（write）、关闭（close）等操作时，与操作相对应的文件事件就会产生，这时文件事件处理器就会调用套接字之前关联好的事件处理器来处理这些事件。")]),_._v(" "),v("p",[_._v("虽然文件事件处理器以单线程方式运行，但通过使用 I/O 多路复用程序来监听多个套接字，文件事件处理器既实现了高性能的网络通信模型，又可以很好地与 redis 服务器中其他同样以单线程方式运行的模块进行对接，这保持了 Redis 内部单线程设计的简单性。")]),_._v(" "),v("h3",{attrs:{id:"_4-redis事务相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis事务相关命令"}},[_._v("#")]),_._v(" 4. Redis事务相关命令")]),_._v(" "),v("p",[_._v("Redis事务功能是通过MULTI、EXEC、DISCARD和WATCH 四个原语实现的")]),_._v(" "),v("p",[_._v("Redis会将一个事务中的所有命令序列化，然后按顺序执行。")]),_._v(" "),v("p",[_._v("redis 不支持回滚，“Redis 在事务失败时不进行回滚，而是继续执行余下的命令”， 所以 Redis 的内部可以保持简单且快速。")]),_._v(" "),v("ul",[v("li",[_._v("如果在一个事务中的命令出现错误，那么所有的命令都不会执行；")]),_._v(" "),v("li",[_._v("如果在一个事务中出现运行错误，那么正确的命令会被执行")]),_._v(" "),v("li",[_._v("WATCH 命令是一个乐观锁，可以为 Redis 事务提供 check-and-set （CAS）行为。可以监控一个或多个键，一旦其中有一个键被修改（或删除），之后的事务就不会执行，监控一直持续到EXEC命令。")]),_._v(" "),v("li",[_._v("MULTI命令用于开启一个事务，它总是返回OK。MULTI执行之后，客户端可以继续向服务器发送任意多条命令，这些命令不会立即被执行，而是被放到一个队列中，当EXEC命令被调用时，所有队列中的命令才会被执行。")]),_._v(" "),v("li",[_._v("EXEC：执行所有事务块内的命令。返回事务块内所有命令的返回值，按命令执行的先后顺序排列。当操作被打断时，返回空值 nil 。")]),_._v(" "),v("li",[_._v("通过调用DISCARD，客户端可以清空事务队列，并放弃执行事务， 并且客户端会从事务状态中退出。")]),_._v(" "),v("li",[_._v("UNWATCH命令可以取消watch对所有key的监控。")])]),_._v(" "),v("h2",{attrs:{id:"分布式篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式篇"}},[_._v("#")]),_._v(" 分布式篇")])])}),[],!1,null,null,null);s.default=i.exports}}]);