---
layout: post
title: Ajax with FormData
---

年前的项目有个 Form 表格带有附件，无法使用 Rails 自带的 `remote: true` 来使用 Ajax 来提交表格，而直接提交表格会导致页面跳转，影响用户体验，这时，发现了 XMLHttpRequest Level 2 添加的一个新的接口 [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) ，而使用 `FormData` 的最大优点就是我们可以异步上传一个二进制文件

<!--break-->

使用 jQuery 来发送 FormData 要注意正确的设置相关选项，记得添加

{% highlight javascript %}
processData: false,  // 告诉jQuery不要去处理发送的数据
contentType: false   // 告诉jQuery不要去设置Content-Type请求头
{% endhighlight %}

最后，就是把上传的多个文件，从 attachments_attributes 里的数组转成哈希

{% highlight ruby %}
attachments_attributes[:file].each do |file|
  quotation_attributes["attachments_attributes"] << { file: file }.with_indifferent_access
end
{% endhighlight %}

这样就可以使用 `FormData` 实现异步提交带附件的表格了
