---
layout: default
title: Github Pages HTML5 Boilerplate
---

This is a boilerplate for use in [Github Pages][ghp]. Octocat icon from
http://designmoo.com/3466/github-icons/ .

Instructions
============

 1. edit `_config.yml`
 2. edit `index.html`
 3. edit `_includes/style.css`

Blog Posts and Changes
======================

{% for post in paginator.posts %}
- [post.title](post.url)
{% endfor %}

[ghp]: http://pages.github.com
