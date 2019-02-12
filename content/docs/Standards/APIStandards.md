---
layout: default
section: playbook
title: API Standards
nav_order: 10
parent: Standards
path: "/standards/api-standards"
---

# API Standards

| REACH | ALL                          | BY DIVISION | BY STACK |
| ----- | ---------------------------- | ----------- | -------- |
| LEADS | Domain Owner API Integration |             |          |

An API is not the implementation of a web service. It is the
specification of the interface to the webservice; where it is and how it
works. An API should be reusable by other services. A well-designed web
API should aim to support:

- **Platform independence**. APIs should be reusable, any client

  > should be able to call the API, regardless of how the API is
  > implemented internally. An API should follow the standard
  > protocols and ideally shared through the Qantas API Gateway.

- **Service evolution**. An API should be able to evolve and add
  > functionality independently from client applications. As the API
  > evolves, existing client applications should continue to function
  > without modification (breaking changes should only occur in
  > extreme cases). All functionality should be discoverable, so that
  > client applications can fully utilise it.

### Resource Naming

- Use nouns over verbs in resource names

- Use plural nouns in all cases. Example: /customers instead of

  > /customer

- Differentiate between the collection resource and the singular

  > resource. Example: /customers is the collection, /customers/1234
  > is a single entity

- Everything is a resource, rethink interactions in terms of resources

  > not operations

- Use correct http verbs (POST, PUT, PATCH, DELETE, HEAD, OPTIONS)

### Collection Resources

Collections should support some standard operations:

- Paging**:** Standard query parameter page, used as necessary

  > depending on the paging strategy (page based, offset based or
  > cursor based. Example: /customers?
  > page\[offset\]=100&page\[size\]=10

- Sorting**:** Standard query parameter sort with comma-delimited list

  > of fields to sort on, with + and - for order. Example:
  > /customers?sort=+age,+name

- **Filtering:** Standard query parameter filter, used as necessary

  > for filtering fields, with a variety of strategies (equality,
  > range checks etc). Example:
  > /customers?filter\[age:gt\]=30&filter\[postcode:eq\]=2000

- Collections should return commonly useful data for each found
  > resource

### Singular Resources

Singular resources should support some standard operations:

- **Sparse fields:** Standard query parameter fields is a

  > comma-delimited list of fields to return rather than the whole
  > resource Example: /customers/1234?fields=name,dob

- **Expanding:** Standard query parameter include lists subresources

  > that should be embedded in the main resource. Example:
  > /customers/1234?include=accounts,owner

- **Secondary identifiers:** Allow users to provide non-primary
  > identifiers to simplify lookups. Example: /customers/safi:abcdefg

### Resource Paths

- /customers for a collection of entities

- /customers/\[id\] for single entity

- /customers/\[id\]/bookings for a collection of entities belongs to a
  > given entity

### Response Codes

Use HTTP responses correctly in all cases based on the below spec:

[[https://tools.ietf.org/html/rfc7231\#section-6](https://tools.ietf.org/html/rfc7231#section-6)

- **200** for successful, synchronous operations (usually GET, PUT,

  > PATCH or DELETE)

- **201** for successful, synchronous operations that result in a new

  > resource (usually POST)

- **202** for successful, asynchronous operations, returning a

  > resource that be polled for status (usually POST)

- **401** for unauthenticated

- **403** for unauthorized

- 412 for invalid request

- **400** for bad data in the request

- **404** for resources that do not exist

- [**[418]{.underline}**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418)

  > for I'm a teapot

- **500** for service unavailability

### Documentation

Use [[Swagger 2.0](https://swagger.io/) for documenting
API.
