export const viraHeroDashboard = {
  isDemo: true,
  pair: "BTC / USDT",
  price: "$67,420",
  change: "+2.41%",
  changePositive: true,
  signal: "BULLISH",
  confidence: 74,
  marketRegime: "Accumulation",
  agentConsensus: { bullish: 7, total: 10 },
  risk: "Medium",
  indicators: [
    { label: "RSI", value: "58" },
    { label: "MACD", value: "Pos" },
    { label: "EMA 50", value: "Above" },
    { label: "Volume", value: "Elevated" },
  ],
} as const;

export const viraTrustPoints = [
  { num: "01", title: "Market Intelligence" },
  { num: "02", title: "AI Analysis" },
  { num: "03", title: "Whale Intelligence" },
  { num: "04", title: "Trend Detection" },
  { num: "05", title: "Real-Time Alerts" },
] as const;

export const viraAnalysisCards = [
  {
    title: "Technical Analysis",
    body: "RSI, EMA, SMA, MACD, momentum, volume and market structure are analyzed to identify potential trend conditions.",
  },
  {
    title: "Whale Activity",
    body: "Monitor significant blockchain and exchange-related transactions to identify unusual whale activity and capital movement.",
  },
  {
    title: "Market & Derivatives",
    body: "Analyze market conditions such as volatility, funding rates, open interest, liquidations and other derivatives signals.",
  },
  {
    title: "Market Sentiment",
    body: "Analyze relevant crypto news and market sentiment to understand the broader market environment.",
  },
  {
    title: "AI Analysis",
    body: "Multiple AI analysis components evaluate different market signals before producing a final market intelligence result.",
  },
] as const;

export const viraPipelineSteps = [
  "Market Data",
  "Technical Analysis",
  "Whale Analysis",
  "Market / Derivatives",
  "Sentiment Analysis",
  "AI Reasoning",
  "Signal + Risk",
  "Telegram Alert",
] as const;

export const viraAgents = [
  {
    name: "Technical Agent",
    body: "Analyzes price structure and indicators.",
  },
  {
    name: "Whale Agent",
    body: "Detects unusual whale activity.",
  },
  {
    name: "Sentiment Agent",
    body: "Analyzes market/news sentiment.",
  },
  {
    name: "Derivatives Agent",
    body: "Analyzes funding, OI and liquidation conditions.",
  },
  {
    name: "Decision Agent",
    body: "Combines available signals into a final market assessment.",
  },
] as const;

export const viraMarketSignal = {
  isDemo: true,
  title: "BTC Market Analysis",
  signal: "BULLISH",
  confidence: 74,
  timeHorizon: "4H",
  factors: [
    { label: "Technical Trend", value: "Bullish" },
    { label: "Whale Activity", value: "Accumulation" },
    { label: "Momentum", value: "Positive" },
    { label: "Market Sentiment", value: "Neutral / Bullish" },
    { label: "Derivatives", value: "Neutral" },
  ],
  risk: "Medium",
  agentConsensus: { bullish: 7, total: 10 },
} as const;

export const viraWhaleAlert = {
  isDemo: true,
  title: "Whale Alert",
  amount: "4,280 BTC moved",
  estimatedValue: "$XXXM",
  activity: "Exchange Outflow",
  marketContext: "Potentially relevant",
  alertLevel: "High",
} as const;

export const viraTrendReversal = {
  isDemo: true,
  title: "BTC Trend Reversal",
  previousTrend: "Bearish",
  currentConditions: "Improving",
  technical: "Bullish",
  momentum: "Improving",
  whaleActivity: "Accumulation",
  aiAssessment: "Potential Reversal",
  risk: "Medium",
} as const;

export const viraAlertTypes = [
  { icon: "whale", label: "Whale Alerts" },
  { icon: "reversal", label: "Trend Reversal Alerts" },
  { icon: "bullish", label: "Bullish Market Signals" },
  { icon: "bearish", label: "Bearish Market Signals" },
  { icon: "volatility", label: "Volatility Alerts" },
  { icon: "liquidation", label: "Liquidation Alerts" },
  { icon: "news", label: "Important Market News" },
  { icon: "condition", label: "Market Condition Alerts" },
] as const;

