module.exports = function() {
  const pwd = process.cwd();

  process.stdin.on('data', () => {
      process.stdout.write(pwd);
      process.stdout.write('\nprompt > ');

  });
}
