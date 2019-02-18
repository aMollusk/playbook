---
section: playbook
title: Code Review/Pull Requests
path: "/standards/code-review"
---

# Code Reviews/Pull Requests

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
