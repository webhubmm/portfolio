export const dynamic = "force-dynamic";

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");
  const errorDescription = url.searchParams.get("error_description");

  if (error) {
    return json(
      {
        ok: false,
        error,
        errorDescription:
          errorDescription ?? "LinkedIn returned an OAuth error.",
      },
      400
    );
  }

  if (!code) {
    return json(
      {
        ok: false,
        error: "Missing LinkedIn authorization code.",
      },
      400
    );
  }

  return json({
    ok: true,
    provider: "linkedin",
    code,
    state,
  });
}
