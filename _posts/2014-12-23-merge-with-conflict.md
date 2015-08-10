---
layout: post
title: merge-with-conflict
---

我们在项目多人协同开发的时候，merge 小伙伴的代码，经常会出现 conflict, 使用 git 自带的工具来解决 conflict 在冲突比较少的情况下挺好用的，但是，在 conflict 很多的时候，我们还是使用 GUI 工具会比较好。

使用 FileMerge 的 opendiff 就是一个不错的选择，首先，我们在 .gitconfig 加上

```
[merge]
    tool = opendiff
[mergetool]
    keepBackup = false
```

上面的配置就是使用 opendiff 来作为 git 的 merge tool, 并且不保留冲突备份文件


解决冲突时，使用 `git mergetool` 来打开 FileMerge ，窗口分为上下两部分，其中上半部分又分为左右两部分，左上方是你本地的文件内容，右上方是要 merge 进来的文件内容，下方则是 merge 之后的文件内容，你可以选择左边的内容或右边的内容，也可以两边都选或者两边都不选，选择完想要的内容后，保存，然后退出 FileMerge 就可以了。 这个工具在解决大量冲突时相当有用。


![用FileMerge来解决冲突](http://ww3.sinaimg.cn/mw690/60ef0c80gw1eniudbsuwkj21400o90wv.jpg)


