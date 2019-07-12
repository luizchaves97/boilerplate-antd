module.exports = {
  siteName: 'AntD Admin',
  copyright: 'Ant Design Admin  ©2019 zuiidea',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  fixedHeader: true,

  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/\/login/],
    },
  ],
};
