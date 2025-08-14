const root = document.getElementById("root");
const reactElement = {
  type: "a",
  props: {
    href: "https://youtube.com",
    target: "_blank",
  },
  children: "Open YouTube",
};
function customRender(element, container) {
  const Element = document.createElement(element.type);
    Element.innerHTML = element.children;
    
  //   Element.setAttribute("href", "https://youtube.com");
  //   Element.setAttribute("target", "_blank");

    Object.keys(element.props).forEach(prop => {
        console.log(prop);
        Element.setAttribute(prop, element.props[prop])
    })
  container.appendChild(Element);
}

customRender(reactElement, root);
