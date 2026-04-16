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
  website: "https://1do.app",
  docs: "https://docs.1do.app",
  app: "https://1do.app/app",
  store: "https://store.1do.app/en",
  labs: "https://labs.1do.app",
  sdk: "https://www.npmjs.com/package/@1doapp/sdk",
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
      description: "最适合演示 1do 钱包内安装式交易体验的代表应用。",
      icon: "/apps/peerdex.svg",
      image: "/diagrams/mock-peerdex.svg",
      href: "/zh/docs/app-peerdex",
    },
    {
      title: "CloseSky",
      category: "NFT + Token",
      description: "展示一个账户如何同时处理 NFT 和 Token 的复杂交易与结算。",
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
      description: "The clearest app for demonstrating the in-wallet install-and-trade pattern in 1do.",
      icon: "/apps/peerdex.svg",
      image: "/diagrams/mock-peerdex.svg",
      href: "/en/docs/app-peerdex",
    },
    {
      title: "CloseSky",
      category: "NFT + Token",
      description: "A good page for showing how one account handles complex NFT and token settlement together.",
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
    homeEyebrow: "1do Documentation",
    homeTitle: "1DO\nBOOK",
    homeIntro:
      "这套文档优先帮助普通用户理解 1do：它是什么、怎么开始、应用如何安装，以及为什么应用会回到 Runtime 里使用。",
    homeCta: "开始阅读",
    homeSecondaryCta: "打开 Runtime",
    homeStoreCta: "打开 Store",
    audienceTitle: "按你现在的问题进入",
    audienceCards: [
      {
        title: "1do 到底是什么",
        description: "先建立正确心智模型，理解钱包、Store 和应用之间到底是什么关系。",
        href: "/zh/docs/overview",
      },
      {
        title: "第一次怎么开始",
        description: "沿着最短路径完成连接钱包、启用 1do runtime、安装应用和开始使用。",
        href: "/zh/docs/getting-started",
      },
      {
        title: "Runtime 里能做什么",
        description: "直接看当前代表性应用，理解交易、支付、自动化这些能力怎样进入 Runtime。",
        href: "/zh/docs/ecosystem-apps",
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
      "先用普通用户能读懂的方式解释 1do，而不是先抛内部术语。",
      "把过时的安装模型和偏内部实现的旧术语从核心路径里移走。",
      "把钱包、Store、应用安装和实际使用串成一条连续体验路径。",
    ],
    readingMapEyebrow: "Reading Map",
    readingMapTitle: "从认识 1do 到第一次装应用",
    browseDocs: "浏览全部文档",
    docsEyebrow: "Docs",
    docsTitle: "1do 文档总览",
    docsIntro: "这套文档先服务普通用户理解 1do，再承接开发和集成说明。当前仍以代码内数据驱动，方便快速调整叙事和结构。",
    navTitle: "1do 文档目录",
    navSubtitle: "Navigation",
    navGroups: {
      start: "先理解",
      platform: "核心机制",
      ecosystem: "应用案例",
      ecosystemDev: "进阶阅读",
      integrator: "集成说明",
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
    homeEyebrow: "1do Documentation",
    homeTitle: "1DO\nBOOK",
    homeIntro:
      "This documentation is written for ordinary users first: what 1do is, how to get started, how app installation works now, and why apps return to the Runtime.",
    homeCta: "Start Reading",
    homeSecondaryCta: "Open Runtime",
    homeStoreCta: "Open Store",
    audienceTitle: "Start from Your Question",
    audienceCards: [
      {
        title: "What 1do Is",
        description: "Build the right mental model for the wallet, the Store, and in-account apps before anything else.",
        href: "/en/docs/overview",
      },
      {
        title: "How to Start",
        description: "Follow the shortest path from wallet connection to 1do Wallet creation, installation, and first use.",
        href: "/en/docs/getting-started",
      },
      {
        title: "What Runtime Enables",
        description: "See the current app set and understand how trading, payments, and automation enter the Runtime.",
        href: "/en/docs/ecosystem-apps",
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
      "It explains 1do in language ordinary users can follow instead of starting from internal implementation terms.",
      "It removes outdated installation framing and overly internal terminology from the core learning path.",
      "It connects wallet, Store, app installation, and actual usage into one continuous journey.",
    ],
    readingMapEyebrow: "Reading Map",
    readingMapTitle: "From understanding 1do to installing the first app",
    browseDocs: "Browse all docs",
    docsEyebrow: "Docs",
    docsTitle: "1do Docs Index",
    docsIntro: "This documentation is designed to help ordinary users understand 1do first, then move into advanced builder and integration material. It stays data-driven for now so the structure can keep evolving quickly.",
    navTitle: "1do Navigation",
    navSubtitle: "Navigation",
    navGroups: {
      start: "Start Here",
      platform: "Core Model",
      ecosystem: "App Cases",
      ecosystemDev: "Advanced",
      integrator: "Integration",
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
      title: "1do 是什么",
      summary: "先建立对 1do 的整体认知：它不是一个孤立 dApp，而是一个把智能钱包、应用安装和账户内使用串起来的产品。",
      eyebrow: "1do Book",
      hero: "1do 先给用户一个 Runtime，再把应用装进这个运行环境里。",
      sections: [
        {
          id: "what-is-1do",
          title: "1do 是什么",
          paragraphs: [
            "从用户视角看，1do 不是让你在很多 dApp 之间来回跳转，而是先给你一个自己的 1do Wallet，再让应用进入这个钱包环境里工作。",
            "1do 里最重要的不是某一个单独页面，而是 Runtime 本身。你连接自己的钱包、启用 1do runtime、在 Store 里安装应用，然后回到 Runtime 里继续使用它们。",
            "这意味着应用不再只是外部站点入口，而会成为你账户能力的一部分。资产、授权、支付和应用入口都围绕同一个账户上下文展开。",
            "这件事重要，是因为 Web3 长期缺少的不是更多入口，而是一个连续、统一、能积累状态的用户运行环境。"
          ],
          cards: [
            { title: "1do Runtime", description: "应用的运行环境。钱包、资产、应用和设置都从这里进入。" },
            { title: "Store", description: "应用被发现、安装并带回钱包的地方。" }
          ]
        },
        {
          id: "loop",
          title: "产品闭环",
          steps: [
            { title: "连接钱包并启用 1do runtime", description: "先从你已有的钱包进入；如果地址还未启用 7702，就先完成 runtime 激活。" },
            { title: "在 Store 安装应用", description: "用户在 Store 里发现应用并完成安装，安装记录会与这个账户绑定。" },
            { title: "回到 Runtime 里使用", description: "安装完成后，应用会重新出现在 Runtime 里，而不是停留在商店页。" },
            { title: "持续复用同一个运行环境", description: "之后的资产、授权、支付和应用入口都围绕同一个 1do Wallet 持续累积。" }
          ],
          callout: {
            title: "一个关键判断",
            body: "1do 不是把很多网页入口塞进钱包，而是在做一个可以安装应用、持续使用和逐渐长出能力的账户环境。",
            tone: "accent"
          }
        },
        {
          id: "concepts",
          title: "关键概念",
          bullets: [
            "1do Wallet: 你在 1do 里真正使用的智能钱包，也是应用运行的账户边界。",
            "1do Runtime: 应用的运行环境。你不是先进某个 dApp，而是先进入应用运行所在的环境。",
            "Store: 应用的发现和安装入口。",
            "安装: 把某个应用和你的账户建立正式关系。",
            "启用: 安装后让这个应用在当前钱包里可见、可用。"
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
      hero: "最短路径是：连接钱包 -> 启用 1do runtime -> 准备 gas 与测试资产 -> 在 Store 安装应用 -> 回到 Runtime 里使用。",
      sections: [
        {
          id: "journey",
          title: "首条体验路径",
          steps: [
            { title: "连接任意 EOA 钱包", description: "先用你已有的钱包进入 1do，普通钱包是进入 1do 的起点。" },
            { title: "启用 1do runtime", description: "连接成功后，如果当前地址还没有启用 7702 runtime，界面会引导你完成激活。" },
            { title: "准备 Sepolia ETH", description: "当前演示路径默认围绕 Ethereum Sepolia，用户需要先准备 gas。" },
            { title: "领取测试资产", description: "通过 Faucet 获取 USDC、USDT、1DO 以及测试 NFT，便于体验后续应用。" },
            { title: "在 Store 安装应用", description: "选择一个应用完成安装，Store 会把这次安装与当前账户绑定。" },
            { title: "回到 Runtime 使用应用", description: "安装确认后刷新 Runtime，应用会出现在你的 1do Wallet 里。" }
          ]
        },
        {
          id: "assumptions",
          title: "当前体验假设",
          bullets: [
            "默认演示网络是 Ethereum Sepolia。",
            "账户里的基础资产能力是钱包原生能力，不需要通过 Store 单独安装。",
            "部分应用既可能有独立站，也可能有钱包内入口，但真正连续的体验发生在 Runtime 里。",
            "当前的应用安装模型是 Store 安装 + 钱包启用。"
          ]
        },
        {
          id: "faq",
          title: "常见问题",
          bullets: [
            "看不到 7702 激活入口: 多半是当前网络不在 Sepolia，或者这个地址已经启用了 1do runtime。",
            "Faucet / mint 失败: 先确认新钱包内是否有足够 gas。",
            "安装后应用未显示: 等待确认并刷新 Runtime，必要时再等 10 到 30 秒。"
          ],
          links: [
            { label: "1do Runtime", href: externalLinks.app, external: true },
            { label: "1do Store", href: externalLinks.store, external: true },
            { label: "SDK Package", href: externalLinks.sdk, external: true }
          ]
        }
      ]
    },
    {
      slug: "runtime",
      group: "platform",
      title: "1do Runtime",
      summary: "理解 Runtime 的产品定位：它不是登录后的钱包页面，而是应用在 1do Wallet 里的运行环境。",
      eyebrow: "Platform",
      hero: "在 1do 里，Runtime 不是附属层，而是应用真正运行和持续被使用的环境。",
      sections: [
        {
          id: "role",
          title: "Runtime 承担什么角色",
          paragraphs: [
            "1do Runtime 是应用在 1do Wallet 里运行的环境。它的职责不是只展示余额或地址，而是承接应用执行、资产能力和安装后的入口。",
            "用户不是先进入某个单独应用再连接钱包，而是先进入 Runtime，再从这个环境里调用资产能力、已安装应用和账户设置。"
          ],
          bullets: [
            "它是应用运行环境。",
            "它统一承接资产、身份、应用和设置。",
            "它把权限检查和执行上下文收拢到同一个运行环境里。",
            "它让安装后的能力直接在 Runtime 里出现，而不是停留在外部站点。"
          ]
        },
        {
          id: "account-first",
          title: "为什么需要 Runtime",
          paragraphs: [
            "如果没有统一 Runtime，每个应用就都要自己处理资产、权限和交互流程。1do 反过来做：先建立统一运行环境，再让应用复用同一个上下文。",
            "这样支付、Token、NFT、安装状态和自动化能力都可以沉淀在同一个 Runtime 里，而不是被拆散在不同页面和不同入口里。"
          ],
          bullets: [
            "资产能力不必被每个应用重复实现。",
            "权限和安装状态可以在 Runtime 中持续存在。",
            "应用安装后会直接变成 Runtime 的一部分。",
            "用户面对的是一个连续环境，而不是一组断开的站点。"
          ],
          callout: {
            title: "设计判断",
            body: "1do 的关键不是做一个更像 App 的钱包界面，而是提供一个让应用长期运行的 Runtime。",
            tone: "accent"
          }
        },
        {
          id: "workspace",
          title: "Runtime 里到底组织了什么",
          paragraphs: [
            "一个成立的 Runtime，至少要把几类能力放进同一个运行环境里：钱包原生能力、安装后出现的应用能力、账户自己的资产状态，以及安全与设置入口。",
            "这样用户在使用 1do 时，感知到的是“这个 Runtime 现在能做什么”，而不是“我又跳到了哪个站点”。"
          ],
          bullets: [
            "钱包原生能力：例如 Token 和 NFT 管理这类默认可用能力。",
            "已安装应用: 通过 Store 安装后，出现在 Runtime 里的应用入口。",
            "账户状态: 地址、资产、授权、会话和可执行能力。",
            "设置与安全: 网络、恢复、权限管理等长期能力。"
          ]
        }
      ]
    },
    {
      slug: "store-installation",
      group: "platform",
      title: "Store 与应用安装",
      summary: "理解 Store 在今天 1do 里的作用：发现应用、完成安装，并把应用带回 Runtime 里使用。",
      eyebrow: "Distribution",
      hero: "在今天的 1do 里，Store 负责应用发现和安装入口，钱包负责把应用真正启用起来。",
      sections: [
        {
          id: "store-role",
          title: "Store 负责什么",
          paragraphs: [
            "Store 的核心不是一个普通应用目录，而是和钱包运行时协同工作的安装入口。",
            "当前模型里，`LogicRegistry` 负责应用注册与安装 entitlement，`installApp(wallet, logic)` 负责给某个账户授予安装记录，钱包侧的 `enableApp(app)` 负责把已安装应用真正启用起来。"
          ],
          bullets: [
            "应用先被注册到 Store。",
            "用户从 Store 发起安装，而不是手动输入任意地址安装。",
            "安装记录和钱包本地启用是两层状态。",
            "当前模型里没有单独的 NFT-license 合约。"
          ]
        },
        {
          id: "economics",
          title: "为什么安装要经过 Store",
          bullets: [
            "普通用户不需要理解合约地址，直接从 Store 安装即可。",
            "Store 决定哪些应用属于正常产品路径，降低任意地址安装的风险。",
            "安装记录是链上可验证状态，而不是前端自己记一条“已安装”。",
            "安装完成后，钱包仍然需要把应用启用，才能在 Runtime 里真正可见。"
          ],
          callout: {
            title: "现在该怎么理解安装",
            body: "在今天的 1do 里，发布、安装、启用是三件不同的事：Store 负责安装入口，钱包负责启用，真正的使用发生在 Runtime 里。",
            tone: "accent"
          }
        },
        {
          id: "contracts",
          title: "用户实际感受到的安装过程",
          bullets: [
            "先在 Store 查看应用详情和安装价格。",
            "点击安装后，Store 会为当前账户提交 `installApp`。",
            "钱包随后执行 `enableApp`，让它变成 Runtime 里的可用入口。",
            "之后用户回到 Runtime，就能继续使用这个应用。"
          ]
        }
      ]
    },
    {
      slug: "wallet-native-capabilities",
      group: "platform",
      title: "钱包原生能力",
      summary: "理解 1do 里哪些能力本来就属于钱包自己，而不是必须先安装一个应用才能拥有。",
      eyebrow: "Permissions",
      hero: "在今天的 1do 里，基础资产能力越来越像钱包原生能力，而不是另外一层需要单独安装的特殊应用。",
      sections: [
        {
          id: "tokenmanage",
          title: "Token 能力",
          paragraphs: [
            "1do 把常见的 Token 操作理解为钱包自己的基础能力，而不是每个应用都重新实现一遍。",
            "这意味着应用在进入账户上下文后，可以复用同一套 Token 授权、转账和签名语义。"
          ],
          bullets: [
            "Token 授权不必由每个应用各自重复设计。",
            "转账和批量授权可以共享同一套账户语义。",
            "用户理解的是“我的钱包允许了什么”，而不是“某个应用内部怎么记状态”。"
          ]
        },
        {
          id: "nftmanage",
          title: "NFT 能力",
          paragraphs: [
            "NFT 相关能力也是同样逻辑。1do 不是让每个 NFT 应用各自拥有一套孤立资产层，而是尽量把能力收回到账户层。",
            "这样像授权、挂单、代理执行这类行为，就能围绕同一个钱包上下文工作。"
          ],
          bullets: [
            "适合 NFT 市场和签名挂单场景。",
            "也适合代理执行和延迟执行这类账户能力。",
            "用户看到的是连续的钱包体验，而不是每个 NFT 产品各讲一套规则。"
          ]
        },
        {
          id: "auth",
          title: "应用可用的前提",
          bullets: [
            "应用先要存在于 Store 的正常安装路径里。",
            "账户需要先安装，再在钱包里启用。",
            "具体操作仍然可能需要用户签名或权限确认。",
            "用户也应该能够在之后关闭、停用或撤回某些能力。"
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
      hero: "1do 的应用不是随机拼贴，它们围绕交易、支付、资产管理和账户自动化几个方向聚集。",
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
            "1do 不只想服务 DeFi，也在覆盖 NFT、支付、账户自动化和现实协作场景。",
            "很多应用都共享同一个钱包和资产上下文，而不是各自重新造一个账户层。",
            "Store 里的应用列表本身就是 1do 产品方向的路线图。"
          ]
        },
        {
          id: "drill-down",
          title: "继续深入",
          cards: [
            { title: "PeerDex 说明页", description: "产品定位、安装条件和钱包内交易体验。", href: "/zh/docs/app-peerdex" },
            { title: "CloseSky 说明页", description: "NFT / Token 混合撮合与多资产结算。", href: "/zh/docs/app-closesky" },
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
      title: "1do 如何协同工作",
      summary: "把钱包、Store 和应用之间的关系拆开讲清楚，先建立稳定心智模型，再去理解更深的实现细节。",
      eyebrow: "Architecture",
      hero: "先把产品表面和安装关系讲清楚，用户就不会把 1do 理解成几个彼此断开的站点。",
      sections: [
        {
          id: "product-map",
          title: "用户先看到的三层",
          cards: [
            { title: "1do Wallet / Runtime", description: "应用运行环境，是用户真正持续停留和使用的地方。" },
            { title: "Store", description: "负责应用发现、安装和把能力带回钱包。" },
            { title: "Apps", description: "交易、支付、自动化等能力最终都在账户上下文里被调用。" }
          ]
        },
        {
          id: "chain-layers",
          title: "底层如何配合",
          bullets: [
            "智能钱包保存资产、安装状态和账户执行上下文。",
            "Store / Registry 决定哪些应用进入正常安装路径。",
            "安装和启用分开，目的是让“被发现”和“在钱包里实际可用”成为两层状态。",
            "应用真正运行时，仍然是在用户自己的钱包上下文里完成。"
          ]
        },
        {
          id: "ui-layers",
          title: "产品表面",
          bullets: [
            "1do Runtime 是主交互层。",
            "Store 是安装层。",
            "应用页和具体流程页，是帮助用户理解“装完之后我能做什么”的能力说明。"
          ],
          visuals: [
            {
              src: "/diagrams/architecture-map.svg",
              alt: "1do architecture map",
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
      summary: "面向想更深入理解 1do 应用模型的读者，重点说明安装分发、收益结构和为什么应用会回到账户里。",
      eyebrow: "Ecosystem Dev",
      hero: "在 1do 里做应用，不只是部署一个 logic，而是把应用接入账户、安装分发和收益体系。",
      sections: [
        {
          id: "why-build",
          title: "为什么要在 1do 里做生态应用",
          paragraphs: [
            "1do 给应用的不是单一流量入口，而是一个已经成立的账户上下文。用户进入应用前，已经有钱包、资产、权限体系和安装机制。",
            "这意味着开发者不必从零重新搭一套账户层，而是可以把精力放在应用逻辑本身。"
          ],
          bullets: [
            "账户、资产和权限语义已经存在。",
            "系统模块可复用，减少重复造轮子。",
            "应用可以通过 Store 被安装进 Runtime。",
            "分发和收益关系有链上状态承接。"
          ]
        },
        {
          id: "store-value",
          title: "Store 给开发者什么",
          bullets: [
            "应用可以被注册、展示和安装，而不是只靠一个外部链接传播。",
            "安装记录让“某个账户已经安装你的应用”成为可验证状态。",
            "用户安装后，应用能回到 Runtime，而不是停留在商店页。",
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
            "相比独立站模式，1do 更容易把“安装 -> 使用 -> 收益”接成闭环。"
          ]
        },
        {
          id: "launch",
          title: "开发时要想清楚的事",
          bullets: [
            "你的应用是否真的适合账户内使用，而不是做成独立站更自然。",
            "是否尽量复用了钱包原生资产能力，而不是自建资产控制层。",
            "你的应用需要什么安装、启用和权限路径。",
            "用户安装后，应用在 Runtime 里应该以什么入口和状态出现。"
          ]
        }
      ]
    },
    {
      slug: "frontend-and-sdk",
      group: "integrator",
      title: "前端与 SDK 接入",
      summary: "整理当前前端接入方式，方便前端或第三方 dApp 对接 1do 钱包能力。",
      eyebrow: "Integration",
      hero: "对接 1do 时，真正重要的是部署信息、权限检查和 7702 runtime 上下文。",
      sections: [
        {
          id: "frontend-entry",
          title: "前端接入点",
          bullets: [
            "钱包连接层负责接入常规 EOA 钱包。",
            "`src/runtime/lib/config.ts` 汇总环境变量和部署信息。",
            "`Activate7702Button` 与相关 wallet 组件负责 runtime 检测与激活。",
            "`WalletGate` 用于把部分页面限制在 1do Wallet 环境内。"
          ]
        },
        {
          id: "sdk-assets",
          title: "可复用包",
          cards: [
            { title: "@1doapp/sdk", description: "面向 dApp 的 TS SDK，可复用 smart wallet 地址计算和签名能力。", href: externalLinks.sdk, external: true },
            { title: "@1doapp/abi", description: "对外暴露 ABI JSON，可被前端和脚本复用。" },
            { title: "@1doapp/deployments", description: "按网络组织部署信息，用于环境配置和集成。" }
          ]
        },
        {
          id: "integration-path",
          title: "接入新应用的推荐路径",
          steps: [
            { title: "准备链上地址", description: "先确认逻辑合约、Registry 和钱包相关地址。" },
            { title: "接入钱包连接", description: "让前端先连接 EOA，再显式检测当前地址是否启用了 1do runtime。" },
            { title: "读取安装与启用状态", description: "在进入应用前先检查钱包是否已经安装并启用该应用。" },
            { title: "根据钱包原生能力设计交互", description: "尽量复用钱包原生 Token / NFT 能力，而不是重复设计资产控制层。" }
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
      summary: "基于当前 SDK 接口与实现，整理最关键的 7702 runtime signing API。",
      eyebrow: "SDK",
      hero: "SDK 的职责不是替你重新发明账户系统，而是把 7702 runtime 的签名语义安全地暴露给 dApp。",
      sections: [
        {
          id: "exports",
          title: "当前导出",
          bullets: [
            "`BlinkPay`: 导出 BlinkPay session grant 与 settlement intent 的 typed-data helpers。",
            "runtime signing helpers: 由前端直接连接 EOA，并显式调用 7702 钱包能力。",
            "connector/provider 适配层已移除，不再维护 wagmi / RainbowKit 自定义 connector。"
          ]
        },
        {
          id: "install",
          title: "安装与 peer 依赖",
          code: {
            language: "bash",
            caption: "当前推荐安装方式",
            content: `npm i @1doapp/sdk
npm i ethers`
          }
        },
        {
          id: "runtime-signing",
          title: "7702 runtime 集成",
          paragraphs: [
            "当前集成路径不再把 1do 包装成自定义钱包 connector。前端连接 EOA 后，直接通过 7702 runtime 执行钱包能力。",
            "SDK 只负责生成业务 typed data 和签名 payload，钱包连接与交易发送由应用主线显式处理。"
          ],
          visuals: [
            {
              src: "/diagrams/sdk-integration.svg",
              alt: "SDK integration diagram",
              caption: "集成重点是让 dApp UI、SDK signing helpers 和 7702 runtime 边界保持清晰。",
            }
          ],
          code: {
            language: "ts",
            caption: "BlinkPay typed data helper",
            content: `import { BlinkPay } from "@1doapp/sdk";

const typedData = BlinkPay.buildSessionGrantTypedData({
  chainId: 11155111,
  verifyingContract: "0x...",
  grant
});`
          }
        },
        {
          id: "wallet-api",
          title: "常用钱包 API",
          bullets: [
            "`BlinkPay.buildSessionGrantTypedData(...)`: 构造 BlinkPay session grant typed data。",
            "`BlinkPay.buildSettlementIntentTypedData(...)`: 构造累计结算 typed data。",
            "`waitForTransaction(txHash)`: 等待 runtime 激活交易或其他链上交易确认。",
            "`smartSignMessage(...)`: 生成适合 7702 runtime 验证的消息签名。",
            "`smartSignTypedData(...)`: 生成适合合约验证的 typed-data 签名。"
          ]
        },
        {
          id: "signature-api",
          title: "签名与权限 API",
          bullets: [
            "`smartSignMessage(...)`: 返回 ERC-1271 包裹后的消息签名。",
            "`smartSignTypedData(...)`: 返回适合合约验证的 Typed Data 签名。",
            "`wrap1271Signature(...)`: 将外层 EIP-712 / ERC-1271 封装应用到签名上。",
            "`getSystemApps()`: 读取 Registry 中的钱包原生能力或平台保留能力列表。",
            "`isLogicUsable({ smartWallet, logic })`: 检查目标应用在当前钱包里是否满足安装、启用和可执行条件。"
          ],
          callout: {
            title: "一个容易忽略的点",
            body: "`isLogicUsable` 不是只看 allowlist，它还会结合 Registry 状态、安装 entitlement 和钱包本地启用状态一起判断。",
            tone: "accent"
          }
        },
        {
          id: "next-reads",
          title: "搭配阅读",
          cards: [
            { title: "前端与 SDK 接入", description: "从页面集成角度看 SDK 如何进入 Runtime。", href: "/zh/docs/frontend-and-sdk" },
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
      hero: "只要地址基线不清楚，前端、SDK、Store 和 Runtime 就很容易发生环境错配。",
      sections: [
        {
          id: "network",
          title: "当前默认网络",
          bullets: [
            "链名: Sepolia",
            "chainId: 11155111",
            "block explorer: https://sepolia.etherscan.io",
            "Runtime 和 Store 当前文档里的默认体验流都围绕这条测试网展开。"
          ]
        },
        {
          id: "core-addresses",
          title: "核心地址",
          bullets: [
            "AccountImplementation: 0x65C4340E65144e2Da93dECfAFcb16a116C75C0d8",
            "LogicRegistry: 0xec2242300B40E3272Df9F65738465aeD9f7f4298"
          ]
        },
        {
          id: "test-assets",
          title: "测试资产地址",
          bullets: [
            "TestUSDC: 0x9d4b951592c31dc042efDC4E1F8aE00718b96fe1",
            "TestUSDT: 0xdd7468f993c52fcF43Cef80c9a4e042de4920F2d",
            "1DO Token: 0xC741d79714c6cd3684CF4217DB423D1cf79F6cec",
            "TestWETH: 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
            "NftDropOne: 0x15C0D103bb59aE9f01b8193e84311ba259083FcF",
            "NftDropTwo: 0x1e439692Be42748A57fbF8608F14116f5CAFA78F"
          ]
        },
        {
          id: "apps",
          title: "应用逻辑地址",
          bullets: [
            "PeerDex: 0xe4C8B151ABbFC485CC31f7d6E5e26F280E9C2dF7",
            "Closesky: 0x2E137ffe6c94F6688Bc89Ac6699708e609B9Fc6d",
            "Flashman: 0x5383dbE8E2A6a1dBC5f0E4edB78523fb13aC3d72",
            "CryptoWill: 0xDb66ba171263198554aF0AE31C21c6282C52b9D0",
            "BlinkPay: 0xBa313EEfD0CD713CB8f1e6AB1D49118a311014bb"
          ]
        },
        {
          id: "source-of-truth",
          title: "地址来源顺序",
          bullets: [
            "当前前端接入层都优先读取环境变量。",
            "未显式覆盖时，前端会退回 `@1doapp/deployments` 的网络数据。",
            "因此地址变更后，至少要同时检查部署包、Runtime 环境变量和 Store 环境变量。"
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
      summary: "PeerDex 是 1do 当前最典型的钱包内交易应用，适合用来理解“安装后回到账户里交易”这件事。",
      eyebrow: "App",
      hero: "PeerDex 展示了 1do 钱包级应用的核心范式：钱包上下文 + Store 安装 + 账户内交易。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据将 PeerDex 定义为去中心化订单簿交易所，支持链上限价单和 ERC-7204 签名订单。",
            "当前 onboarding 也把 PeerDex 作为用户理解“在 Store 安装应用 -> 回到账户里使用”这条闭环的第一示例。"
          ]
        },
        {
          id: "requirements",
          title: "安装与权限条件",
          bullets: [
            "需要先在 Store 安装，再在钱包里启用。",
            "需要钱包内拥有足够 gas 与测试资产。",
            "需要应用处于正常可用状态，并通过钱包的安装与启用检查。",
            "交易和授权能力依赖钱包原生 Token 能力。"
          ]
        },
      ]
    },
    {
      slug: "app-closesky",
      group: "ecosystem",
      title: "CloseSky",
      summary: "CloseSky 主要处理 NFT 与 Token 的复杂撮合，也是 1do 双 Permit 资产层的代表性应用。",
      eyebrow: "App",
      hero: "CloseSky 不是简单 NFT 市场，而是把 Token 和 NFT 同时放进一个账户结算流程的应用形态。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据将 CloseSky 定义为支持 NFT↔NFT 与 NFT↔Token 的复杂撮合应用。",
            "它特别适合说明 1do 的价值不止是代币转账，而是把多资产类型的权限模型统一到同一钱包层里。"
          ]
        },
        {
          id: "requirements",
          title: "依赖关系",
          bullets: [
            "需要先安装并在钱包里启用，才能作为钱包内应用使用。",
            "涉及 ERC-7204 与 ERC-7564 Permit。",
            "同时依赖钱包原生 Token 与 NFT 能力。",
            "更适合用来说明“共享账户资产层”，而不是每个应用自带一套资产控制层。"
          ]
        },
      ]
    },
    {
      slug: "app-flashman",
      group: "ecosystem",
      title: "Flashman",
      summary: "Flashman 把用户钱包资产转成可配置的 EIP-3156 闪电贷池，属于 1do 资产自动化方向的重要样本。",
      eyebrow: "App",
      hero: "Flashman 说明 1do 应用不只是交易和支付，也可以把账户资产变成可编程金融基础设施。",
      sections: [
        {
          id: "positioning",
          title: "产品定位",
          paragraphs: [
            "Store 数据把 Flashman 定义为基于 EIP-3156 的闪电贷放贷器，可把钱包余额变成闪电贷资金池。",
            "这类应用非常适合 1do，因为钱包本身就是可编程执行环境。"
          ]
        },
        {
          id: "requirements",
          title: "使用条件",
          bullets: [
            "作为钱包内应用，需要先安装并启用。",
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
      hero: "CryptoWill 是 1do 在账户自动化和链下签名编排上的代表性应用，不只是一个普通 dApp 表单。",
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
      summary: "BlinkPay 是 1do 面向 Agent、API 和订阅场景的支付层，核心在于 session key 与免弹窗微支付。",
      eyebrow: "App",
      hero: "BlinkPay 展示了 1do 如何把智能钱包从交互账户推向机器可用账户。",
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
            "和钱包原生支付能力、x402 路由存在明显关联。",
            "更适合作为开发者和 Agent 场景共同阅读的应用页。"
          ]
        },
      ]
    },
    {
      slug: "account-contract-api",
      group: "ecosystem-dev",
      title: "Account Contract API",
      summary: "围绕账户 runtime 合约的关键接口整理一页契约级参考。",
      eyebrow: "API",
      hero: "如果你要理解 1do 钱包的真实边界，必须先理解 runtime account 如何安装、启用和执行应用。",
      sections: [
        {
          id: "account",
          title: "Account 侧接口",
          bullets: [
            "`executeApp(address app, bytes data)`: 通过钱包上下文执行应用。",
            "`enableApp(address app)`: 在钱包本地启用一个已安装应用。",
            "`disableApp(address app)`: 在钱包本地停用一个应用。",
            "`isAppEnabled(address app)`: 查询应用是否已在钱包中启用。",
            "`registry()`: 查询当前绑定的 Registry。",
            "`execute(...)` / `executeBatch(...)`: 作为钱包执行目标调用。"
          ]
        },
        {
          id: "policy",
          title: "权限判定规则",
          bullets: [
            "应用发布、安装和启用是三层不同状态。",
            "只有被 Store 安装过的应用，才会获得对应 entitlement。",
            "只有被钱包本地启用的应用，才会在账户里真正可用。",
            "运行条件通常可概括为 `isAppEnabled(app) && registry.isEntitled(wallet, app)`。"
          ],
          callout: {
            title: "实际含义",
            body: "1do 不再把“是否可调用”理解成单一 allowlist，而是拆成 Store 安装 entitlement 和钱包本地启用两层状态。",
            tone: "accent"
          }
        }
      ]
    },
    {
      slug: "wallet-asset-signing-api",
      group: "ecosystem-dev",
      title: "钱包资产签名能力",
      summary: "围绕 Token 与 NFT 的 Permit 和签名调用能力，整理当前最值得引用的方法。",
      eyebrow: "API",
      hero: "1do 的资产层关键不在于转账本身，而在于钱包如何把授权、签名和执行统一起来。",
      sections: [
        {
          id: "tokenmanage-api",
          title: "Token API",
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
          title: "NFT API",
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
            "这些 Token / NFT Permit 都依赖 1do 双层 EIP-712 / ERC-1271 包装。",
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
      summary: "把 Runtime 现有引导拆成一条可用于演示、销售和测试的标准流程。",
      eyebrow: "Flow",
      hero: "这条流程的目标不是展示某个单一功能，而是让用户在 5 分钟内理解 1do 的产品闭环。",
      sections: [
        {
          id: "steps",
          title: "标准演示路径",
          steps: [
            { title: "进入 Runtime 并连接钱包", description: "使用 EOA 进入，并检测当前地址是否已经启用 1do runtime。" },
            { title: "启用 1do runtime", description: "让用户明确：当前地址启用 7702 后，就会成为后续所有能力的账户容器。" },
            { title: "领取测试资产", description: "为后续支付、授权、交易和安装应用做准备。" },
            { title: "进入 Store 安装一个应用", description: "建议优先演示 PeerDex，路径最直观。" },
            { title: "返回 Runtime 打开应用", description: "让用户看见“安装后出现在 Runtime 里”的结果。" }
          ],
          visuals: [
            {
              src: "/diagrams/onboarding-flow.svg",
              alt: "Onboarding flow diagram",
              caption: "这条路径最适合首次演示 1do 的账户闭环。",
            }
          ]
        },
        {
          id: "demo-goal",
          title: "这条流程要讲清什么",
          bullets: [
            "1do 不是单 dApp。",
            "1do 先交付账户，再交付应用。",
            "应用安装与链上状态有关，不是前端假装安装。",
            "钱包原生能力让应用不必各自实现资产层。"
          ]
        }
      ]
    },
    {
      slug: "store-install-flow",
      group: "start",
      title: "Store 安装流程",
      summary: "面向当前安装模型的流程页，适合演示 Store 与 Runtime 的联动关系。",
      eyebrow: "Flow",
      hero: "Store 的价值不是陈列目录，而是把安装状态、分发和启用入口放到一条可验证的产品路径里。",
      sections: [
        {
          id: "steps",
          title: "安装路径",
          steps: [
            { title: "进入应用详情页", description: "查看应用简介、安装费用和能力说明。" },
            { title: "发起安装", description: "由用户钱包完成 Store 安装交易。" },
            { title: "等待交易确认", description: "安装 entitlement 成为链上事实，而不是本地缓存。" },
            { title: "回到 Runtime 刷新", description: "钱包启用完成后，应用会在 Runtime 里显示或可被使用。" }
          ],
          visuals: [
            {
              src: "/diagrams/store-install-flow.svg",
              alt: "Store install flow diagram",
              caption: "Store 到 Runtime 的关键不是页面跳转，而是安装 entitlement 与钱包启用状态的同步。",
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
            "前端读取到的 entitlement / enable 状态是否和链上结果一致。"
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
            { title: "走签名/校验路径", description: "由钱包签名语义和钱包原生支付能力共同保证支付合法。" },
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
            "和钱包原生支付能力、x402 路由存在明显关联。",
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
      title: "What 1do Is",
      summary: "Build the right mental model first: 1do is not one isolated dApp, but a product that connects a smart wallet, app installation, and a shared Runtime.",
      eyebrow: "1do Book",
      hero: "1do gives the user a Runtime first, then brings apps into that environment.",
      sections: [
        {
          id: "what-is-1do",
          title: "What 1do Is",
          paragraphs: [
            "From a user perspective, 1do is not about jumping between many separate dApps. It gives you a 1do Wallet first, then lets apps enter that wallet environment.",
            "The most important thing in 1do is not one isolated page. It is the Runtime itself. You connect your existing wallet, activate the 1do runtime, install apps from Store, and then continue using them inside the Runtime.",
            "That means apps are not treated as external websites first. They become part of what the account can do. Assets, permissions, payments, and app entry points all sit around the same account context.",
            "That matters because Web3 has not really lacked more entry points. It has lacked a continuous, stateful user environment."
          ],
          cards: [
            { title: "1do Runtime", description: "The app runtime. Wallet, assets, apps, and settings all start here." },
            { title: "Store", description: "The place where apps are discovered, installed, and brought back into the wallet." }
          ]
        },
        {
          id: "loop",
          title: "Product Loop",
          steps: [
            { title: "Connect a wallet and activate the 1do runtime", description: "Users start from an existing wallet, then activate the 1do runtime on that address." },
            { title: "Install an app in Store", description: "Users discover an app in Store and bind that installation to the current account." },
            { title: "Return to the Runtime", description: "The installed app appears back inside the Runtime instead of staying in the store page." },
            { title: "Keep using the same Runtime", description: "Assets, permissions, payments, and app entry points continue accumulating inside the same 1do Wallet." }
          ],
          callout: {
            title: "The key reading",
            body: "1do is not about stuffing more web links into a wallet. It is about building an account environment that can install apps and keep growing over time.",
            tone: "accent"
          }
        },
        {
          id: "concepts",
          title: "Core Concepts",
          bullets: [
            "1do Wallet: the smart wallet you actually use inside 1do.",
            "1do Runtime: the app runtime. You enter the shared runtime first, not a standalone dApp first.",
            "Store: the discovery and installation surface for apps.",
            "Install: the state that binds an app to your account.",
            "Enable: the wallet-side step that makes an installed app actually usable."
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
      hero: "The shortest path is: connect a wallet -> create a 1do Wallet -> prepare gas and test assets -> install an app in Store -> return to the Runtime and use it.",
      sections: [
        {
          id: "journey",
          title: "First Journey",
          steps: [
            { title: "Connect any EOA wallet", description: "Users start from a regular wallet. That wallet is the entry point into 1do." },
            { title: "Activate the 1do runtime", description: "If the current address has not enabled 7702 yet, the UI exposes a runtime activation flow." },
            { title: "Prepare Sepolia ETH", description: "The current demo path centers on Ethereum Sepolia, so gas is required first." },
            { title: "Claim test assets", description: "The Faucet flow provides USDC, USDT, 1DO, and test NFTs for follow-up interactions." },
            { title: "Install an app in Store", description: "Pick an app and install it. Store binds that installation to the current account." },
            { title: "Return to Runtime", description: "After confirmation, refresh the Runtime and the app should appear inside your 1do Wallet." }
          ]
        },
        {
          id: "assumptions",
          title: "Current Product Assumptions",
          bullets: [
            "The default demo network is Ethereum Sepolia.",
            "Basic asset tools are wallet-native capabilities rather than Store-installed apps.",
            "Some apps may also have standalone sites, but the continuous experience happens inside the Runtime.",
            "The current install model is Store installation plus wallet enablement."
          ]
        },
        {
          id: "faq",
          title: "Common Issues",
          bullets: [
            "Cannot see 7702 activation: you are usually on the wrong network, or this address already uses the 1do runtime.",
            "Faucet or mint failed: check the new wallet's gas balance first.",
            "The app is still missing after install: wait for confirmation and refresh Runtime, then wait a few more seconds if needed."
          ],
          links: [
            { label: "1do Runtime", href: externalLinks.app, external: true },
            { label: "1do Store", href: externalLinks.store, external: true },
            { label: "SDK Package", href: externalLinks.sdk, external: true }
          ]
        }
      ]
    },
    {
      slug: "runtime",
      group: "platform",
      title: "1do Runtime",
      summary: "Understand Runtime as a product surface: not a post-login wallet page, but the environment where apps run inside 1do Wallet.",
      eyebrow: "Platform",
      hero: "In 1do, Runtime is not a side layer. It is the environment where apps actually run and keep being used.",
      sections: [
        {
          id: "role",
          title: "What Runtime Does",
          paragraphs: [
            "1do Runtime is the environment where apps run inside 1do Wallet. Its job is not only to show balances or an address. Its job is to host app execution, asset capabilities, and installed entry points.",
            "Users do not start by opening one standalone app and then connecting a wallet. They enter the Runtime first, then invoke asset capabilities, installed apps, and account settings from there."
          ],
          bullets: [
            "It is the shared app runtime.",
            "It unifies assets, identity, apps, and settings.",
            "It pulls permission checks and execution context into one environment.",
            "It makes installed capabilities appear directly in the Runtime instead of living on external sites."
          ]
        },
        {
          id: "account-first",
          title: "Why Runtime Matters",
          paragraphs: [
            "Without a shared Runtime, every app would have to rebuild asset handling, permissions, and interaction flow on its own. 1do flips that model: establish the Runtime first, then let apps reuse the same context.",
            "That makes payments, tokens, NFTs, installation state, and automation persist inside one Runtime instead of being fragmented across different pages and product entries."
          ],
          bullets: [
            "Asset capabilities do not need to be reimplemented by each app.",
            "Permissions and install state can persist inside the Runtime.",
            "Installed apps become part of the Runtime.",
            "The user experiences one continuous environment instead of disconnected sites."
          ],
          callout: {
            title: "Design reading",
            body: "The key move is not making a wallet look more like an app. It is providing a Runtime where apps can live and keep running over time.",
            tone: "accent"
          }
        },
        {
          id: "workspace",
          title: "What Gets Organized Inside the Runtime",
          paragraphs: [
            "A real Runtime has to place several kinds of capabilities inside one environment: wallet-native capabilities, installed app capabilities, the wallet's own asset state, and long-lived settings and security entry points.",
            "That is why the user experience is framed as what this Runtime can do, not which site I have jumped to."
          ],
          bullets: [
            "Wallet-native capabilities: default abilities such as token and NFT management.",
            "Installed apps: app entry points that appear after Store installation.",
            "Account state: address, assets, permissions, sessions, and executable scope.",
            "Settings and security: network, recovery, and permission management."
          ]
        }
      ]
    },
    {
      slug: "store-installation",
      group: "platform",
      title: "Store and App Installation",
      summary: "Understand what Store does in 1do today: app discovery, installation, and bringing apps back into the Runtime.",
      eyebrow: "Distribution",
      hero: "In 1do today, Store owns discovery and install entry, and the wallet turns that into an actual usable app.",
      sections: [
        {
          id: "store-role",
          title: "What the Store Does",
          paragraphs: [
            "Store is more than a frontend catalog. It works with the wallet runtime as the installation entry point.",
            "In the current model, `LogicRegistry` handles app publication and install entitlement, `installApp(wallet, logic)` records that an account installed an app, and wallet-side `enableApp(app)` makes the installed app actually available inside the wallet."
          ],
          bullets: [
            "Apps are registered into the Store path first.",
            "Users install from Store instead of manually trusting arbitrary addresses.",
            "Installation and wallet-local enablement are separate states.",
            "There is no separate NFT-license contract in the current model."
          ]
        },
        {
          id: "economics",
          title: "Why Installation Goes Through Store",
          bullets: [
            "Ordinary users should not need to reason about raw contract addresses before installing an app.",
            "Store defines the normal product path and reduces arbitrary-address installation risk.",
            "Install state becomes verifiable on-chain instead of a frontend-only memory of 'installed'.",
            "The wallet still needs to enable the app before it becomes visible inside the Runtime."
          ],
          callout: {
            title: "How to read installation now",
            body: "Publication, installation, and enablement are different things in 1do. Store handles installation, the wallet handles enablement, and actual usage happens inside the Runtime.",
            tone: "accent"
          }
        },
        {
          id: "contracts",
          title: "What the User Actually Feels",
          bullets: [
            "Open an app detail page in Store.",
            "Install it for the current wallet.",
            "Let the wallet enable it as a Runtime-available app.",
            "Return to the Runtime and keep using it there."
          ]
        }
      ]
    },
    {
      slug: "wallet-native-capabilities",
      group: "platform",
      title: "Wallet-Native Capabilities",
      summary: "Understand which abilities in 1do belong to the wallet itself rather than needing to be understood as separately installed apps.",
      eyebrow: "Permissions",
      hero: "In 1do today, core asset abilities are increasingly wallet-native rather than something users should think of as separately installable apps.",
      sections: [
        {
          id: "tokenmanage",
          title: "Token Abilities",
          paragraphs: [
            "1do treats common token actions as wallet capabilities rather than something every app should rebuild.",
            "That means apps entering the account context can reuse one shared token approval, transfer, and signing model."
          ],
          bullets: [
            "Token permissions do not need to be redesigned by every app.",
            "Transfers and batched approvals can share the same account semantics.",
            "Users understand what their wallet allowed, not a different rule system inside each app."
          ]
        },
        {
          id: "nftmanage",
          title: "NFT Abilities",
          paragraphs: [
            "NFT abilities follow the same logic. 1do tries to keep NFT permissions and actions tied to the account layer instead of scattering them across isolated app-specific flows.",
            "That makes listings, approvals, delegated execution, and multi-asset flows easier to reason about."
          ],
          bullets: [
            "Useful for NFT markets and signed-listing flows.",
            "Also useful for delegated execution and delayed execution models.",
            "The user sees one continuous wallet experience instead of a different NFT rule set per product."
          ]
        },
        {
          id: "auth",
          title: "What Makes an App Available",
          bullets: [
            "The app should exist in the Store-supported product path.",
            "The account needs to install it and enable it inside the wallet.",
            "Specific actions may still require signatures or permission confirmation.",
            "Users should still be able to disable or withdraw access later."
          ]
        }
      ]
    },
    {
      slug: "ecosystem-apps",
      group: "ecosystem",
      title: "App Ecosystem",
      summary: "Based on the current app catalog and account entry points, this page summarizes the most important application-layer capabilities in 1do today.",
      eyebrow: "Apps",
      hero: "The 1do app surface is not random. It clusters around trading, payments, asset management, and account automation.",
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
            "1do is not only targeting DeFi. It also covers NFTs, payments, account automation, and wallet-native coordination.",
            "Many apps share one wallet and asset context instead of rebuilding their own account layer.",
            "The store app list is effectively a roadmap of 1do product direction."
          ]
        },
        {
          id: "drill-down",
          title: "Go Deeper",
          cards: [
            { title: "PeerDex Page", description: "Positioning, install requirements, and in-wallet trading flow.", href: "/en/docs/app-peerdex" },
            { title: "CloseSky Page", description: "Mixed NFT/token matching and multi-asset settlement.", href: "/en/docs/app-closesky" },
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
      title: "How 1do Fits Together",
      summary: "Separate wallet, Store, and app relationships so users can form a stable mental model before diving into deeper implementation details.",
      eyebrow: "Architecture",
      hero: "If the wallet, the Store, and the app relationship are unclear, people end up reading 1do as a set of disconnected websites.",
      sections: [
        {
          id: "product-map",
          title: "The Three Surfaces Users See First",
          cards: [
            { title: "1do Wallet / Runtime", description: "The app runtime where users actually stay and keep working." },
            { title: "Store", description: "The surface for discovery, installation, and sending apps back into the wallet." },
            { title: "Apps", description: "Trading, payments, and automation capabilities that are ultimately used inside the account." }
          ]
        },
        {
          id: "chain-layers",
          title: "How the Lower Layers Cooperate",
          bullets: [
            "The smart wallet holds assets, install state, and the execution context.",
            "Store / Registry decide which apps belong to the normal installation path.",
            "Installation and enablement are separate so discovery and actual wallet availability remain distinct states.",
            "When an app runs, it still runs in the user's own wallet context."
          ]
        },
        {
          id: "ui-layers",
          title: "Product Layers",
          bullets: [
            "1do Runtime is the main interaction surface.",
            "Store is the installation surface.",
            "App and flow pages explain what users can actually do after installation."
          ],
          visuals: [
            {
              src: "/diagrams/architecture-map.svg",
              alt: "1do architecture map",
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
      summary: "For readers who want to understand the deeper 1do app model, this page focuses on installation, distribution, revenue structure, and why apps return to the Runtime.",
      eyebrow: "Ecosystem Dev",
      hero: "Building in 1do is not only about deploying a logic contract. It is about plugging an app into the account, installation, and monetization system.",
      sections: [
        {
          id: "why-build",
          title: "Why Build Inside 1do",
          paragraphs: [
            "1do gives apps more than a traffic source. It gives them an existing account context. Before users open your app, they already have a wallet, assets, permissions, and an installation model.",
            "That lets developers spend less time rebuilding the account layer and more time on application logic."
          ],
          bullets: [
            "Account, asset, and permission semantics already exist.",
            "Wallet-native asset capabilities can be reused instead of rebuilt.",
            "Apps can be installed into the Runtime through Store.",
            "Distribution and monetization have on-chain state behind them."
          ]
        },
        {
          id: "store-value",
          title: "What Store Gives Developers",
          bullets: [
            "Your app can be registered, discovered, and installed instead of spreading only through an external link.",
            "Install state makes “this account installed your app” a verifiable fact.",
            "After install, the app reappears inside the Runtime instead of staying inside the store page.",
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
            "Compared with a standalone site model, 1do can close the loop between install, usage, and monetization much more directly."
          ]
        },
        {
          id: "launch",
          title: "Questions to Resolve Before Launch",
          bullets: [
            "Should this app really live inside the account surface, or is it better as a standalone site?",
            "Can it reuse wallet-native asset capabilities instead of shipping its own asset-control layer?",
            "What install, enablement, and permission path does it need?",
            "After installation, what should the entry and visible state look like inside the Runtime?"
          ]
        }
      ]
    },
    {
      slug: "frontend-and-sdk",
      group: "integrator",
      title: "Frontend and SDK Integration",
      summary: "Consolidate the current integration path so frontend teams and third-party builders can adopt 1do wallet capabilities cleanly.",
      eyebrow: "Integration",
      hero: "When integrating 1do, the real concerns are deployment metadata, permission checks, and 7702 runtime context.",
      sections: [
        {
          id: "frontend-entry",
          title: "Frontend Entry Points",
          bullets: [
            "The wallet connection layer handles regular EOA connectivity.",
            "`src/runtime/lib/config.ts` aggregates environment variables and deployment metadata.",
            "`Activate7702Button` and related wallet components manage runtime detection and activation.",
            "`WalletGate` is the guardrail for pages that require a 1do wallet context."
          ]
        },
        {
          id: "sdk-assets",
          title: "Reusable Packages",
          cards: [
            { title: "@1doapp/sdk", description: "TypeScript SDK for dApps, including smart-wallet address computation and signature flows.", href: externalLinks.sdk, external: true },
            { title: "@1doapp/abi", description: "Published ABI JSON exports for frontend and script reuse." },
            { title: "@1doapp/deployments", description: "Per-network deployment metadata for integration and environment setup." }
          ]
        },
        {
          id: "integration-path",
          title: "Recommended Integration Path",
          steps: [
            { title: "Prepare chain addresses", description: "Confirm logic, Registry, and wallet-related deployment addresses first." },
            { title: "Wire wallet connectivity", description: "Make sure the frontend connects an EOA first, then detects whether the address uses the 1do runtime." },
            { title: "Check installation and enablement state", description: "Before entering an app flow, verify the wallet has installed and enabled the app." },
            { title: "Design around wallet-native capabilities", description: "Prefer reusing wallet-native token and NFT abilities instead of inventing a separate asset-control layer." }
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
      summary: "Based on the current `@1doapp/sdk` interface and implementation, this page consolidates the most important 7702 runtime signing APIs.",
      eyebrow: "SDK",
      hero: "The SDK does not reinvent the account system. It safely exposes 7702 runtime signature semantics to dApps.",
      sections: [
        {
          id: "exports",
          title: "Current Exports",
          bullets: [
            "`BlinkPay`: typed-data helpers for BlinkPay session grants and settlement intents.",
            "runtime signing helpers: the frontend connects the EOA directly and explicitly calls 7702 wallet capabilities.",
            "connector/provider adapters have been removed; the SDK no longer maintains a custom wagmi / RainbowKit connector."
          ]
        },
        {
          id: "install",
          title: "Install and Peer Dependencies",
          code: {
            language: "bash",
            caption: "Recommended installation shape",
            content: `npm i @1doapp/sdk
npm i ethers`
          }
        },
        {
          id: "runtime-signing",
          title: "7702 Runtime Integration",
          paragraphs: [
            "The current integration path no longer wraps 1do as a custom wallet connector. The frontend connects the EOA and explicitly executes through the 7702 runtime.",
            "The SDK only builds business typed data and signing payloads; wallet connection and transaction sending stay in the app mainline."
          ],
          visuals: [
            {
              src: "/diagrams/sdk-integration.svg",
              alt: "SDK integration diagram",
              caption: "The integration boundary keeps dApp UI, SDK signing helpers, and 7702 runtime execution separate.",
            }
          ],
          code: {
            language: "ts",
            caption: "BlinkPay typed data helper",
            content: `import { BlinkPay } from "@1doapp/sdk";

const typedData = BlinkPay.buildSessionGrantTypedData({
  chainId: 11155111,
  verifyingContract: "0x...",
  grant
});`
          }
        },
        {
          id: "wallet-api",
          title: "Common Wallet APIs",
          bullets: [
            "`BlinkPay.buildSessionGrantTypedData(...)`: builds BlinkPay session-grant typed data.",
            "`BlinkPay.buildSettlementIntentTypedData(...)`: builds cumulative-settlement typed data.",
            "`waitForTransaction(txHash)`: waits for runtime activation or other on-chain confirmation.",
            "`smartSignMessage(...)`: returns a message signature compatible with the 7702 runtime.",
            "`smartSignTypedData(...)`: returns a typed-data signature suitable for contract verification."
          ]
        },
        {
          id: "signature-api",
          title: "Signing and Permission APIs",
          bullets: [
            "`smartSignMessage(...)`: returns an ERC-1271-wrapped message signature.",
            "`smartSignTypedData(...)`: returns a typed-data signature suitable for contract verification.",
            "`wrap1271Signature(...)`: adds the outer EIP-712 / ERC-1271 wrapper to a signature.",
            "`getSystemApps()`: reads wallet-native or platform-reserved capabilities from the Registry.",
            "`isLogicUsable({ smartWallet, logic })`: checks whether a target app satisfies install, enablement, and execution conditions in the current wallet."
          ],
          callout: {
            title: "Easy to miss",
            body: "`isLogicUsable` is not just an allowlist check. It also considers Registry state, install entitlement, and wallet-local enablement.",
            tone: "accent"
          }
        },
        {
          id: "next-reads",
          title: "Read Next",
          cards: [
            { title: "Frontend and SDK Integration", description: "How the SDK enters the Runtime frontend and app flows.", href: "/en/docs/frontend-and-sdk" },
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
      hero: "If the address baseline is unclear, Runtime, Store, frontend integrations, and SDK flows drift out of sync quickly.",
      sections: [
        {
          id: "network",
          title: "Current Default Network",
          bullets: [
            "Network: Sepolia",
            "chainId: 11155111",
            "block explorer: https://sepolia.etherscan.io",
            "The current Runtime and Store onboarding flows are documented around this testnet."
          ]
        },
        {
          id: "core-addresses",
          title: "Core Addresses",
          bullets: [
            "AccountImplementation: 0x65C4340E65144e2Da93dECfAFcb16a116C75C0d8",
            "LogicRegistry: 0xec2242300B40E3272Df9F65738465aeD9f7f4298"
          ]
        },
        {
          id: "test-assets",
          title: "Test Asset Addresses",
          bullets: [
            "TestUSDC: 0x9d4b951592c31dc042efDC4E1F8aE00718b96fe1",
            "TestUSDT: 0xdd7468f993c52fcF43Cef80c9a4e042de4920F2d",
            "1DO Token: 0xC741d79714c6cd3684CF4217DB423D1cf79F6cec",
            "TestWETH: 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
            "NftDropOne: 0x15C0D103bb59aE9f01b8193e84311ba259083FcF",
            "NftDropTwo: 0x1e439692Be42748A57fbF8608F14116f5CAFA78F"
          ]
        },
        {
          id: "apps",
          title: "App Logic Addresses",
          bullets: [
            "PeerDex: 0xe4C8B151ABbFC485CC31f7d6E5e26F280E9C2dF7",
            "Closesky: 0x2E137ffe6c94F6688Bc89Ac6699708e609B9Fc6d",
            "Flashman: 0x5383dbE8E2A6a1dBC5f0E4edB78523fb13aC3d72",
            "CryptoWill: 0xDb66ba171263198554aF0AE31C21c6282C52b9D0",
            "BlinkPay: 0xBa313EEfD0CD713CB8f1e6AB1D49118a311014bb"
          ]
        },
        {
          id: "source-of-truth",
          title: "Source-of-truth Order",
          bullets: [
            "Both frontend integration surfaces prefer environment variables first.",
            "If not explicitly overridden, they fall back to the shared `@1doapp/deployments` package.",
            "When addresses change, you should check deployment metadata, Runtime env values, and Store env values together."
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
      summary: "PeerDex is the clearest in-wallet trading app in 1do today, and a good first example of how an installed app returns to the Runtime.",
      eyebrow: "App",
      hero: "PeerDex is the clearest example of the 1do pattern: wallet context + Store installation + in-account trading.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes PeerDex as a decentralized order-book exchange with both on-chain limit orders and ERC-7204 signed orders.",
            "The current onboarding flow also uses PeerDex as the clearest example of the Store -> install -> account usage loop."
          ]
        },
        {
          id: "requirements",
          title: "Install and Permission Requirements",
          bullets: [
            "Users need to install it in Store and enable it in the wallet.",
            "The wallet needs enough gas and test assets.",
            "The app needs to be in a valid installed and enabled state.",
            "Trading and approval semantics depend on the wallet-native token layer."
          ]
        },
      ]
    },
    {
      slug: "app-closesky",
      group: "ecosystem",
      title: "CloseSky",
      summary: "CloseSky handles complex NFT/token matching and is a strong example of 1do's dual-Permit asset model.",
      eyebrow: "App",
      hero: "CloseSky is not a simple NFT market. It puts both NFTs and tokens into one account-level settlement flow.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes CloseSky as an app for NFT↔NFT and NFT↔Token matching.",
            "It is especially useful for explaining that 1do is not just about token transfers. It unifies multiple asset-permission models at the wallet layer."
          ]
        },
        {
          id: "requirements",
          title: "Dependencies",
          bullets: [
            "As an in-wallet app, it needs to be installed and enabled first.",
            "It relies on both ERC-7204 and ERC-7564 Permit flows.",
            "It depends on both wallet-native token and NFT abilities.",
            "It is a good page for explaining shared account-level asset logic instead of app-specific asset layers."
          ]
        },
      ]
    },
    {
      slug: "app-flashman",
      group: "ecosystem",
      title: "Flashman",
      summary: "Flashman turns wallet assets into a configurable EIP-3156 flash-loan pool and represents the programmable-finance direction of 1do.",
      eyebrow: "App",
      hero: "Flashman shows that 1do apps are not only about trading and payments. They can also turn an account into programmable financial infrastructure.",
      sections: [
        {
          id: "positioning",
          title: "Positioning",
          paragraphs: [
            "Store data describes Flashman as an EIP-3156 flash-loan lender that turns wallet balances into a configurable lending pool.",
            "This is a very 1do-native app shape because the wallet itself is already a programmable execution environment."
          ]
        },
        {
          id: "requirements",
          title: "Usage Requirements",
          bullets: [
            "As an in-wallet app, it needs to be installed and enabled first.",
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
      hero: "CryptoWill is a representative 1do app for account automation and off-chain signature orchestration, not just a normal dApp form.",
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
      summary: "BlinkPay is 1do's payment layer for agents, APIs, and subscription-style flows, built around session keys and low-friction micropayments.",
      eyebrow: "App",
      hero: "BlinkPay shows how 1do can move from a human-operated smart wallet toward a machine-usable account surface.",
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
            "It is closely related to wallet-native payments and x402 flows.",
            "It is best documented as both a user-facing app and a builder-facing integration surface."
          ]
        },
      ]
    },
    {
      slug: "account-contract-api",
      group: "ecosystem-dev",
      title: "Account Contract API",
      summary: "A contract-level reference focused on the key interfaces of the account runtime contract.",
      eyebrow: "API",
      hero: "To understand the real boundary of the 1do wallet, you need to understand how the runtime account installs, enables, and executes apps.",
      sections: [
        {
          id: "account",
          title: "Account Interfaces",
          bullets: [
            "`executeApp(address app, bytes data)`: executes an app through the wallet context.",
            "`enableApp(address app)`: enables an installed app locally in the wallet.",
            "`disableApp(address app)`: disables an app locally in the wallet.",
            "`isAppEnabled(address app)`: checks whether an app is enabled in the wallet.",
            "`registry()`: returns the bound Registry.",
            "`execute(...)` / `executeBatch(...)`: wallet execution entry points."
          ]
        },
        {
          id: "policy",
          title: "Permission Rules",
          bullets: [
            "Publication, installation, and enablement are different states.",
            "Only Store-installed apps receive an install entitlement.",
            "Only wallet-enabled apps become available inside the Runtime.",
            "A practical execution rule is `isAppEnabled(app) && registry.isEntitled(wallet, app)`."
          ],
          callout: {
            title: "Practical meaning",
            body: "1do no longer treats execution as a single allowlist question. Store entitlement and wallet-local enablement are both part of the runtime model.",
            tone: "accent"
          }
        }
      ]
    },
    {
      slug: "wallet-asset-signing-api",
      group: "ecosystem-dev",
      title: "Wallet Asset Signing APIs",
      summary: "A focused reference for token and NFT permit-style methods and signed execution flows.",
      eyebrow: "API",
      hero: "The key asset story in 1do is not transfer alone. It is how the wallet unifies permissions, signatures, and execution.",
      sections: [
        {
          id: "tokenmanage-api",
          title: "Token APIs",
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
          title: "NFT APIs",
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
            "Both token and NFT permits rely on 1do dual-layer EIP-712 / ERC-1271 wrapping.",
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
      summary: "Turn the current Runtime onboarding into a standard flow for demos, sales, and internal testing.",
      eyebrow: "Flow",
      hero: "The goal of this flow is not to show one isolated feature. It is to let users understand the 1do product loop in under five minutes.",
      sections: [
        {
          id: "steps",
          title: "Standard Demo Path",
          steps: [
            { title: "Enter Runtime and connect a wallet", description: "Users enter with an EOA first, but the destination is a 1do Wallet." },
            { title: "Create a 1do Wallet", description: "Make the user understand that the wallet is the container for all later capabilities." },
            { title: "Claim test assets", description: "Prepare for later payments, approvals, trading, and app installation." },
            { title: "Install one app in Store", description: "PeerDex is usually the clearest first example." },
            { title: "Return to Runtime and open the app", description: "Show that installation changes the Runtime, not just a web menu." }
          ],
          visuals: [
            {
              src: "/diagrams/onboarding-flow.svg",
              alt: "Onboarding flow diagram",
              caption: "This is the fastest way to demonstrate the account-centered 1do loop to a new user.",
            }
          ]
        },
        {
          id: "demo-goal",
          title: "What This Flow Must Explain",
          bullets: [
            "1do is not a single dApp.",
            "1do delivers the account layer before the app layer.",
            "Installation is on-chain state, not frontend-only state.",
            "Wallet-native capabilities let apps avoid building separate asset layers."
          ]
        }
      ]
    },
    {
      slug: "store-install-flow",
      group: "start",
      title: "Store Install Flow",
      summary: "A flow page for the current installation model, designed to explain the coupling between Store and Runtime.",
      eyebrow: "Flow",
      hero: "The Store is valuable not because it lists apps, but because it makes installation, distribution, and wallet entry part of one verifiable path.",
      sections: [
        {
          id: "steps",
          title: "Installation Path",
          steps: [
            { title: "Open the app detail page", description: "Review app summary, install fee, and capability description." },
            { title: "Submit the install transaction", description: "The user wallet completes the Store installation flow." },
            { title: "Wait for confirmation", description: "Install entitlement becomes chain state instead of local cache." },
            { title: "Return to Runtime and refresh", description: "After wallet enablement, the app appears or becomes usable inside the Runtime." }
          ],
          visuals: [
            {
              src: "/diagrams/store-install-flow.svg",
              alt: "Store install flow diagram",
              caption: "The critical transition is from Store installation to account-visible capability, not just from page A to page B.",
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
            "Do frontend entitlement and enablement reads match the chain state?"
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
            { title: "Run the signing and validation path", description: "Wallet-signing semantics and wallet-native payment capabilities jointly guarantee validity." },
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
            "Strong relation to wallet-native payment abilities and x402 routes.",
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
    "runtime",
    "store-installation",
    "ecosystem-apps",
    "wallet-native-capabilities",
    "architecture",
    "app-peerdex",
    "app-closesky",
    "app-flashman",
    "app-cryptowill",
    "app-blinkpay",
    "contracts-and-deployment",
    "wallet-asset-signing-api",
    "frontend-and-sdk",
  ],
  en: [
    "overview",
    "getting-started",
    "runtime",
    "store-installation",
    "ecosystem-apps",
    "wallet-native-capabilities",
    "architecture",
    "app-peerdex",
    "app-closesky",
    "app-flashman",
    "app-cryptowill",
    "app-blinkpay",
    "contracts-and-deployment",
    "wallet-asset-signing-api",
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
