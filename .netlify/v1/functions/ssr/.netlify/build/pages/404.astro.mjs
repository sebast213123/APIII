import { e as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CdF90MuS.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>Esta pagina es incorrecta</h1>`;
}, "C:/Users/user/Desktop/apiastro/src/pages/404.astro", void 0);

const $$file = "C:/Users/user/Desktop/apiastro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
