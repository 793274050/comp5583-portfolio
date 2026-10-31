const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const languageButton = document.querySelector('.language-toggle');
const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const translatedElements = [...document.querySelectorAll('[data-i18n]')];
const englishText = Object.fromEntries(translatedElements.map(element => [element.dataset.i18n, element.textContent]));

const chineseText = {
  skip: '跳转到主要内容',
  menu: '菜单',
  navHome: '首页',
  navAbout: '关于',
  navExperience: '经历',
  navProjects: '项目',
  navContact: '联系',
  theme: '主题',
  heroEyebrow: '个人作品集 · 人工智能系统',
  heroHello: '你好，我是',
  heroName: 'Ayden。',
  heroLead: '我把问题转化为实用的 AI 系统，探索多智能体工作流、基于文档的问答和数据分析。',
  explore: '查看我的项目',
  aboutMe: '了解我',
  aboutEyebrow: '01 / 关于',
  aboutTitle: '把好奇心变成可用的系统。',
  aboutBio: '我是杨晓骏，英文名 Ayden。本科毕业于华南师范大学信息管理与信息系统专业，目前正在香港理工大学攻读智能体人工智能系统硕士学位。',
  aboutInterests: '我关注 AI 智能体、大语言模型、检索增强生成（RAG）和数据分析如何解决实际问题。',
  interestAgents: 'AI 智能体',
  interestLLMs: '大语言模型',
  interestRAG: '检索增强生成',
  interestData: '数据分析',
  experienceEyebrow: '02 / 经历时间线',
  experienceTitle: '一路实践，一路学习。',
  experienceIntro: '三段经历串起我在智能体、大语言模型与数据领域的实践。',
  huaweiStart: '2026.06',
  huaweiEnd: '2026.08',
  huaweiType: '华为 · 实习',
  huaweiTitle: '智能汽车问答助手',
  huaweiDescription: '参与构建面向车主手册、保养、故障和保险资料的汽车问答助手。我准备领域问答数据，构建支持多轮对话的文档检索增强问答流程，并使用 LoRA 对开源模型进行适配。',
  travelStart: '2026.02',
  travelEnd: '2026.05',
  travelType: 'AI 智能体项目',
  travelTitle: '商务差旅助手',
  travelDescription: '开发用于差旅规划与政策问答的多智能体助手，重点负责任务协同和文档检索，使回答能够结合相关差旅资料。',
  travelTag1: '智能体',
  travelTag2: '检索',
  travelTag3: '差旅',
  jdStart: '2024.06',
  jdEnd: '2024.08',
  jdType: '京东金融 · 实习',
  jdTitle: '信贷逾期风险预测',
  jdDescription: '参与信贷逾期风险预测的数据准备和分析，探索客户与交易信号如何帮助更早识别风险。',
  jdTag1: '风险分析',
  jdTag2: '特征工程',
  jdTag3: '数据',
  projectsEyebrow: '03 / 项目经历',
  projectsTitle: '有目标的项目实践。',
  projectsIntro: '了解每个项目的目标和我在其中的贡献。',
  project1Kind: 'AI 智能体',
  project1Title: '多智能体商务差旅助手',
  goal: '目标：',
  project1Goal: '通过协作智能体，让商务差旅规划和政策问答更易处理。',
  contribution: '我的贡献',
  project1Contribution: '我开发了多智能体工作流，将差旅请求拆分为具体任务并汇总结果。我参与了任务编排和文档检索，使回答能够参考差旅资料，而不只依赖模型记忆。',
  project1Tags: '智能体编排 · 文档检索 · 差旅流程',
  project2Kind: '华为实习',
  project2Title: '智能汽车问答助手',
  project2Goal: '基于上传的车辆文档，回答驾驶、故障、保养及保险等问题。',
  project2Contribution: '我准备汽车领域指令数据，基于车主手册及保险文档构建支持多轮对话的 RAG 应用，并使用 LoRA 对 Qwen 进行适配。我比较了微调前后的回答，检查准确性与规范性。',
  project2Note: '该实习项目中的基准测试数值均为初步草拟数据；在核实前，本站不展示这些数值。',
  project2Tags: 'Qwen · LoRA · 汽车 RAG',
  project3Kind: '京东金融实习',
  project3Title: '信贷逾期风险预测',
  project3Goal: '支持更早识别可能发生逾期还款的信贷账户。',
  project3Contribution: '我参与信贷风险预测流程中的数据准备和分析，探索客户及交易信号如何帮助识别逾期风险。这个项目也锻炼了我把复杂数据整理成可用建模特征的能力。',
  project3Tags: '风险建模 · 特征分析 · 数据',
  contactEyebrow: '04 / 联系方式',
  contactTitle: '保持联系。',
  contactIntro: '如果你对 AI 系统、大语言模型或数据驱动的工作感兴趣，欢迎通过电子邮件联系我。',
  copyright: '© 2026 杨晓骏 Ayden Yang',
  backTop: '返回顶部 ↑'
};

