import type { ViraMarketOverview } from "@/types/viraMarket";

export const VIRA_MARKET_API_URL =
  "https://vira-api.webhubasia.com/api/v1/market/overview";

export const VIRA_MARKET_DEFAULTS = {
  symbol: "BTC",
  timeframe: "4h",
  page: 1,
  pageSize: 5,
} as const;

export function viraMarketOverviewUrl(options?: {
  symbol?: string;
  timeframe?: string;
  page?: number;
  pageSize?: number;
}) {
  const params = new URLSearchParams({
    symbol: options?.symbol ?? VIRA_MARKET_DEFAULTS.symbol,
    timeframe: options?.timeframe ?? VIRA_MARKET_DEFAULTS.timeframe,
    page: String(options?.page ?? VIRA_MARKET_DEFAULTS.page),
    page_size: String(options?.pageSize ?? VIRA_MARKET_DEFAULTS.pageSize),
  });
  return `${VIRA_MARKET_API_URL}?${params.toString()}`;
}

export async function fetchViraMarketOverview(options?: {
  symbol?: string;
  timeframe?: string;
  page?: number;
  pageSize?: number;
  revalidateSeconds?: number;
}): Promise<ViraMarketOverview> {
  const res = await fetch(viraMarketOverviewUrl(options), {
    next: { revalidate: options?.revalidateSeconds ?? 60 },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Market overview request failed (${res.status})`);
  }

  return (await res.json()) as ViraMarketOverview;
}

export function displayValue(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") return "—";
  return String(value);
}

export function signalClassName(signal: string) {
  const normalized = signal.trim().toUpperCase();
  if (normalized === "BULLISH") return "vira-signal-bullish";
  if (normalized === "BEARISH") return "vira-signal-bearish";
  return "vira-signal-neutral";
}
