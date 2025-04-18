
				import createSSRHandler from './.netlify/build/entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = {
					includedFiles: ['**/*'],
					name: 'Astro SSR',
					nodeBundler: 'none',
					generator: '@astrojs/netlify@6.2.6',
					path: '/*',
					preferStatic: true,
				};
			