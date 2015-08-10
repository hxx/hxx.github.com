---
layout: post
title: Getting Started
---


今天再次把RailsGuides里面的Getting Started再做了一遍。

  <!--break-->

由于环境已经搭建好，这次跑下来很顺利，对于每步要做什么和为什么要这么做比以前要理解的深刻些了。

* 如何安装 Rails，新建 Rails 程序，如何连接数据库；
* Rails 程序的基本文件结构；
* MVC（模型，视图，控制器）和 REST 架构的基本原理；
* 如何快速生成 Rails 程序骨架；

个人觉得针对读完Getting Started的以上几点需要掌握的：

###Setup

Rails的安装和新建Rails程序可以同过gem install rails 和 rails new project来很快地完成，连接数据库首先需要
在Gemfile里加入想要使用的数据库的gem(默认使用Sqlite3)，然后在/config/database.yml文件里将对应数据库配置好。

###Rails程序的基本文件结构，

这个接触Rails项目比较多的话就很快会熟悉的，比如app/下的/models、/views、/controller对应的就是Rails的MVC，比如配置一般放在config/下，第三方代码放在vendor/下等等。

###MVC架构

MVC（模型，视图，控制器），这种模式强制地将“域逻辑“”和图形用户界面（GUI）的输入、表现逻辑分开。在 Web 应用程序中，“域逻辑”的典型代表是“用户（users）”、“文章（articles）”和“产品（products）”等数据模型，GUI 则是浏览器中的网页。

 以users来举例：

1. 浏览器向 /users 发起一个请求；
2. Rails 的路由将 /user 分配到 Users 控制器的 index 动作；
3. index 动作向 User 模型获取所有的用户（User.all）；
4. User 模型从数据库中将所有的用户读取出来；
5. User 模型将所有的用户返回给控制器；
6. 控制器将获得的所有用户数据赋予 @users 变量，然后传递给 index 的视图；
7. 视图使用内嵌 Ruby 代码的模板渲染成 HTML；
8. 控制器将生成的 HTML 发送回浏览器。


###REST架构

在 Rails 程序中，REST 意味着大多数的组件（例如用户和微博）会被模型化，变成资源（resource），可以被创建（create）、读取（read）、更新（update）和删除（delete），这些操作会与关系型数据库中的 CRUD 操作和 HTTP 请求方法（POST，GET，PATCH 和 DELETE）对应起来。

###如何快速生成 Rails 程序骨架

使用scaffold来快速生成Rails骨架，scaffold会生成大量的代码，当知道为什么scaffold要生成这些代码就对Rails骨架有了更清晰地了解，比如生成了model,controller,view相关的代码，以及test_unit,helper相关代码，同时会更改routes.rb里的内容和增加一些assets文件。
