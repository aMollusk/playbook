---
layout: default
section: playbook
title: CI/CD
nav_order: 8
parent: Standards
path: "/standards/ci-cd"
---

# CI/CD

| REACH | ALL       | BY DIVISION | BY STACK |
| ----- | --------- | ----------- | -------- |
| LEADS | Paul Keen |             |          |

[Continuous integration, delivery, and
deployment](https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment),
known collectively as CI/CD, is an integral part of modern development
intended to reduce errors during integration and deployment while
increasing project velocity. CI/CD is a philosophy and set of practices
often augmented by robust tooling that emphasize automated testing at
each stage of the software pipeline. By incorporating these ideas into
your practice, you can reduce the time required to integrate changes for
a release and thoroughly test each change before moving it into
production.

At Qantas:

1.  [Go](https://www.gocd.org/) is used as the CI Pipeline

2.  All builds must use the CI/CD Pipeline

3.  Access to the Pipeline configuration is managed through trusted AD

    > user groups.

4.  All builds must be commended by a pull request. No pull request no

    > build

5.  Must have a build break practice.

6.  Never deploy a red build.

Martin Fowlers CI/CD Principals

1.  Maintain a Single Source Repository.

2.  Automate the Build

3.  Make Your Build Self-Testing

4.  Everyone Commits To the Mainline Every Day

5.  Every Commit Should Build the Mainline on an Integration Machine

6.  Fix Broken Builds Immediately

7.  Keep the Build Fast

8.  Test in a Clone of the Production Environment

9.  Make it Easy for Anyone to Get the Latest Executable

10. Everyone can see what\'s happening

11. Automate Deployment

More Info
[https://martinfowler.com/articles/continuousIntegration.html](https://martinfowler.com/articles/continuousIntegration.html)
