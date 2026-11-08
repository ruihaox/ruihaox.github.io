(() => {
  'use strict';
  const input=document.getElementById('entry-search');
  if(!input) return;
  const sections=Array.from(document.querySelectorAll('#journal, #notes'));
  const status=document.getElementById('entry-search-status');
  const filter=()=>{
    const words=input.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let total=0;
    for(const section of sections){
      const rows=Array.from(section.querySelectorAll('[data-entry]'));
      let visible=0;
      for(const row of rows){
        const text=(row.dataset.search||'').toLocaleLowerCase();
        row.hidden=!words.every(word=>text.includes(word));
        if(!row.hidden) visible++;
      }
      const empty=section.querySelector('.search-empty');
      if(empty) empty.hidden=!words.length||visible>0||!rows.length;
      total+=visible;
    }
    if(status) status.textContent=words.length ? total+' matching '+(total===1?'entry':'entries') : '';
  };
  input.addEventListener('input',filter);
  input.addEventListener('keydown',event=>{if(event.key==='Escape'){input.value='';filter();}});
  filter();
})();
