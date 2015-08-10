---
layout: post
title: thumbnail in Refinery
---

今天在使用 Refinery 的 thumbnail 方法对图片进行处理的时候，发现原本 54k 的图片，经过转换居然变成了 381k , 原因是原有图片的分辨率还没有 thumbnail 的参数 `geometry: "1440x967#c"` 分辨率大，结果 Refinery 就把它放大了，同时图片大小也变大了，经过尝试发现，如果原图片分辨率和参数一致，但是画质不高，经过 Refinery 的处理，也会将图片大小放大。


其实，Refinery 对 image 的 [thumbnail](https://github.com/resolve/refinerycms/blob/master/images/app/models/refinery/image.rb#L43-L54) 方法差不多就是调用 dragonfly 的中 ImageMagick 的 thumb 方法，我们可以在[这里](http://markevans.github.io/dragonfly/imagemagick)找到更多关于 `thumb` 的用法


