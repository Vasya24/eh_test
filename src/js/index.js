const { forms } = document;

for (const f of forms) {
  f.onsubmit = (e) => { e.preventDefault(); };
}
