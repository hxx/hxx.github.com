---
layout: post
title: RubyConf China 2015
---

去年的 RubyConf China 在北京，太远了没去，今天在深圳举行的 [RubyConf China 2015](http://rubyconfchina.org/) 肯定是得参加的啦，早早的报了名。

<!--break-->

这次，Ruby China 社区的三位管理员全都来了，特别是[李华顺](https://ruby-china.org/huacnlee)带来的主题 [Ruby China 背后的故事](https://speakerdeck.com/huacnlee/ruby-china-bei-hou-de-gu-shi)，让我们了解到 [Ruby China](https://ruby-china.org/) 这个最大的 Ruby 中文社区是如何从一个个人项目转变为社区项目，了解到开源贡献的力量让这个社区越来越好，也感受到经营一个社区是多么地不容易。


其中还有一句话我特别认同，那就是

	程序员懂设计很重要

管理员们热爱 Ruby 和 Rails，懂得交互设计，注重细节，所以才创造了这个好的一个 Ruby 社区


来自蝉游记的 [quake wang](https://ruby-china.org/quakewang) 带来的主题，[用 Ruby 解 Leetcode 算法题](http://quake.wang/slides/rubyconfchina-2015/) 很有意思，像极了大学时的 ACM 程序竞赛，对于每天忙于实现具体业务功能的我们来说已经有很长时间没这样子做过算法题了，而在 [Leetcode](http://leetcode.com) 里，可以重温一些经典算法，特别还能利用 Ruby 的一些库实现别的语言要很多行代码才能实现的算法，体现 Ruby 语言高效生产力以及对人类友好的特性。

例如一个从数组中找出所有排列组合的问题，用 Java 可能需要十几行代码来解决，而用 Ruby
，一行代码搞定

```ruby
nums.permutation.to_a
```

以及一个查找最后一个单词长度的问题，使用 Ruby 语言，即使是不会编程的人看到也能明白大概的意思，这是体现 Ruby 语言对人类友好的特性：

```Ruby
words = sentence.split(' ')
words.last ? words.last.length : 0
```

[黄志敏](https://ruby-china.org/flyerhzm)， [rails-best-practices](https://speakerdeck.com/flyerhzm/ji-yu-astde-dai-ma-you-hua) 的作者带来的 [基于 AST 的代码优化](https://speakerdeck.com/flyerhzm/ji-yu-astde-dai-ma-you-hua)，，详细讲解了他是如何做到检测代码，并且给出改进建议的实现：首先通过 Ruby 代码解析库将代码分解，再分析代码，最后根据社区的代码风格指南给出 best practices 建议。这类工具不仅可以检测代码在 Review 的时候给出建议，还可以根据自己的需求，将分解后的代码进行修改，很好地转化 Ruby 升级时带来的语法上改动。

而其他一些讲师提到的使用 [grape](https://github.com/ruby-grape/grape) 和 [swagger](https://github.com/ruby-grape/grape-swagger) 来做 API, 一个观点很有意思，那就是现在 Web 端只是各类客户端的其中一个，还有各种移动端甚至智能穿戴设备、无人机等等，我们需要一个很好的提供 API 的服务，在即将到来的 Rails 5.0 中，Rails API 将会加入其中。
