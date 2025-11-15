export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Received:", body);

    const SHEET_API_URL = process.env.SHEET_API_URL;

    const response = await fetch(SHEET_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company,
        division: body.division,
        service: body.service,
        budget: body.budget,
        timeline: body.timeline,
        projectDetails: body.message
      })
    });

    console.log("Sheetbest status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Sheetbest error:", errorText);
      throw new Error(errorText);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
