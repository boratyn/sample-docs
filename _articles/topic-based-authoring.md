---
title: "Topic based authoring — an old idea with modern tooling"
layout: default_print
keywords: article, white paper, knol, dita, topics, authoring, modular, topic, writing, technical communication, information, architecture, communication
sidebar: 
summary: What is "topic based authoring" and how to implement this approach with Jekyll.
toc: false
permalink:
---

# Preface {#pref}

Topic based authoring is simply result of observation that complete description of almost any technical product can be divided to bunch of self explanatory units - called *topics*. 

When we speak about any abstract technical product, we can assume there are information about product requirements, product configuration, tasks one can accomplish with the product. There could be also variations of the product and some information could be common for all of them, but other can differ.

In such case having repository of topics and proper tools would allow combine them in many different ways to publish complete product guides, "how to" instructions for different tasks, product comparison, FAQ, tutorials and more.

It appears to be cumbersome at first, on the other hand it could be beneficial. Each information appears only once in its topic — "single source of truth". This greatly reduces inaccuracies, eases updates and content reusing. With complex product or product portfolios it could save money!

So that's how DITA came up. Darwin Information Typing Architecture is an enterprise grade technical documentation standard with XML as a native markup and specialized authoring systems like Oxygen XML, MadCap Flare or Paligo to name a few. But there is barrier to entry with DITA, especially from Word/PDF-based perspective.

But with lightweight markup languages like Markdown and static site generators like Jekyll you can reap most benefits of topic based authoring completely free. I wouldn't say "in no time", however.

Plus, you can add any version control system to implement "doc-as-code" approach with branches, collaborations, peer-reviews and other usefull features known to developers.

# Types of topics {#topics}

What information could be in topic? Basically, it could be:
- step by step task description,
- concept with explanations presenting user some idea,
- reference detailing with structured information, for example command parameters ora configuration settings in dialog box.

Keeping these three types in mind, it is easier to divide information into topics. But you can also develop different workflows for processing different types of topics, for example with different attributes — this is called *specialization*. Also you can apply different styles for publishing, so it could be easier for target audience to read the docs.

Fill free to invent any other types of topics you deem to be useful.

# Structure of topic {#structure}

Topic is unit of information with some basic structure. Topic should normally have *title* and *content*. But you can also add an *alternate title*, *abstract*, *related links* and other. These elements come from DITA but working outside of its schema one can freely shape topic structure.

The open question is whether topics could be nested. If it works for you, why not.

So, how to write the topic with its structure? Well, if you use Jekyll, you can put most of elements in topic *front matter*. For example:

```yaml
title: Topic title
alt-title: Topic alt-title
subject: What this topic is about
abstract: |-
  Some preface to the topic.
uipath: |-
  Where to look for topic subject matter in software.
author: John Doe
keywords: some, words or phrases, one, can use to, find the topic
relatedtopics:
  - /topics/reltopic1_id
  - /topics/reltopic2_id
  - /topics/reltopic3_id
createdate: 2022-07-07
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
```
Then, goes the topic content in Markdown. To reference different elements of topic, you use *Liquid* syntax (from *Shopify*) in include and layout files. But this concerns combining topics in higher level content element...

# Combining topics together {#combine}

When you want to compile, lets say *chapter* from several topics, use `include` directive from Liquid. For example

```rb
{{ '{%' | escape }} include insert_topic.html topic-id="/topics/help-intro-pl" abstract=true uipath=false relatedtopics=true h-level="h2" titletype="main" %}
```

This Liquid snippet allows you to decide what elements of topic strusture you want to use in the chapter (except content, which is rendered by default, but you can add another parameter to include declaration).

Please note, in your chapter you can write the content between topics to "glue" them together. You can also skip topic title (titletype="none") and write custom titles using markdown notation:

```md
# Custom topic title {#topic-id}
```

# Conrefs {#conrefs}

As it was stated before, topics allows content reusing. And what about content reusing at the paragraph or sentence level. Let's say your software product uses the same property for dozens controls. Do you really have to copy-paste this property description in all topics describing individual controls? No you don't. Just create *conref.yml* file in the *_data* folder within Jekyll site folder structure like this:

```yml
prop-name: |-
  `Name`: name of an object; use only uppercase/lowercase letters, digits and underscore (_); lentght limited to 256 characters

prop_other: |-
  `Some other property`: description...
```

Again, use Liquid to reference such variables in your topics or other content items:

```
{{ '{{' | escape }} site.data.conrefs.prop-name }}
```

Flexible? Extremally...

# Conclusion {#conclusion}

The first step to convey comprehensive information concerning complex technical product into good technical documentation is to organize it. You can identify audiences (for example, end users, service engineers, developers) and documentation formats (user guides, built-in help, e-learning, white papers, technical guides, FAQs, etc.). Next step is decomposing raw information into topics and combining it together into documentation. Making "knowledge brics" and building documentation from them. This is true "information architecture".

Please also note, that flexibility of topic based authoring perfectly suits this approach for agile approach and text-only formats allows docs-as-code workflows with CI/CD piplines, into the DocOps paradigm.
