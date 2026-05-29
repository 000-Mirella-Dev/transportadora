import pool from "@/lib/db.js";
import bcrypt from "bcryptjs";


export async function POST(req) {

  try {

    const body = await req.json();

    const {
      nome,
      cnh,
      veiculo,
      telefone,
      email,
      senha,
    } = body;

    const senhaHash = await bcrypt.hash(
      senha,
      10
    );

    const result = await pool.query(
      `
      INSERT INTO motoristas(
      nome, cnh, veiculo, telefone, email, senha)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *
      `,
      [
        nome,
        cnh,
        veiculo,
        telefone,
        email,
        senhaHash,
      ]
    );

    return Response.json(
      result.rows[0]
    );

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error: "Erro ao cadastrar",
      },
      {
        status: 500,
      }
    );

  }

}

export async function GET() {

  const result = await pool.query(
    "SELECT * FROM motoristas ORDER BY id DESC"
  );

  return Response.json(
    result.rows
  );

}
