---
layout: default
section: playbook
title: Confluence
nav_order: 3
parent: Agile
path: "/agile/confluence"
---

# Confluence

Confluence should be used for all technical documentation.

## User Stories

User Stories are business requirements, told from a user's point of
view, and representing business value. They describe something a user
would like to achieve or a problem they want to solve.

### How to write good user stories

We believe in conversation over documentation, but user stories have
minimum requirements:

- Acceptance criteria: bullet point list of the requirements

- Imagery: Attached image or link where appropriate

For more complex stories:

- Scenarios: good and bad scenarios of what the user/system is
  > supposed to perform

A good user story should be:

- Business focused - A story should be written in terminology that the

  > business understands; it must return business value.

- Elevatory friendly - A story is a placeholder for a more detailed

  > conversation, not a feature spec or requirements doc. You should
  > be able to explain the story on a 30 second elevator ride.

- Testable - A story should be testable - if you can\'t test it you
  > shouldn\'t build it

**Note: A user story should take no more than 20 minutes to write. **

#### Acceptance Criteria

Acceptance Criteria are a set of statements, each with a clear pass/fail
result, that specify both functional (e.g., minimal marketable
functionality) and non-functional (e.g., minimal quality) requirements
applicable. They should be high-level while still providing enough
detail to be useful. They should include:

- **Functional Criteria:** Identify specific user tasks, functions or

  > business processes that must be in place. A functional criterion
  > might be "A user is able to access a list of available reports." A
  > non-functional criterion might be "Edit buttons and Workflow
  > buttons comply with the Site Button Design."

- **Non-functional Criteria: **Identify specific non-functional

  > conditions the implementation must meet, such as design elements.
  > A non-functional criterion might be "Edit buttons and Workflow
  > buttons comply with the Site Button Design."

- **Performance Criteria: **If specific performance is critical to the
  > acceptance of a user story, it should be included. This is often
  > measured as a response time, and should be spelled out as a
  > threshold

Acceptance Criteria should state intent, but not a solution (e.g., "A
manager can approve or disapprove an audit form" rather than "A manager
can click an 'Approve/Disapprove' radio button to approve an audit
form"). The criteria should be independent of the implementation:
ideally the phrasing should be the same regardless of target platform.

**Example: **

- Customer can enter coupon code at the payment stage

- Coupon code will adjust price either by \$\$ or %

- Customer can pay by the new discounted amount

#### Scenarios

A scenario describes the steps necessary to test a story, bug or tech
debt. Stories, bugs and tech debt should include multiple scenarios both
the happy path and alternate paths. It is equally important to describe
\"happy-day\" scenarios as well as \"bad-day\" scenarios where
unexpected user or system behaviour occur.

The essential idea is to break down writing a scenario (or test) into
three sections:

- The **Given** part describes the state of the world before you begin

  > the behaviour you\'re specifying in this scenario. You can think
  > of it as the pre-conditions to the test.

- The **When** section is that behaviour that you\'re specifying.

- Finally the **Then** section describes the changes you expect due to
  > the specified behaviour.

**Scenario 1: Title**

Given \[context\]

1\. And \[:some more context\]...

2\. When \[event\]

3\. Then \[:outcome\]

4\. And \[another outcome\]...

**Example: **

**Scenario: Happy-day**\
Given when a Customer has a coupon code at the payment stage, \
When the code entered is correct And within Expire Then apply discount \
When the code entered is incorrect or expired Then show error message

**Scenario: Campaign expired (bad-day)**\
Given when a Customer has a coupon code at the payment stage, \
When the code entered is correct And the campaign date \< TODAY Then
show error message

**Scenario: Negative payment value (bad-day)**\
Given when a Customer has a coupon code at the assign task stage, \
When the discount is below fare value Then credit to zero but not
negative.

The Given, When, Then syntax is useful for testing purposes but not
mandatory. If you prefer a more storytelling scenario format that
depicts the intention of the feature, then by all means write in that
format.
