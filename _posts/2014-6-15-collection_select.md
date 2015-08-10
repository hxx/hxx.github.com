---
layout: post
title: collection_select
---


上次用到 collection_select 的时候不是很理解它的参数，现在在回过头来看 [RailsGuides](http://guides.rubyonrails.org/) 的时候，感觉理解的好些了，记录下来：

<!--break-->

	{% highlight ruby %}
	collection_select(method, collection, value_method, text_method, options = {}, html_options = {})
	{% endhighlight %}

上面是Rails API 里对 collection_select 方法的定义

而 collection_select 的作用则是为 object 类的 method 方法返回的集合创建 select 和 option 标签

比如有以下模型：

	{% highlight ruby %}
	   class Article < ActiveRecord::Base
  	  belongs_to :author
	end
	{% endhighlight %}

	{% highlight ruby %}
	   class Author < ActiveRecord::Base
      has_many :articles
  	  def name_with_initial
  	    "#{first_name.first}. #{last_name}"
  	  end
	end
	{% endhighlight %}


我们在为文章实例（@article）选择作者（Author）：

	{% highlight ruby %}
	collection_select(:article, :author_id, Author.all, :id, :name_with_initial, {prompt: true})
	{% endhighlight %}


如果Author有3个人，且 @article.author_id 的值是 1，上述代码生成的 HTML 如下：

	{% highlight html %}
	   <select name="article[author_id]">
	  <option value="">Please select</option>
  	  <option value="1" selected="selected">D. Heinemeier Hansson</option>
  	  <option value="2">D. Thomas</option>
  	  <option value="3">M. Clark</option>
	</select>
	{% endhighlight %}

就会生成下面这样一个 collection_select:

<select name="article[author_id]">
 <option value="">Please select</option>
 <option value="1" selected="selected">D. Heinemeier Hansson</option>
 <option value="2">D. Thomas</option>
 <option value="3">M. Clark</option>
</select>
