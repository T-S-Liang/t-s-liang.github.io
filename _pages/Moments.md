---
layout: default
title: "Moments"
permalink: /Moments/
author_profile: false
---

<style>
.gallery-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
}

.gallery-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin: 0 0 1.2rem;
}

.gallery-heading h1 {
  position: relative;
  margin: 0;
  padding-bottom: 0.34em;
  color: var(--hku-green);
  font-size: 1.62em;
  font-weight: 700;
  letter-spacing: 0.4px;
  line-height: 1.3;
}

.gallery-heading h1::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 62px;
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--hku-green), var(--hku-green-soft));
}

.gallery-lead {
  margin: 0 0 1.4rem;
  color: var(--ink-muted);
  line-height: 1.6;
}

.gallery-toggle {
  display: flex;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface-soft);
}

.gallery-toggle button {
  padding: 0.34rem 0.85rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--ink-muted);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.18s ease, color 0.18s ease;
}

.gallery-toggle button.is-active {
  background: var(--surface-raised);
  color: var(--hku-green);
  box-shadow: 0 2px 8px rgba(12, 44, 77, 0.08);
}

.gallery-group-title {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin: 1.5rem 0 0.7rem;
  color: var(--ink-strong);
  font-size: 1.02rem;
  font-weight: 700;
}

.gallery-group-title:first-of-type {
  margin-top: 0;
}

.gallery-group-title small {
  color: var(--ink-muted);
  font-size: 0.78rem;
  font-weight: 600;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 10px;
}

.gallery-tile {
  position: relative;
  display: block;
  aspect-ratio: 1;
  margin: 0;
  padding: 0;
  border: 2px solid var(--line);
  border-radius: 8px;
  background: var(--surface-soft);
  overflow: hidden;
  cursor: zoom-in;
  transition: border-color 0.18s ease, transform 0.18s ease;
}

.gallery-tile:hover,
.gallery-tile:focus-visible {
  border-color: var(--hku-green-soft);
  transform: translateY(-2px);
  outline: none;
}

.gallery-tile img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-tile figcaption {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.1rem;
  margin: 0;
  padding: 0.6rem 0.55rem 0.55rem;
  background: linear-gradient(transparent 42%, rgba(0, 0, 0, 0.68));
  color: #fff;
  font-family: -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  text-align: center;
}

.gallery-tile figcaption b {
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.25;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.55);
}

.gallery-tile figcaption span {
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.86;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.55);
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  padding: 3.4rem 1.2rem 2.4rem;
  background: rgba(8, 12, 16, 0.96);
  backdrop-filter: blur(8px);
}

.lightbox.is-open {
  display: flex;
}

.lightbox img {
  max-width: min(92vw, 1180px);
  max-height: calc(100vh - 9rem);
  border-radius: 6px;
  object-fit: contain;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
}

.lightbox button {
  position: absolute;
  border: 0;
  background: transparent;
  color: #fff;
  font-family: inherit;
  line-height: 1;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.15s ease;
}

.lightbox button:hover {
  opacity: 1;
}

.lightbox__close {
  top: 1rem;
  right: 1.2rem;
  font-size: 2.2rem;
}

.lightbox__prev,
.lightbox__next {
  top: 50%;
  transform: translateY(-50%);
  padding: 0 1rem;
  font-size: 3rem;
}

.lightbox__prev { left: 0.4rem; }
.lightbox__next { right: 0.4rem; }

.lightbox__caption {
  max-width: 90vw;
  color: #fff;
  text-align: center;
  line-height: 1.5;
}

.lightbox__caption b {
  display: block;
  font-size: 0.98rem;
}

.lightbox__caption span {
  font-size: 0.84rem;
  opacity: 0.72;
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .lightbox__prev,
  .lightbox__next {
    font-size: 2.2rem;
    padding: 0 0.5rem;
  }
}
</style>

<div class="gallery-page">
  <div class="gallery-heading">
    <h1>Moments</h1>
    <div class="gallery-toggle" role="group" aria-label="Group photos by">
      <button type="button" class="is-active" data-view="time">Time</button>
      <button type="button" data-view="location">Location</button>
    </div>
  </div>

  <p class="gallery-lead">Places I have been and things I did not want to forget. Click any photo to view it full size.</p>

  <div id="gallery-body"></div>
