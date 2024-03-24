// v0.3 动态创建vdom
function createTextNode(value) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: value,
            children: []
        }
    }
}
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                return typeof child === 'string' ? createTextNode(child) : child;
            })
        }
    }    
}


// v0.4 写死的渲染dom改成函数，动态生成
function render(el, container) {
    const dom = el.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(el.type);
    Object.keys(el.props).forEach(key => {
        if (key !== 'children') {
            dom[key] = el.props[key];
        }
    })
    const children = el.props.children || [];
    children.forEach(child => {
        render(child, dom)
    })
    container.appendChild(dom);
}

const ReactDOM = {
    createRoot(container) {
        return {
            render(App) {
                render(App, container);
            }
        }
    }
}

const app = createElement('div', { id: 'app' }, 'hihi ', 'mini-react');

ReactDOM.createRoot(document.getElementById('root')).render(app);
