// v0.3 动态创建vdom
function createTextElement(value) {
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
            children
        }
    }    
}

const textEl = createTextElement('app');
const app = createElement('div', { id: 'root' }, textEl);

const dom = document.createElement(app.type)
dom.id = app.props.id
document.querySelector('#root').appendChild(dom)

const textNode = document.createTextNode('');
textNode.nodeValue = textEl.props.nodeValue;
dom.appendChild(textNode);