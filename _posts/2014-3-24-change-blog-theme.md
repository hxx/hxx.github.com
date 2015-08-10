---
layout: post
title: Change the Theme
---

这个博客去年就搭好了，还特意买了个[huangxingxing.info](http://huangxingxing.info)的域名。

可是自己一直没有时间来弄，之前搭博客时用的[JekyllBootStrop](http://jekyllbootstrap.com/)主题是挺不错的，看上去也挺简洁，但是由于对它默认的配置不熟，更改起来老是出一些小问题；同时，看到到[Rei](http://chloerei.com/)的博客更加简洁（我就是喜欢简洁的风格），我就想把我的博客主题换一下，同时开始写博客啦 :D

从[Rei](https://github.com/chloerei)那里Fork过来的[scribble](https://github.com/chloerei/scribble)主题很好用，配置好_config.yml文件就好了，不用过多的设置（因为这个主题很和我意，所以我就不做其他设置啦）

不过今天还是在配置_config.yml文件后，还是出了一些小问题，Disqus那里一直是：**We were unable to load Disqus. If you are a moderator please see our [troubleshooting guide](http://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22)**

这让我折腾了半天，才发现原来disqus_shortname不是Disqus的用户名，是Disqus中为网站配的那个名字，比如我的Disqus用户名是huangxingxing，但是呢，我的disqus_shortname却是huangxingxinginfo而不是huangxingxing，因为我创建了huangxingxinginfo.disqus.com

![创建网站时的disqus_shortname](http://ww3.sinaimg.cn/mw690/60ef0c80gw1eer8m8u7vmj20dt0d2aat.jpg)

或者，你可以到**Disqus admin > Settings > General**里的**Stie Identity**那项看到你的*shortname*:

![我的disqus_shortname](http://ww4.sinaimg.cn/mw690/60ef0c80gw1eer8mb51h4j20kh03cdfx.jpg)


