
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 12461, hash: 'f7c6e567b47cb8bd8c83815387adfbec10cc196d57780bc0609cd702d1dcbfdc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8160, hash: '729350287e8a1a112fe2430e4e92776663369e61e7c2eb8b76984db346a061ae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NVYROWJG.css': {size: 232152, hash: 'UDv4gWw73zY', text: () => import('./assets-chunks/styles-NVYROWJG_css.mjs').then(m => m.default)}
  },
};
