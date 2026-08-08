/* ============================================================
   Utilidades compartidas del blog — Nedian S.A.C.
   renderMd(): convierte markdown simple a HTML.
   Formato soportado en el contenido de los posts:
     ## Subtítulo        -> h2
     ### Sub-subtítulo   -> h3
     - ítem              -> lista con viñetas
     > cita              -> bloque de cita
     **negrita**         -> texto resaltado
     [img:URL:descripción] -> imagen
     Línea en blanco     -> separa párrafos
   ============================================================ */

window.blogHelpers = (function(){
  'use strict';

  function esc(s){
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function inline(s){
    s = esc(s);
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\[img:(.+?)(?::([^\]]*))?\]/g, function(m, u, a){
      return '<img src="' + u.trim() + '" alt="' + (a ? a.trim() : '') + '" loading="lazy">';
    });
    return s;
  }

  function renderMd(src){
    if(!src) return '';
    var lines = String(src).split(/\r?\n/);
    var html = '', i = 0;

    while(i < lines.length){
      var l = lines[i];
      if(/^\s*$/.test(l)){ i++; continue; }
      if(/^###\s+/.test(l)){ html += '<h3>' + inline(l.replace(/^###\s+/, '')) + '</h3>'; i++; continue; }
      if(/^##\s+/.test(l)){ html += '<h2>' + inline(l.replace(/^##\s+/, '')) + '</h2>'; i++; continue; }
      if(/^>\s?/.test(l)){
        var q = [];
        while(i < lines.length && /^>\s?/.test(lines[i])){ q.push(inline(lines[i].replace(/^>\s?/, ''))); i++; }
        html += '<blockquote>' + q.join('<br>') + '</blockquote>';
        continue;
      }
      if(/^-\s+/.test(l)){
        var items = [];
        while(i < lines.length && /^-\s+/.test(lines[i])){ items.push('<li>' + inline(lines[i].replace(/^-\s+/, '')) + '</li>'); i++; }
        html += '<ul>' + items.join('') + '</ul>';
        continue;
      }
      if(/^\d+\.\s+/.test(l)){
        var oitems = [];
        while(i < lines.length && /^\d+\.\s+/.test(lines[i])){ oitems.push('<li>' + inline(lines[i].replace(/^\d+\.\s+/, '')) + '</li>'); i++; }
        html += '<ol>' + oitems.join('') + '</ol>';
        continue;
      }
      var m = l.match(/^\[img:(.+?)(?::([^\]]*))?\]$/);
      if(m){ html += '<img src="' + m[1].trim() + '" alt="' + (m[2] ? m[2].trim() : '') + '" loading="lazy">'; i++; continue; }
      html += '<p>' + inline(l) + '</p>';
      i++;
    }
    return html;
  }

  function fmtDate(d){
    var dt = new Date(d + 'T12:00:00');
    return dt.toLocaleDateString('es-PE', {day:'numeric', month:'long', year:'numeric'});
  }

  function slugify(s){
    return String(s).toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80);
  }

  function readingMinutes(content){
    var words = String(content || '').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }

  function cardHtml(p){
    return '<article class="post-card">' +
      '<a class="thumb" href="post.html?slug=' + encodeURIComponent(p.slug) + '"><span class="cat">' + esc(p.category) + '</span><img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy"></a>' +
      '<div class="body">' +
        '<div class="meta"><span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' + fmtDate(p.date) + '</span></div>' +
        '<h3><a href="post.html?slug=' + encodeURIComponent(p.slug) + '">' + esc(p.title) + '</a></h3>' +
        '<p>' + esc(p.excerpt) + '</p>' +
        '<a class="readmore" href="post.html?slug=' + encodeURIComponent(p.slug) + '">Leer más <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>' +
      '</div></article>';
  }

  return {
    esc: esc,
    renderMd: renderMd,
    fmtDate: fmtDate,
    slugify: slugify,
    readingMinutes: readingMinutes,
    cardHtml: cardHtml
  };
})();