export const viraPredictionHistory = {
  rows: [
    { date: "Sep 04", signal: "Bullish", confidence: "74%", horizon: "4H", result: "Correct" },
    { date: "Sep 03", signal: "Bearish", confidence: "61%", horizon: "4H", result: "Incorrect" },
    { date: "Sep 02", signal: "Bullish", confidence: "81%", horizon: "4H", result: "Correct" },
    { date: "Sep 01", signal: "Neutral", confidence: "58%", horizon: "4H", result: "Correct" },
    { date: "Aug 31", signal: "Bullish", confidence: "69%", horizon: "4H", result: "Correct" },
    { date: "Aug 30", signal: "Bearish", confidence: "72%", horizon: "4H", result: "Correct" },
    { date: "Aug 29", signal: "Bullish", confidence: "66%", horizon: "4H", result: "Incorrect" },
    { date: "Aug 28", signal: "Neutral", confidence: "55%", horizon: "4H", result: "Correct" },
    { date: "Aug 27", signal: "Bearish", confidence: "63%", horizon: "4H", result: "Correct" },
    { date: "Aug 26", signal: "Bullish", confidence: "77%", horizon: "4H", result: "Correct" },
    { date: "Aug 25", signal: "Bearish", confidence: "59%", horizon: "4H", result: "Incorrect" },
    { date: "Aug 24", signal: "Bullish", confidence: "70%", horizon: "4H", result: "Correct" },
  ],
} as const;

export const viraPerformanceMetrics = [
  { label: "Predictions Tracked", value: "Tracking in Progress" },
  { label: "Historical Accuracy", value: "Tracking in Progress" },
  { label: "Signals Generated", value: "Tracking in Progress" },
  { label: "Active Alerts", value: "Tracking in Progress" },
] as const;

export const viraTelegramCommands = [
  { icon: "chart", label: "AI Prediction" },
  { icon: "whale", label: "Whale Alerts" },
  { icon: "reversal", label: "Trend Alerts" },
  { icon: "analysis", label: "Market Analysis" },
  { icon: "history", label: "Prediction History" },
] as const;

export const viraFreeFeatures = [
  "Daily AI predictions",
  "Basic BTC market analysis",
  "Whale alerts",
  "Trend information",
  "Market intelligence",
] as const;

export const viraAudience = [
  {
    title: "Active Traders",
    body: "Monitor market conditions without manually checking multiple data sources.",
  },
  {
    title: "Crypto Investors",
    body: "Understand broader Bitcoin market conditions before making decisions.",
  },
  {
    title: "Technical Traders",
    body: "Combine traditional indicators with AI-assisted market analysis.",
  },
  {
    title: "Crypto Enthusiasts",
    body: "Stay informed about whale movements, trends and important market events.",
  },
] as const;

export const viraTraditionalFlow = [
  "Charts",
  "Indicators",
  "Whale Tracker",
  "News",
  "Sentiment",
  "Manual Analysis",
  "Decision",
] as const;

export const viraSystemFlow = [
  "Market Data",
  "Multiple Analysis Engines",
  "AI Reasoning",
  "Market Intelligence",
  "Telegram Alert",
] as const;

export const viraRoadmapNow = [
  "Bitcoin Intelligence",
  "Whale Intelligence",
  "Trend Detection",
  "AI Market Analysis",
] as const;

export const viraRoadmapNext = [
  "Multi-Asset Intelligence",
  "Advanced On-Chain Analytics",
  "Portfolio Intelligence",
  "Personalized Trading Intelligence",
] as const;

export const viraAboutFocus = [
  "AI engineering",
  "Agentic AI",
  "Data infrastructure",
  "Blockchain technology",
  "Real-time systems",
] as const;

export const viraFaq = [
  {
    question: "Is Vira AI financial advice?",
    answer:
      "No. Vira AI provides AI-generated market information and analysis. It does not provide personalized financial advice or guarantee trading outcomes.",
  },
  {
    question: "Can Vira AI predict Bitcoin perfectly?",
    answer:
      "No. Markets are uncertain and no system can reliably predict Bitcoin's future with certainty. Vira AI provides probabilistic analysis based on available market information.",
  },
  {
    question: "What does Vira AI analyze?",
    answer:
      "Depending on the available system modules, Vira AI can analyze technical indicators, market conditions, whale activity, derivatives information, news and sentiment.",
  },
  {
    question: "Where can I use Vira AI?",
    answer: "Vira AI is currently available through Telegram.",
  },
  {
    question: "Is there a free version?",
    answer: "Yes. Users can start with the available free features through Telegram.",
  },
] as const;

export const viraNavLinks = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#whale", label: "Whale Intelligence" },
  { href: "#alerts", label: "Alerts" },
  { href: "#history", label: "Prediction History" },
  { href: "#faq", label: "FAQ" },
] as const;
