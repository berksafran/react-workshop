// Mock user database
const users = [
  { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com" },
  { id: 2, name: "Ayşe Demir", email: "ayse@example.com" },
  { id: 3, name: "Mehmet Kaya", email: "mehmet@example.com" },
];

export async function GET() {
  return Response.json({
    success: true,
    data: users,
    count: users.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email) {
      return Response.json(
        { success: false, error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Create new user
    const newUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
    };

    users.push(newUser);

    return Response.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return Response.json(
      { success: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }
}
