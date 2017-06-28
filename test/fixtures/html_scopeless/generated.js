const tmpl1 = html`<div>{text}</div>`;
const tmpl2 = [{
  type: "div",
  children: [{
    type: "#text",
    value: () => text
  }]
}];
const tmpl3 = <div>{text}</div>;
const expr = js`text`;