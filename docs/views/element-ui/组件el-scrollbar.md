---
title: element-ui的隐藏组件el-scrollbar
date: 2020-4-15 21:05:31
sidebar: true
categories:
 - element-ui
tags:
 - element-ui
isShowComments: false
---

[[toc]]
### 关于el-scrollbar
官方文档中没有给出这个组件，但是在源码中包含了，我们也可以直接使用。


```vue
<!--一种情况用于高度100%自适应：-->
<el-scrollbar class='page-component__scroll'>
    <div class="box">123</div>
</el-scrollbar>
```

```scss
.page-component__scroll {
  height:100%;
  
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
```

