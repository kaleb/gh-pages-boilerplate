---
title: Changes
layout: default
---

{% for page in site.categories.changes %}
<article class="post">
{% include post.html %}
{{ page.content }}
</article>
{% endfor %}
