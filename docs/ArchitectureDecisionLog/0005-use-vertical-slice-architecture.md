# 5.  Use vertical slice architecture for the backend part of the application

Date: 2025-02-17

## Problem

I need to find an efficient way of structuring and organising the application logic in our code base.

## Decision

I decided to use a vertical slice architecture, where each business process is represented entirely within its own namespace.  Then all the code associated with a particular process is grouped together within that namespace.

## Consequences

- Organising all related code into a single namespace makes it easier to extract or refactor functionality
- Grouping of code by process may have some duplication of code where there is common functionality across a number of processes