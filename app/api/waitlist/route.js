export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      teamSize,
      reason
    } = body;

    // Required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Name and Email are required."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    console.log("📝 New Waitlist Submission");
    console.log({
      name,
      email,
      company,
      teamSize,
      reason
    });

    // In future, you can replace console.log with DB save or email send logic

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Successfully added to the waitlist!"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("❌ Waitlist API Error:", error);

    return new Response(
      JSON.stringify({
        ok: false,
        error: "Internal Server Error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
