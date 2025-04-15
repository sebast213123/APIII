import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CdF90MuS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CvYlfYjv.mjs';
import 'clsx';
import { S as Search } from '../chunks/Search_DfJyAUBL.mjs';
export { renderers } from '../renderers.mjs';

const $$Movies = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4f9ac67415b83f1b906ece12e7e791a5&language=en-US&page=1"
  );
  const data = await response.json();
  const detail = "/detail/";
  const poster_url = "https://image.tmdb.org/t/p/w500/";
  return renderTemplate`${maybeRenderHead()}<div class="row"> ${data.results.map((item) => renderTemplate`<div class="col-lg-3"> <div class="card mt-4" style="width: 18 rem;"> <a${addAttribute(detail + item.id, "href")}> <img${addAttribute(poster_url + item.poster_path, "src")} alt="poster" class="card-img-top"> </a> <div class="card-body"> <h5 class="card-title">${item.title}</h5> </div> </div> </div>`)} </div>`;
}, "C:/Users/user/Desktop/apiastro/src/components/Movies.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Search.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Movies", $$Movies, {})} ` })}`;
}, "C:/Users/user/Desktop/apiastro/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/Desktop/apiastro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
