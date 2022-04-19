const Koa = require("koa");
const Router = require("koa-router");
const port = 3000;
const app = new Koa();
const router = new Router();

router.get("/index", (ctx) => {
  ctx.body = "<h1>Index sayfasina hoşgeldiniz.</h1>";
  ctx.status = 200;
});
router.get("/hakkimda", (ctx) => {
  ctx.body = "<h1>Hakkimda sayfasina hoşgeldiniz.</h1>";
  ctx.status = 200;
});
router.get("/iletisim", (ctx) => {
  ctx.body = "<h1>İletişim sayfasina hoşgeldiniz.</h1>";
  ctx.status = 200;
});
app.use(router.routes());

app.listen(port, () => {
  console.log(`Server ${port} Portunda Çalişiyor.`);
});
