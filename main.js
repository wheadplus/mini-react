// v0.1 实现 vdom + dom渲染
// 创建一个div元素，并设置其id为"app"

// const dom  = document.createElement('div');
// dom.id = 'app';
// document.querySelector('#root').appendChild(dom);

// // 添加文本内容
// // 创建一个文本节点，并设置其内容为"Hello, mini-react!"
// const textNode = document.createTextNode('Hello, mini-react!');
// dom.appendChild(textNode);

// v0.2 react的 vdom -> js Object
// const textEl = {
//     type:"TEXT_ELEMENT",
//     props:{
//         nodeValue:"app",
//         children:[]
//     }
// }
// const el = {
//     type:"div",
//     props:{
//         id:"app",
//         children:textEl
//     }
// }
// const dom = document.createElement(el.type)
// dom.id = el.props.id
// document.querySelector('#root').appendChild(dom)

// const textNode = document.createTextNode(textEl.props.nodeValue)
// dom.appendChild(textNode)


// v0.3 动态创建 vdom

function createTextEl(text) {
    return {
        type:"TEXT_ELEMENT",
        props:{
            nodeValue: text,
            children:[]
        }
    }
}
function createElement (type,props,...children) {
    return {
        type,
        props:{
            ...props, // 展开props
            children
        }
    }
}
// const textEl = createTextEl('app')
// const App = createElement('div',{id:"app"},textEl)

// const dom = document.createElement(App.type)
// dom.id = App.props.id
// document.querySelector('#root').appendChild(dom)

// const textNode = document.createTextNode('')
// textNode.nodeValue = textEl.props.nodeValue
// dom.appendChild(textNode)

// v4 动态创建dom 1. create 2. 设置props 3. 父级别append

// render 函数区分
function render(el,container) {
    const dom = el.type === 'TExT_ELEMENT' 
    ? document.createTextNode('') 
    : document.createElement(el.type)

    Object.keys(el.props).forEach(key => {
        if(key !== 'children') {
            dom[key] = el.props[key]
        }
    })

    const children = el.props.children || []
    children.forEach(child => {
        render(child,dom)
    })

    container.appendChild(dom)
}

const textEl = createTextEl('app')
const App = createElement('div',{id:"app"},textEl)

render(App,document.querySelector('#root'))