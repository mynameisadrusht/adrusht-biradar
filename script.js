async function placeBet() {
  const amount = document.getElementById('betAmount').value;
  const res = await fetch('http://localhost:3000/bet', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount })
  });
  const data = await res.json();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = data.win ? `🎉 You won ₹${data.payout}!` : '😢 You lost! Try again.';
}
