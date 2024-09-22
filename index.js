const simpleGit = require('simple-git');
const haiku = require('./haiku');

const git = simpleGit();

async function fetchCommits() {
  const log = await git.log();
  const commits = log.all.map(commit => commit.message);
  console.log(commits); // For debugging
  const poem = haiku.generateHaiku(commits);
  console.log("\nGenerated Haiku:\n", poem);
}

fetchCommits();
