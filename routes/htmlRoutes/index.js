const path = require('path');
const router = require('express').Router();

// return index.html page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// return the add html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
});

module.exports = router;