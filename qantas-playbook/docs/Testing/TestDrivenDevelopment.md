---
layout: default
title: Test-Driven Development
nav_order: 2
parent: Testing
---

Test-Driven Development
-----------------------

All code must have unit test coverage that covers all functionality of
the application. For legacy systems predating TDD we expect
best-efforts, all new code must have unit tests.

The benefits of Test-Driven Development include:

-   Constant feedback that each component is still working.

-   The unit tests act as documentation that cannot go out-of-date,
    > unlike separate documentation, which can and frequently does.

-   When the test passes and the production code is refactored to remove
    > duplication, it is clear that the code is finished, and the
    > developer can move on to a new test.

-   Test-driven development forces critical analysis and design because
    > the developer cannot create the production code without truly
    > understanding what the desired result should be and how to test
    > it.

-   The software tends to be better designed, that is, loosely coupled
    > and easily maintainable, because the developer is free to make
    > design decisions and refactor at any time with confidence that the
    > software is still working. This confidence is gained by running
    > the tests. The need for a design pattern may emerge, and the code
    > can be changed at that time.

-   The test suite acts as a regression safety net on bugs: If a bug is
    > found, the developer should create a test to reveal the bug and
    > then modify the production code so that the bug goes away and all
    > other tests still pass. On each successive test run, all previous
    > bug fixes are verified.

-   Reduced debugging time!