---
layout: post
title: render partial again
---

默认情况下， ActionView::Partials::PartialRenderer 对象存在一个本地变量中，变量名和模板名相同。

<!--break-->

	{% highlight ruby %}
	<%= render partial: "product" %>

	<%= render partial: "product", locals: {product: @product} %>
	{% endhighlight %}

上面两行代码都可以在 _product.html.erb 中使用本地变量 product 表示 @product


####as 选项可以为这个本地变量指定一个不同的名字，例如，用 item 代替 product


	{% highlight ruby %}
	<%= render partial: "product", as: "item" %>
	{% endhighlight %}

代替

	{% highlight ruby %}
	<%= render partial: "product", locals: {item: @product}%>
	{% endhighlight %}

####object 选项则可以为本地变量指定一个不同的对象，例如，用 @item 代替 @product

	{% highlight ruby %}
	<%= render partial: "product", object: @item %>
	{% endhighlight %}

代替

	{% highlight ruby %}
	<%= render partial: "product", locals: {product: @item} %>
	{% endhighlight %}

####另外，as 和 object 还可以同时使用

	{% highlight ruby %}
	<%= render partial: "product", as: "item", object: @item %>
	{% endhighlight %}
