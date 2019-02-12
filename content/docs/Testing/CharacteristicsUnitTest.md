---
layout: default
section: playbook
title: Characteristics of a Good Unit Test
nav_order: 3
parent: Testing
path: "/testing/characteristics"
---

# Characteristics of a Good Unit Test

A good unit test has the following characteristics:

- Runs fast, runs fast, runs fast. If the tests are slow, they will

  > not be run often.

- Separates or simulates environmental dependencies such as databases,

  > file systems, networks, queues, and so on. Tests that exercise
  > these will not run fast, and a failure does not give meaningful
  > feedback about what the problem actually is.

- Is very limited in scope. If the test fails, it\'s obvious where to

  > look for the problem. Use few Assert calls so that the offending
  > code is obvious. It\'s important to only test one thing in a
  > single test.

- Runs and passes in isolation. If the tests require special

  > environmental setup or fail unexpectedly, then they are not good
  > unit tests. Change them for simplicity and reliability. Tests
  > should run and pass on any machine. The \"works on my box\" excuse
  > doesn\'t work.

- Often uses stubs and mock objects. If the code being tested

  > typically calls out to a database or file system, these
  > dependencies must be simulated, or mocked. These dependencies will
  > ordinarily be abstracted away by using interfaces.

- Clearly reveals its intention. Another developer can look at the
  > test and understand what is expected of the production code.

Reference:
[https://msdn.microsoft.com/en-us/library/aa730844(v=vs.80).aspx](<https://msdn.microsoft.com/en-us/library/aa730844(v=vs.80).aspx>)
