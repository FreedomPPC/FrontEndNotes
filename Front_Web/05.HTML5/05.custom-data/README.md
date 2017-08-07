### H5自定义属性
```html
<div class="name" data-birth-date='666'>
  Nina
</div>
```

### 如何设置属性
```javascript
var girl = document.getElementsByClassName('name');
//区data-*后面的字段，
//读取
console.log(girl.dataset.birthDate);
//设置
girl.dataset.birthDate = '1992-06-26';
//或
girl.setAttribute('data-birth-date','1992-06-26');
```

### css选择器
```css
[data-birth-date]{
  width: 100px;
  height: 100px;
  background: #fcc;
}
```
