const root = document.getElementById('root');
function customRender(element, container) {
    const Element = document.createElement(element.type);
    Element.innerHTML = element.children;

    /*
    Element.setAttribute('href', element.props.href);
    Element.setAttribute('target', element.props.target);
    */
    
   //Optimized way
   for (let i = 0; i < Object.keys(element.props).length; i++){
        let props = Object.keys(element.props)[i];
       let value = Object.values(element.props)[i];
       console.log(props, value)
        Element.setAttribute(
          `${props}`,
          `${value}`
        );
    }

    container.appendChild(Element)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://youtube.com",
        target: "_blank"
    },
    children: "Open YouTube"
}

customRender(reactElement, root);