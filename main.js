// v0.1 实现 vdom+dom渲染

// 创建一个div元素
// const dom = document.createElement('div');
// dom.id = 'app';
// document.querySelector('#root').appendChild(dom);
// // 创建一个文本节点
// const textNode = document.createTextNode("");
// textNode.nodeValue = 'app'
// dom.appendChild(textNode);

// v0.2 定义vdom的数据结构
const textEl = {
    type:"TEXT_ELEMENT",
    props:{
        nodeValue:"app",
        children: []
    }
}

const el = {
    type: 'div',
    props: {
        id: 'app',
        children: textEl
    }
}

const dom = document.createElement(el.type)
dom.id = el.props.id
document.querySelector('#root').appendChild(dom)

const textNode = document.createTextNode('');
textNode.nodeValue = textEl.props.nodeValue;
dom.appendChild(textNode);
