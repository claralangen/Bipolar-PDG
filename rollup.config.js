import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import url from 'rollup-plugin-url';
import sass from 'rollup-plugin-sass';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/js/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		sass(),
		url({
		      limit: 10 * 1024, // inline files < 10k, copy files > 10k
		      include: ["*/**.svg","*/**.png","**/.jpg","/*.mov","/.gif","**/.mp3","**/*.mp4","*/**.wav"], // defaults to .svg, .png, .jpg and .gif files
		      emitFiles: true // defaults to true
		    }),

		production && uglify() // minify, but only in production
	]
};
