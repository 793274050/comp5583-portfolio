# Ayden Yang — V2 portfolio

Open `index.html` directly in a browser. The site is static HTML, CSS, and vanilla JavaScript; no backend or build step is needed. The runtime website does not perform RAG. Retrieval was used during the generation process to choose design changes.

V2 starts independently from the Task 1 restart V0. The expanded 48-chunk design corpus was queried six times with a reproducible local TF-IDF retriever. The queries were written from the V0 self-evaluation, independent evaluation, and fixed rubric. Selected passages led to original responsive SVG illustrations for all three project cards, intrinsic image dimensions, translated alternative text, reserved aspect ratios, native lazy loading, and one clear focal image per card. The design keeps V0's four required sections, bilingual switch, theme control, mobile navigation, native project disclosures, and contact link.

Expanded contribution text is split into three short labelled units so all-open cards remain scannable. The Huawei card uses the user's confirmed Intelligent Automotive Q&A Assistant scope. Its unverified benchmark values remain omitted. The other two cards explicitly state that this portfolio currently has no public demo/report or verified performance metric; nothing has been invented to fill that evidence gap.

The corpus copy, evaluation-driven retrieval script, all six queries and top-three results, accept/reject decisions, decision-to-change mapping, and final RAG prompt are in `../Task3/`. V2 does not use the V1 timeline or its context examples.
