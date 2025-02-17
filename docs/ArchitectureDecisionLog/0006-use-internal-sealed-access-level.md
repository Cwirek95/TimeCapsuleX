# 6.  Use internal sealed access level for classes

Date: 2025-02-17

## Problem

To improve the level of proper encapsulation, I need to adopt a default access level and inheritance strategy for our classes.
## Decision

I decided to use the internal sealed access level as the default for new classes.

## Consequences

- Prevent unintended external use by restricting class access to the same assembly
- The elimination of default inheritance means that compositions can be used instead of inheritance, and the result can be more flexible and maintainable code