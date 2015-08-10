---
layout: post
title: attr_accessor
---

In Ruby, individual accessor and mutator methods may be defined, or the metaprogramming constructs `attr_reader` or `attr_accessor` may be used both to declare a private variable in a class and to provide either read-only or read-write public access to it respectively.

<!--break-->

Defining individual accessor and mutator methods creates space for pre-processing or validation of the data

    {% highlight ruby %}
      class Student
        def name
          @name
        end

        def name=(value)
          @name=value
        end
      end
    {% endhighlight %}

Read-only simple public access to implied @name variable

    {% highlight ruby %}
      class Student
        attr_reader :name
      end
    {% endhighlight %}

Write-only simple public access to implied @name variable

    {% highlight ruby %}
      class Student
        attr_writer :name
      end
    {% endhighlight %}

Read-write simple public access to implied @name variable

    {% highlight ruby %}
      class Student
        attr_accessor :name
      end
    {% endhighlight %}
