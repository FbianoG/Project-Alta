

async function cores(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true); // Se você estiver usando credenciais

    // Permitir que o navegador envie solicitações OPTIONS (usado para preflight)
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }

}


module.exports = { cores };
