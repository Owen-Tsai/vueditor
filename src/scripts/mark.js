let md = require('markdown-it')(),
  mk = require('markdown-it-katex');

md.use(mk);

export default md;