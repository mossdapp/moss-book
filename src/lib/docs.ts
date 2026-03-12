import type { Locale } from "@/lib/i18n";

export type DocTone = "default" | "accent" | "warning";

export type DocLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type DocCard = {
  title: string;
  description: string;
  href?: string;
  external?: boolean;
};

export type DocCode = {
  language: string;
  content: string;
  caption?: string;
};

export type DocCallout = {
  title: string;
  body: string;
  tone?: DocTone;
};

export type DocVisual = {
  src: string;
  alt: string;
  caption?: string;
};

export type DocStep = {
  title: string;
  description: string;
};

export type DocSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: DocStep[];
  cards?: DocCard[];
  links?: DocLink[];
  visuals?: DocVisual[];
  code?: DocCode;
  callout?: DocCallout;
};

export type DocPage = {
  slug: string;
  group: "start" | "platform" | "ecosystem" | "ecosystem-dev" | "integrator";
  title: string;
  summary: string;
  eyebrow: string;
  hero: string;
  sections: DocSection[];
};

type SiteCopy = {
  homeEyebrow: string;
  homeTitle: string;
  homeIntro: string;
  homeCta: string;
  homeSecondaryCta: string;
  homeStoreCta: string;
  audienceTitle: string;
  audienceCards: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  globalSearchButton: string;
  globalSearchHint: string;
  showcaseTitle: string;
  showcaseIntro: string;
  searchTitle: string;
  searchPlaceholder: string;
  searchEmpty: string;
  screenshotSlotLabel: string;
  generatedFrom: string;
  solvesTitle: string;
  solvesItems: string[];
  readingMapEyebrow: string;
  readingMapTitle: string;
  browseDocs: string;
  docsEyebrow: string;
  docsTitle: string;
  docsIntro: string;
  navTitle: string;
  navSubtitle: string;
  navGroups: {
    start: string;
    platform: string;
    ecosystem: string;
    ecosystemDev: string;
    integrator: string;
  };
  previous: string;
  next: string;
  external: string;
  read: string;
  notFoundTitle: string;
  notFoundBody: string;
  backHome: string;
  browseDocsButton: string;
};

export const externalLinks = {
  website: "https://mossdapp.com",
  docs: "https://docs.mossdapp.com",
  os: "https://os.mossdapp.com",
  store: "https://store.mossdapp.com/en",
  labs: "https://labs.mossdapp.com",
  sdk: "https://www.npmjs.com/package/@mossdapp/sdk",
};

export const showcaseCards: Record<
  Locale,
  Array<{
    title: string;
    category: string;
    description: string;
    icon: string;
    image: string;
    href: string;
  }>
> = {
  zh: [
    {
      title: "PeerDex",
      category: "Trading",
      description: "最适合演示 Moss 钱包内安装式交易体验的代表应用。",
      icon: "/apps/peerdex.svg",
      image: "/diagrams/mock-peerdex.svg",
      href: "/zh/docs/app-peerdex",
    },
    {
      title: "CloseSky",
      category: "NFT + Token",
      description: "用一页说明 NFTManage 与 TokenManage 如何同时进入结算路径。",
      icon: "/apps/closesky.svg",
      image: "/diagrams/mock-closesky.svg",
      href: "/zh/docs/app-closesky",
    },
    {
      title: "Flashman",
      category: "Liquidity",
      description: "把账户资产变成闪电贷池，是最能体现可编程账户价值的案例之一。",
      icon: "/apps/flashman.svg",
      image: "/diagrams/mock-flashman.svg",
      href: "/zh/docs/app-flashman",
    },
    {
      title: "CryptoWill",
      category: "Automation",
      description: "跨时间与跨角色的账户自动化流程，适合展示链下签名编排能力。",
      icon: "/apps/cryptowill.svg",
      image: "/diagrams/mock-cryptowill.svg",
      href: "/zh/docs/app-cryptowill",
    },
    {
      title: "BlinkPay",
      category: "Payments",
      description: "面向 Agent、API 和订阅的支付表面，是集成方向的重要切口。",
      icon: "/apps/blinkpay.svg",
      image: "/diagrams/mock-blinkpay.svg",
      href: "/zh/docs/app-blinkpay",
    },
  ],
  en: [
    {
      title: "PeerDex",
      category: "Trading",
      description: "The clearest app for demonstrating the in-wallet install-and-trade pattern in Moss.",
      icon: "/apps/peerdex.svg",
      image: "/diagrams/mock-peerdex.svg",
      href: "/en/docs/app-peerdex",
    },
    {
      title: "CloseSky",
      category: "NFT + Token",
      description: "A strong page for showing how NFTManage and TokenManage enter one settlement path together.",
      icon: "/apps/closesky.svg",
      image: "/diagrams/mock-closesky.svg",
      href: "/en/docs/app-closesky",
    },
    {
      title: "Flashman",
      category: "Liquidity",
      description: "Turning account assets into a flash-loan pool is one of the strongest proofs of programmable accounts.",
      icon: "/apps/flashman.svg",
      image: "/diagrams/mock-flashman.svg",
      href: "/en/docs/app-flashman",
    },
    {
      title: "CryptoWill",
      category: "Automation",
      description: "A role-based and time-based account automation flow built on off-chain signatures.",
      icon: "/apps/cryptowill.svg",
      image: "/diagrams/mock-cryptowill.svg",
      href: "/en/docs/app-cryptowill",
    },
    {
      title: "BlinkPay",
      category: "Payments",
      description: "A payment surface for agents, APIs, and subscriptions, and a key integration path.",
      icon: "/apps/blinkpay.svg",
      image: "/diagrams/mock-blinkpay.svg",
      href: "/en/docs/app-blinkpay",
    },
  ],
};

export const siteCopy: Record<Locale, SiteCopy> = {
  zh: {
    homeEyebrow: "Moss Documentation",
    homeTitle: "MOSS\nBOOK",
    homeIntro:
      "一个围绕 Account OS、Store、系统模块与应用生态整理出的官方文档站，重点解释 Moss 的产品结构、体验路径与接入方式。",
    homeCta: "开始阅读",
    homeSecondaryCta: "打开 OS",
    homeStoreCta: "打开 Store",
    audienceTitle: "按角色进入",
    audienceCards: [
      {
        title: "给普通用户",
        description: "先理解 Moss 是什么，再沿快速开始、Store 安装和应用使用路径进入。",
        href: "/zh/docs/getting-started",
      },
      {
        title: "给开发者",
        description: "先看生态 App 开发和 Permit 接口，理解收益、分发和资产授权模型。",
        href: "/zh/docs/contracts-and-deployment",
      },
      {
        title: "给集成方",
        description: "重点看前端与 SDK 接入，以及智能钱包上下文如何进入现有 dApp。",
        href: "/zh/docs/frontend-and-sdk",
      },
    ],
    globalSearchButton: "全站搜索",
    globalSearchHint: "Ctrl/Command + K",
    showcaseTitle: "产品展示",
    showcaseIntro: "真实产品截图当前还没接入，这里先用应用卡片和文档入口搭出可替换的展示结构，后续可直接替换。",
    searchTitle: "搜索文档",
    searchPlaceholder: "搜索页面、概念、接口、流程...",
    searchEmpty: "没有匹配结果，试试换一个关键词。",
    screenshotSlotLabel: "可替换为真实截图",
    generatedFrom: "当前产品草稿",
    solvesTitle: "这版文档先解决什么",
    solvesItems: [
      "把分散的产品信息重新合并成一条清晰叙事。",
      "明确系统应用、App NFT 应用和独立站之间的区别。",
      "为开发者接入、部署和对外说明准备统一入口。",
    ],
    readingMapEyebrow: "Reading Map",
    readingMapTitle: "从总览到部署与 SDK",
    browseDocs: "浏览全部文档",
    docsEyebrow: "Docs",
    docsTitle: "Moss 文档总览",
    docsIntro: "这是一版双语文档结构，先以代码内数据驱动为主，便于快速调整目录、双语文案和产品边界。",
    navTitle: "Moss 文档目录",
    navSubtitle: "Navigation",
    navGroups: {
      start: "开始",
      platform: "平台",
      ecosystem: "生态",
      ecosystemDev: "生态开发",
      integrator: "集成方",
    },
    previous: "上一篇",
    next: "下一篇",
    external: "外链",
    read: "阅读",
    notFoundTitle: "页面不存在",
    notFoundBody: "当前文档路由不存在，可能是路径写错，或者这页还没有整理成正式文档。",
    backHome: "回到首页",
    browseDocsButton: "浏览文档",
  },
  en: {
    homeEyebrow: "Moss Documentation",
    homeTitle: "MOSS\nBOOK",
    homeIntro:
      "An official documentation site organized around Account OS, Store, system modules, and the Moss app ecosystem, focused on product structure, user flow, and integration surfaces.",
    homeCta: "Start Reading",
    homeSecondaryCta: "Open OS",
    homeStoreCta: "Open Store",
    audienceTitle: "Start by Role",
    audienceCards: [
      {
        title: "For Users",
        description: "Understand Moss first, then follow getting started, Store install, and app-usage flows.",
        href: "/en/docs/getting-started",
      },
      {
        title: "For Builders",
        description: "Start from ecosystem app development and permit interfaces to understand distribution, monetization, and permissions.",
        href: "/en/docs/contracts-and-deployment",
      },
      {
        title: "For Integrators",
        description: "Focus on frontend/SDK integration and how the smart-wallet context enters an existing dApp.",
        href: "/en/docs/frontend-and-sdk",
      },
    ],
    globalSearchButton: "Search",
    globalSearchHint: "Ctrl/Command + K",
    showcaseTitle: "Product Showcase",
    showcaseIntro: "Real product screenshots are not wired in yet, so this section uses app cards and doc entry points as a screenshot-ready browsing surface.",
    searchTitle: "Search Docs",
    searchPlaceholder: "Search pages, concepts, APIs, flows...",
    searchEmpty: "No results yet. Try a different keyword.",
    screenshotSlotLabel: "Replace with live product screenshot",
    generatedFrom: "Current product draft",
    solvesTitle: "What this draft solves first",
    solvesItems: [
      "It merges scattered product information into one coherent narrative.",
      "It clarifies the boundary between system apps, App NFT apps, and standalone app surfaces.",
      "It gives builders one entry point for integration, deployment, and external explanation.",
    ],
    readingMapEyebrow: "Reading Map",
    readingMapTitle: "From overview to deployment and SDK",
    browseDocs: "Browse all docs",
    docsEyebrow: "Docs",
    docsTitle: "Moss Docs Index",
    docsIntro: "This bilingual structure stays data-driven for now so we can iterate quickly on information architecture, copy, and content boundaries.",
    navTitle: "Moss Navigation",
    navSubtitle: "Navigation",
    navGroups: {
      start: "Start",
      platform: "Platform",
      ecosystem: "Ecosystem",
      ecosystemDev: "Ecosystem Dev",
      integrator: "Integrators",
    },
    previous: "Previous",
    next: "Next",
    external: "External",
    read: "Read",
    notFoundTitle: "Page not found",
    notFoundBody: "This route does not exist yet. The path may be wrong, or this page has not been formalized into documentation.",
    backHome: "Back Home",
    browseDocsButton: "Browse Docs",
  },
};

