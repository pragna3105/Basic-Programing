# create file and open in editor (Windows: use notepad, Linux/Mac: use nano/vim or open with VS Code)
# Example using a simple inline approach (Linux/Mac/Windows Git Bash supports this)
cat > index.js <<'EOF'
function isPrime(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) return false;
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = { isPrime };
EOF
