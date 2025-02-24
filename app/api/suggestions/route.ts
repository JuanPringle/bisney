export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");
    const res = await fetch(`https://bisney-clone.azurewebsites.net/api/getAISuggestion?term=${term}`,
    {
        method: "GET",
        next:{ revalidate: 60 * 60 * 24 }, // 24 hours
    });
    const message = await res.text();
    return Response.json({message});
}


// https://bisney-clone.azurewebsites.net/api/getAISuggestion?