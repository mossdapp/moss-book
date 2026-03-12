# moss-book

Moss 的独立文档仓库，基于 `Next.js App Router` 构建，内容由 `moss-core`、`moss-store`、`moss-website` 与 `moss-labs` 当前代码与 README 整理而来。

## 目标

- 作为 Moss 官方文档入口，统一解释 Account OS、Store、系统模块、应用生态和开发者接入。
- 复用现有品牌资源与视觉语言，降低设计割裂。
- 当前先用代码内数据结构驱动双语文档，后续可以平滑迁移到 MDX 或 CMS。

## 运行

```bash
npm install
npm run dev
```

默认启动地址为 `http://localhost:3000`。

## 结构

- `src/app/[locale]/page.tsx`: 双语首页，当前支持 `zh` / `en`。
- `src/app/[locale]/docs/[slug]/page.tsx`: 双语文档详情页。
- `src/lib/docs.ts`: 双语文档内容、导航和首页文案定义。
- `src/lib/i18n.ts`: locale 定义与切换辅助。
- `public/`: 复用自现有 Moss 站点的图标、字体与应用图标。

## 当前路线

- 现在阶段推荐继续使用 `TS 数据驱动`，因为信息架构、双语命名和开发者路径还在快速收敛。
- 等文档目录和内容 ownership 稳定后，再迁移到“导航用 TS，正文用 MDX”的混合模式。

## 当前信息来源

- `moss-core`: Account OS、SDK、系统应用、应用路由与环境变量约定
- `moss-store`: Store 架构、LogicRegistry、AppNFT、收益模型与应用列表
- `moss-website`: 官方叙事、快速开始流程、品牌视觉
- `moss-labs`: 品牌语气与探索性定位
