import { defineConfig } from 'vitepress'
import { nav,sidebar } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "叁锋的小记",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/avatar.jpg",
    nav: nav,
    sidebar: sidebar, // 把定义的sidebar给替换进来
     outline: {
      level: [2, 6],
      label: '目录'
    },
    i18nRouting: true,
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
