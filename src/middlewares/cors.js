// cores.js (seu middleware CORS)
async function cores(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Substitua pelo URL real do seu frontend
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
}

module.exports = { cores };

