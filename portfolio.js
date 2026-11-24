'use strict';

// All publications remain available when JavaScript is disabled.
const filters = document.querySelector('.publication-filters');
const publications = [...document.querySelectorAll('.publication')];
const status = document.querySelector('.filter-status');
if (filters && publications.length) {
  filters.hidden = false;
  function filterPublications(selection, announce = false) {
    let count = 0;
    for (const paper of publications) {
      paper.hidden = selection === 'selected' && paper.dataset.selected !== 'true';
      if (!paper.hidden) count++;
    }
    for (const button of filters.querySelectorAll('button')) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === selection));
    }
    if (announce && status) status.textContent = `Showing ${count} ${selection === 'all' ? '' : 'selected '}publications.`;
  }
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (button) filterPublications(button.dataset.filter, true);
  });
  filterPublications('selected');
}

const navigationLinks = [...document.querySelectorAll('.navigation a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-5% 0px -60% 0px', threshold: 0 });
  for (const link of navigationLinks) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}
document.getElementById('year').textContent = new Date().getFullYear();
