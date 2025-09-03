test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  console.log(process.env.NODE_ENV);
  console.log(responseBody);
  // expect(responseBody.dependencies.database.max_connections).toBe(
  //   amountConnection,
  // );
  // expect(responseBody.dependencies.database.version).toBe(psqlVersion);
  // expect(responseBody.dependencies.database.opened_connections).toBe(1);
  console.log(responseBody);
});
