import { NextRequest, NextResponse } from "next/server";
import { fetchViraMarketOverview, VIRA_MARKET_DEFAULTS } from "@/lib/viraMarket";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = Number(searchParams.get("page") ?? VIRA_MARKET_DEFAULTS.page);
  const pageSize = Number(searchParams.get("page_size") ?? VIRA_MARKET_DEFAULTS.pageSize);
  const symbol = searchParams.get("symbol") ?? VIRA_MARKET_DEFAULTS.symbol;
  const timeframe = searchParams.get("timeframe") ?? VIRA_MARKET_DEFAULTS.timeframe;

  try {
    const data = await fetchViraMarketOverview({
      symbol,
      timeframe,
      page: Number.isFinite(page) && page > 0 ? page : 1,
      pageSize: Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 5,
      revalidateSeconds: 30,
    });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Unable to load market overview." }, { status: 502 });
  }
}
