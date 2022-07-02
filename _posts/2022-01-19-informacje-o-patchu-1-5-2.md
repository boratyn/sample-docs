---
title: Informacje o wersji
subtitle: (patch)
pdffilename: informacje-o-patchu-1.5.2.pdf
version: 1.5.2
date: 2022-01-19
# layout: releasenotes_pdf
layout: home
img-folder: "/assets/images/releasenotes"
status: draft
sidebar: mydoc_sidebar
---

{% if page.layout == "releasenotes_pdf" %}
{% capture currentversion %}{{ page.version }}{% endcapture %}
{% capture pagedate %}{{ page.date | date: "%s" }}{% endcapture %}
{% for ver in site.data.releasenotes.versions %}
{% capture versiondate %}{{ ver.date | date: "%s" }}{% endcapture %}
{% if ver.version == currentversion %}
<h1>{{ page.title }} {{ ver.type }} {{ currentversion }} z dn. {{ ver.date | date: "%d-%m-%Y" }}</h1>
{% for sect in ver.sections %}
<h2>{{ sect.sectiontitle }}</h2>
{% for task in sect.tasks %}
{% capture h5header %}##### {{ task.tasktitle }} {#{{ task.jira }}}{% endcapture %}
{{ h5header }}
{{ task.body | liquify }}
{% if task.tools %}
*(T:{{ task.tools }})*
{% endif %}
{% endfor %}
{% endfor %}
# Historia wydań
{% elsif versiondate < pagedate %}
<h2>Informacje o wersji {{ ver.version }} z dn. {{ ver.date | date: "%d-%m-%Y" }}</h2>
{% for sect in ver.sections %}
<h3>{{ sect.sectiontitle }}</h3>
{% for task in sect.tasks %}
{% capture h5header %}##### {{ task.tasktitle }} {#{{ task.jira }}}{% endcapture %}
{{ h5header }}
{{ task.excerpt | liquify }}
{% if task.tools %}
*(T:{{ task.tools }})*
{% endif %}
{% endfor %}
{% endfor %}
{% endif %}
{% endfor %}
{% else %}
{% capture currentversion %}{{ page.version }}{% endcapture %}
{% for ver in site.data.releasenotes.versions %}
{% if ver.version == currentversion %}
<h1>{{ page.title }} {{ currentversion }} z dn. {{ ver.date | date: "%d-%m-%Y" }}</h1>
[![PDF]({{ "/assets/PDF_32.png" | relative_url }})]({{ page.pdffilename | prepend: "/downloads/" | relative_url }} "Pobierz PDF"){: .pdf}
{% for sect in ver.sections %}
<h2>{{ sect.sectiontitle }}</h2>
{% for task in sect.tasks %}
{% capture h5header %}<h5 id="{{ task.jira }}">{{ task.tasktitle }}</h5>{% endcapture %}
{{ h5header }}
{{ task.body | liquify }}
{% if task.tools %}
*(T:{{ task.tools }})*
{% endif %}
{% endfor %}
{% endfor %}
{% endif %}
{% endfor %}
{% endif %}
