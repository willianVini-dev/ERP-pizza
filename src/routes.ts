import express from 'express'

const router = express.Router()
router.get('/example', (req, res) => {
    res.send('Hello World');
});

export {router}