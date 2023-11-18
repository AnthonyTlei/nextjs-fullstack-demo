import { exec } from "child_process";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const result = await new Promise((resolve, reject) => {
      exec(
        "python script.py " + JSON.stringify(body),
        (error, stdout, stderr) => {
          if (error) {
            console.error(`Execution error: ${error}`);
            reject(new Error("Internal server error"));
          }
          resolve(stdout);
        },
      );
    });
    return new Response(JSON.stringify({ stdout: result }), { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