const emphasis = {
  huaweiDescription: { en: ['document-grounded RAG', 'LoRA'], zh: ['文档检索增强问答流程', 'LoRA'] },
  travelDescription: { en: ['task coordination and retrieval'], zh: ['任务协同和文档检索'] },
  jdDescription: { en: ['customer and transaction signals'], zh: ['客户与交易信号'] },
  project1Contribution: { en: ['orchestration and document retrieval'], zh: ['任务编排和文档检索'] },
  project2Contribution: { en: ['multi-turn RAG application', 'LoRA'], zh: ['支持多轮对话的 RAG 应用', 'LoRA'] },
  project2Note: { en: ['preliminary drafts'], zh: ['初步草拟数据'] },
  project3Contribution: { en: ['modelling features'], zh: ['建模特征'] }
};

function emphasize(element, phrases) {
  if (!phrases) return;
  const source = element.textContent;
  const matches = phrases.map(phrase => ({phrase, start: source.indexOf(phrase)}))
    .filter(match => match.start >= 0)
    .sort((a, b) => a.start - b.start);
  const fragment = document.createDocumentFragment();
  let cursor = 0;
  for (const match of matches) {
    if (match.start < cursor) continue;
    fragment.append(document.createTextNode(source.slice(cursor, match.start)));
    const strong = document.createElement('strong');
    strong.textContent = match.phrase;
    fragment.append(strong);
    cursor = match.start + match.phrase.length;
  }
  fragment.append(document.createTextNode(source.slice(cursor)));
  element.replaceChildren(fragment);
}

let currentLanguage = 'en';

function remember(key, value) {
  try { localStorage.setItem(key, value); } catch (_) { /* Local storage can be unavailable for file URLs. */ }
}

function recall(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; }
}

function updateControlLabels() {
  const chinese = currentLanguage === 'zh-CN';
  const menuOpen = nav.classList.contains('is-open');
  const dark = root.dataset.theme === 'dark';
  navButton.setAttribute('aria-label', chinese ? (menuOpen ? '关闭导航菜单' : '打开导航菜单') : (menuOpen ? 'Close navigation menu' : 'Open navigation menu'));
  themeButton.setAttribute('aria-label', chinese ? (dark ? '切换为浅色主题' : '切换为深色主题') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
  languageButton.textContent = chinese ? 'English' : '中文';
  languageButton.lang = chinese ? 'en' : 'zh-CN';
  languageButton.setAttribute('aria-label', chinese ? '切换为英文' : 'Switch to Chinese');
}

function setLanguage(language) {
  currentLanguage = language === 'zh-CN' ? 'zh-CN' : 'en';
  const chinese = currentLanguage === 'zh-CN';
  for (const element of translatedElements) {
    const key = element.dataset.i18n;
    element.textContent = chinese ? chineseText[key] : englishText[key];
    emphasize(element, emphasis[key]?.[chinese ? 'zh' : 'en']);
  }
  root.lang = currentLanguage;
  document.title = chinese ? '杨晓骏 Ayden | AI 作品集' : 'Ayden Yang | AI Portfolio';
  document.querySelector('meta[name="description"]').content = chinese
    ? '杨晓骏 Ayden 的个人作品集，展示 AI 智能体、大语言模型、RAG 与数据分析项目。'
    : "Ayden Yang's portfolio in AI agents, language models, RAG, and data analysis.";
  document.querySelector('.brand').setAttribute('aria-label', chinese ? '杨晓骏 Ayden，返回首页' : 'Ayden Yang, go to home');
  nav.setAttribute('aria-label', chinese ? '主导航' : 'Main navigation');
  document.querySelector('.interest-list').setAttribute('aria-label', chinese ? '兴趣领域' : 'Areas of interest');
  document.querySelector('.timeline').setAttribute('aria-label', chinese ? '经历时间线' : 'Experience timeline');
  updateControlLabels();
  remember('ayden-language', currentLanguage);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  updateControlLabels();
  remember('ayden-theme', theme);
}

function closeMenu() {
  nav.classList.remove('is-open');
  navButton.setAttribute('aria-expanded', 'false');
  updateControlLabels();
}

setLanguage(recall('ayden-language', 'en'));
setTheme(recall('ayden-theme', 'light') === 'dark' ? 'dark' : 'light');
languageButton.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'zh-CN' : 'en'));
themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
navButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navButton.setAttribute('aria-expanded', String(isOpen));
  updateControlLabels();
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 680) closeMenu(); });
