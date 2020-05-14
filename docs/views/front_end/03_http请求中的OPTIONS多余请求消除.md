---
title: http请求中的OPTIONS多余请求消除
date: 2020-5-14 23:57:44
sidebar: true
categories:
 - 前端
tags:
 - 前端
isShowComments: true
---

[[toc]]

## 问题

项目中遇到发送同样的请求2次，仔细看了一下，有个是options报文。

HTTP请求翻一倍，对服务器的性能有较大影响，造成无畏消耗，需要消除它。

## 解决思路

1、options报文的起因   https://blog.csdn.net/qq_37054881/article/details/89707204

2、跨域，自定义head， 非标准的content type  

3、 经过分析，网站地址为m.xxx.com  访问接口用了www域名： www.xxx.com/api，导致了跨域；自定义head等问题是跨域之后衍生出来的问题

## 解决方案：
   
将网站调用的接口修改为m.xxx.com/api，就消除了跨域情况


