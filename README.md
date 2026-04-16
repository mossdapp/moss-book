# 1do Book

1do Book 是 1do 的独立文档站仓库，目标首先是帮助普通用户理解 1do 是什么、怎么开始、应用如何安装以及为什么应用会回到账户里使用。站点基于 `Next.js App Router` 构建，当前采用 `TypeScript` 内容源直接驱动页面，而不是 MDX 或 CMS。

## Current Model

- 文档内容集中维护在 `src/lib/docs.ts`
- 叙事优先服务普通用户建立产品心智模型，再承接开发和集成说明
- 当前支持 `zh` / `en` 双语路由
- 首页、文档列表、文档详情页都由静态数据直接生成
- 搜索、侧边导航、目录导航都基于同一份文档数据工作
- 旧路径 `/docs` 和 `/docs/[slug]` 会重定向到中文路径

## Project Structure

- `src/app/`
  - `page.tsx`: 根路径重定向到 `/zh`
  - `[locale]/page.tsx`: 多语言首页
  - `[locale]/docs/page.tsx`: 文档索引页
  - `[locale]/docs/[slug]/page.tsx`: 文档详情页
  - `docs/page.tsx` / `docs/[slug]/page.tsx`: 旧文档路径兼容重定向
- `src/components/`
  - `site-header.tsx`: 顶部导航、语言切换、全站搜索入口
  - `docs-sidebar.tsx`: 左侧导航
  - `docs-search.tsx`: 文档列表页搜索
  - `global-search.tsx`: 全局搜索弹层
  - `doc-content.tsx`: 正文渲染
  - `docs-toc.tsx`: 文档页目录
- `src/lib/`
  - `docs.ts`: 站点文案、文档定义、分组、排序、相邻导航
  - `i18n.ts`: locale 定义与语言切换辅助
- `public/`
  - 应用图标、流程图、品牌图标、字体与站点图标资源

## Routes

- `/` -> `/zh`
- `/docs` -> `/zh/docs`
- `/docs/[slug]` -> `/zh/docs/[slug]`
- `/[locale]`
- `/[locale]/docs`
- `/[locale]/docs/[slug]`

## Development

```bash
npm install
npm run dev
```

默认启动地址为 `http://localhost:3000`。

其他常用命令：

```bash
npm run lint
npm run build
npm run start
```

## Content Workflow

### Update an existing page

直接修改 `src/lib/docs.ts` 中对应 locale 的文档定义。

### Add a new page

1. 在 `docsByLocale.zh` 和 `docsByLocale.en` 中各新增一份页面对象
2. 保持两种语言使用相同 `slug`
3. 为页面选择已有 `group`
4. 把 `slug` 加入 `docOrder.zh` 和 `docOrder.en`
5. 如果需要插图或图标，把资源放到 `public/diagrams` 或 `public/apps`

### Add or update page sections

`DocSection` 当前支持这些内容块：

- `paragraphs`
- `bullets`
- `steps`
- `cards`
- `links`
- `visuals`
- `code`
- `callout`

## Maintenance Notes

- `getDocs()` 会按 `docOrder` 过滤和排序，未进入排序表的页面不会出现在站点导航中
- 搜索索引来自文档标题、摘要、hero 和 section 文本，不需要额外维护搜索数据
- 语言切换依赖相同 `slug`，因此中英文页面必须保持 slug 对齐
- 当前内容模型仍在快速迭代，继续使用 `TS 数据驱动` 比引入 MDX 更稳妥

更多维护细节见 [docs/DEVELOPER_GUIDE.md](/home/xiang/1do/1do-book/docs/DEVELOPER_GUIDE.md) 和 [docs/PROJECT_STRUCTURE.md](/home/xiang/1do/1do-book/docs/PROJECT_STRUCTURE.md)。
