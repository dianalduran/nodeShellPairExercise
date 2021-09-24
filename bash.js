process.stdout.write("prompt > ");

const pwd = require("./pwd");
const ls = require("./ls");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write(cmd);
  process.stdout.write("\nprompt > ");
});
