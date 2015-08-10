---
layout: post
title: render partial
---

	{% highlight ruby %}
	<%= render :partial => "pics_list", {:locals => {:pics => @pics_voted_by_me}} %>
	
	<%= render "pics_list", pics: @pics_voted_by_me %>
	{% endhighlight %}

上面的两行代码效果是一样的，下面那行的写法显然要简洁的多。

我们来看看 render 的定义：
	
	{% highlight ruby %}
	# File actionview/lib/action_view/renderer/renderer.rb, line 19
	def render(context, options)
  	  if options.key?(:partial)
    	render_partial(context, options)
      else
        render_template(context, options)
      end
    end
    {% endhighlight %}

我们可以看到 render 接受一个 **Hash** 参数，这个 Hash 的键可以是 partial ，值是传给 partial 的参数，比如我们把 controller 里的实例变量 @pics_voted_by_me 传给 pics ，然后就可以在 _pics_voted_by_me 这个 partial 里使用 pics 来代替实例变量 @pics_voted_by_me 
	



