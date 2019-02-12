---
layout: default
section: playbook
title: Software Composition Analysis
nav_order: 4
parent: Security
path: "/security/software-composition"
---

# Software Composition Analysis

Software Composition Analysis (SCA) allows you to identify third-party
and open source components that have been integrated into all your
applications. It informs you about the licenses for each of them an
identifies out-of-date libraries that should be upgraded or patched.

As nearly all projects use some form of open source or third-party
library it is required for software to use an SCA solution. It is
expected that SCA forms part of your continuous integration build. Where
available, use SCA plugins to your IDE in order to identify library
issues early in the development cycle.

The default solution is to use either Veracode SourceClear or NexusIQ,
any other solutions must be approved by the Cyber team.
