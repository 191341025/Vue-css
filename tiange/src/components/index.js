// import Vue from 'vue'
//
// const manageFiles = require.context(".",true,/\.vue$/);
//
// manageFiles.keys().forEach(key => {
//   const commonComponent = manageFiles(key).default;
//   Vue.component(commonComponent.name, commonComponent);
// })

import Vue from 'vue'

const managerFiles = require.context('.',true,/\.vue$/);

managerFiles.keys().forEach(key => {
  const commonComponent = managerFiles(key).default;
  Vue.component(commonComponent.name,commonComponent)
})
