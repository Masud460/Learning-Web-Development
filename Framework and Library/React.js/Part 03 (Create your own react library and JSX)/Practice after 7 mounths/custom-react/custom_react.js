function customRender(reactElement, root) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerText = reactElement.children;
    for (prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit google'
}
const root = document.getElementById("root");
customRender(reactElement, root)