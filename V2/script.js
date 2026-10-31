const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const languageButton = document.querySelector('.language-toggle');
const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const translatedElements = [...document.querySelectorAll('[data-i18n]')];
const englishText = Object.fromEntries(translatedElements.map(element => [element.dataset.i18n, element.textContent]));
const translatedAltElements = [...document.querySelectorAll('[data-i18n-alt]')];
const englishAltText = Object.fromEntries(translatedAltElements.map(element => [element.dataset.i18nAlt, element.alt]));

const chineseText = {
  skip: '跳转到主要内容',
  menu: '菜单',
  navHome: '首页',
  navAbout: '关于',
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
  projectsEyebrow: '02 / 项目经历',
  projectsTitle: '有目标的项目实践。',
  projectsIntro: '了解每个项目的目标和我在其中的贡献。',
  project1Kind: 'AI 智能体',
  project1Title: '多智能体商务差旅助手',
  goal: '目标：',
  project1Goal: '通过协作智能体，让商务差旅规划和政策问答更易处理。',
  contribution: '我的贡献',
  workflowLabel: '工作流',
  groundingLabel: '文档依据',
  evidenceLabel: '证据状态',
  dataLabel: '数据',
  systemLabel: '系统',
  featuresLabel: '特征',
  project1Workflow: '将差旅请求拆分为聚焦的智能体任务，并汇总各项结果。',
  project1Grounding: '把工作流连接到差旅文档，使回答能够使用相关资料。',
  project1Evidence: '本作品集暂未提供该项目的公开演示或已核验性能指标。',
  project1VisualAlt: '沿路线连接多个差旅规划智能体的示意图',
  project1Tags: '智能体编排 · 文档检索 · 差旅流程',
  project2Kind: '华为实习',
  project2Title: '智能汽车问答助手',
  project2Goal: '基于上传的车辆文档，回答驾驶、故障、保养及保险等问题。',
  project2Data: '为问答流程准备汽车领域指令数据。',
  project2System: '基于车主手册和保险文档构建多轮 RAG，并使用 LoRA 对 Qwen 进行适配。',
  project2Note: '该实习项目中的基准测试数值均为初步草拟数据；在核实前，本站不展示这些数值。',
  project2VisualAlt: '汽车与车辆文档相连接的示意图',
  project2Tags: 'Qwen · LoRA · 汽车 RAG',
  project3Kind: '京东金融实习',
  project3Title: '信贷逾期风险预测',
  project3Goal: '支持更早识别可能发生逾期还款的信贷账户。',
  project3Data: '为逾期风险流程准备并分析客户与交易信号。',
  project3Features: '把复杂源数据整理成可用于支持提前识别风险的建模特征。',
  project3Evidence: '本作品集暂未提供公开模型报告或已核验性能指标。',
  project3VisualAlt: '表示信贷风险特征分析的图表示意图',
  project3Tags: '风险建模 · 特征分析 · 数据',
  contactEyebrow: '03 / 联系方式',
  contactTitle: '保持联系。',
  contactIntro: '如果你对 AI 系统、大语言模型或数据驱动的工作感兴趣，欢迎通过电子邮件联系我。',
  copyright: '© 2026 杨晓骏 Ayden Yang',
  backTop: '返回顶部 ↑'
};

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
  }
  for (const element of translatedAltElements) {
    const key = element.dataset.i18nAlt;
    element.alt = chinese ? chineseText[key] : englishAltText[key];
  }
  root.lang = currentLanguage;
  document.title = chinese ? '杨晓骏 Ayden | AI 作品集' : 'Ayden Yang | AI Portfolio';
  document.querySelector('meta[name="description"]').content = chinese
    ? '杨晓骏 Ayden 的个人作品集，展示 AI 智能体、大语言模型、RAG 与数据分析项目。'
    : "Ayden Yang's portfolio in AI agents, language models, RAG, and data analysis.";
  document.querySelector('.brand').setAttribute('aria-label', chinese ? '杨晓骏 Ayden，返回首页' : 'Ayden Yang, go to home');
  nav.setAttribute('aria-label', chinese ? '主导航' : 'Main navigation');
  document.querySelector('.interest-list').setAttribute('aria-label', chinese ? '兴趣领域' : 'Areas of interest');
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
