import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CdF90MuS.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CvYlfYjv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/" + id + "?api_key=4f9ac67415b83f1b906ece12e7e791a5&language=en-US"
  );
  const data = await response.json();
  const poster_url = "https://image.tmdb.org/t/p/w500/";
  const fetchVideo = await fetch(
    "https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=4f9ac67415b83f1b906ece12e7e791a5&language=en-US"
  );
  const trailer = await fetchVideo.json();
  const res = trailer.results.filter((p) => p.type === "Trailer");
  const video = res[0];
  const youtube = "https://www.youtube.com/embed/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="row mt-5"> <div class="col-md-4"> <img${addAttribute(poster_url + data.poster_path, "src")} alt="poster" class="img-fluid rounded-start"> </div> <div class="col-md-8"> <h1><span class="badge text-bg-dark">${data.title}</span></h1> <h4>${data.tagline}</h4> <h2>Sinópsis</h2> <p>${data.overview}</p> <p><span class="badge text-bg-secondary">${data.release_date}</span></p> <h1> <span class="badge text-bg-danger">${Math.round(data.vote_average)}</span> </h1> </div> </div> <h1>Trailer</h1> <iframe${addAttribute(youtube + video.key, "src")} width="1280" height="720" frameborder="0" allowfullscreen></iframe> ` })}`;
}, "C:/Users/user/Desktop/apiastro/src/pages/detail/[id].astro", void 0);

const $$file = "C:/Users/user/Desktop/apiastro/src/pages/detail/[id].astro";
const $$url = "/detail/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
