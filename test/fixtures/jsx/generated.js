let _tmpl;

const tmpl1 = html`<div>{text}</div>`;
const tmpl2 = htmlScopeless`<div>{text}</div>`;
const tmpl3 = (_tmpl = [{
  type: "div",
  children: [{
    type: "#text",
    value: _ => _.text
  }]
}], _tmpl.vars = ["text"], _tmpl);
const expr = js`text`;