// v0.1 实现 vdom+dom渲染

// 创建一个div元素
const dom = document.createElement('div');
dom.id = 'app';
document.querySelector('#root').appendChild(dom);
// 创建一个文本节点
const textNode = document.createTextNode("");
textNode.nodeValue = 'app'
dom.appendChild(textNode);