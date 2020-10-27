module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Supplycart';
      return args;
    });
  },
  pwa: {
    name: 'Supply Cart',
    themeColor: '#38a169',
    msTileColor: '#38a169',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    iconPaths: {
      favicon32: 'img/icons/icon.png',
      favicon16: 'img/icons/icon.png',
      appleTouchIcon: 'img/icons/icon.png',
      maskIcon: 'img/icons/icon.png',
      msTileImage: 'img/icons/icon.png',
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/registerServiceWorker.js',
    },
  },
};
