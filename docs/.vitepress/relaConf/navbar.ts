// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/", // 表示docs/index.md
  },
  {
    text: "个人成长",
    items: [
      {
        text: "大江南北游记",
        link: "/column/Travel/", // 表示docs/column/Travel/index.md
      },
      {
        text: "所思·所想",
        link: "/column/Growing/", // 表示docs/column/Growing/index.md
      },
    ],
  },
  {
    text: '前端开发',
    items: [
      {
        text: '数据结构与算法',
        link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
      }
    ]
  },
  {
    text: "关于我",
    items: [
      { text: "Github", link: "https://github.com/coderz29" },
      {
        text: "掘金",
        link: "https://juejin.cn/user/3193447119332029",
      },
      {
        text: "小破站",
        link: "https://space.bilibili.com/262148860",
      },
    ],
  },
];

export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  "/column/Algorithm/": [
    // 第一部分
    {
      text: "栈和队列",
      items: [
        {
          text: "栈-深拷贝和浅拷贝",
          link: "/column/Algorithm/001_Stack",
        },
        {
          text: "队列-事件循环",
          link: "/column/Algorithm/002_Queue",
        },
      ],
    },
    // 第二部分
    {
      text: "字典和树",
      items: [
        {
          text: "字典和集合-Set和Map",
          link: "/column/Algorithm/003_Dictionary",
        },
        {
          text: "树-深/广度优先遍历",
          link: "/column/Algorithm/004_Tree",
        },
      ],
    },
  ],
  "/column/views": [
    {
      text: "vue",
      items: [
        {
          text: "diff算法",
          link: "/column/views/guide",
        }
      ],
    },
  ],
};
