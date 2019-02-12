---
layout: default
section: playbook
title: Software Engineering Checklist
nav_order: 11
path: "/software-eng-checklist"
---

# Software Engineering Checklist

As part of the Software Engineering Maturity Matrix we have provided a
checklist around minimum standards for Software Engineering practices.

Data Management

- [ ] Dev and Production schema closely matches

- [ ] QA can easily generate test data

- [ ] Database changes are scripted

- [ ] Automated schema changes via deployment

- [ ] Test data is anonymous

- [ ] Test data accurately represents production

- [ ] Production database is monitored

- [ ] Automated DB performance monitored and alerts

Continuous Integration

- [ ] Continuous integration is used for all builds

- [ ] Any build can be recreated from source control

- [ ] Build metrics are visible and acted upon

- [ ] Red builds are never deployed

Quality

- [ ] Dedicated QA function

- [ ] Documented regression tests

- [ ] User Stories have acceptance criteria

- [ ] 90% Unit Test Coverage for all new code

- [ ] Automated regression tests on key flows

Environments

- [ ] Minimum of three environments: Dev, UAT and Production

- [ ] UAT environment matches production settings

- [ ] Creation of environments are trivial

- [ ] Non-production switched off when not in use

- [ ] Production environments are immutable

Version Control

- [ ] Code is version controlled

- [ ] Basic branching standards

- [ ] Documented standards of version control

- [ ] Advanced git commands used and understood

- [ ] Branch level permission are set

- [ ] Code commits match user stories

- [ ] Pull requests have comments

- [ ] Short lived branches

- [ ] All Pull requests have 2 approvers

Coding Standards

- [ ] Documented coding standards

- [ ] Coding design patterns have been established

- [ ] Pull requests are met with rigour

- [ ] Unit tests in code

- [ ] Linting is enabled in CI

- [ ] Code scanning linting IDE plugins adopted and used

- [ ] Coding design patterns are universally adopted

Release Management

- [ ] Deployment is scripted

- [ ] Release notes are created

- [ ] Deployments are able to immediately be rolled back

- [ ] Some feature flags are used

Security

- [ ] Application and system logging

- [ ] Documented secure coding standards

- [ ] Key Management System (credentials)

- [ ] Source code access using MFA

- [ ] Penetration testing

- [ ] Automated code analysis scan by CI

- [ ] Software Composition Analysis by CI
