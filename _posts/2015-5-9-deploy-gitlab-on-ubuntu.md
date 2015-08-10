---
layout: post
title: Deploy GitLab on Ubuntu
---

参考文章：

* [Ubuntu 14.04 上使用 Nginx Passenger 部署 Ruby on Rails](https://github.com/ruby-china/ruby-china/wiki/Ubuntu-14.04-%E4%B8%8A%E4%BD%BF%E7%94%A8-Nginx-Passenger-%E9%83%A8%E7%BD%B2-Ruby-on-Rails)
* [Ruby on Rails 實戰聖經 —— 網站佈署](https://ihower.tw/rails4/deployment.html)
* [Installation from source](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/installation.md)

<!--break-->

## 安装 RVM 和 Ruby

更新 apt，并安装 curl：

```
sudo apt-get update
sudo apt-get install curl
```

然后安装 RVM：

```
\curl -sSL https://get.rvm.io | bash
```

RVM 安装完毕后，重新登陆 SSH，让 RVM 配置生效。然后安装 Ruby 1.9.3：

```
rvm use --install --default 1.9.3
```

Ruby 安装过程会请求 apt-get update 的权限，并自动安装系统依赖。安装完毕后，确认目前的 Ruby 版本：

```
ruby -v
```

应该看到 ruby 1.9.3 字样


## 安装 Passenger

[Passenger](https://www.phusionpassenger.com/) 是一个 app server，支持基于 Rack 框架的 Ruby app（包括 Rails）。Passenger 的特点是需要作为模块编译到 Nginx 中，优点是配置简单，不需要自己写启动脚本。

安装 Passenger 最简单的方法是通过 apt 安装，首先导入 Passenger 的密钥（[官方文档](https://www.phusionpassenger.com/documentation/Users%20guide%20Nginx.html#install_on_debian_ubuntu)）：

```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 561F9B9CAC40B2F7
```

安装 apt 插件以支持 https 传输：

```
sudo apt-get install apt-transport-https ca-certificates
```

编辑 /etc/apt/sources.list.d/passenger.list，添加 apt 源（对应 Ubuntu 12.04 LTS）：

```
# Ubuntu 12.04
deb https://oss-binaries.phusionpassenger.com/apt/passenger precise main
```

安装 Passenger 的包：

```
sudo apt-get install nginx-extras passenger
```

修改 nginx 配置，编辑 /etc/nginx/nginx.conf，找到这两行注释：

```
# passenger_root /usr/lib/ruby/vendor_ruby/phusion_passenger/locations.ini;
# passenger_ruby /usr/bin/ruby;
```

将它修改为：

```
passenger_root /usr/lib/ruby/vendor_ruby/phusion_passenger/locations.ini;
passenger_ruby /home/username/.rvm/wrappers/default/ruby;
```

这会打开 Passenger 支持，并且指定使用之前用 rvm 安装的 ruby 版本, 其中

passenger_root 可以通过以下指令获得：

```
passenger-config --root
```

passenger_ruby 可以通过以下指令获得：

```
passenger-config --ruby-command
```

[Using RVM rubies with Phusion Passenger](https://rvm.io/deployment/passenger)

## 安裝MySQL

安装 MySQL 相关的包：

```
sudo apt-get install mysql-common mysql-client libmysqlclient-dev mysql-server
```

安装 mysql2 这个 gem：

```
sudo gem install mysql2 --no-ri --no-rdoc
```

创建数据库：

```
mysql -u root -p
CREATE DATABASE gitlabhq_production CHARACTER SET utf8;
```

## 安装Redis

安装 redis 的包：

```
sudo apt-get install redis-server
```

启动 redis 服务器:

```
sudo service redis-server start
```


## GitLab

安装 git：

```
sudo apt-get install git-core
```

创建项目目录：

```
sudo mkdir -p /var/www/example.com
sudo chown -R username /var/www/example.com
```

clone GitLab 源代码：

```
cd /var/www/example.com
git clone https://github.com/gitlabhq/gitlabhq.git current
git checkout your-branch # 切换到你想要的分支
cd /var/www/example.com/current
```

复制 example 文件：

```
cp config/database.example.mysql config/database.yml
cp config/gitlab.yml.example config/gitlab.yml
cp config/unicorn.rb.example config/unicorn.rb
```

配置 config 文件：

* 把 datebase.yml 里的 username 和 password 改为你自己 mysql 对应的 username 和 password
* 把 gitlab.yml 里的 /Users/git 改为对应的 /Users/username

执行 bundle 来安装需要的 gem：

```
bundle install
```

执行 migrate：

```
RAILS_ENV=production rake db:create db:migrate
```

执行 assets:precompile

```
rake assets:precompile
```

##### 修改 Nginx 配置：

删除原有的默认网站配置：

```
sudo rm /etc/nginx/sites-enabled/default
```

新建网站配置：

```
sudo touch /etc/nginx/sites-enabled/example.com.conf
```

编辑 /etc/nginx/sites-enabled/example.com.conf，写入以下内容：

```
server {
    listen 80 default;
    server_name example.com; # 这里填写你真实域名
    root /var/www/example.com/current/public;
    passenger_enabled on;
}
```

重启 nginx：

```
sudo service nginx restart
```
