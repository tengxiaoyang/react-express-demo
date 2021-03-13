const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  fixBabelImports(
    'import', 
    {
      libraryName: 'antd-mobile',
      libraryDirectory: "es",
      style: 'css'
    } //antd按需加载
  ),
  addDecoratorsLegacy() //配置装饰器
);