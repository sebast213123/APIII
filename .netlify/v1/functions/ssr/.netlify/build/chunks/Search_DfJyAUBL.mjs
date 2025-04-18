import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

function Search() {
  const [value, setValue] = useState("");
  const buscar = (e) => setValue(e.target.value);
  const url = "/results/";
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("center", { children: [
    /* @__PURE__ */ jsx("h1", { class: "mt-5", children: "Buscar" }),
    /* @__PURE__ */ jsx("form", { action: url + value, method: "POST", children: /* @__PURE__ */ jsx("input", { type: "search", class: "form-control p-3", value, onChange: buscar, placeholder: "Search" }) })
  ] }) });
}

export { Search as S };
