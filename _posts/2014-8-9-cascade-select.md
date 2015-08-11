---
layout: post
title: cascade_select
---

当有很多公司和对应的产品时，往往需要根据选择的公司，给出该公司对应的产品让用户选择，即所谓的 **级联选择**。

<!--break-->

我们可以使用 `grouped_collection_select` 配合 `JavaScript` 可以很容易将其实现：


<label for="company">公司：</label>
<select class="select required form-control" id="company_id" name="company[id]">
  <option value="1">Apple</option>
  <option value="2">Google</option>
</select>

<label for="prodcuts">产品：</label>
<select class="grouped_select required form-control" id="product_id" name="company[product_id]">
  <optgroup label="Apple">
    <option value="1">iPhone</option>
    <option value="2">iPad</option>
    <option value="3">Macbook Air</option>
    <option value="4">Macbook Pro</option>
  </optgroup>
  <optgroup label="Google">
    <option value="5">Nexus</option>
    <option value="6">Map</option>
    <option value="7">Glass</option>
  </optgroup>
</select>



主要思路就是：先将要选择的产品按公司名进行分组，然后用 JavaScript 监听公司名的 change 事件，最后将当前公司的产品筛选出来并显示。

<label>产品未分组：</label>
<select class="required form-control">
  <option value="1">iPhone</option>
  <option value="2">iPad</option>
  <option value="3">Macbook Air</option>
  <option value="4">Macbook Pro</option>
  <option value="5">Nexus</option>
  <option value="6">Map</option>
  <option value="7">Glass</option>
</select>

<label>按公司名对产品进行分组：</label>
<select class="grouped_select required form-control">
  <optgroup label="Apple">
    <option value="1">iPhone</option>
    <option value="2">iPad</option>
    <option value="3">Macbook Air</option>
    <option value="4">Macbook Pro</option>
  </optgroup>
  <optgroup label="Google">
    <option value="5">Nexus</option>
    <option value="6">Map</option>
    <option value="7">Glass</option>
  </optgroup>
</select>
