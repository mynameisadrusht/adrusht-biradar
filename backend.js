const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/bet', (req, res) => {
  const amount = parseInt(req.body.amount);
  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  const win = Math.random() > 0.5;
  const payout = win ? amount * 2 : 0;
  res.json({ win, payout });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
