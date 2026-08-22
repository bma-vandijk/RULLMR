---
layout: default
title: Resources
permalink: /resources/
---

<header class="post-header">
  <h1 class="post-title">Resources</h1>
  <p class="page-intro">Readings, institutional guidance, and files for the practical sessions. Materials will appear here as they are ready.</p>
</header>

<div class="post-content">

## Practical session files

Notebooks, data, and environment files for the sessions live in this repository and can be downloaded from the table below. Drop new files into `assets/practicals/` and they will be listed here after the site rebuilds.

{% assign downloads = site.static_files
  | where_exp: "f", "f.relative_path contains 'assets/practicals/'"
  | where_exp: "f", "f.name != 'README.txt'"
  | where_exp: "f", "f.name != '.gitkeep'" %}

{% if downloads.size > 0 %}
<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Location</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {% for f in downloads %}
    <tr>
      <td class="download-name">{{ f.name }}</td>
      <td class="download-meta">{{ f.relative_path | replace: "/assets/practicals/", "" | replace: "assets/practicals/", "" }}</td>
      <td><a href="{{ f.url | relative_url }}" download>Download</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% else %}
<p>No session files have been uploaded yet.</p>
{% endif %}

## Course materials

Session preparation, slides, and exercises will be linked here (and/or on the institutional learning environment) as they become available.

## Institutional guidance

Use LLMs only in ways that fit your institution’s policies on privacy, data, authorship, and research integrity. Specific LUMC and Leiden University links will be added here.

- Institutional AI / LLM policy — *to be added*
- Research integrity and authorship — *to be added*
- Data protection and privacy — *to be added*

## Tools (orientation only)

The course does not require one vendor. These names are here so participants have a shared vocabulary; recommended environments will follow institutional rules.

- Chat-style assistants (for example ChatGPT, Claude, Gemini)
- Institutionally approved or locally hosted models, when data must not leave a controlled environment
- Reference managers and literature databases you already use — LLMs sit beside them, they do not replace them

## Further reading

A short, non-technical reading list will appear here. Suggestions welcome.

</div>
