# Website source and local preview

`V0/`, `V1/`, and `V2/` are three separate static websites. Each version contains its own `index.html`, `styles.css`, `script.js`, and short README. V2 also contains its three local SVG project illustrations in `V2/assets/`. No build step, backend, package manager, or external runtime asset is needed.

Open `V0/index.html`, `V1/index.html`, or `V2/index.html` directly in a browser. Alternatively, from this `website/` directory, run `python -m http.server 8765` and visit `http://127.0.0.1:8765/V0/`, `/V1/`, or `/V2/`.

V0 is the frozen initial website. V1 was revised from V0 using in-context examples, with an Experience timeline. V2 was revised independently from V0 using evaluation-driven retrieval, with original project illustrations and scannable contribution details. Retrieval was used while creating V2; the deployed website itself is static. All three versions retain the required Home, About, Projects, and Contact content.
