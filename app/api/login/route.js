import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {

  const { email, senha } = await req.json();

  const resultado = await pool.query(
    "SELECT * FROM motoristas WHERE email = $1",
    [email]
  );

  if (resultado.rows.length === 0) {

    return Response.json(
      { erro: "Email não encontrado" },
      { status: 401 }
    );
  }

  const usuario = resultado.rows[0];
  const senhaCorreta = await bcrypt.compare(
    senha,
    usuario.senha
  );

  if (!senhaCorreta) {
    return Response.json(
      { erro: "Senha incorreta" },
      { status: 401 }
    );

  }

  return Response.json({
    mensagem: "Login concluído",
    usuario,
  });
}