// server.test.js
const request = require("supertest");
const app = require("./server"); // Importa la aplicación Express

describe("Pruebas de Integración del Servidor Express", () => {
  // PRUEBA 1: Verificar el endpoint principal (CI CRÍTICO)
  test("GET / debe responder con estado 200 y el mensaje de bienvenida", async () => {
    const response = await request(app).get("/");

    // 1. Verificar el código de estado
    expect(response.statusCode).toBe(200);

    // 2. Verificar el cuerpo de la respuesta
    expect(response.text).toContain("Bienvenido al Taller");
  });

  // PRUEBA 2: Verificar el endpoint de API (CI CRÍTICO)
  test("GET /api/status debe responder con estado 200 y formato JSON", async () => {
    const response = await request(app).get("/api/status");

    // 1. Verificar el código de estado
    expect(response.statusCode).toBe(200);

    // 2. Verificar el tipo de contenido
    expect(response.headers["content-type"]).toContain("application/json");

    // 3. Verificar el contenido JSON
    expect(response.body.status).toBe("ok");
  });

  // PRUEBA 3: PRUEBA INTENCIONALMENTE FALLIDA (Opcional, para demostración)
  // Descomentar para mostrar cómo falla el CI:
  /*
  test('POST / debe fallar con estado 404', async () => {
    const response = await request(app).post('/');
    expect(response.statusCode).toBe(201); // Debería ser 404, si el test pide 201 fallará
  });
  */
});
