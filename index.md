---
layout: default
title: Responsible Use of Large Language Models in Research
wide: true
permalink: /
---

<section class="hero">
  <div>
    <span class="eyebrow">{{ site.institution }} · {{ site.department }} · {{ site.credits }}</span>
    <h1>Use large language models in research — without losing the plot</h1>
    <p class="lede">
      RULLMR is a practical course for researchers who want to work with ChatGPT and similar tools
      critically and responsibly. No computer-science background required.
    </p>
    <div class="cta-row">
      <a class="cta" href="{{ '/syllabus/' | relative_url }}">Read the syllabus</a>
      <a class="cta cta-ghost" href="{{ '/about/' | relative_url }}">About the course</a>
    </div>
  </div>

  <aside class="hero-panel" aria-label="The research cycle">
    <h2>Where LLMs show up in research</h2>
    <ol class="cycle">
      <li>
        <span class="n">1</span>
        <div>
          <strong>Literature</strong>
          <span class="desc">Searching, screening, and reviewing papers</span>
        </div>
      </li>
      <li>
        <span class="n">2</span>
        <div>
          <strong>Design</strong>
          <span class="desc">Research questions and study plans</span>
        </div>
      </li>
      <li>
        <span class="n">3</span>
        <div>
          <strong>Data</strong>
          <span class="desc">Collection, management, and privacy</span>
        </div>
      </li>
      <li>
        <span class="n">4</span>
        <div>
          <strong>Analysis</strong>
          <span class="desc">Interpretation — with you still in charge</span>
        </div>
      </li>
      <li>
        <span class="n">5</span>
        <div>
          <strong>Writing</strong>
          <span class="desc">Papers, reviews, and grant proposals</span>
        </div>
      </li>
      <li>
        <span class="n">6</span>
        <div>
          <strong>Accountability</strong>
          <span class="desc">Document, check, and take responsibility</span>
        </div>
      </li>
    </ol>
  </aside>
</section>

<section class="principles" aria-label="Course principles">
  <article class="principle">
    <span class="tag">01 · Decide</span>
    <h3>When is an LLM appropriate?</h3>
    <p>Learn to weigh data sensitivity, the expertise a task needs, and the risk of getting something wrong — then choose to use a model, or not.</p>
  </article>
  <article class="principle">
    <span class="tag">02 · Use</span>
    <h3>How do you use one safely?</h3>
    <p>Pick a suitable environment, stay within institutional rules, and build a workflow you can explain to a colleague.</p>
  </article>
  <article class="principle">
    <span class="tag">03 · Account</span>
    <h3>Who is responsible?</h3>
    <p>You are. The course treats LLMs as supportive tools — never as a substitute for scientific judgement.</p>
  </article>
</section>

<blockquote class="band">
  <p>Large language models can speed research up. They cannot own the result. This course is about keeping quality, integrity, and traceability in human hands.</p>
  <cite>The idea behind RULLMR</cite>
</blockquote>

<dl class="facts">
  <div class="fact">
    <dt>Format</dt>
    <dd>8 sessions</dd>
  </div>
  <div class="fact">
    <dt>Duration</dt>
    <dd>{{ site.duration }}</dd>
  </div>
  <div class="fact">
    <dt>Study load</dt>
    <dd>~42 hours · {{ site.credits }}</dd>
  </div>
  <div class="fact">
    <dt>For</dt>
    <dd>Research staff at any career stage</dd>
  </div>
</dl>

<h2 class="section-title">Announcements</h2>
{% if site.posts.size > 0 %}
<ul class="announcements">
  {% for post in site.posts %}
  <li>
    <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%-d %B %Y' }}</time>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No announcements yet.</p>
{% endif %}
