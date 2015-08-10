---
layout: post
title: partial in rails
---


###Partials
Partial templates - usually just called "partials" - are another device for breaking the rendering process into more manageable chunks. With partials, you can extract pieces of code from your templates to separate files and also reuse them throughout your templates.

	{% highlight ruby %}
	# will pull in the partial from app/views/shared/_menu.html.erb.
	<%= render "menu" %> will render a file named _menu.html.erb
	{% endhighlight %}

	
以上是 [RailsGuides](http://guides.rubyonrails.org/action_view_overview.html#partials) 里关于 **partial** 的一些介绍

今天收获的知识点是，如果使用 render partial 的话会只渲染局部视图的那一段 HTML 代码，不会重新载入整个页面（包括 HEAD 和 assets 等），并且 **partial** 可以在所有模板中重复使用。



