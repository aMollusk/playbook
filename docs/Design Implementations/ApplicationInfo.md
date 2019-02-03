---
layout: default
title: Application Info
nav_order: 1
parent: Design Implementation
---

Application Info
----------------

  | ------- | ---------- | ------------- | ---------- |
  | REACH   | ALL        | BY DIVISION   | BY STACK   |
  | ------- | ---------- | ------------- | ---------- |
  | LEADS   | Paul Keen|               |            |
  | ------- | ---------- | ------------- | ---------- |   



Making application meta-data readily accesible will help with support issues 
and with post verification testing.

When building new applications include the _**/appInfo**_ route and surface the
following build information:

```json
{
	build: {
		name: "Prepare to Fly - Eligibility Microservice",
		appId: "AMS04-A833",
		repo: "checkin"
		version: "1.0.0",
		branch: "release",
		commit: "66b46de0d7bc6532d4c6816c3cc1b70debe10b25",
		tag: "R7",
		buildNumber: "13",
		buildTime: "2018-12-12T16:59:03.440+11:00"
	}
}
```

For widgets inject the information into the js file as comments.

The information will make it easier to trace the ownership of applications and 
to confirm exactly what is deployed in production. Also checking the app info 
following a release can verify the release was successful.