</div>

<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
  <button type="button" class="lightbox__close" id="lb-close" aria-label="Close">&times;</button>
  <button type="button" class="lightbox__prev" id="lb-prev" aria-label="Previous photo">&#8249;</button>
  <img id="lb-img" src="" alt="">
  <button type="button" class="lightbox__next" id="lb-next" aria-label="Next photo">&#8250;</button>
  <div class="lightbox__caption" id="lb-caption"></div>
</div>

<script>
  var MOMENTS = [
  {%- for m in site.data.moments %}
    {
      "title": {{ m.title | jsonify }},
      "city": {{ m.city | jsonify }},
      "region": {{ m.region | jsonify }},
      "year": {{ m.year }},
      "full": {{ m.full | jsonify }},
      "thumb": {{ m.thumb | jsonify }}
    }{% unless forloop.last %},{% endunless %}
  {%- endfor %}
  ];

  (function () {
    var body = document.getElementById('gallery-body');
    var lightbox = document.getElementById('lightbox');
    var lbImg = document.getElementById('lb-img');
    var lbCaption = document.getElementById('lb-caption');
    var order = [];
    var current = 0;

    document.body.appendChild(lightbox);

    function escapeHtml(value) {
      return String(value).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    }

    function groupBy(view) {
      var buckets = {};
      MOMENTS.forEach(function (m) {
        var key = view === 'time' ? String(m.year) : m.region;
        (buckets[key] = buckets[key] || []).push(m);
      });
      var keys = Object.keys(buckets);
      keys.sort(view === 'time'
        ? function (a, b) { return Number(b) - Number(a); }
        : function (a, b) { return a.localeCompare(b); });
      return keys.map(function (k) { return { key: k, items: buckets[k] }; });
    }

    function render(view) {
      var groups = groupBy(view);
      order = [];
      body.innerHTML = groups.map(function (group) {
        var tiles = group.items.map(function (m) {
          var index = order.push(m) - 1;
          var sub = view === 'time' ? m.city : m.city + ' · ' + m.year;
          return '<figure class="gallery-tile" tabindex="0" role="button" data-index="' + index + '"' +
            ' aria-label="Open ' + escapeHtml(m.title) + '">' +
            '<img src="' + m.thumb + '" alt="' + escapeHtml(m.title) + '" loading="lazy" width="600" height="600">' +
            '<figcaption><b>' + escapeHtml(m.title) + '</b><span>' + escapeHtml(sub) + '</span></figcaption>' +
            '</figure>';
        }).join('');
        var count = group.items.length;
        return '<h2 class="gallery-group-title">' + escapeHtml(group.key) +
          ' <small>' + count + (count > 1 ? ' photos' : ' photo') + '</small></h2>' +
          '<div class="gallery-grid">' + tiles + '</div>';
      }).join('');
    }

    function show(index) {
      current = (index + order.length) % order.length;
      var m = order[current];
      lbImg.src = m.full;
      lbImg.alt = m.title;
      lbCaption.innerHTML = '<b>' + escapeHtml(m.title) + '</b><span>' +
        escapeHtml(m.city) + ', ' + escapeHtml(m.region) + ' &middot; ' + m.year + '</span>';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.classList.remove('is-open');
      lbImg.src = '';
      document.body.style.overflow = '';
    }

    body.addEventListener('click', function (e) {
      var tile = e.target.closest('.gallery-tile');
      if (tile) show(Number(tile.dataset.index));
    });

    body.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var tile = e.target.closest('.gallery-tile');
      if (!tile) return;
      e.preventDefault();
      show(Number(tile.dataset.index));
    });

    document.querySelectorAll('.gallery-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.gallery-toggle button').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        render(btn.dataset.view);
      });
    });

    document.getElementById('lb-close').addEventListener('click', close);
    document.getElementById('lb-prev').addEventListener('click', function () { show(current - 1); });
    document.getElementById('lb-next').addEventListener('click', function () { show(current + 1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) close(); });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });

    render('time');
  })();
</script>
