---
layout: default
title: Security
nav_order: 7
has_children: true
permalink: docs/security
---

Security
========

  | ------- | ---------- | ------------- | ---------- |
  | REACH   | ALL        | BY DIVISION   | BY STACK   |
  | ------- | ---------- | ------------- | ---------- |
  | LEADS   |Tim Cooper |               |            |
  | ------- | ---------- | ------------- | ---------- |  


Key Rules:

-   No PI Data in Source Code

-   No credentials in Source Code

-   Pen Test performed, shared and issues addressed for every major
    > release.

-   Password complexity and rotation policy in place and mandated.

-   Secure Code Training completed and certification required to approve
    > pull requests.

-   All builds performed via CI

-   No production access for any developer.

Use the following guidelines to help reduce you attack surface:

-   **Validate input.** Validate input from all untrusted data sources.
    > Proper input validation can eliminate the vast majority of
    > software vulnerabilities. Be suspicious of most external data
    > sources, including command line arguments, network interfaces,
    > environmental variables, and user-controlled files

-   **Heed compiler warnings.** Compile code using the highest warning
    > level available for your compiler and eliminate warnings by
    > modifying the code. Use static and dynamic analysis tools to
    > detect and eliminate additional security flaws.

-   **Architect and design for security policies.** Create a software
    > architecture and design your software to implement and enforce
    > security policies. For example, if your system requires different
    > privileges at different times, consider dividing the system into
    > distinct intercommunicating subsystems, each with an appropriate
    > privilege set.

-   **Keep it simple.** Keep the design as simple and small as possible.
    > Complex designs increase the likelihood that errors will be made
    > in their implementation, configuration, and use. Additionally, the
    > effort required to achieve an appropriate level of assurance
    > increases dramatically as security mechanisms become more complex.

-   **Default deny.** Base access decisions on permission rather than
    > exclusion. This means that, by default, access is denied and the
    > protection scheme identifies conditions under which access is
    > permitted.

-   **Adhere to the principle of least privilege.** Every process should
    > execute with the least set of privileges necessary to complete the
    > job. Any elevated permission should only be accessed for the least
    > amount of time required to complete the privileged task. This
    > approach reduces the opportunities an attacker has to execute
    > arbitrary code with elevated privileges.

-   **Sanitize data sent to other systems.** Sanitize all data passed to
    > complex subsystems such as command shells, relational databases,
    > and commercial off-the-shelf (COTS) components. Attackers may be
    > able to invoke unused functionality in these components through
    > the use of SQL, command, or other injection attacks. This is not
    > necessarily an input validation problem because the complex
    > subsystem being invoked does not understand the context in which
    > the call is made. Because the calling process understands the
    > context, it is responsible for sanitizing the data before invoking
    > the subsystem.

-   **Practice** **defense in depth.** Manage risk with multiple
    > defensive strategies, so that if one layer of defense turns out to
    > be inadequate, another layer of defense can prevent a security
    > flaw from becoming an exploitable vulnerability and/or limit the
    > consequences of a successful exploit.

-   **Use effective quality assurance techniques.** Good quality
    > assurance techniques can be effective in identifying and
    > eliminating vulnerabilities. Fuzz testing, penetration testing,
    > and source code audits should all be incorporated as part of an
    > effective quality assurance program. Independent security reviews
    > can lead to more secure systems. External reviewers bring an
    > independent perspective; for example, in identifying and
    > correcting invalid assumptions.

-   **Adopt a secure coding standard.** Develop and/or apply a secure
    > coding standard for your target development language and platform.

Reference:
[https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices)