export const docsByLocale: Record<Locale, DocPage[]> = {
  zh: [
    {
      slug: "overview",
      group: "start",
      title: "平台总览",
      summary: "先建立对 Moss 的整体认知：它不是单一 dApp，而是一组围绕账户、商店和模块化执行展开的产品。",
      eyebrow: "Moss Book",
      hero: "Moss 把智能账户、应用商店和可插拔逻辑合并成同一条用户路径。",
      sections: [
        {
          id: "what-is-moss",
          title: "Moss 是什么",
          paragraphs: [
            "从产品结构看，Moss 的核心不是一个孤立页面，而是一套由智能账户操作系统、应用商店和实验场组成的账户型产品体系。",
            "这些部分不是几组互不相干的站点，而是围绕同一个账户上下文协作: OS 负责承接，Store 负责安装分发，Labs 负责探索未来形态。"
          ],
          cards: [
            { title: "Account OS", description: "账户工作台，也是资产、权限与应用被统一组织的地方。" },
            { title: "Store", description: "负责应用发现、安装分发，以及 App NFT 相关状态。" },
            { title: "Labs", description: "负责概念验证和未来形态展示，不等同于正式工作流。" }
          ]
        },
        {
          id: "loop",
          title: "产品闭环",
          steps: [
            { title: "创建 Moss Wallet", description: "用户在 Account OS 中创建自己的智能钱包，账户由此成为后续所有能力的容器。" },
            { title: "安装应用", description: "用户进入 Store mint App NFT，或直接启用系统应用。" },
            { title: "回到账户", description: "安装后的能力回到账户工作台里，成为可继续使用的入口。" },
            { title: "统一执行", description: "授权后的逻辑合约和系统模块在同一钱包上下文中协同运行。" }
          ],
          callout: {
            title: "一个关键判断",
            body: "Moss 不是“做很多网站”，而是在做一个可安装、可授权、可组合的钱包级操作系统。",
            tone: "accent"
          }
        },
        {
          id: "concepts",
          title: "关键概念",
          bullets: [
            "Moss Wallet: 用户在 OS 中使用的智能钱包，也是所有模块和应用的执行主体。",
            "Account OS: 围绕账户组织能力，而不是围绕单个 dApp 组织能力。",
            "Store: 负责注册逻辑合约、发行 App NFT、收取 mint 费并分配收益。",
            "System App: 钱包内置能力，如 TokenManage、NFTManage，不依赖额外 App NFT。",
            "App NFT: 非系统应用的安装凭证，决定某个 dApp 能否在钱包环境中运行。"
          ]
        }
      ]
    },
    {
      slug: "getting-started",
      group: "start",
      title: "快速开始",
      summary: "把当前账户引导路径整理成一套最短可执行步骤。",
      eyebrow: "Onboarding",
      hero: "最短路径是：连接钱包 -> 创建 Moss Wallet -> 充值 gas -> 领取测试资产 -> 在 Store mint App NFT -> 回到 OS 使用应用。",
      sections: [
        {
          id: "journey",
          title: "首条体验路径",
          steps: [
            { title: "连接任意 EOA 钱包", description: "用户先以普通钱包身份进入 Account OS，Moss 的设计目标是让任何账户都能进入。" },
            { title: "创建 Moss Wallet", description: "连接成功后，如果当前还没有 SCW，界面就会出现 “Create Moss Wallet” 入口。" },
            { title: "准备 Sepolia ETH", description: "当前演示路径默认围绕 Ethereum Sepolia，用户需要先准备 gas。" },
            { title: "领取测试资产", description: "通过 Faucet 获取 USDC、USDT、MOSS 以及测试 NFT，便于体验后续应用。" },
            { title: "在 Store 安装应用", description: "以 PeerDex 为代表的钱包内 dApp，需要先在 Store 中 mint 对应 App NFT。" },
            { title: "回到 OS 使用应用", description: "交易确认后刷新 OS，已安装应用会出现在账户工作台中。" }
          ]
        },
        {
          id: "assumptions",
          title: "当前体验假设",
          bullets: [
            "默认演示网络是 Ethereum Sepolia。",
            "系统应用默认可用，如 TokenManage、NFTManage、Red Packet。",
            "钱包内应用与独立站应用并不是完全相同的产品表面。",
            "App NFT 和链上授权状态共同决定应用是否可用。"
          ]
        },
        {
          id: "faq",
          title: "常见问题",
          bullets: [
            "看不到 Create Moss Wallet: 多半是没有使用 Moss connector，或者当前网络不在 Sepolia。",
            "Faucet / mint 失败: 先确认新钱包内是否有足够 gas。",
            "安装后应用未显示: 等待确认并刷新 OS，必要时再等 10 到 30 秒。"
          ],
          links: [
            { label: "Account OS", href: externalLinks.os, external: true },
            { label: "Moss Store", href: externalLinks.store, external: true },
            { label: "SDK Package", href: externalLinks.sdk, external: true }
          ]
        }
      ]
    },
    {
      slug: "account-os",
      group: "platform",
      title: "Account OS",
      summary: "理解 Account OS 的产品定位: 它不是登录后的钱包页面，而是账户能力被组织、授权和执行的地方。",
      eyebrow: "Platform",
      hero: "在 Moss 里，账户不是登陆后的附属物，账户本身就是操作系统。",
      sections: [
        {
          id: "role",
          title: "OS 承担什么角色",
          paragraphs: [
            "Account OS 是用户进入 Moss 后看到的主工作台，但它的职责不是只展示余额或地址，而是把账户本身变成一个可安装、可授权、可执行的界面。",
            "用户不是先进入某个单独应用再连接钱包，而是先进入自己的账户空间，再从这个空间里调起资产能力、系统能力和已安装应用。"
          ],
          bullets: [
            "它是账户的主工作台。",
            "它统一承接资产、身份、应用和设置。",
            "它把权限检查和执行上下文收拢到账户层。",
            "它让安装后的能力以“账户能力”而不是“外部站点”的方式出现。"
          ]
        },
        {
          id: "account-first",
          title: "为什么要做成账户优先",
          paragraphs: [
            "如果账户只是登录态，每个应用就都要自己处理资产、权限、授权状态和交互流程。Moss 反过来做: 先建立账户层，再让应用复用同一个账户上下文。",
            "这样支付、Token、NFT、安装状态、自动化能力都可以沉淀到账户里，而不是被拆散在不同页面和不同产品入口里。"
          ],
          bullets: [
            "资产能力不必被每个应用重复实现。",
            "权限和授权状态可以在账户层持续存在。",
            "应用安装后会直接变成账户的一部分。",
            "用户面对的是一个连续工作台，而不是一组断开的站点。"
          ],
          callout: {
            title: "设计判断",
            body: "Account OS 的关键不是“把钱包做得更像 App”，而是“把账户做成所有能力的宿主层”。",
            tone: "accent"
          }
        },
        {
          id: "workspace",
          title: "账户里到底组织了什么",
          paragraphs: [
            "一个成立的 Account OS，至少要把几类能力放进同一个账户界面里: 默认可用的系统能力、安装后出现的应用能力、账户自己的资产状态，以及安全与设置入口。",
            "这样用户在使用 Moss 时，感知到的是“我的账户能做什么”，而不是“我现在跳到了哪个站点”。"
          ],
          bullets: [
            "系统能力: 例如 Token 和 NFT 管理这类默认可用能力。",
            "已安装应用: 通过 Store 安装后，出现在账户里的应用入口。",
            "账户状态: 地址、资产、授权、会话和可执行能力。",
            "设置与安全: 网络、恢复、权限管理等长期能力。"
          ]
        }
      ]
    },
    {
      slug: "store-and-app-nft",
      group: "platform",
      title: "Store 与 App NFT",
      summary: "理解 Store 的中心化注册模型，以及 App NFT 在 Moss 分发体系中的意义。",
      eyebrow: "Distribution",
      hero: "在 Moss 里，应用不是单纯跳转链接，而是通过 Registry 和 App NFT 被装进钱包能力系统。",
      sections: [
        {
          id: "store-role",
          title: "Store 负责什么",
          paragraphs: [
            "Store 的架构中心是 `LogicRegistry`。它负责管理 Logic 合约、创建 AppNFT、铸造 NFT 以及收益分配。",
            "这让 Moss 的应用市场不是一个纯前端目录，而是一个链上注册与权限分发系统。"
          ],
          bullets: [
            "治理者创建或登记应用。",
            "开发者设置 mint 费。",
            "用户通过 mint App NFT 获得应用安装凭证。",
            "收益在开发者与 Store 之间按规则分配。"
          ]
        },
        {
          id: "economics",
          title: "收益与治理",
          bullets: [
            "当前约定里，开发者分成 70%，Store 分成 30%。",
            "收益按应用维度独立管理。",
            "开发者和治理者都可以主动提取收益。",
            "集中式 Registry 让上架、监控和治理路径保持清晰。"
          ],
          callout: {
            title: "为什么 App NFT 很重要",
            body: "App NFT 让安装关系变成链上状态，而不是只在前端数据库里记一条“已安装”。",
            tone: "accent"
          }
        },
        {
          id: "contracts",
          title: "核心接口",
          bullets: [
            "createApp(): 创建 App",
            "mintNFT(): 购买单个 App NFT",
            "batchMintNFT(): 批量购买",
            "setAppMintFee(): 设置应用 mint 费用",
            "withdrawDeveloperEarnings(): 开发者提取收益",
            "withdrawGovernorEarnings(): 治理者提取收益"
          ]
        }
      ]
    },
    {
      slug: "system-modules",
      group: "platform",
      title: "系统模块与授权模型",
      summary: "Moss 的系统模块决定了钱包最底层的资产操作方式，也是很多应用可以成立的基础。",
      eyebrow: "Permissions",
      hero: "先有系统模块，应用才能在统一的授权语义下复用资产能力。",
      sections: [
        {
          id: "tokenmanage",
          title: "TokenManage",
          paragraphs: [
            "TokenManage 是 Moss 钱包内置的 System App，遵循 ERC-7204。",
            "它提供统一的授权、批量授权和转账能力，让应用在不重复造轮子的前提下复用钱包资产控制逻辑。"
          ],
          bullets: [
            "tokenApprove(): 给指定 spender 设置额度",
            "tokenApproveForAll(): 面向整个钱包的批量授权",
            "tokenTransfer(): 转账时自动校验和扣减额度",
            "tokenAllowance() / tokenIsApproveForAll(): 查询授权状态"
          ]
        },
        {
          id: "nftmanage",
          title: "NFTManage",
          paragraphs: [
            "NFTManage 还提供 Permit 能力，支持 `nftApproveWithSig` 等签名调用。",
            "这表明 Moss 在 NFT 侧也在走“资产控制模块化”的路线，而不是把 NFT 操作散落到各个 dApp 中。"
          ],
          bullets: [
            "支持 ERC-7564 Permit",
            "前端可自动读取 nonce 和 ownerIndex",
            "适合 NFT 市场、签名挂单和代理执行场景"
          ]
        },
        {
          id: "auth",
          title: "授权模型",
          bullets: [
            "System App 可以被默认信任或由 Registry 标记。",
            "非系统逻辑必须通过 authorizeLogic() 等方式显式授权。",
            "App NFT 与授权状态共同决定应用可用性。",
            "用户可以通过 revokeLogic() 回收应用权限。"
          ]
        }
      ]
    },
    {
      slug: "ecosystem-apps",
      group: "ecosystem",
      title: "应用生态",
      summary: "基于当前应用列表与账户入口，整理生态里最重要的应用层能力。",
      eyebrow: "Apps",
      hero: "Moss 的应用不是随机拼贴，它们围绕交易、支付、资产管理和账户自动化几个方向聚集。",
      sections: [
        {
          id: "major",
          title: "当前主要应用",
          cards: [
            { title: "PeerDex", description: "订单簿 DEX，支持链上限价单与 ERC-7204 签名订单。", href: "/zh/docs/app-peerdex" },
            { title: "CloseSky", description: "面向 NFT 与 Token 的复杂撮合交易，支持签名订单结算。", href: "/zh/docs/app-closesky" },
            { title: "Flashman", description: "EIP-3156 闪电贷能力，把钱包余额转成可配置的闪电贷池。", href: "/zh/docs/app-flashman" },
            { title: "CryptoWill", description: "链下遗嘱计划、心跳机制、任何人可执行的资产继承流。", href: "/zh/docs/app-cryptowill" },
            { title: "BlinkPay", description: "面向 Agent、API 和订阅场景的低摩擦会话支付。", href: "/zh/docs/app-blinkpay" }
          ]
        },
        {
          id: "categories",
          title: "这些应用说明了什么",
          bullets: [
            "Moss 不只想服务 DeFi，也在覆盖 NFT、支付、账户自动化和现实协作场景。",
            "很多应用都复用钱包的系统模块，而不是各自维护一套资产控制层。",
            "Store 里的应用列表本身就是 Moss 产品方向的路线图。"
          ]
        },
        {
          id: "drill-down",
          title: "继续深入",
          cards: [
            { title: "PeerDex 说明页", description: "产品定位、安装条件、TokenManage 依赖与地址。", href: "/zh/docs/app-peerdex" },
            { title: "CloseSky 说明页", description: "NFT / Token 混合撮合和双 Permit 依赖。", href: "/zh/docs/app-closesky" },
            { title: "Flashman 说明页", description: "闪电贷池模型、适用场景和部署地址。", href: "/zh/docs/app-flashman" },
            { title: "CryptoWill 说明页", description: "遗嘱计划、心跳窗口、执行费和外部执行模式。", href: "/zh/docs/app-cryptowill" },
            { title: "BlinkPay 说明页", description: "会话授权、x402 支付流和 Agent 场景。", href: "/zh/docs/app-blinkpay" }
          ]
        }
      ]
    },
    {
      slug: "architecture",
      group: "platform",
      title: "架构拆解",
      summary: "把 Moss 的产品层、链上层和执行关系拆开，方便快速建立稳定心智模型。",
      eyebrow: "Architecture",
      hero: "先把产品层和链上边界说清楚，后面的部署、接入和调试才不会混乱。",
      sections: [
        {
          id: "product-map",
          title: "产品层级",
          cards: [
            { title: "Account OS", description: "负责账户工作台、系统能力与已安装应用的承接。" },
            { title: "Store", description: "负责应用发现、安装分发和 App NFT 相关状态。" },
            { title: "Labs", description: "负责实验性表达和未来场景探索。" }
          ]
        },
        {
          id: "chain-layers",
          title: "链上层次",
          bullets: [
            "MossAccountOS Factory / Implementation 负责钱包实例化。",
            "LogicRegistry 负责 dApp 注册、AppNFT 铸造和系统逻辑管理。",
            "System Apps 提供底层资产权限层。",
            "普通 dApp Logic 在用户钱包获得授权后执行。"
          ]
        },
        {
          id: "ui-layers",
          title: "产品表面",
          bullets: [
            "OS 是钱包工作台和主交互层。",
            "Store 是应用安装与分发层。",
            "Labs 是探索性表达，不一定直接承诺生产工作流。"
          ],
          visuals: [
            {
              src: "/diagrams/architecture-map.svg",
              alt: "Moss architecture map",
              caption: "把账户、分发、实验层和链上执行放在同一张图里之后，产品边界会清楚很多。",
            }
          ]
        }
      ]
    },
    {
      slug: "contracts-and-deployment",
      group: "ecosystem-dev",
      title: "生态 App 开发",
      summary: "面向想在 Moss 里做生态应用的开发者，重点说明 Store 分发、收益结构和开发者得到的好处。",
      eyebrow: "Ecosystem Dev",
      hero: "在 Moss 里做应用，不只是部署一个 logic，而是把应用接入账户、分发和收益体系。",
      sections: [
        {
          id: "why-build",
          title: "为什么要在 Moss 里做生态应用",
          paragraphs: [
            "Moss 给应用的不是单一流量入口，而是一个已经成立的账户上下文。用户进入应用前，已经有钱包、资产、权限体系和安装机制。",
            "这意味着开发者不必从零重新搭一套账户层，而是可以把精力放在应用逻辑本身。"
          ],
          bullets: [
            "账户、资产和权限语义已经存在。",
            "系统模块可复用，减少重复造轮子。",
            "应用可以通过 Store 被安装进账户工作台。",
            "分发和收益关系有链上状态承接。"
          ]
        },
        {
          id: "store-value",
          title: "Store 给开发者什么",
          bullets: [
            "应用可以被注册、展示和安装，而不是只靠一个外部链接传播。",
            "App NFT 让“用户已安装你的应用”变成链上事实。",
            "用户安装后，应用能回到账户工作台，而不是停留在商店页。",
            "Store 也承担收益记录和分配，不只是一个应用目录。"
          ],
          callout: {
            title: "关键点",
            body: "Store 的意义不是帮你挂一个列表，而是把应用分发变成账户系统的一部分。",
            tone: "accent"
          }
        },
        {
          id: "economics",
          title: "收益和开发者好处",
          bullets: [
            "当前分成结构是开发者 70%，Store 30%。",
            "收益按应用维度独立记录，不会和别的应用混在一起。",
            "开发者可以持续从安装和使用中获得明确回报。",
            "相比独立站模式，Moss 更容易把“安装 -> 使用 -> 收益”接成闭环。"
          ]
        },
        {
          id: "launch",
          title: "开发时要想清楚的事",
          bullets: [
            "你的应用是否真的适合账户内使用，而不是做成独立站更自然。",
            "是否尽量复用了 TokenManage / NFTManage，而不是自建资产控制层。",
            "你的应用需要系统能力、授权，还是 App NFT 安装三者的哪种组合。",
            "用户安装后，应用在账户工作台里应该以什么入口和状态出现。"
          ]
        }
      ]
    },
    {
      slug: "frontend-and-sdk",
      group: "integrator",
      title: "前端与 SDK 接入",
      summary: "整理当前前端接入方式，方便前端或第三方 dApp 对接 Moss 钱包能力。",
      eyebrow: "Integration",
      hero: "对接 Moss 时，真正重要的是连接器、部署信息、权限检查和智能钱包上下文。",
      sections: [
        {
          id: "frontend-entry",
          title: "前端接入点",
          bullets: [
            "钱包连接层负责连接器集成。",
            "`src/moss/lib/config.ts` 汇总环境变量和部署信息。",
            "`ConnectWallet` 与相关 wallet 组件负责智能钱包检测与创建。",
            "`MossWalletGate` 用于把部分页面限制在 Moss Wallet 环境内。"
          ]
        },
        {
          id: "sdk-assets",
          title: "可复用包",
          cards: [
            { title: "@mossdapp/sdk", description: "面向 dApp 的 TS SDK，可复用 smart wallet 地址计算和签名能力。", href: externalLinks.sdk, external: true },
            { title: "@mossdapp/abi", description: "对外暴露 ABI JSON，可被前端和脚本复用。" },
            { title: "@mossdapp/deployments", description: "按网络组织部署信息，用于环境配置和集成。" }
          ]
        },
        {
          id: "integration-path",
          title: "接入新应用的推荐路径",
          steps: [
            { title: "准备链上地址", description: "先确认逻辑合约、App NFT、Registry 和系统模块地址。" },
            { title: "接入连接器", description: "让前端能识别并连接 Moss 智能钱包上下文。" },
            { title: "读取安装与权限状态", description: "在进入应用前先检查 App NFT 和授权状态。" },
            { title: "根据系统模块设计交互", description: "尽量复用 TokenManage / NFTManage，而不是重复设计资产控制层。" }
          ],
          visuals: [
            {
              src: "/diagrams/sdk-integration.svg",
              alt: "SDK integration diagram",
              caption: "集成重点是让 dApp 前端、SDK 和 SCW 上下文之间的边界保持稳定。",
            }
          ]
        }
      ]
    },
    {
      slug: "sdk-api",
      group: "integrator",
      title: "SDK API 参考",
      summary: "基于当前 SDK 接口与实现，整理最关键的连接器和智能钱包 API。",
      eyebrow: "SDK",
      hero: "SDK 的职责不是替你重新发明账户系统，而是把 SCW 地址、交易包装和签名语义安全地暴露给 dApp。",
      sections: [
        {
          id: "exports",
          title: "当前导出",
          bullets: [
            "`createMossConnector`: 为 wagmi / RainbowKit 暴露 Moss connector。",
            "`MossEip1193Provider`: 将底层 provider 包装成面向 SCW 的 EIP-1193 provider。",
            "`MossAccountOSSDK`: 提供地址计算、钱包创建、签名和链上读取能力。",
            "`BlinkPay`: 额外导出的 BlinkPay 相关 SDK 能力。"
          ]
        },
        {
          id: "install",
          title: "安装与 peer 依赖",
          code: {
            language: "bash",
            caption: "当前推荐安装方式",
            content: `npm i @mossdapp/sdk
npm i wagmi viem @rainbow-me/rainbowkit ethers @tanstack/react-query`
          }
        },
        {
          id: "connector",
          title: "连接器集成",
          paragraphs: [
            "这里的核心思路是: 在 dApp 中接入 `createMossConnector`，让 RainbowKit / wagmi 能暴露 SCW 地址，而不是只看到底层 EOA。",
            "这样前端既能沿用现成钱包连接生态，又能保持 Moss 智能钱包上下文。"
          ],
          visuals: [
            {
              src: "/diagrams/sdk-integration.svg",
              alt: "SDK integration diagram",
              caption: "连接器的意义在于把现有钱包连接生态平滑切到 Moss 的智能钱包上下文。",
            }
          ],
          code: {
            language: "ts",
            caption: "连接器的典型形状",
            content: `import { createMossConnector } from "@mossdapp/sdk";

const moss = createMossConnector({
  getOwnerProvider: () => (typeof window !== "undefined" ? window.ethereum : undefined),
  sdkConfig: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/KEY",
    chainId: 11155111,
    contracts: {
      factory: "0x...",
      implementation: "0x...",
      registry: "0x..."
    }
  }
});`
          }
        },
        {
          id: "wallet-api",
          title: "常用钱包 API",
          bullets: [
            "`getSmartWalletAddress(owner)`: 默认按 nonce 0 计算钱包地址。",
            "`computeSmartWalletAddress(owner, nonce)`: 显式计算某个 nonce 的预测地址。",
            "`checkSmartWalletExists(scw)`: 检查目标地址是否已部署智能钱包。",
            "`createSmartWallet(owner)`: 通过 Factory 发起创建交易。",
            "`waitForTransaction(txHash)`: 等待钱包创建或其他链上交易确认。"
          ]
        },
        {
          id: "signature-api",
          title: "签名与权限 API",
          bullets: [
            "`smartSignMessage(...)`: 返回 ERC-1271 包裹后的消息签名。",
            "`smartSignTypedData(...)`: 返回适合合约验证的 Typed Data 签名。",
            "`wrap1271Signature(...)`: 将外层 EIP-712 / ERC-1271 封装应用到签名上。",
            "`getSystemApps()`: 从 Registry 分页读取系统逻辑。",
            "`isLogicUsable({ smartWallet, logic })`: 检查逻辑是否被允许、是否为系统逻辑、是否持有 App NFT。"
          ],
          callout: {
            title: "一个容易忽略的点",
            body: "`isLogicUsable` 不是只看 allowlist，它还会结合 Registry、system flag 和 App NFT 余额一起判断。",
            tone: "accent"
          }
        },
        {
          id: "next-reads",
          title: "搭配阅读",
          cards: [
            { title: "前端与 SDK 接入", description: "从页面集成角度看 SDK 如何进入 OS。", href: "/zh/docs/frontend-and-sdk" },
            { title: "网络与地址矩阵", description: "查看当前 Sepolia 下的核心地址。", href: "/zh/docs/networks-and-addresses" }
          ]
        }
      ]
    },
    {
      slug: "networks-and-addresses",
      group: "integrator",
      title: "网络与地址矩阵",
      summary: "基于 `packages/deployments/sepolia.json` 与前端配置，整理当前文档站可确认的链上地址基线。",
      eyebrow: "Networks",
      hero: "只要地址基线不清楚，前端、SDK、Store 和 OS 就很容易发生环境错配。",
      sections: [
        {
          id: "network",
          title: "当前默认网络",
          bullets: [
            "链名: Sepolia",
            "chainId: 11155111",
            "block explorer: https://sepolia.etherscan.io",
            "OS 和 Store 当前文档里的默认体验流都围绕这条测试网展开。"
          ]
        },
        {
          id: "core-addresses",
          title: "核心系统地址",
          bullets: [
            "MossAccountOSFactory: 0xa3954a7688518acF3bB74BEC2330d5966e87960A",
            "MossAccountOSImplementation: 0x65C4340E65144e2Da93dECfAFcb16a116C75C0d8",
            "LogicRegistry: 0xec2242300B40E3272Df9F65738465aeD9f7f4298",
            "TokenManage: 0xC2d2c2b8fffb4BFA2E609180363D3e41b855784E",
            "NftManage: 0x9334d17921768D95ca4062e7D4Bd1DEDD0d8281B"
          ]
        },
        {
          id: "test-assets",
          title: "测试资产地址",
          bullets: [
            "TestUSDC: 0x9d4b951592c31dc042efDC4E1F8aE00718b96fe1",
            "TestUSDT: 0xdd7468f993c52fcF43Cef80c9a4e042de4920F2d",
            "MossToken: 0xC741d79714c6cd3684CF4217DB423D1cf79F6cec",
            "TestWETH: 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
            "NftDropOne: 0x15C0D103bb59aE9f01b8193e84311ba259083FcF",
            "NftDropTwo: 0x1e439692Be42748A57fbF8608F14116f5CAFA78F"
          ]
        },
        {
          id: "apps",
          title: "应用逻辑与 App NFT",
          bullets: [
            "PeerDex: 0xe4C8B151ABbFC485CC31f7d6E5e26F280E9C2dF7 / AppNFT: 0x44ac3D37ed34f9c97cCcE84D1B1Dd53a5DcD16Ed",
            "Closesky: 0x2E137ffe6c94F6688Bc89Ac6699708e609B9Fc6d / AppNFT: 0xFdADfb032C551ffb354786d054045bC1dBB8f200",
            "Flashman: 0x5383dbE8E2A6a1dBC5f0E4edB78523fb13aC3d72 / AppNFT: 0x9b5cac28D3eC52d8C07285db366265934185E5e1",
            "CryptoWill: 0xDb66ba171263198554aF0AE31C21c6282C52b9D0 / AppNFT: 0x7c1Ba50bE5Db1CD0C8b88978f6001f7Dc5659f69",
            "BlinkPay: 0xBa313EEfD0CD713CB8f1e6AB1D49118a311014bb / AppNFT: 0x2514beCAa699DBEBea40f70d984Ec0D253B2b673"
          ]
        },
        {
          id: "source-of-truth",
          title: "地址来源顺序",
          bullets: [
            "当前前端接入层都优先读取环境变量。",
            "未显式覆盖时，前端会退回 `@mossdapp/deployments` 的网络数据。",
            "因此地址变更后，至少要同时检查部署包、OS 环境变量和 Store 环境变量。"
          ],
          callout: {
            title: "推荐做法",
            body: "把 `packages/deployments` 当成共享基线，把 `.env.local` 当成环境覆盖层。",
            tone: "warning"
          }
        }
      ]
    },
    {
      slug: "app-peerdex",
      group: "ecosystem",
      title: "PeerDex",
      summary: "PeerDex 是 Moss 当前最典型的钱包内交易应用，围绕订单簿、签名订单和 TokenManage 权限展开。",
      eyebrow: "App",
      hero: "PeerDex 展示了 Moss 钱包级 dApp 的核心范式：钱包上下文 + App NFT 安装 + 系统模块复用。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据将 PeerDex 定义为去中心化订单簿交易所，支持链上限价单和 ERC-7204 签名订单。",
            "当前 onboarding 也把 PeerDex 作为用户理解“Store mint App NFT -> 回到 OS 使用 dApp”这条闭环的第一示例。"
          ]
        },
        {
          id: "requirements",
          title: "安装与权限条件",
          bullets: [
            "需要在 Store mint PeerDex App NFT。",
            "需要钱包内拥有足够 gas 与测试资产。",
            "需要逻辑处于可用状态，即未被 block，且满足授权 / 系统逻辑 / App NFT 条件。",
            "交易和授权能力依赖 TokenManage。"
          ]
        },
      ]
    },
    {
      slug: "app-closesky",
      group: "ecosystem",
      title: "CloseSky",
      summary: "CloseSky 主要处理 NFT 与 Token 的复杂撮合，也是 Moss 双 Permit 资产层的代表性应用。",
      eyebrow: "App",
      hero: "CloseSky 不是简单 NFT 市场，而是把 TokenManage 和 NFTManage 同时拉入交易结算流程的应用形态。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据将 CloseSky 定义为支持 NFT↔NFT 与 NFT↔Token 的复杂撮合应用。",
            "它特别适合说明 Moss 的价值不止是代币转账，而是把多资产类型的权限模型统一到同一钱包层里。"
          ]
        },
        {
          id: "requirements",
          title: "依赖关系",
          bullets: [
            "需要对应 App NFT 才能作为钱包内应用使用。",
            "涉及 ERC-7204 与 ERC-7564 Permit。",
            "同时依赖 TokenManage 与 NFTManage。",
            "更适合在文档中强调“模块复用而非应用自带资产层”。"
          ]
        },
      ]
    },
    {
      slug: "app-flashman",
      group: "ecosystem",
      title: "Flashman",
      summary: "Flashman 把用户钱包资产转成可配置的 EIP-3156 闪电贷池，属于 Moss 资产自动化方向的重要样本。",
      eyebrow: "App",
      hero: "Flashman 说明 Moss 应用不只是交易和支付，也可以把账户资产变成可编程金融基础设施。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据把 Flashman 定义为基于 EIP-3156 的闪电贷放贷器，可把钱包余额变成闪电贷资金池。",
            "这类应用非常适合 Moss，因为钱包本身就是可编程执行环境。"
          ]
        },
        {
          id: "requirements",
          title: "使用条件",
          bullets: [
            "作为钱包内应用，需要对应 App NFT。",
            "依赖钱包内已有可贷出的代币资产。",
            "前端和部署配置中还包含 `FlashmanTestBorrower` 用于测试场景。"
          ]
        },
      ]
    },
    {
      slug: "app-cryptowill",
      group: "ecosystem",
      title: "CryptoWill",
      summary: "CryptoWill 把链下遗嘱、心跳窗口和权限外执行机制结合在一个钱包级应用里。",
      eyebrow: "App",
      hero: "CryptoWill 是 Moss 在账户自动化和链下签名编排上的代表性应用，不只是一个普通 dApp 表单。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据把 CryptoWill 描述为离线生成 WillPlan、任意执行者可执行、自动收取 1% 执行费的资产继承应用。",
            "当前实现还明确了 heartbeat、grace period、trustee endorsement 和 claim 流程。"
          ]
        },
        {
          id: "requirements",
          title: "关键机制",
          bullets: [
            "支持链下签署 WillPlan。",
            "支持 heartbeat 失活后触发执行。",
            "Executor 无需预先授权即可执行，但受计划与签名约束。",
            "适合与钱包 API 和外部页面模式一起阅读。"
          ]
        },
      ]
    },
    {
      slug: "app-blinkpay",
      group: "ecosystem",
      title: "BlinkPay",
      summary: "BlinkPay 是 Moss 面向 Agent、API 和订阅场景的支付层，核心在于 session key 与免弹窗微支付。",
      eyebrow: "App",
      hero: "BlinkPay 展示了 Moss 如何把智能钱包从交互账户推向机器可用账户。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据把 BlinkPay 定义为一次授权会话密钥后即可自动签署微支付的方案，面向 AI Agent、API 和订阅服务。",
            "当前实现里还包含 `api/x402` 路由和 BlinkPay SDK 导出，说明它不仅是 UI 功能，也在往协议化支付流延展。"
          ]
        },
        {
          id: "requirements",
          title: "关键依赖",
          bullets: [
            "依赖钱包内的签名能力与会话授权。",
            "和 TokenManage 支付能力、x402 路由存在明显关联。",
            "更适合作为开发者和 Agent 场景共同阅读的应用页。"
          ]
        },
      ]
    },
    {
      slug: "account-contract-api",
      group: "ecosystem-dev",
      title: "Account Contract API",
      summary: "围绕 `MossAccountOS` 与 `MossAccountOSFactory` 的关键接口整理一页契约级参考。",
      eyebrow: "API",
      hero: "如果你要理解 Moss 钱包的真实边界，必须先理解 Factory 如何创建账户，以及 Account 如何授权逻辑。",
      sections: [
        {
          id: "factory",
          title: "Factory 侧接口",
          bullets: [
            "`createAccount(bytes[] owners, address registry, uint256 nonce)`: 创建账户实例。",
            "`getAddress(bytes[] owners, address registry, uint256 nonce)`: 预测账户地址。",
            "`IMPLEMENTATION()`: 返回当前 factory 指向的实现合约地址。"
          ],
          code: {
            language: "solidity",
            caption: "文档里最常用的账户创建语义",
            content: `factory.createAccount(owners, registry, nonce);
factory.getAddress(owners, registry, nonce);`
          }
        },
        {
          id: "account",
          title: "Account 侧接口",
          bullets: [
            "`authorizeLogic(address)`: 允许某个逻辑在钱包内运行。",
            "`revokeLogic(address)`: 撤销某个逻辑的权限。",
            "`isBlocked(address)`: 查询逻辑是否被 block。",
            "`registry()`: 查询当前绑定的 Registry。",
            "`registryTrusted()`: 查询是否信任 Registry 的系统逻辑判定。",
            "`execute(...)` / `executeBatch(...)`: 作为钱包执行目标调用。"
          ]
        },
        {
          id: "policy",
          title: "权限判定规则",
          bullets: [
            "新建账户默认 `registryTrusted = true`。",
            "系统逻辑可在受信 Registry 下直接作为系统应用使用。",
            "非系统逻辑通常还需要 owner 显式执行 `authorizeLogic`。",
            "如果逻辑绑定了 App NFT，钱包还必须持有该 NFT。"
          ],
          callout: {
            title: "实际含义",
            body: "Moss 把“是否可调用某逻辑”拆成了系统白名单、owner 授权、App NFT 三层，不是单一 allowlist。",
            tone: "accent"
          }
        }
      ]
    },
    {
      slug: "token-and-nft-permit-api",
      group: "ecosystem-dev",
      title: "Token / NFT Permit API",
      summary: "围绕 TokenManage 与 NFTManage 的 Permit 和签名调用能力，整理当前最值得引用的方法。",
      eyebrow: "API",
      hero: "Moss 的资产层关键不在于转账本身，而在于系统模块如何把授权、签名和执行统一起来。",
      sections: [
        {
          id: "tokenmanage-api",
          title: "TokenManage",
          bullets: [
            "`tokenApprove(asset, spender, value)`: 设置额度。",
            "`tokenApproveForAll(spender, approved)`: 设置全局授权。",
            "`tokenTransfer(asset, to, value)`: 发起直接转账。",
            "`tokenTransferNonce(asset, caller)`: 查询签名转账 nonce。",
            "`tokenTransferWithSig(asset, to, value, deadline, signature)`: 提交签名转账。"
          ]
        },
        {
          id: "nftmanage-api",
          title: "NFTManage",
          bullets: [
            "`nftApproveWithSig(asset, operator, tokenId, deadline, signature)`: 单 NFT 签名授权。",
            "`nftSetApprovalForOneAllWithSig(asset, operator, approved, deadline, signature)`: 某 NFT 集合级签名授权。",
            "`nftSetApprovalForAllAllWithSig(operator, approved, deadline, signature)`: 全局 NFT 签名授权。"
          ]
        },
        {
          id: "signing-model",
          title: "签名模型",
          bullets: [
            "TokenManage 与 NFTManage 的 Permit 都依赖 Moss 双层 EIP-712 / ERC-1271 包装。",
            "前端会先读取 nonce，再由钱包生成外层安全签名。",
            "这让支付、挂单、授权和代理执行可以在不直接切换 owner 的情况下完成。"
          ]
        }
      ]
    },
    {
      slug: "cryptowill-api",
      group: "ecosystem-dev",
      title: "CryptoWill API",
      summary: "把 CryptoWill 的 owner 侧配置接口和 executor 侧执行接口单独整理成参考页。",
      eyebrow: "API",
      hero: "CryptoWill 的复杂度不在 UI，而在于 owner、executor、beneficiary 三种角色围绕同一计划协同。",
      sections: [
        {
          id: "owner-api",
          title: "Owner 侧接口",
          bullets: [
            "`configureInactivity(inactiveDelay, gracePeriod)`: 配置失活窗口。",
            "`ping()`: 刷新心跳时间。",
            "`setPauseState(bool)`: 开关暂停状态。",
            "`resetInactivity()`: 重置失活状态。"
          ]
        },
        {
          id: "executor-api",
          title: "Executor 侧接口",
          bullets: [
            "`executeWill(plan, tokens[], sigOwner, trusteeAddr, sigTrustee)`: 在窗口关闭后执行遗嘱。",
            "`claim(...)`: 对 ERC-20 分配后的可领取余额进行领取。",
            "`usedPlan[planId]` 语义保证同一 plan 不可重放。"
          ]
        },
        {
          id: "operational-rules",
          title: "执行规则",
          bullets: [
            "执行者可以是任意地址，不要求预授权。",
            "执行费上限为 1%。",
            "ERC-20 可以延迟 claim，NFT 走即时转移。",
            "当 `requiresTrustee = true` 时，必须附带 trustee endorsement。"
          ]
        }
      ]
    },
    {
      slug: "onboarding-flow",
      group: "start",
      title: "Onboarding 流程",
      summary: "把 OS 现有引导拆成一条可用于演示、销售和测试的标准流程。",
      eyebrow: "Flow",
      hero: "这条流程的目标不是展示某个单一功能，而是让用户在 5 分钟内理解 Moss 的产品闭环。",
      sections: [
        {
          id: "steps",
          title: "标准演示路径",
          steps: [
            { title: "进入 OS 并连接钱包", description: "使用 EOA 进入，但目标是引导用户创建 Moss Wallet。" },
            { title: "创建 Moss Wallet", description: "让用户明确：Moss Wallet 就是后续所有能力的账户容器。" },
            { title: "领取测试资产", description: "为后续支付、授权、交易和安装应用做准备。" },
            { title: "进入 Store mint 一个 App NFT", description: "建议优先演示 PeerDex，路径最直观。" },
            { title: "返回 OS 打开应用", description: "让用户看见“安装后出现在账户工作台”的结果。" }
          ],
          visuals: [
            {
              src: "/diagrams/onboarding-flow.svg",
              alt: "Onboarding flow diagram",
              caption: "这条路径最适合首次演示 Moss 的账户闭环。",
            }
          ]
        },
        {
          id: "demo-goal",
          title: "这条流程要讲清什么",
          bullets: [
            "Moss 不是单 dApp。",
            "Moss 先交付账户，再交付应用。",
            "应用安装与链上状态有关，不是前端假装安装。",
            "系统模块让应用不必各自实现资产层。"
          ]
        }
      ]
    },
    {
      slug: "store-install-flow",
      group: "start",
      title: "Store 安装流程",
      summary: "面向 App NFT 安装场景的流程页，适合演示 Store 与 OS 的联动关系。",
      eyebrow: "Flow",
      hero: "Store 的价值不是陈列目录，而是把安装状态、分发和收益模型放到链上。",
      sections: [
        {
          id: "steps",
          title: "安装路径",
          steps: [
            { title: "进入应用详情页", description: "查看应用简介、mint 费用与 App NFT 信息。" },
            { title: "发起 mint", description: "由用户钱包提交 App NFT 铸造交易。" },
            { title: "等待交易确认", description: "安装状态成为链上事实，而不是本地缓存。" },
            { title: "回到 OS 刷新", description: "钱包内应用在满足授权和 NFT 条件后可被显示或使用。" }
          ],
          visuals: [
            {
              src: "/diagrams/store-install-flow.svg",
              alt: "Store install flow diagram",
              caption: "Store 到 OS 的关键不是页面跳转，而是 App NFT 安装状态的同步。",
            }
          ]
        },
        {
          id: "what-to-check",
          title: "排查要点",
          bullets: [
            "是否在正确网络。",
            "gas 是否充足。",
            "Registry 中是否已正确注册该 logic。",
            "App NFT 地址与前端配置是否一致。"
          ]
        }
      ]
    },
    {
      slug: "blinkpay-flow",
      group: "ecosystem",
      title: "BlinkPay 支付流程",
      summary: "整理 BlinkPay 从 session grant 到自动签名支付的典型路径。",
      eyebrow: "Flow",
      hero: "BlinkPay 的流程重点不是一次付款，而是如何把“持续确认”压缩成“单次授权 + 后续自动支付”。",
      sections: [
        {
          id: "steps",
          title: "典型支付路径",
          steps: [
            { title: "创建或获取 session grant", description: "先由 owner 对某个会话或支付范围做授权。" },
            { title: "服务端或 Agent 发起扣费请求", description: "请求中会携带对应会话上下文和支付目标。" },
            { title: "走签名/校验路径", description: "由钱包签名语义和系统模块共同保证支付合法。" },
            { title: "完成微支付结算", description: "适用于 API 调用、AI Agent、订阅和 x402 风格支付流。" }
          ],
          visuals: [
            {
              src: "/diagrams/blinkpay-flow.svg",
              alt: "BlinkPay flow diagram",
              caption: "BlinkPay 的价值在于把多次确认压缩成一次授权后的持续支付能力。",
            }
          ]
        },
        {
          id: "doc-angle",
          title: "文档里要强调什么",
          bullets: [
            "一次授权，多次低摩擦支付。",
            "和 TokenManage / x402 路由存在明显关联。",
            "既是产品能力，也是开发者集成能力。"
          ]
        }
      ]
    },
    {
      slug: "cryptowill-flow",
      group: "ecosystem",
      title: "CryptoWill 执行流程",
      summary: "把 owner 配置、离线签名、executor 执行和 beneficiary 领取拆成一条完整流程。",
      eyebrow: "Flow",
      hero: "CryptoWill 的关键不是单个函数，而是一个跨时间、跨角色、跨链上链下边界的流程。",
      sections: [
        {
          id: "steps",
          title: "典型执行路径",
          steps: [
            { title: "Owner 配置 inactivity 参数", description: "设置 inactiveDelay 与 gracePeriod，并保持心跳活跃。" },
            { title: "Owner 离线签署 WillPlan", description: "计划包含受益人、资产、文件哈希、时间限制等信息。" },
            { title: "必要时附加 trustee endorsement", description: "当 plan 要求 trustee 时，需带上 trustee EIP-712 签名。" },
            { title: "窗口关闭后由任意执行者触发 executeWill", description: "执行者可收取受限比例的执行费。" },
            { title: "Beneficiary 或 executor 后续 claim", description: "ERC-20 分配可后续领取，NFT 则即时转移。" }
          ],
          visuals: [
            {
              src: "/diagrams/cryptowill-flow.svg",
              alt: "CryptoWill execution flow diagram",
              caption: "CryptoWill 是典型的跨角色、跨时间执行流程，图示比纯文字更容易说明边界。",
            }
          ]
        },
        {
          id: "risk-points",
          title: "实现时要注意",
          bullets: [
            "不要忽略 planId 防重放。",
            "owner 侧 heartbeat 逻辑决定何时允许执行。",
            "trustee 模式下缺签会导致执行无效。",
            "tokens[] 需要列出实际分发的 ERC-20。"
          ]
        }
      ]
    }
  ],
  en: [
    {
      slug: "overview",
      group: "start",
      title: "Overview",
      summary: "Build the right mental model first: Moss is not a single dApp, but a product system centered on accounts, distribution, and modular execution.",
      eyebrow: "Moss Book",
      hero: "Moss combines smart accounts, an app store, and pluggable logic into one user journey.",
      sections: [
        {
          id: "what-is-moss",
          title: "What Moss Is",
          paragraphs: [
            "The product structure shows that Moss is not one isolated site. It is an account-centered system made of an account operating system, an app store, and an experimental surface.",
            "These parts are not unrelated surfaces. They cooperate around one account context: OS hosts the account, Store distributes capabilities, and Labs explores future forms."
          ],
          cards: [
            { title: "Account OS", description: "The account workspace where assets, permissions, and apps are organized." },
            { title: "Store", description: "The discovery and distribution layer for app installation and App NFT state." },
            { title: "Labs", description: "The experimental surface for concepts and future-facing directions." }
          ]
        },
        {
          id: "loop",
          title: "Product Loop",
          steps: [
            { title: "Create a Moss Wallet", description: "Users create a smart wallet in Account OS, which becomes the container for all later capabilities." },
            { title: "Install capabilities", description: "Users enable system apps or mint App NFTs in Store to install app-level capabilities." },
            { title: "Return to the account", description: "Installed capabilities appear back inside the account workspace." },
            { title: "Execute in one wallet context", description: "Authorized app logic and system modules run within the same wallet context." }
          ],
          callout: {
            title: "The key reading",
            body: "Moss is not about launching many websites. It is about building a wallet-level operating system with installable and composable logic.",
            tone: "accent"
          }
        },
        {
          id: "concepts",
          title: "Core Concepts",
          bullets: [
            "Moss Wallet: the smart wallet used inside OS and the execution subject for modules and apps.",
            "Account OS: a capability layer organized around the account rather than a single dApp.",
            "Store: the distribution layer for logic contracts, App NFTs, and mint-fee economics.",
            "System App: built-in wallet capabilities such as TokenManage and NFTManage.",
            "App NFT: the installation proof for non-system applications."
          ]
        }
      ]
    },
    {
      slug: "getting-started",
      group: "start",
      title: "Getting Started",
      summary: "Turn the current account onboarding into an explicit, executable journey.",
      eyebrow: "Onboarding",
      hero: "The shortest path is: connect a wallet -> create a Moss Wallet -> fund gas -> claim test assets -> mint an App NFT in Store -> return to OS and use the app.",
      sections: [
        {
          id: "journey",
          title: "First Journey",
          steps: [
            { title: "Connect any EOA wallet", description: "Users start from a regular wallet. Moss is designed to let any account enter first." },
            { title: "Create a Moss Wallet", description: "If no SCW is detected after connection, the UI exposes a Create Moss Wallet flow." },
            { title: "Prepare Sepolia ETH", description: "The current demo path centers on Ethereum Sepolia, so gas is required first." },
            { title: "Claim test assets", description: "The Faucet flow provides USDC, USDT, MOSS, and test NFTs for follow-up interactions." },
            { title: "Install an app in Store", description: "Wallet-native apps such as PeerDex need an App NFT before they become available in OS." },
            { title: "Return to OS", description: "After the transaction confirms, refresh OS and the installed app should appear in the wallet workspace." }
          ]
        },
        {
          id: "assumptions",
          title: "Current Product Assumptions",
          bullets: [
            "The default demo network is Ethereum Sepolia.",
            "System apps are available by default, such as TokenManage, NFTManage, and Red Packet.",
            "In-wallet apps and standalone apps are not the same surface.",
            "App NFT ownership and authorization state jointly determine availability."
          ]
        },
        {
          id: "faq",
          title: "Common Issues",
          bullets: [
            "Cannot see Create Moss Wallet: you are usually not using the Moss connector, or you are on the wrong network.",
            "Faucet or mint failed: check the new wallet's gas balance first.",
            "The app is still missing after install: wait for confirmation and refresh OS, then wait a few more seconds if needed."
          ],
          links: [
            { label: "Account OS", href: externalLinks.os, external: true },
            { label: "Moss Store", href: externalLinks.store, external: true },
            { label: "SDK Package", href: externalLinks.sdk, external: true }
          ]
        }
      ]
    },
    {
      slug: "account-os",
      group: "platform",
      title: "Account OS",
      summary: "Understand Account OS as a product surface: not a post-login wallet page, but the layer where account capabilities are organized, authorized, and executed.",
      eyebrow: "Platform",
      hero: "In Moss, the account is not the thing you log into after the product starts. The account is the product surface.",
      sections: [
        {
          id: "role",
          title: "What the OS Does",
          paragraphs: [
            "Account OS is the main workspace users enter in Moss. Its job is not only to show balances or an address. Its job is to turn the account itself into an installable, authorizable, executable surface.",
            "Users do not start by opening one standalone app and then connecting a wallet. They enter their account space first, then invoke asset capabilities, system capabilities, and installed apps from there."
          ],
          bullets: [
            "It is the main account workspace.",
            "It unifies assets, identity, apps, and settings.",
            "It pulls permission checks and execution context into the account layer.",
            "It makes installed capabilities feel like account-native features instead of external sites."
          ]
        },
        {
          id: "account-first",
          title: "Why Account-First Matters",
          paragraphs: [
            "If an account is only a login state, every app has to rebuild asset handling, permissions, authorization state, and interaction flow on its own. Moss flips that model: establish the account layer first, then let apps reuse the same account context.",
            "That makes payments, tokens, NFTs, installation state, and automation persist inside the account instead of being fragmented across different pages and product entries."
          ],
          bullets: [
            "Asset capabilities do not need to be reimplemented by each app.",
            "Permissions and authorization state can persist at the account layer.",
            "Installed apps become part of the account surface.",
            "The user experiences one continuous workspace instead of disconnected sites."
          ],
          callout: {
            title: "Design reading",
            body: "The key move is not making a wallet look more like an app. It is making the account the host layer for every capability.",
            tone: "accent"
          }
        },
        {
          id: "workspace",
          title: "What Gets Organized Inside the Account",
          paragraphs: [
            "A real Account OS has to place several kinds of capabilities inside one account surface: built-in system capabilities, installed app capabilities, the account's own asset state, and long-lived settings and security entry points.",
            "That is why the user experience is framed as what my account can do, not which site I have jumped to."
          ],
          bullets: [
            "System capabilities: default abilities such as token and NFT management.",
            "Installed apps: app entry points that appear after Store installation.",
            "Account state: address, assets, permissions, sessions, and executable scope.",
            "Settings and security: network, recovery, and permission management."
          ]
        }
      ]
    },
    {
      slug: "store-and-app-nft",
      group: "platform",
      title: "Store and App NFT",
      summary: "Understand the centralized registration model in Store, and why App NFTs matter in Moss distribution.",
      eyebrow: "Distribution",
      hero: "In Moss, an app is not just a link. It becomes part of the wallet capability system through Registry state and App NFTs.",
      sections: [
        {
          id: "store-role",
          title: "What the Store Owns",
          paragraphs: [
            "The architectural center of Store is `LogicRegistry`. It manages logic contracts, creates AppNFTs, mints NFTs, and distributes revenue.",
            "So the Moss store is not just a frontend catalog. It is an on-chain registration and permission-distribution system."
          ],
          bullets: [
            "Governance registers or creates apps.",
            "Developers set mint fees.",
            "Users mint App NFTs as installation proofs.",
            "Revenue is split between the developer and the Store."
          ]
        },
        {
          id: "economics",
          title: "Economics and Governance",
          bullets: [
            "The current split is 70% for developers and 30% for the Store.",
            "Revenue is isolated per app.",
            "Both developers and governance can withdraw their earnings.",
            "A centralized registry keeps listing, monitoring, and governance paths legible."
          ],
          callout: {
            title: "Why App NFT matters",
            body: "App NFT turns installation into on-chain state instead of a frontend-only notion of 'installed'.",
            tone: "accent"
          }
        },
        {
          id: "contracts",
          title: "Core Interfaces",
          bullets: [
            "createApp(): create an app",
            "mintNFT(): buy one App NFT",
            "batchMintNFT(): buy in batch",
            "setAppMintFee(): set app mint price",
            "withdrawDeveloperEarnings(): withdraw developer revenue",
            "withdrawGovernorEarnings(): withdraw governance revenue"
          ]
        }
      ]
    },
    {
      slug: "system-modules",
      group: "platform",
      title: "System Modules and Permissions",
      summary: "The system modules define the lowest asset-control layer of Moss and make higher-level apps possible.",
      eyebrow: "Permissions",
      hero: "System modules come first. Apps inherit a consistent asset-permission model from them.",
      sections: [
        {
          id: "tokenmanage",
          title: "TokenManage",
          paragraphs: [
            "TokenManage is a built-in system app following ERC-7204.",
            "It provides a unified model for approvals, batched approvals, and transfers, so applications do not need to re-implement a wallet asset-control layer."
          ],
          bullets: [
            "tokenApprove(): set allowance for a spender",
            "tokenApproveForAll(): set wallet-wide approvals",
            "tokenTransfer(): validate and consume allowance during transfer",
            "tokenAllowance() / tokenIsApproveForAll(): query current permission state"
          ]
        },
        {
          id: "nftmanage",
          title: "NFTManage",
          paragraphs: [
            "NFTManage also exposes permit flows such as `nftApproveWithSig`.",
            "This shows that Moss applies the same modular asset-control philosophy to NFTs as well."
          ],
          bullets: [
            "Supports ERC-7564 Permit",
            "Frontend can auto-read nonce and ownerIndex",
            "Suitable for NFT markets, signed listings, and delegated execution"
          ]
        },
        {
          id: "auth",
          title: "Authorization Model",
          bullets: [
            "System apps can be trusted by default or marked as system logic by the Registry.",
            "Non-system logic must be explicitly authorized via methods such as authorizeLogic().",
            "App NFT ownership and authorization state jointly determine availability.",
            "Users can revoke permissions through revokeLogic()."
          ]
        }
      ]
    },
    {
      slug: "ecosystem-apps",
      group: "ecosystem",
      title: "App Ecosystem",
      summary: "Based on the current app catalog and account entry points, this page summarizes the most important application-layer capabilities in Moss today.",
      eyebrow: "Apps",
      hero: "The Moss app surface is not random. It clusters around trading, payments, asset management, and account automation.",
      sections: [
        {
          id: "major",
          title: "Major Applications",
          cards: [
            { title: "PeerDex", description: "Order-book DEX with both on-chain and ERC-7204 signed orders.", href: "/en/docs/app-peerdex" },
            { title: "CloseSky", description: "Complex NFT/token matching with signed-order settlement.", href: "/en/docs/app-closesky" },
            { title: "Flashman", description: "EIP-3156 flash-loan capability that turns wallet balances into configurable liquidity.", href: "/en/docs/app-flashman" },
            { title: "CryptoWill", description: "Off-chain will plans, heartbeat gating, and permissionless execution.", href: "/en/docs/app-cryptowill" },
            { title: "BlinkPay", description: "Low-friction session payments for agents, APIs, and subscriptions.", href: "/en/docs/app-blinkpay" }
          ]
        },
        {
          id: "categories",
          title: "What These Apps Signal",
          bullets: [
            "Moss is not only targeting DeFi. It also covers NFTs, payments, account automation, and wallet-native coordination.",
            "Many apps reuse system modules instead of implementing separate asset-control layers.",
            "The store app list is effectively a roadmap of Moss product direction."
          ]
        },
        {
          id: "drill-down",
          title: "Go Deeper",
          cards: [
            { title: "PeerDex Page", description: "Positioning, install requirements, TokenManage dependency, and addresses.", href: "/en/docs/app-peerdex" },
            { title: "CloseSky Page", description: "Mixed NFT/token matching and dual-Permit dependency.", href: "/en/docs/app-closesky" },
            { title: "Flashman Page", description: "Flash-loan pool model, use cases, and addresses.", href: "/en/docs/app-flashman" },
            { title: "CryptoWill Page", description: "Will plans, heartbeat windows, execution fee, and external execution mode.", href: "/en/docs/app-cryptowill" },
            { title: "BlinkPay Page", description: "Session authorization, x402 payment flow, and agent use cases.", href: "/en/docs/app-blinkpay" }
          ]
        }
      ]
    },
    {
      slug: "architecture",
      group: "platform",
      title: "Architecture Breakdown",
      summary: "Separate product surfaces, on-chain components, and execution layers so builders can form a clean mental model quickly.",
      eyebrow: "Architecture",
      hero: "If product surfaces and chain boundaries are unclear, deployment and integration become noisy fast.",
      sections: [
        {
          id: "product-map",
          title: "Product Surfaces",
          cards: [
            { title: "Account OS", description: "The account workspace for system capabilities and installed apps." },
            { title: "Store", description: "The discovery and distribution layer for app installation and App NFTs." },
            { title: "Labs", description: "An experimental surface for concept exploration and future scenarios." }
          ]
        },
        {
          id: "chain-layers",
          title: "On-chain Layers",
          bullets: [
            "MossAccountOS Factory / Implementation instantiate wallets.",
            "LogicRegistry handles dApp registration, AppNFT minting, and system-logic management.",
            "System apps provide the lowest capability layer for asset permissions.",
            "Regular dApp logic executes only after authorization in the wallet context."
          ]
        },
        {
          id: "ui-layers",
          title: "Product Layers",
          bullets: [
            "OS is the wallet workspace and main interaction surface.",
            "Store is the app installation and distribution surface.",
            "Labs explores possible futures and is not necessarily a production workflow commitment."
          ],
          visuals: [
            {
              src: "/diagrams/architecture-map.svg",
              alt: "Moss architecture map",
              caption: "Putting account, distribution, experimental surfaces, and on-chain execution on one map makes the product boundaries much easier to explain.",
            }
          ]
        }
      ]
    },
    {
      slug: "contracts-and-deployment",
      group: "ecosystem-dev",
      title: "Ecosystem App Development",
      summary: "For builders who want to ship apps in Moss, this page focuses on Store distribution, revenue structure, and the practical benefits for developers.",
      eyebrow: "Ecosystem Dev",
      hero: "Building in Moss is not only about deploying a logic contract. It is about plugging an app into the account, distribution, and monetization system.",
      sections: [
        {
          id: "why-build",
          title: "Why Build Inside Moss",
          paragraphs: [
            "Moss gives apps more than a traffic source. It gives them an existing account context. Before users open your app, they already have a wallet, assets, permissions, and an installation model.",
            "That lets developers spend less time rebuilding the account layer and more time on application logic."
          ],
          bullets: [
            "Account, asset, and permission semantics already exist.",
            "System modules can be reused instead of rebuilt.",
            "Apps can be installed into the account workspace through Store.",
            "Distribution and monetization have on-chain state behind them."
          ]
        },
        {
          id: "store-value",
          title: "What Store Gives Developers",
          bullets: [
            "Your app can be registered, discovered, and installed instead of spreading only through an external link.",
            "App NFT makes “this user installed your app” an on-chain fact.",
            "After install, the app reappears inside the account workspace instead of staying inside the store page.",
            "Store also handles revenue recording and distribution. It is not only a catalog."
          ],
          callout: {
            title: "Key point",
            body: "Store matters because it turns app distribution into part of the account system.",
            tone: "accent"
          }
        },
        {
          id: "economics",
          title: "Revenue and Builder Benefits",
          bullets: [
            "The current split is 70% for developers and 30% for the Store.",
            "Revenue is recorded per app rather than mixed across the whole ecosystem.",
            "Builders get a clearer path from installation to usage to revenue.",
            "Compared with a standalone site model, Moss can close the loop between install, usage, and monetization much more directly."
          ]
        },
        {
          id: "launch",
          title: "Questions to Resolve Before Launch",
          bullets: [
            "Should this app really live inside the account surface, or is it better as a standalone site?",
            "Can it reuse TokenManage / NFTManage instead of shipping its own asset-control layer?",
            "Does it need system capability, explicit authorization, App NFT installation, or some combination of the three?",
            "After installation, what should the entry and visible state look like inside the account workspace?"
          ]
        }
      ]
    },
    {
      slug: "frontend-and-sdk",
      group: "integrator",
      title: "Frontend and SDK Integration",
      summary: "Consolidate the current integration path so frontend teams and third-party builders can adopt Moss wallet capabilities cleanly.",
      eyebrow: "Integration",
      hero: "When integrating Moss, the real concerns are connector wiring, deployment metadata, permission checks, and smart-wallet context.",
      sections: [
        {
          id: "frontend-entry",
          title: "Frontend Entry Points",
          bullets: [
            "The wallet connection layer handles connector integration.",
            "`src/moss/lib/config.ts` aggregates environment variables and deployment metadata.",
            "`ConnectWallet` and related wallet components manage smart-wallet detection and creation.",
            "`MossWalletGate` is the guardrail for pages that require a Moss wallet context."
          ]
        },
        {
          id: "sdk-assets",
          title: "Reusable Packages",
          cards: [
            { title: "@mossdapp/sdk", description: "TypeScript SDK for dApps, including smart-wallet address computation and signature flows.", href: externalLinks.sdk, external: true },
            { title: "@mossdapp/abi", description: "Published ABI JSON exports for frontend and script reuse." },
            { title: "@mossdapp/deployments", description: "Per-network deployment metadata for integration and environment setup." }
          ]
        },
        {
          id: "integration-path",
          title: "Recommended Integration Path",
          steps: [
            { title: "Prepare chain addresses", description: "Confirm logic, App NFT, Registry, and system-module addresses first." },
            { title: "Wire the connector", description: "Make sure the frontend can enter the Moss smart-wallet context." },
            { title: "Check installation and permission state", description: "Before entering an app flow, verify App NFT ownership and authorization state." },
            { title: "Design around system modules", description: "Prefer reusing TokenManage / NFTManage rather than inventing a separate asset-control layer." }
          ],
          visuals: [
            {
              src: "/diagrams/sdk-integration.svg",
              alt: "SDK integration diagram",
              caption: "The integration boundary is between the dApp UI, the SDK layer, and the SCW execution context.",
            }
          ]
        }
      ]
    },
    {
      slug: "sdk-api",
      group: "integrator",
      title: "SDK API Reference",
      summary: "Based on the current `@mossdapp/sdk` interface and implementation, this page consolidates the most important connector and smart-wallet APIs.",
      eyebrow: "SDK",
      hero: "The SDK does not reinvent the account system. It safely exposes SCW addressability, transaction wrapping, and signature semantics to dApps.",
      sections: [
        {
          id: "exports",
          title: "Current Exports",
          bullets: [
            "`createMossConnector`: exposes a Moss connector to wagmi / RainbowKit.",
            "`MossEip1193Provider`: wraps a provider into an SCW-oriented EIP-1193 provider.",
            "`MossAccountOSSDK`: provides address computation, wallet creation, signing, and chain reads.",
            "`BlinkPay`: additional BlinkPay-oriented SDK exports."
          ]
        },
        {
          id: "install",
          title: "Install and Peer Dependencies",
          code: {
            language: "bash",
            caption: "Recommended installation shape",
            content: `npm i @mossdapp/sdk
npm i wagmi viem @rainbow-me/rainbowkit ethers @tanstack/react-query`
          }
        },
        {
          id: "connector",
          title: "Connector Integration",
          paragraphs: [
            "The core integration pattern is to use `createMossConnector` so RainbowKit / wagmi can expose the smart-wallet address instead of only the underlying EOA.",
            "That lets a dApp keep familiar wallet tooling while operating in the Moss smart-wallet context."
          ],
          visuals: [
            {
              src: "/diagrams/sdk-integration.svg",
              alt: "SDK integration diagram",
              caption: "The connector exists to bridge familiar wallet tooling into the Moss smart-wallet context.",
            }
          ],
          code: {
            language: "ts",
            caption: "Typical connector shape",
            content: `import { createMossConnector } from "@mossdapp/sdk";

const moss = createMossConnector({
  getOwnerProvider: () => (typeof window !== "undefined" ? window.ethereum : undefined),
  sdkConfig: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/KEY",
    chainId: 11155111,
    contracts: {
      factory: "0x...",
      implementation: "0x...",
      registry: "0x..."
    }
  }
});`
          }
        },
        {
          id: "wallet-api",
          title: "Common Wallet APIs",
          bullets: [
            "`getSmartWalletAddress(owner)`: computes the default wallet address with nonce 0.",
            "`computeSmartWalletAddress(owner, nonce)`: explicitly computes a predicted address for a nonce.",
            "`checkSmartWalletExists(scw)`: checks whether the target smart wallet is deployed.",
            "`createSmartWallet(owner)`: sends the creation transaction through the Factory.",
            "`waitForTransaction(txHash)`: waits for wallet-creation or other on-chain confirmation."
          ]
        },
        {
          id: "signature-api",
          title: "Signing and Permission APIs",
          bullets: [
            "`smartSignMessage(...)`: returns an ERC-1271-wrapped message signature.",
            "`smartSignTypedData(...)`: returns a typed-data signature suitable for contract verification.",
            "`wrap1271Signature(...)`: adds the outer EIP-712 / ERC-1271 wrapper to a signature.",
            "`getSystemApps()`: paginates through system logic addresses from the Registry.",
            "`isLogicUsable({ smartWallet, logic })`: checks block status, Registry state, authorization, and App NFT balance."
          ],
          callout: {
            title: "Easy to miss",
            body: "`isLogicUsable` is not just an allowlist check. It also considers Registry trust, system-logic flags, and App NFT ownership.",
            tone: "accent"
          }
        },
        {
          id: "next-reads",
          title: "Read Next",
          cards: [
            { title: "Frontend and SDK Integration", description: "How the SDK enters the OS frontend and app flows.", href: "/en/docs/frontend-and-sdk" },
            { title: "Networks and Address Matrix", description: "Current Sepolia addresses used across product surfaces.", href: "/en/docs/networks-and-addresses" }
          ]
        }
      ]
    },
    {
      slug: "networks-and-addresses",
      group: "integrator",
      title: "Networks and Address Matrix",
      summary: "Based on `packages/deployments/sepolia.json` and frontend config shape, this page captures the current chain-address baseline for the docs site.",
      eyebrow: "Networks",
      hero: "If the address baseline is unclear, OS, Store, frontend integrations, and SDK flows drift out of sync quickly.",
      sections: [
        {
          id: "network",
          title: "Current Default Network",
          bullets: [
            "Network: Sepolia",
            "chainId: 11155111",
            "block explorer: https://sepolia.etherscan.io",
            "The current OS and Store onboarding flows are documented around this testnet."
          ]
        },
        {
          id: "core-addresses",
          title: "Core System Addresses",
          bullets: [
            "MossAccountOSFactory: 0xa3954a7688518acF3bB74BEC2330d5966e87960A",
            "MossAccountOSImplementation: 0x65C4340E65144e2Da93dECfAFcb16a116C75C0d8",
            "LogicRegistry: 0xec2242300B40E3272Df9F65738465aeD9f7f4298",
            "TokenManage: 0xC2d2c2b8fffb4BFA2E609180363D3e41b855784E",
            "NftManage: 0x9334d17921768D95ca4062e7D4Bd1DEDD0d8281B"
          ]
        },
        {
          id: "test-assets",
          title: "Test Asset Addresses",
          bullets: [
            "TestUSDC: 0x9d4b951592c31dc042efDC4E1F8aE00718b96fe1",
            "TestUSDT: 0xdd7468f993c52fcF43Cef80c9a4e042de4920F2d",
            "MossToken: 0xC741d79714c6cd3684CF4217DB423D1cf79F6cec",
            "TestWETH: 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
            "NftDropOne: 0x15C0D103bb59aE9f01b8193e84311ba259083FcF",
            "NftDropTwo: 0x1e439692Be42748A57fbF8608F14116f5CAFA78F"
          ]
        },
        {
          id: "apps",
          title: "App Logic and App NFT Addresses",
          bullets: [
            "PeerDex: 0xe4C8B151ABbFC485CC31f7d6E5e26F280E9C2dF7 / AppNFT: 0x44ac3D37ed34f9c97cCcE84D1B1Dd53a5DcD16Ed",
            "Closesky: 0x2E137ffe6c94F6688Bc89Ac6699708e609B9Fc6d / AppNFT: 0xFdADfb032C551ffb354786d054045bC1dBB8f200",
            "Flashman: 0x5383dbE8E2A6a1dBC5f0E4edB78523fb13aC3d72 / AppNFT: 0x9b5cac28D3eC52d8C07285db366265934185E5e1",
            "CryptoWill: 0xDb66ba171263198554aF0AE31C21c6282C52b9D0 / AppNFT: 0x7c1Ba50bE5Db1CD0C8b88978f6001f7Dc5659f69",
            "BlinkPay: 0xBa313EEfD0CD713CB8f1e6AB1D49118a311014bb / AppNFT: 0x2514beCAa699DBEBea40f70d984Ec0D253B2b673"
          ]
        },
        {
          id: "source-of-truth",
          title: "Source-of-truth Order",
          bullets: [
            "Both frontend integration surfaces prefer environment variables first.",
            "If not explicitly overridden, they fall back to the shared `@mossdapp/deployments` package.",
            "When addresses change, you should check deployment metadata, OS env values, and Store env values together."
          ],
          callout: {
            title: "Recommended practice",
            body: "Treat `packages/deployments` as the shared baseline, and `.env.local` as the environment override layer.",
            tone: "warning"
          }
        }
      ]
    },
    {
      slug: "app-peerdex",
      group: "ecosystem",
      title: "PeerDex",
      summary: "PeerDex is the most representative in-wallet trading app in Moss today, centered on order books, signed orders, and TokenManage permissions.",
      eyebrow: "App",
      hero: "PeerDex is the clearest example of the Moss pattern: wallet context + App NFT installation + system-module reuse.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes PeerDex as a decentralized order-book exchange with both on-chain limit orders and ERC-7204 signed orders.",
            "The current onboarding flow also uses PeerDex as the clearest example of the Store -> App NFT -> OS usage loop."
          ]
        },
        {
          id: "requirements",
          title: "Install and Permission Requirements",
          bullets: [
            "Users need to mint the PeerDex App NFT in Store.",
            "The wallet needs enough gas and test assets.",
            "The logic must be usable: not blocked, and valid under the authorization / system / App NFT checks.",
            "Trading and approval semantics depend on TokenManage."
          ]
        },
      ]
    },
    {
      slug: "app-closesky",
      group: "ecosystem",
      title: "CloseSky",
      summary: "CloseSky handles complex NFT/token matching and is a strong example of Moss's dual-Permit asset model.",
      eyebrow: "App",
      hero: "CloseSky is not a simple NFT market. It is an app form that pulls both TokenManage and NFTManage into the settlement path.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes CloseSky as an app for NFT↔NFT and NFT↔Token matching.",
            "It is especially useful for explaining that Moss is not just about token transfers. It unifies multiple asset-permission models at the wallet layer."
          ]
        },
        {
          id: "requirements",
          title: "Dependencies",
          bullets: [
            "As an in-wallet app, it requires the corresponding App NFT.",
            "It relies on both ERC-7204 and ERC-7564 Permit flows.",
            "It depends on both TokenManage and NFTManage.",
            "It is a good page for explaining module reuse instead of app-specific asset layers."
          ]
        },
      ]
    },
    {
      slug: "app-flashman",
      group: "ecosystem",
      title: "Flashman",
      summary: "Flashman turns wallet assets into a configurable EIP-3156 flash-loan pool and represents the programmable-finance direction of Moss.",
      eyebrow: "App",
      hero: "Flashman shows that Moss apps are not only about trading and payments. They can also turn an account into programmable financial infrastructure.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes Flashman as an EIP-3156 flash-loan lender that turns wallet balances into a configurable lending pool.",
            "This is a very Moss-native app shape because the wallet itself is already a programmable execution environment."
          ]
        },
        {
          id: "requirements",
          title: "Usage Requirements",
          bullets: [
            "As an in-wallet app, it requires the corresponding App NFT.",
            "It depends on the wallet already holding lendable token assets.",
            "Frontend and deployment config also include `FlashmanTestBorrower` for testing scenarios."
          ]
        },
      ]
    },
    {
      slug: "app-cryptowill",
      group: "ecosystem",
      title: "CryptoWill",
      summary: "CryptoWill combines off-chain wills, heartbeat windows, and permissionless execution into a wallet-native automation flow.",
      eyebrow: "App",
      hero: "CryptoWill is a representative Moss app for account automation and off-chain signature orchestration, not just a normal dApp form.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes CryptoWill as an off-chain will-plan flow with permissionless executors and an automatic 1% execution fee.",
            "The current implementation adds more detail around heartbeat windows, grace periods, trustee endorsement, and claim flow."
          ]
        },
        {
          id: "requirements",
          title: "Key Mechanisms",
          bullets: [
            "Supports off-chain WillPlan signatures.",
            "Supports execution after a heartbeat inactivity window.",
            "Executors do not need prior account authorization, but they are constrained by the signed plan.",
            "It is best read together with wallet APIs and external-page execution modes."
          ]
        },
      ]
    },
    {
      slug: "app-blinkpay",
      group: "ecosystem",
      title: "BlinkPay",
      summary: "BlinkPay is Moss's payment layer for agents, APIs, and subscription-style flows, built around session keys and low-friction micropayments.",
      eyebrow: "App",
      hero: "BlinkPay shows how Moss can move from a human-operated smart wallet toward a machine-usable account surface.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes BlinkPay as a payment flow where one session authorization enables auto-signed micropayments for agents, APIs, and subscriptions.",
            "The current implementation also contains `api/x402` routes and BlinkPay SDK exports, showing that BlinkPay is moving toward a protocolized payment layer, not only a UI feature."
          ]
        },
        {
          id: "requirements",
          title: "Key Dependencies",
          bullets: [
            "It depends on wallet signing and session authorization.",
            "It is closely related to TokenManage payments and x402 flows.",
            "It is best documented as both a user-facing app and a builder-facing integration surface."
          ]
        },
      ]
    },
    {
      slug: "account-contract-api",
      group: "ecosystem-dev",
      title: "Account Contract API",
      summary: "A contract-level reference focused on the key interfaces of `MossAccountOS` and `MossAccountOSFactory`.",
      eyebrow: "API",
      hero: "To understand the real boundary of the Moss wallet, you need to understand how the Factory creates accounts and how the Account authorizes logic.",
      sections: [
        {
          id: "factory",
          title: "Factory Interfaces",
          bullets: [
            "`createAccount(bytes[] owners, address registry, uint256 nonce)`: creates an account instance.",
            "`getAddress(bytes[] owners, address registry, uint256 nonce)`: predicts the account address.",
            "`IMPLEMENTATION()`: returns the implementation address used by the factory."
          ],
          code: {
            language: "solidity",
            caption: "The most common account-creation semantics",
            content: `factory.createAccount(owners, registry, nonce);
factory.getAddress(owners, registry, nonce);`
          }
        },
        {
          id: "account",
          title: "Account Interfaces",
          bullets: [
            "`authorizeLogic(address)`: allows a logic contract to run in the wallet.",
            "`revokeLogic(address)`: revokes logic permissions.",
            "`isBlocked(address)`: checks whether a logic is blocked.",
            "`registry()`: returns the bound Registry.",
            "`registryTrusted()`: returns whether Registry system-logic decisions are trusted.",
            "`execute(...)` / `executeBatch(...)`: wallet execution entry points."
          ]
        },
        {
          id: "policy",
          title: "Permission Rules",
          bullets: [
            "New accounts default to `registryTrusted = true`.",
            "System logic can run directly when the Registry is trusted.",
            "Non-system logic usually still requires an explicit owner `authorizeLogic` call.",
            "If the logic is tied to an App NFT, the wallet must also hold that NFT."
          ],
          callout: {
            title: "Practical meaning",
            body: "Moss splits logic usability into three layers: system whitelist, owner authorization, and App NFT ownership.",
            tone: "accent"
          }
        }
      ]
    },
    {
      slug: "token-and-nft-permit-api",
      group: "ecosystem-dev",
      title: "Token / NFT Permit API",
      summary: "A focused reference for TokenManage and NFTManage permit-style methods and signed execution flows.",
      eyebrow: "API",
      hero: "The key asset story in Moss is not transfer alone. It is how system modules unify permissions, signatures, and execution.",
      sections: [
        {
          id: "tokenmanage-api",
          title: "TokenManage",
          bullets: [
            "`tokenApprove(asset, spender, value)`: set allowance.",
            "`tokenApproveForAll(spender, approved)`: set wallet-wide approval.",
            "`tokenTransfer(asset, to, value)`: direct transfer.",
            "`tokenTransferNonce(asset, caller)`: read signed-transfer nonce.",
            "`tokenTransferWithSig(asset, to, value, deadline, signature)`: submit a signed transfer."
          ]
        },
        {
          id: "nftmanage-api",
          title: "NFTManage",
          bullets: [
            "`nftApproveWithSig(asset, operator, tokenId, deadline, signature)`: single-NFT signed approval.",
            "`nftSetApprovalForOneAllWithSig(asset, operator, approved, deadline, signature)`: collection-scoped signed approval.",
            "`nftSetApprovalForAllAllWithSig(operator, approved, deadline, signature)`: global NFT signed approval."
          ]
        },
        {
          id: "signing-model",
          title: "Signing Model",
          bullets: [
            "Both TokenManage and NFTManage permits rely on Moss dual-layer EIP-712 / ERC-1271 wrapping.",
            "The frontend reads nonces first, then uses wallet signing to produce the outer safe signature.",
            "That makes payments, listings, approvals, and delegated execution possible without directly moving the owner context each time."
          ]
        }
      ]
    },
    {
      slug: "cryptowill-api",
      group: "ecosystem-dev",
      title: "CryptoWill API",
      summary: "A reference page for CryptoWill owner-side configuration and executor-side execution methods.",
      eyebrow: "API",
      hero: "The complexity of CryptoWill is not in the UI. It is in how owner, executor, and beneficiary coordinate around one signed plan.",
      sections: [
        {
          id: "owner-api",
          title: "Owner-side Methods",
          bullets: [
            "`configureInactivity(inactiveDelay, gracePeriod)`: configure inactivity windows.",
            "`ping()`: refresh heartbeat time.",
            "`setPauseState(bool)`: toggle pause state.",
            "`resetInactivity()`: reset inactivity state."
          ]
        },
        {
          id: "executor-api",
          title: "Executor-side Methods",
          bullets: [
            "`executeWill(plan, tokens[], sigOwner, trusteeAddr, sigTrustee)`: execute the will after the window closes.",
            "`claim(...)`: claim ERC-20 balances allocated by a will execution.",
            "`usedPlan[planId]` semantics prevent replay."
          ]
        },
        {
          id: "operational-rules",
          title: "Execution Rules",
          bullets: [
            "Executors can be arbitrary addresses.",
            "Execution fee is capped at 1%.",
            "ERC-20 distributions can be claimed later, while NFTs transfer immediately.",
            "When `requiresTrustee = true`, trustee endorsement is mandatory."
          ]
        }
      ]
    },
    {
      slug: "onboarding-flow",
      group: "start",
      title: "Onboarding Flow",
      summary: "Turn the current OS onboarding into a standard flow for demos, sales, and internal testing.",
      eyebrow: "Flow",
      hero: "The goal of this flow is not to show one isolated feature. It is to let users understand the Moss product loop in under five minutes.",
      sections: [
        {
          id: "steps",
          title: "Standard Demo Path",
          steps: [
            { title: "Enter OS and connect a wallet", description: "Users enter with an EOA first, but the destination is a Moss Wallet." },
            { title: "Create a Moss Wallet", description: "Make the user understand that the wallet is the container for all later capabilities." },
            { title: "Claim test assets", description: "Prepare for later payments, approvals, trading, and app installation." },
            { title: "Mint one App NFT in Store", description: "PeerDex is usually the clearest first example." },
            { title: "Return to OS and open the app", description: "Show that installation changes the account workspace, not just a web menu." }
          ],
          visuals: [
            {
              src: "/diagrams/onboarding-flow.svg",
              alt: "Onboarding flow diagram",
              caption: "This is the fastest way to demonstrate the account-centered Moss loop to a new user.",
            }
          ]
        },
        {
          id: "demo-goal",
          title: "What This Flow Must Explain",
          bullets: [
            "Moss is not a single dApp.",
            "Moss delivers the account layer before the app layer.",
            "Installation is on-chain state, not frontend-only state.",
            "System modules let apps avoid building separate asset layers."
          ]
        }
      ]
    },
    {
      slug: "store-install-flow",
      group: "start",
      title: "Store Install Flow",
      summary: "A flow page for App NFT installation scenarios, designed to explain the coupling between Store and OS.",
      eyebrow: "Flow",
      hero: "The Store is valuable not because it lists apps, but because it moves installation, distribution, and monetization onto the chain.",
      sections: [
        {
          id: "steps",
          title: "Installation Path",
          steps: [
            { title: "Open the app detail page", description: "Review app summary, mint price, and App NFT information." },
            { title: "Submit the mint transaction", description: "The user wallet mints the App NFT on-chain." },
            { title: "Wait for confirmation", description: "Installation becomes chain state instead of local cache." },
            { title: "Return to OS and refresh", description: "In-wallet apps appear or become usable when authorization and NFT conditions are satisfied." }
          ],
          visuals: [
            {
              src: "/diagrams/store-install-flow.svg",
              alt: "Store install flow diagram",
              caption: "The critical transition is from Store minting to account-visible capability, not just from page A to page B.",
            }
          ]
        },
        {
          id: "what-to-check",
          title: "Troubleshooting Checks",
          bullets: [
            "Are you on the correct network?",
            "Is there enough gas?",
            "Is the logic correctly registered in the Registry?",
            "Does the App NFT address match the frontend configuration?"
          ]
        }
      ]
    },
    {
      slug: "blinkpay-flow",
      group: "ecosystem",
      title: "BlinkPay Payment Flow",
      summary: "A typical BlinkPay path from session grant to auto-signed payment.",
      eyebrow: "Flow",
      hero: "The point of BlinkPay is not one payment. It is reducing repeated confirmations into one authorization followed by low-friction payment execution.",
      sections: [
        {
          id: "steps",
          title: "Typical Payment Path",
          steps: [
            { title: "Create or obtain a session grant", description: "The owner authorizes a session or payment scope first." },
            { title: "A server or agent initiates a charge", description: "The request carries the relevant session context and payment target." },
            { title: "Run the signing and validation path", description: "Wallet-signing semantics and system modules jointly guarantee validity." },
            { title: "Finalize micropayment settlement", description: "This fits APIs, AI agents, subscriptions, and x402-style payment flows." }
          ],
          visuals: [
            {
              src: "/diagrams/blinkpay-flow.svg",
              alt: "BlinkPay flow diagram",
              caption: "BlinkPay compresses repeated confirmations into one authorization followed by low-friction settlement.",
            }
          ]
        },
        {
          id: "doc-angle",
          title: "What the Docs Should Emphasize",
          bullets: [
            "One authorization, many low-friction payments.",
            "Strong relation to TokenManage and x402 routes.",
            "It is both a product feature and a developer integration surface."
          ]
        }
      ]
    },
    {
      slug: "cryptowill-flow",
      group: "ecosystem",
      title: "CryptoWill Execution Flow",
      summary: "Break owner configuration, offline signing, executor triggering, and beneficiary claiming into one full flow.",
      eyebrow: "Flow",
      hero: "The core of CryptoWill is not one function. It is a time-based, role-based flow spanning on-chain and off-chain boundaries.",
      sections: [
        {
          id: "steps",
          title: "Typical Execution Path",
          steps: [
            { title: "Owner configures inactivity parameters", description: "Set inactiveDelay and gracePeriod, then keep heartbeat active." },
            { title: "Owner signs the WillPlan offline", description: "The plan carries beneficiaries, assets, document hash, and time constraints." },
            { title: "Add trustee endorsement when required", description: "If the plan requires a trustee, an additional EIP-712 signature is needed." },
            { title: "After the window closes, any executor calls executeWill", description: "The executor can collect a limited execution fee." },
            { title: "Beneficiaries or executors claim later", description: "ERC-20 balances may be claimed later, while NFTs transfer immediately." }
          ],
          visuals: [
            {
              src: "/diagrams/cryptowill-flow.svg",
              alt: "CryptoWill execution flow diagram",
              caption: "CryptoWill is easier to reason about as a role-and-time flow than as a single function call.",
            }
          ]
        },
        {
          id: "risk-points",
          title: "Implementation Concerns",
          bullets: [
            "Do not ignore planId replay protection.",
            "Heartbeat logic determines when execution becomes valid.",
            "A missing trustee signature invalidates trustee-required plans.",
            "The `tokens[]` array must include actual ERC-20 assets to distribute."
          ]
        }
      ]
    }
  ]
};

