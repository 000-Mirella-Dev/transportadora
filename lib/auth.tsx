import jwt from 'jsonwebtoken';

const SECRET = "segredo123";

export function gerarToken(user: string) {
    return jwt.sign(user, SECRET, { expiresIn: '1h' });
}

export function verificarToken(token: string) {
    try {
        return jwt.verify(token, SECRET);
    } catch (error) {
        console.error("Token inválido:", error);
        return null;
    }
}