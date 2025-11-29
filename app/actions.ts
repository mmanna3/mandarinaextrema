"use server";

import { neon } from "@neondatabase/serverless";
import { headers } from "next/headers";

export async function registrarClic(pagina: string, evento: string) {
  try {
    // Obtener la IP del cliente desde los headers
    const headersList = headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0] ||
      headersList.get("x-real-ip") ||
      headersList.get("remote-addr") ||
      "unknown";

    // Conectar a la base de datos
    const sql = neon(process.env.DATABASE_URL!);

    // Insertar el evento en la tabla eventos
    await sql`
      INSERT INTO eventos (ip, pagina, evento, fechayhora)
      VALUES (${ip}, ${pagina}, ${evento}, NOW())
    `;
  } catch (error) {
    // Manejar errores silenciosamente sin romper la experiencia del usuario
    console.error("Error al registrar clic:", error);
  }
}

