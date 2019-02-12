---
layout: default
section: playbook
title: Version Control
nav_order: 3
parent: Standards
path: "/standards/version-control"
---

# Version Control

| REACH | ALL                          | BY DIVISION | BY STACK |
| ----- | ---------------------------- | ----------- | -------- |
| LEADS | Head of Software Engineering |             |          |

We use a distributed version control with open source
[Git](https://git-scm.com/). Repository management of our
internal code is via [Atlassian
Bitbucket](https://www.atlassian.com/software/bitbucket) or
[GitHub](http://github.com/). Repositories are private by
default; any public repositories need to have written permission by the
Chief Officer Commercial at Qantas or the CTO of Qantas. Repos should
be hosted in the Qantas account. It is not permissible for teams to
have their own source control unless agreed to in writing.

By default version control setting

- MFA enabled for all users

- Forking is turned off

- Release branch access is restricted

- Minimum of two pull requests into release branch

### Branching

#### Branching Strategy

We recommend four branching strategies depending on team and application
maturity.

- [Feature Branching](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow):

  > Default option for new teams and rapidly emerging environments

- [GitHub Flow](https://guides.github.com/introduction/flow/):

  > Rapid development with frequent deployment

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/):

  > For large teams and monolith applications

- [Trunk Based](https://trunkbaseddevelopment.com/):
  > For advanced teams with high unit test coverage and automation.
  > Ideally only use if intended for a continuous delivery environment

#### Branch Naming

The naming of a branch should be in the format:

\[Issue type\]/\[JIRA issue ID\]-short-hyphen-case-description

Issue Types

- release/ for release

- feature/ for features

- bugfix/ for bug fixes

- refactor/ for improvements/refactor

- improvement/ for random tasks

- hotfix/ for bug fixes which need to be branched from and merged into
  > release branch

### Commit naming

Commit messages should point out objectively what changes were made to
the system using preferably bullet points with the goal, reason or
intent rather than what has been done (the diff will show that).
Messages should be clear and concise so that other programmers can look
it up quickly.

Good practices about commit messages can be found at [tpope\'s
blog](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
and [Chris Beam's
blog](https://chris.beams.io/posts/git-commit/).

All commits on a feature branch should be squashed into a single commit
that contains the JIRA ticket number and a meaningful release-notes-like
comment in the commit message.

#### Commit Example

Commit messages should be in the following format:

\[JIRA issue ID\] \[Summary of the changes.\]

Summary of the changes should be like the following:

Did \<What change did you do?\>, so that \<Why did you do that (The
reason)\>

Remove \<troublesome gem X\>, which was causing \<specific description
of issue introduced by gem\>

\> BAD. Don\'t do this.\
Fixed compiling errors

\> Good.\
QAN-1234 Added kangaroo to Qantas logo to keep it consistent with Qantas
brand.

## Technical Design Review

This happens before a technical story is started. The aim is to discuss
your solution approach.

The aim is:

- Review 1 page solution outline

- Review with one Developer and QA

- Discuss Design Patterns

- Define Data Contracts

- Define and verify Acceptance Criteria.

## Code Reviews/Pull Requests

All production code needs to be reviewed via a pull request. Code
reviews are classless: seniority is not required for a peer review
although repository ownership can mandate approver authority.

The aim of pull requests are to:

- Catch major defects before they are introduced into the existing

  > code base

- Discuss architectural improvements and provide guidance for changes

- Look for secure coding practices

- Establish and follow coding standards

- Give kudos for great work

- Review Unit Tests

- Learn from other developers

- Cross Skill yourself

### Pull Request Social Contract

Before each review, the [Social
Contract](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwjk6-yugKjdAhVUdt4KHbVABvsQFjACegQIBRAK&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSocial_contract&usg=AOvVaw00zAPlb_lk_T-jSFCMPe8L)
should be considered:

- We respect each other at all times

- We assume good intent

- Comments are contextual; focused only on the code

- Every comment should be addressed, never ignored

- Every peer review is an opportunity of collective learning and
  > collaboration

### Pull Request Preparation

Pull Requests should meet the following criteria:

- Should have description of changes

- Pull requests should be as small as possible with limited numbers of

  > scope changes

- Build must be green and passed tests

- Reviewers should mark the pull request as "need work" even if they

  > think the proposed changes are minor

- Should have description of changes in pull request

- Include all who are involved with that project

- Should squash unmeaningful commit messages before merge into master

- Include a brief on what the change is about.

- Should include unit test

### Pull Request Reviewers

The guidelines for Pull Request Reviewers are:

- Mandatory 2 approvers (should not include members if pair

  > programmed)

- Ideally 1 reviewer outside your team.

- Reviewed within two working days

- Requested refactoring changes should not change behaviour
