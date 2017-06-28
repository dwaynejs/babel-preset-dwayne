let _tmpl;

const tmpl1 = (_tmpl = [{
  type: "div",
  children: [{
    type: "#text",
    value: _ => _.text
  }]
}], _tmpl.vars = ["text"], _tmpl);
const tmpl2 = htmlScopeless`<div>{text}</div>`;
const tmpl3 = <div>{text}</div>;
const expr = js`text`;