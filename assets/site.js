(() => {
  'use strict';
  const input = document.getElementById('post-search');
  if (!input) return;
  const rows = Array.from(document.querySelectorAll('.post-row'));
  const empty = document.getElementById('no-results');
  const status = document.getElementById('search-status');
  const filter = () => {
    const query = input.value.trim().toLocaleLowerCase('zh-CN');
    const words = query.split(/\s+/).filter(Boolean);
    let count = 0;
    for (const row of rows) {
      const text = (row.dataset.search || '').toLocaleLowerCase('zh-CN');
      const matches = words.every(word => text.includes(word));
      row.hidden = !matches;
      if (matches) count++;
    }
    if (empty) empty.hidden = !query || count > 0;
    if (status) status.textContent = query ? `找到 ${count} 篇文章` : '';
  };
  input.addEventListener('input', filter);
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') { input.value = ''; filter(); }
  });
  filter();
})();
