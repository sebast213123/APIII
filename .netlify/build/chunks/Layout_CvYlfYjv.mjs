import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, j as renderHead, i as renderComponent, k as renderSlot } from './astro/server_CdF90MuS.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar " data-astro-cid-dmqpwcec> <div class="container-fluid" data-astro-cid-dmqpwcec> <a href="..pages\index.astro" data-astro-cid-dmqpwcec><span class="navbar-brand" data-astro-cid-dmqpwcec>Sebas Movies</span></a> </div>  </nav>`;
}, "C:/Users/user/Desktop/apiastro/src/components/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"><title>Astro Peliculas</title>${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <div class="container"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/user/Desktop/apiastro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
