import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CdF90MuS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CvYlfYjv.mjs';
import { S as Search } from '../../chunks/Search_DfJyAUBL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$search;
  const { search } = Astro2.params;
  const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4f9ac67415b83f1b906ece12e7e791a5&language=en-US&query=" + search + "&page=1&include_adult=false");
  const data = await response.json();
  const detail = "/detail/";
  const poster_url = "https://image.tmdb.org/t/p/w500/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Search.jsx", "client:component-export": "default" })} ${maybeRenderHead()}<div class="row"> ${data.results.map((item) => renderTemplate`<div class="col-lg-3"> <div class="card mt-4" style="width: 18 rem;"> <a${addAttribute(detail + item.id, "href")}> <img${addAttribute(poster_url + item.poster_path, "src")} alt="poster" class="card-img-top"> </a> <div class="card-body"> <h5 class="card-title">${item.title}</h5> </div> </div> </div>`)} </div> ` })}`;
}, "C:/Users/user/Desktop/apiastro/src/pages/results/[search].astro", void 0);

const $$file = "C:/Users/user/Desktop/apiastro/src/pages/results/[search].astro";
const $$url = "/results/[search]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$search,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
