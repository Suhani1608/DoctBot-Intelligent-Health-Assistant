const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Chat = require('../models/Chat');
const Repository = require('../models/Repository');

// 1. Test Route to add a Sample Repository Article
router.post('/repository', async (req, res) => {
  try {
    const { title, category, content } = req.body;
    const newArticle = new Repository({ title, category, content });
    await newArticle.save();
    res.status(201).json({ message: 'Article added successfully!', newArticle });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Route to fetch all Repository Articles
router.get('/repository', async (req, res) => {
  try {
    const articles = await Repository.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Route to Save a Chat Message (for DoctBot Chatbot)
router.post('/chat', async (req, res) => {
  try {
    const { sender, message } = req.body;
    const newChat = new Chat({ sender, message });
    await newChat.save();
    res.status(201).json({ message: 'Chat logged successfully', newChat });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;