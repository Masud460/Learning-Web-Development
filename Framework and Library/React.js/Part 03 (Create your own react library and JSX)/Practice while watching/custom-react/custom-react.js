function customRender(reactElement, container) {
    /*
    const element = document.createElement(reactElement.type);
    element.setAttribute('href', reactElement.props.href)
    element.setAttribute("target", reactElement.props.target);
    element.innerHTML = reactElement.children
    container.appendChild(element)
    */
    
    // Moduler version
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // My turn
    // for (const prop in Object.entries(reactElement.props)) {
    //   if (true) {
    //       domElement.setAttribute(`${Object.keys(reactElement.props)[prop]}`, `${Object.values(reactElement.props)[prop]}`)
    //   }
    // }

    // Master's turn
    for (const prop in reactElement.props) {
        if (prop === reactElement.children) continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        console.log(prop)
        console.log(reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)