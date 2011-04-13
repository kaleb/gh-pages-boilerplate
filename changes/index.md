---
path: /changes/index.html
layout: default
title: Changes
---

This page lists all posts with the category of _changes_.

Posts
-----

{% for page in site.categories.changes %}
{% include post.html %}
{% endfor %}
