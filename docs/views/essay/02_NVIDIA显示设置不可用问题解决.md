---
title: NVIDIA显示设置不可用问题解决
date: 2018-06-04 22:48:39
sidebar: true
tags: 硬件问题
categories: 电脑问题
---

## 问题

为了愉快的玩上吃鸡游戏，绝地求生:刺激战场，室友忍痛买了新的台式机电脑，买了之后自然是很高兴啊。但是最近发现室友频频吐槽电脑玩吃鸡游戏时有卡顿的现象，一开始我也没有太在意，一定是xxx太多了的原因。

## 偶然

由于室友太卡，导致我们无法winner winner chicken dinner，游戏活动结束后，我觉得，刚买的电脑不可能这么卡才对，于是去看一下他电脑的设置。

一开始以为是显卡驱动异常，发现显卡驱动没有问题。

然后用鲁大师去扫分，硬件也没有问题。

由于卡顿的原因一般是由于性能不够导致的，不是内存，就是CPU，不然就是显卡，于是想点右键查看NVIDIA显卡设置。结果报了这个错误。

![NVIDIA设置报错](/img/essay/NVIDIA显示设置不可用问题解决/NVIDIA设置.png)

## 解决

于是翻开主机，一查发现是显示接线居然没有接在显卡上，而是接在了主板上，由于游戏使用了CPU自带的集成显卡，没有使用独立显卡，才因此导致了这个问题，真是好气又好笑。

从此室友吃鸡再也没有卡过，实力突飞猛进，实力让我们躺鸡~

