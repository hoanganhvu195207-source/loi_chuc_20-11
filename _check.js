const fs = require("fs");
const html = fs.readFileSync("a:/ngay_nha_giao_vn/index.html", "utf8");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
scripts.forEach((s, i) => {
  try {
    new Function(s);
    console.log("script", i, "OK", s.length);
  } catch (e) {
    console.log("script", i, "ERR", e.message);
  }
});
const m = html.match(/tribute:\s*"([\s\S]*?)",/);
const text = m[1].replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
const words = text.split(" ").filter(Boolean);
console.log("WORDS", words.length);
console.log(text);
