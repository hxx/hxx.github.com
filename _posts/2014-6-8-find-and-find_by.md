---
layout: post
title: find and find_by
---


  Active Record 提供很多查询方法用来从数据库中获取对象，这些方法都会返回一个 ActiveRecord::Relation 实例。

  <!--break-->

  Model.find(options) 方法执行的主要操作：

* 把指定的选项转换成等价的 SQL 查询语句；
* 执行 SQL 查询，从数据库中获取结果；
* 为每个查询结果实例化一个对应的模型对象；
* 如果有 after_find 回调，再执行 after_find 回调；

###find

使用 Model.find(primary_key) 方法可以获取指定主键对应的对象。

	如果未找到匹配的记录，Model.find(primary_key) 会抛出 ActiveRecord::RecordNotFound 异常。

###find_by

Model.find_by 获取满足条件的第一个记录。

	如果未找到匹配的记录，不会抛出异常，而是返回 nil 。

###find_by!

Model.find_by! 获取满足条件的第一个记录。

	如果没有找到匹配的记录，会抛出 ActiveRecord::RecordNotFound 异常。
