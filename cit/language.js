const citLanguage = (() => {
  const root = document.documentElement;
  const toggle = document.querySelector('#cit-language');
  const overview = document.querySelector('#overview');
  const announce = document.querySelector('#announce');
  const entries = [];
  for (const slide of document.querySelectorAll('.slide')) {
    const walker = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const original = node.data;
      const trimmed = original.trim();
      if (Object.hasOwn(korean, trimmed)) {
        entries.push([node, original, original.replace(trimmed, korean[trimmed])]);
      }
    }
  }
  for (const option of document.querySelectorAll('#jump option')) {
    const original = option.textContent;
    const [prefix, chapter] = original.split(' · ', 2);
    const label = original.slice(prefix.length + 3);
    if (chapter && Object.hasOwn(korean, label)) {
      entries.push([option.firstChild, original, prefix + ' · ' + korean[label]]);
    }
  }

  const text = (english, translated) => root.lang === 'ko' ? translated : english;

  function render(useKorean) {
    root.lang = useKorean ? 'ko' : 'en';
    for (const [node, original, translation] of entries) {
      node.data = useKorean ? translation : original;
    }
    toggle.textContent = text('한국어', 'English');
    toggle.lang = text('ko', 'en');
    toggle.setAttribute('aria-label', text('Switch to Korean', 'Switch to English'));
    document.querySelector('nav').setAttribute('aria-label', text('Presentation controls', '프레젠테이션 조작'));
    document.querySelector('#prev').setAttribute('aria-label', text('Previous slide', '이전 슬라이드'));
    document.querySelector('#next').setAttribute('aria-label', text('Next slide', '다음 슬라이드'));
    document.querySelector('#jump').setAttribute('aria-label', text('Go to slide', '슬라이드 이동'));
    document.querySelector('#save').textContent = text('Save HTML', 'HTML 저장');
    overview.textContent = overview.getAttribute('aria-pressed') === 'true'
      ? text('Single slide', '한 장씩 보기') : text('All slides', '전체 보기');
    const active = document.querySelector('.slide-shell.active');
    if (active) {
      announce.textContent = text('Slide ', '슬라이드 ') + (Number(active.dataset.index) + 1)
        + ': ' + active.querySelector('h1,h2').textContent;
    }
  }

  toggle.addEventListener('click', () => {
    const url = new URL(location.href);
    const useKorean = root.lang !== 'ko';
    if (useKorean) url.searchParams.set('lang', 'ko');
    else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    render(useKorean);
  });

  render(new URL(location.href).searchParams.get('lang') === 'ko');

  function serialize() {
    const useKorean = root.lang === 'ko';
    render(false);
    const html = document.documentElement.outerHTML;
    render(useKorean);
    return html;
  }

  return {text, serialize};
})();