export const docGroups = {
  zh: [
    { title: siteCopy.zh.navGroups.start, key: "start" },
    { title: siteCopy.zh.navGroups.platform, key: "platform" },
    { title: siteCopy.zh.navGroups.ecosystem, key: "ecosystem" },
    { title: siteCopy.zh.navGroups.ecosystemDev, key: "ecosystem-dev" },
    { title: siteCopy.zh.navGroups.integrator, key: "integrator" },
  ],
  en: [
    { title: siteCopy.en.navGroups.start, key: "start" },
    { title: siteCopy.en.navGroups.platform, key: "platform" },
    { title: siteCopy.en.navGroups.ecosystem, key: "ecosystem" },
    { title: siteCopy.en.navGroups.ecosystemDev, key: "ecosystem-dev" },
    { title: siteCopy.en.navGroups.integrator, key: "integrator" },
  ],
} as const;

const docOrder: Record<Locale, string[]> = {
  zh: [
    "overview",
    "getting-started",
    "account-os",
    "store-and-app-nft",
    "system-modules",
    "architecture",
    "ecosystem-apps",
    "app-peerdex",
    "app-closesky",
    "app-flashman",
    "app-cryptowill",
    "app-blinkpay",
    "contracts-and-deployment",
    "token-and-nft-permit-api",
    "frontend-and-sdk",
  ],
  en: [
    "overview",
    "getting-started",
    "account-os",
    "store-and-app-nft",
    "system-modules",
    "architecture",
    "ecosystem-apps",
    "app-peerdex",
    "app-closesky",
    "app-flashman",
    "app-cryptowill",
    "app-blinkpay",
    "contracts-and-deployment",
    "token-and-nft-permit-api",
    "frontend-and-sdk",
  ],
};

export function getDocs(locale: Locale) {
  const order = docOrder[locale];
  const rank = new Map(order.map((slug, index) => [slug, index]));

  return docsByLocale[locale]
    .filter((doc) => rank.has(doc.slug))
    .sort((a, b) => (rank.get(a.slug) ?? 0) - (rank.get(b.slug) ?? 0));
}

export function getDocBySlug(locale: Locale, slug: string) {
  return getDocs(locale).find((doc) => doc.slug === slug);
}

export function getDocIndex(locale: Locale, slug: string) {
  return getDocs(locale).findIndex((doc) => doc.slug === slug);
}

export function getAdjacentDocs(locale: Locale, slug: string) {
  const docs = getDocs(locale);
  const index = getDocIndex(locale, slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? docs[index - 1] : null,
    next: index < docs.length - 1 ? docs[index + 1] : null,
  };
}
