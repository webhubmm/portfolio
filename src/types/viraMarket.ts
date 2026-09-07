export type ViraAgentConsensus = {
  bullish_votes: number;
  total_votes: number;
  label: string;
};

export type ViraTicker = {
  pair: string;
  price: number;
  price_display: string;
  change_pct_24h: number;
  change_display: string;
  as_of: string;
  source: string;
};

export type ViraAiMarketSignal = {
  signal: string;
  confidence: number;
  confidence_pct: number;
  market_regime: string;
  risk: string;
  agent_consensus: ViraAgentConsensus;
  rsi: number | null;
  macd: string | null;
  ema_50: string | null;
  volume: string | null;
  timeframe: string;
  prediction_id: string | null;
  bb_squeeze: string | null;
  market_structure: string | null;
};

export type ViraMarketAnalysis = {
  signal: string;
  confidence: number;
  confidence_pct: number;
  time_horizon: string;
  why: {
    technical_trend: string | null;
    whale_activity: string | null;
    momentum: string | null;
    market_sentiment: string | null;
    derivatives: string | null;
    risk: string | null;
    agent_consensus: ViraAgentConsensus;
  };
  disclaimer: string | null;
  explanation: string | null;
};

export type ViraWhaleAlert = {
  title: string;
  amount_btc: number;
  amount_display: string;
  estimated_value_usd: number;
  estimated_value_display: string;
  activity: string;
  market_context: string;
  alert_level: string;
  exchange: string | null;
  tx_hash: string | null;
  timestamp: string;
  disclaimer: string | null;
};

export type ViraTrendReversal = {
  title: string;
  previous_trend: string;
  current_conditions: string;
  technical: string;
  momentum: string;
  whale_activity: string;
  ai_assessment: string;
  risk: string;
};

export type ViraPredictionHistoryItem = {
  date: string;
  date_iso: string;
  signal: string;
  confidence: number;
  confidence_pct: number;
  time_horizon: string;
  result: string;
  prediction_id: string;
};

export type ViraPredictionHistory = {
  items: ViraPredictionHistoryItem[];
  page: number;
  page_size: number;
  total_days: number;
  total_pages: number;
  has_prev: boolean;
  has_next: boolean;
};

export type ViraMarketOverview = {
  symbol: string;
  quote: string;
  ticker: ViraTicker;
  ai_market_signal: ViraAiMarketSignal;
  market_analysis: ViraMarketAnalysis;
  whale_alert: ViraWhaleAlert | null;
  trend_reversal: ViraTrendReversal | null;
  prediction_history: ViraPredictionHistory;
  generated_at: string;
};
