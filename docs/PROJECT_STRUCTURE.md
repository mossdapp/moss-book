# Moss Book Project Structure

## Overview

`moss-book` 是一个使用 `Next.js 16`、`React 19`、`App Router` 和 `Tailwind CSS 4` 的双语文档站。

站点当前采用“路由组件 + TypeScript 内容源”的简单结构：

- 页面负责取出 locale 和文档数据
- 组件负责导航、搜索和正文渲染
- `src/lib/docs.ts` 作为唯一内容源

## Directory Layout

### `src/app`

- [src/app/layout.tsx](/home/xiang/moss/moss-book/src/app/layout.tsx)
  - 全局 `metadata`
  - 字体和 favicon 预加载
  - 全站背景容器
- [src/app/page.tsx](/home/xiang/moss/moss-book/src/app/page.tsx)
  - 根路径重定向到 `/zh`
- [src/app/docs/page.tsx](/home/xiang/moss/moss-book/src/app/docs/page.tsx)
  - 兼容旧文档入口，重定向到 `/zh/docs`
- [src/app/docs/[slug]/page.tsx](/home/xiang/moss/moss-book/src/app/docs/[slug]/page.tsx)
  - 兼容旧文档详情页，重定向到中文路径
- [src/app/[locale]/layout.tsx](/home/xiang/moss/moss-book/src/app/[locale]/layout.tsx)
  - 校验 locale
  - 挂载全局站点头部
- [src/app/[locale]/page.tsx](/home/xiang/moss/moss-book/src/app/[locale]/page.tsx)
  - 多语言首页
- [src/app/[locale]/docs/page.tsx](/home/xiang/moss/moss-book/src/app/[locale]/docs/page.tsx)
  - 文档列表页
- [src/app/[locale]/docs/[slug]/page.tsx](/home/xiang/moss/moss-book/src/app/[locale]/docs/[slug]/page.tsx)
  - 文档详情页

### `src/components`

- [src/components/site-header.tsx](/home/xiang/moss/moss-book/src/components/site-header.tsx)
  - 顶部导航、语言切换、全站搜索入口
- [src/components/global-search.tsx](/home/xiang/moss/moss-book/src/components/global-search.tsx)
  - `Ctrl/Command + K` 全局搜索弹层
- [src/components/docs-sidebar.tsx](/home/xiang/moss/moss-book/src/components/docs-sidebar.tsx)
  - 左侧分组导航
- [src/components/docs-search.tsx](/home/xiang/moss/moss-book/src/components/docs-search.tsx)
  - 文档索引页过滤搜索
- [src/components/doc-content.tsx](/home/xiang/moss/moss-book/src/components/doc-content.tsx)
  - 文档正文渲染器
- [src/components/docs-toc.tsx](/home/xiang/moss/moss-book/src/components/docs-toc.tsx)
  - 右侧章节目录
- [src/components/language-switcher.tsx](/home/xiang/moss/moss-book/src/components/language-switcher.tsx)
  - 中英文切换

### `src/lib`

- [src/lib/i18n.ts](/home/xiang/moss/moss-book/src/lib/i18n.ts)
  - `locales`
  - `isValidLocale`
  - `getOtherLocale`
- [src/lib/docs.ts](/home/xiang/moss/moss-book/src/lib/docs.ts)
  - 文档类型定义
  - 站点文案
  - 双语内容数据
  - 文档分组与排序
  - 页面查询辅助函数

### `public`

- `public/apps`: 应用图标
- `public/diagrams`: 文档插图和流程图
- `public/fonts`: 自托管字体
- 站点图标、manifest、品牌图标

## Rendering Model

首页、列表页和详情页都不是从文件系统扫描 Markdown，而是直接调用内容函数：

- `getDocs(locale)`
- `getDocBySlug(locale, slug)`
- `getAdjacentDocs(locale, slug)`

这使得：

- 页面结构更可控
- 双语内容更容易保持对齐
- 搜索逻辑可以直接复用同一份对象数据

代价是：

- 内容规模继续增大后，`src/lib/docs.ts` 会越来越长
- 非开发者编辑门槛高于 MDX

## Ordering Rules

文档是否真正出现在站点中，不只取决于有没有写入 `docsByLocale`，还取决于是否进入 `docOrder`。

`getDocs()` 的行为是：

1. 根据 locale 读取对应排序表
2. 只保留排序表里声明过的 `slug`
3. 按排序表顺序输出页面

因此，新增页面时必须同步更新 `docOrder`。

## Locale Rules

- 当前只支持 `zh` 和 `en`
- 语言切换基于相同 `slug`
- 若中英文结构差异太大，切换体验会出现断裂

最稳妥的做法是：

- 两端使用相同 `slug`
- 两端使用相同 section `id`
- 页面顺序保持一致

## Suggested Future Evolution

如果后续页面数量和维护人数继续增长，可以考虑：

- 继续保留 `siteCopy`、导航和排序在 TypeScript 中
- 将长正文迁移到 MDX
- 保持现有路由和组件层不变，仅替换内容来源
