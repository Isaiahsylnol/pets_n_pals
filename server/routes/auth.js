import express from "express";

const router = express.Router();

router.get("/:message", (req, res) => {
    res.json({
        message: `Your message is recieved ${req.params.message}`,
    })
})

export default router;