---
layout: default
title: Logging
nav_order: 11
parent: Standards
---

Logging 
--------

  | ------- | ------------------------------ | ------------- | ---------- |
  | REACH   | ALL                            | BY DIVISION   | BY STACK   |
  | ------- | ------------------------------ | ------------- | ---------- |
  | LEADS   | Mng Application Performance    |               |            |
  | ------- | ------------------------------ | ------------- | ---------- |             

Logs play an important role in development, allowing Developers and
DevOps to diagnose problems in an application before and after a
release; it allows Cyber to inspect and analyse behaviour and help build
metrics to ascertain platform health. A strong logging strategy should
be considered pivotal to the success of your application.



**Note: No PI data should every be stored in logs**

### Logging Traffic Lights

Aside from standard diagnosing application issues, logging hooks should
be written into your application from which to build monitoring and
alerting. Logging events should be based upon a traffic light principle.

-   Red (fatal & error): fatal or unexpected values in the application.
    > Example: the application encounters an error which is preventing a
    > particular request from completing

-   Amber (warn): exceptions or unusual behaviour that may forebode
    > future failure. Example: object detects inconsistency within an
    > external data feed and it performs a corrective action to
    > compensate for it.

-   Green (info & trace): log key events in the system or user journey
    > to demonstrate application health. Example: registration, booking
    > and confirmation in a booking flow

### Logging Standard

We recommend you use the following logging standard in a key/value pair
that is easily searchable in Splunk.

-   Timestamp: Date and time in UTC ISO8601 e.g. 20180915T155300

-   Correlation id: e.g. session id

-   Action: e.g. \"GET /libs/granite/csrf/token.json HTTP/1.1\"

-   Status: in http error format e.g. 200

-   Reason: human readable reason

-   Level: e.g. INFO

-   Message: The stack trace



#### Logging Levels

-   **FATAL:** Events that indicate problems requiring immediate
    > attention. There may be different criticality of errors. The
    > assumption at this point is that the alarming built in to Splunk
    > will be configured to reflect.

-   **ERROR:** Unhandled events that provide forewarning of potential
    > problems. This level should be used to log unhandled exceptions
    > which are caught by a catch block at the boundary of the
    > application which catches all occurring exceptions that have not
    > been handled by other exception handlers.

-   **WARN:** Handled events that provide forewarning of potential
    > problems; although not a response to an actual error, a warning
    > indicates that a component or application is not in an ideal state
    > and that some further actions could result in a critical error.
    > This level should be used for handled exceptions. For example the
    > application requires a configuration setting but has a default in
    > case the setting is missing.

-   **INFO:** All events which are required for audit purposes

-   **DEBUG:** Events that perform \"normal operations\", e.g. mail
    > sent, user updated profile etc.

-   **TRACE:** All other events:

    -   Executed queries, user authentication, session expired messages

    -   Begin method X, end method X etc.

    -   Any event that could help with debugging

Note: To meet audit requirements the default setting should be level
INFO.
