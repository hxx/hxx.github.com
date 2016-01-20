---
layout: post
title: How to do
---


	授人以鱼，授人以渔

当遇到问题时，首先想到的是解决这个问题，但是该怎么解决，以及以后遇到类似问题该怎么去解决呢？我们要学会的是解决问题的方法。

<!--break-->

###运用好身边的资源：

我想做一个 authentication 的功能时，可以先上 [RubyToolbox](https://www.ruby-toolbox.com)  上搜一下有没有 authentication 相关的 gem
搜出来的结果发现有 **Devise** 等很多提供该功能的 gem ,这时我就可以去到 Devise 的 [Website](https://github.com/plataformatec/devise) 看看Devise提供那些功能以及如何使用，同时搜索 [RailsCasts](http://railscasts.com/) 里是否有相关的视频，如果有，那就太好了，结合视频可以很快地知道 Devise 这个 gem 的功能和使用。

###看看 gem 的源码：

在使用 [Refinerycms](http://refinerycms.com/) 这个 gem 时，需要 overriding  pages里的 view ，那么我可以看看使用 bundle open refinery 打开 refinerycms 相关的 gem ，然后再选择 **refinerycms-pages** ，看看这个 gem 的源码，看看它是怎么实现 view 的，发现这个 gem 又用到了 **seo_meta** 相关的内容，照样，我可以使用bundle open seo_meta 来打开 [seo_meta](https://github.com/parndt/seo_meta) 这个 gem，看看它怎样实现，然后就可以仿照它的方法来重写自己想要的 view 了 : )
