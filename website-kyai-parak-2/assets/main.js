/* Skrip bersama semua halaman: menu ponsel, sub menu, tab, popup, dan tombol WhatsApp */
(() => {
  // 1. Menu ponsel
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileBtn && mobileDrawer) {
    const setDrawer = (open) => {
      mobileDrawer.classList.toggle('hidden', !open);
      mobileBtn.setAttribute('aria-expanded', String(open));
      mobileBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    };
    mobileBtn.addEventListener('click', () => setDrawer(mobileDrawer.classList.contains('hidden')));
    document.querySelectorAll('.mobile-link').forEach((link) => link.addEventListener('click', () => setDrawer(false)));
  }

  // 2. Sub menu desktop (klik/hover) + akordeon menu ponsel
  const dds = [...document.querySelectorAll('[data-dd]')];
  const hoverable = matchMedia('(hover: hover)');
  const setOpen = (d, on) => { d.classList.toggle('open', on); d.querySelector('.dd-btn').setAttribute('aria-expanded', String(on)); };
  const closeAll = (except) => dds.forEach((d) => { if (d !== except) setOpen(d, false); });
  const fit = (d) => {
    const p = d.querySelector('.dd-panel'), box = p.firstElementChild, a = d.getBoundingClientRect(), m = 12;
    const w = box.offsetWidth;
    const left = p.classList.contains('dd-right') ? a.right + 16 - w : a.left + a.width / 2 - w / 2;
    let shift = 0;
    if (left < m) shift = m - left; else if (left + w > innerWidth - m) shift = innerWidth - m - (left + w);
    p.style.setProperty('--dd-shift', shift + 'px');
  };
  addEventListener('resize', () => dds.forEach(fit));
  dds.forEach((d) => {
    const btn = d.querySelector('.dd-btn');
    btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); fit(d); const on = !d.classList.contains('open'); closeAll(d); setOpen(d, on); if (on && e.detail === 0) d.querySelector('.dd-panel a')?.focus(); });
    d.addEventListener('mouseenter', () => { fit(d); if (hoverable.matches) closeAll(d); });
    fit(d);
    d.addEventListener('mouseleave', () => { if (hoverable.matches) setOpen(d, false); });
    d.addEventListener('focusout', (e) => { if (!d.contains(e.relatedTarget)) setOpen(d, false); });
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('[data-dd]')) closeAll(); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = document.querySelector('[data-dd].open');
    if (open) { closeAll(); open.querySelector('.dd-btn').focus(); }
  });
  document.querySelectorAll('.m-acc').forEach((b) => b.addEventListener('click', () => {
    const panel = document.getElementById(b.getAttribute('aria-controls'));
    const on = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', String(on)); panel.hidden = !on;
  }));

  // 3. Tab (dipakai jadwal). Struktur: [role=tablist] berisi button[role=tab][aria-controls]
  document.querySelectorAll('[role="tablist"]').forEach((list) => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const pilih = (tab) => tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => pilih(t));
      t.addEventListener('keydown', (e) => {
        const arah = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!arah) return;
        const next = tabs[(i + arah + tabs.length) % tabs.length];
        pilih(next); next.focus();
      });
    });
  });

  // 4. Popup: <button data-popup="id-dialog"> membuka <dialog id="id-dialog">
  document.querySelectorAll('[data-popup]').forEach((b) => b.addEventListener('click', () => document.getElementById(b.dataset.popup)?.showModal()));
  document.querySelectorAll('dialog').forEach((d) => {
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
    d.querySelectorAll('[data-tutup]').forEach((b) => b.addEventListener('click', () => d.close()));
  });
  // 5. Tombol WhatsApp melayang: pilih pondok putra atau putri
  const wa = document.querySelector('[data-wa]');
  if (wa) {
    const btn = wa.querySelector('.wa-btn');
    const setWa = (on) => { wa.classList.toggle('open', on); btn.setAttribute('aria-expanded', String(on)); btn.setAttribute('aria-label', on ? 'Tutup pilihan WhatsApp' : 'Tanya lewat WhatsApp'); };
    btn.addEventListener('click', (e) => { e.stopPropagation(); setWa(!wa.classList.contains('open')); if (wa.classList.contains('open')) wa.querySelector('.wa-panel a')?.focus(); });
    document.addEventListener('click', (e) => { if (!wa.contains(e.target)) setWa(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && wa.classList.contains('open')) { setWa(false); btn.focus(); } });
    // Tautan lain di halaman yang ingin membuka pilihan ini: <a href="#hubungi" data-buka-wa>
    document.querySelectorAll('[data-buka-wa]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); setWa(true); wa.querySelector('.wa-panel a')?.focus(); }));
  }
})();
