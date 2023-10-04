module.exports = {
  outputDir: "../src/main/resources/static",
  indexPath: "../static/index.html",
  devServer: {
    // overlay: false,
    historyApiFallback: true,
    proxy: {
      "/": {
        // target: "http://129.154.213.191:3000", // Spring boot의 주소 및 포트
        target: "http://127.0.0.1:9000", // 로컬 node 서버
        pathRewrite: { "^/": "" },
        changeOrigin: true,
        ws: false,
      },
    },
  },
};
