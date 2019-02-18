---
title: Design Implementations
path: "/design-implementations/application-info"
---

# Application Info

| REACH | ALL                          | BY DIVISION | BY STACK |
| ----- | ---------------------------- | ----------- | -------- |
| LEADS | Head of Software Engineering |             |          |

Making application meta-data readily accesible will help with support issues
and with post verification testing (PVT).

With this approach it will be easier to trace the ownership of applications and
to confirm exactly what has been deployed in production. Also checking the app info
following a release (PVT) can be used to verify the release was successful.

When building new applications include the _**/appInfo**_ route and surface the
following build information:

```json
{
	build: {
		name: "Application name",
		appId: "AppID-123",
		repo: "repo-name"
		version: "1.0.0",
		branch: "release",
		commit: "66b46de0d7bc6532d4c6816c3cc1b70debe10b25",
		tag: "R7",
		buildNumber: "13",
		buildTime: "2018-12-12T16:59:03.440+11:00"
	}
}
```

For standalone js widgets inject the information into the js file as comments.
