# Manoj Adhikari — Academic Website

A responsive, static academic website for Manoj Adhikari, PhD student in Computer Science at Kennesaw State University. Hosted with GitHub Pages using the existing `CNAME`.

## Preview

No build or package installation is needed. From the repository root:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Update content

- `index.html`: biography, news, publications, research, education, and service.
- `style.css`: layout, typography, responsive styles, and print styles.
- `portfolio.js`: publication filters and navigation highlighting. Content remains available without JavaScript.
- `resource/Manoj_Adhikari_CV.pdf`: downloadable CV.
- `assets/profile.png`: profile portrait.

To feature a publication in the Selected view, set `data-selected="true"` on its article. Add new publications in reverse chronological order. Keep publication statuses and dates consistent with the CV.

The older Bootstrap/Gulp theme files are retained for history; the current page does not load them or require their dependencies. GitHub Pages can serve the root directly.

Design inspiration: [Rose E. Wang](https://rosewang2008.github.io/index.html#bio) and [Martin Saveski's personal website](https://github.com/msaveski/www_personal). The current implementation uses plain HTML, CSS, and JavaScript.
