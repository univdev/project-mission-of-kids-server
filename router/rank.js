const moment = require('moment');
const { Router } = require('express');
const router = Router();
const { Rank } = require('../models');

router.get('/ranks', async (req, res) => {
  const { date, since, until } = req.query;
  const where = {};
  if (date) {
    where.createdAt = {
      $gt: moment(date).set({ h: 0, m: 0, s: 0 }),
      $lt: moment(date).set({ h: 23, m: 59, s: 59 }),
    };
  }
  if (since) {
    where.createdAt = {
      $gt: moment(since).set({ h: 0, m: 0, s: 0 }),
    };
  }
  if (until) {
    where.createdAt = {
      $lt: moment(until).set({ h: 23, m: 59, s: 59 }),
    };
  }
  const ranks = await Rank.find(where);
  return res.status(200).json(ranks);
});

router.post('/ranks', async (req, res) => {
  const { score } = req.body;
  if (!score) return res.status(400).json({ message: '점수 데이터가 필요합니다.' });
  const rank = await new Rank({ score }).save();
  return res.status(200).json(rank);
});

module.exports = router;