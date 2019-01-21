---
layout: default
title: Bugs
nav_order: 4
parent: Agile
---

Bugs
----

Useful bug reports are ones that get bugs fixed. A useful bug report
is\...

1.  Reproducible - If an Engineer can\'t see it or conclusively prove
    > that it exists, the more likely it will be returned \"It works for
    > me!\"

2.  Specific - The quicker the Engineer can trace down the issue to a
    > specific problem, the more likely it\'ll be fixed expediently.

The goals of a bug report are to:

-   Pinpoint the bug

-   Explain it to the QA team to triage

### How to write a good bug report

A good bug report should be brief but include the following information:

**Summary**

A brief summary of the issue

**Steps to Reproduce**

The goal of reproducible steps is to teach developer to recreate the bug
on his own system. It may be as simple as Load the attached test case in
Browser XYZ. A more complex case may involve multiple steps, such as:

*Step 1: Load the attached test case in Browser XYZ*

*Step 2: Scroll to the bottom of the page*

*Step 3: Click the link*

*Step 4: Page should show X but shows Y *

**Expected Result**

Detail what you expect the result to be. 

**Actual Result**

A picture tells a thousand works and saves a lot of bug writing.
Attached screenshots or record behaviour
(e.g. [http://recordit.co/](http://recordit.co/)) to help
quickly triage the issue. 

**Impact**

**Scope:**

A measure for how many people it affects, usually on a scale of 1 to 5.
So if everyone's completion rate is 5% higher than it should be, that
would be a 5, as it affects everyone. It's really good if you have some
description for this, e.g.:

-   Level 1: Few reported cases

-   Level 2: Affects a small sub-sector of users (\<20% or something)

-   Level 3: Affects a medium sub-sector of users (20 - 50% ish)

-   Level 4: Affects all posters OR all workers

-   Level 5: Affects all users

**Severity:**

 A measure for how badly it affects the user and/or business. Potential
scale could be:

-   Level 1: A typo (unlikely to have customer service impacts),
    > duplicate notifications

-   Level 2: Incorrect completion rate (some people might write in about
    > it), discrepancy in task count

-   Level 3: Something that is stopping people from messaging, making an
    > offer, or assigning

-   Level 4: Payments incorrectly processed, e.g. the bug from the other
    > week

-   Level 5: Whole site down/Armageddon

Under this, it's also important to note the impacts, for example:

-   Increased ticket volume

-   Manual workaround uses up customer service time etc.

-   Lost revenue

-   Negative PR
