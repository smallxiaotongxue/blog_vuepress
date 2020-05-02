---
title: 如何减少代码中的if-else
date: 2020-5-2 18:41:38
sidebar: true
categories:
 - 前端
tags:
 - 前端
isShowComments: true
---

[[toc]]

## 如何减少代码中的if-else

当页面遇到逻辑时，往往我们会使用if-else来进行判断，但是如果if-else过多，反而会影响代码的逻辑性，以及不够优雅如何进行处理呢？

## if-else 对比 switch

当判断条件数量越来越多时，越倾向于使用 switch 而不是 if-else。

```javascript
if (color === 'blue') {

} else if (color === 'yellow') {

} else if (color === 'white') {

} else if (color === 'black') {

} else if (color === 'green') {

} else if (color === 'orange') {

} else if (color === 'pink') {

}

switch (color) {
    case 'blue':

        break;
    case 'yellow':

        break;
    case 'white':

        break;
    case 'black':

        break;
    case 'green':

        break;
    case 'orange':

        break;
    case 'pink':

        break;
}
```

## 查找表

当条件语句特别多时，使用 switch 和 if-else 不是最佳的选择，这时不妨试一下查找表。查找表可以使用数组和对象来构建。

```javascript
switch (index) {
    case '0':
        return result0
    case '1':
        return result1
    case '2':
        return result2
    case '3':
        return result3
    case '4':
        return result4
    case '5':
        return result5
    case '6':
        return result6
    case '7':
        return result7
    case '8':
        return result8
    case '9':
        return result9
    case '10':
        return result10
    case '11':
        return result11
}
```

可以将这个 switch 语句转换为查找表
```javascript

const results = [result0,result1,result2,result3,result4,result5,result6,result7,result8,result9,result10,result11]

return results[index]

```

如果条件语句不是数值而是字符串，可以用对象来建立查找表

```javascript

const map = {
  red: result0,
  green: result1,
}

return map[color]

```


