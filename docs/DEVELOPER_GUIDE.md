# 1Do Book Developer Guide

这份文档面向维护 `1do-book` 内容和前端结构的开发者。

## What This Repo Owns

- 1Do 官方文档站前端
- 双语文档内容的数据结构
- 文档导航、搜索、目录和语言切换
- 品牌相关静态资源

这个仓库当前不负责：

- 从外部 CMS 拉取内容
- MDX 编译链路
- `1do-core` / `1do-store` 合约或业务逻辑源码

## Main Content Source

当前文档内容统一维护在 [src/lib/docs.ts](/home/xiang/1do/1do-book/src/lib/docs.ts)。

这里同时定义了：

- 站点级文案 `siteCopy`
- 外链配置 `externalLinks`
- 首页展示卡片 `showcaseCards`
- 双语文档数据 `docsByLocale`
- 左侧导航分组 `docGroups`
- 站点展示顺序 `docOrder`

## Update Flow

### Update an existing document

1. 找到 [src/lib/docs.ts](/home/xiang/1do/1do-book/src/lib/docs.ts) 中对应的 `slug`
2. 同步修改 `zh` 和 `en` 两份页面内容
3. 如果只改一端语言，至少确认另一端不会因为结构不对齐导致切换体验异常

### Add a new document

1. 在 `docsByLocale.zh` 新增页面
2. 在 `docsByLocale.en` 新增同 `slug` 页面
3. 选择已有 `group`
4. 把 `slug` 加入 `docOrder.zh`
5. 把 `slug` 加入 `docOrder.en`
6. 如有配图，把资源放到 `public/diagrams` 或 `public/apps`

如果漏掉第 4 步或第 5 步，页面虽然定义存在，但不会被 `getDocs()` 收录到站点导航和静态参数里。

## Content Model

`DocPage` 由这些核心字段组成：

- `slug`: URL 标识，中英文必须一致
- `group`: 文档分组，当前使用 `start`、`platform`、`ecosystem`、`ecosystem-dev`、`integrator`
- `title`
- `summary`
- `eyebrow`
- `hero`
- `sections`

`DocSection` 当前支持：

- `paragraphs`: 普通段落
- `bullets`: 无序列表
- `steps`: 流程步骤卡片
- `cards`: 文档卡片或跳转卡片
- `links`: 行内链接按钮
- `visuals`: 图片与图注
- `code`: 代码块
- `callout`: 提示信息

正文渲染组件在 [src/components/doc-content.tsx](/home/xiang/1do/1do-book/src/components/doc-content.tsx)。

## Navigation And Search

- 左侧导航来自 `docGroups + getDocs()`
- 上下篇跳转来自 `getAdjacentDocs()`
- 文档列表搜索在 [src/components/docs-search.tsx](/home/xiang/1do/1do-book/src/components/docs-search.tsx)
- 全局搜索弹层在 [src/components/global-search.tsx](/home/xiang/1do/1do-book/src/components/global-search.tsx)

搜索文本目前会扫描：

- `title`
- `summary`
- `hero`
- section 标题
- section 段落、列表、步骤、卡片文本

这意味着新增内容后不需要额外维护索引。

## Route Rules

- `/` 重定向到 `/zh`
- `/docs` 重定向到 `/zh/docs`
- `/docs/[slug]` 重定向到 `/zh/docs/[slug]`
- 多语言正文路径统一为 `/[locale]/docs/[slug]`

相关路由文件：

- [src/app/page.tsx](/home/xiang/1do/1do-book/src/app/page.tsx)
- [src/app/docs/page.tsx](/home/xiang/1do/1do-book/src/app/docs/page.tsx)
- [src/app/docs/[slug]/page.tsx](/home/xiang/1do/1do-book/src/app/docs/[slug]/page.tsx)
- [src/app/[locale]/docs/page.tsx](/home/xiang/1do/1do-book/src/app/[locale]/docs/page.tsx)
- [src/app/[locale]/docs/[slug]/page.tsx](/home/xiang/1do/1do-book/src/app/[locale]/docs/[slug]/page.tsx)

## Static Assets

静态资源主要放在：

- `public/apps`: 应用图标
- `public/diagrams`: 架构图和流程图
- `public/fonts`: 自托管字体

新增图片时，优先保持现有命名风格，避免把外部来源文件名直接原样带进仓库。

## Verification

提交前至少执行：

```bash
npm run lint
npm run build
```

本地预览：

```bash
npm run dev
```

重点检查：

- 中英文路径是否都能打开
- 新页面是否进入左侧导航
- 语言切换是否跳到同 `slug`
- 搜索是否能检索到新内容
- 图片路径是否正确

## Editing Guidance

- 优先保持 `zh` / `en` 结构对齐
- 产品事实以 `1do-core` / `1do-store` 当前代码和文档为准
- 当前仓库更适合维护“已整理后的稳定说明”，不要把临时实验结论直接写成正式文案
- 如果内容量继续增大，再评估是否迁移到 “导航用 TS，正文用 MDX” 的混合模式
