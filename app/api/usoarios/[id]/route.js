import pool from "@/lib/db";

export async function PUT(req, context) {

  const { id } =
    await context.params;

  const body =
    await req.json();

  const {
    nome,
    cnh,
    veiculo,
    telefone,
    email,
    senha,
  } = body;

  await pool.query(
    `
    UPDATE motoristas
    SET nome=$1,
        cnh=$2,
        veiculo=$3,
        telefone=$4,
        email=$5,
        senha=$6
    WHERE id=$7
    `,
    [
      nome,
      cnh,
      veiculo,
      telefone,
      email,
      senha,
      Number(id),
    ]
  );

  return Response.json({
    ok: true,
  });

}


export async function DELETE(req, context) {

  const { id } =
    await context.params;

  await pool.query(
    `
    DELETE FROM motoristas
    WHERE id=$1
    `,
    [Number(id)]
  );

  return Response.json({
    ok: true,
  });

}