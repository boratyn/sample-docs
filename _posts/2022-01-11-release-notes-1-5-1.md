---
title: Release info
subtitle: (patch)
version: 1.5.1
date: 2022-01-11
pdffilename: release-notes-1-5-1.pdf
img-folder: "/assets/images/releasenotes"
status: draft
author: Dariusz Boratyn
sidebar: mydoc_sidebar
permalink: sample3
customtitle: true
keywords: features, news, bugs, fixes
---

{% capture currentversion %}{{ page.version }}{% endcapture %}
{% for ver in site.data.releasenotes.versions %}
{% capture refversion %}{{ ver.version }}{% endcapture %}
{% if refversion == currentversion %}
{% for sect in ver.sections %}
<h2>{{ sect.sectiontitle }}</h2>
{% for task in sect.tasks %}
{% capture h5header %}#### {{ task.tasktitle }} {#{{ task.jira }}}{% endcapture %}
{{ h5header }}
{{ task.body | liquify }}
{% endfor %}
{% endfor %}
{% endif %}
{% endfor %}
