---
layout: default
title: Credentials
nav_order: 5
parent: Security
---

Credentials
-----------

Production credentials, keys or other secrets should not be stored in
plain text in any code or testing script. Further, credentials should
not be known by Developers; all credentials should be stored in a
secrets management solution.

Qantas's prefered secrets management tool is AWS Secrets Manager.
Secrets should be rotated on a minimum of a quarterly basis, ideally
through an automated process.

Credentials for Dev, UAT and Production environments must be different.