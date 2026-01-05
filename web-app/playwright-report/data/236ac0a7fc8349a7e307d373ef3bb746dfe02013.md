# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - heading "Amafor Gladiators" [level=1] [ref=e5]
        - generic [ref=e8]:
          - textbox "Search..." [ref=e9]
          - generic:
            - img
      - navigation [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Players" [active] [ref=e12] [cursor=pointer]:
          - /url: /players
        - link "News" [ref=e13] [cursor=pointer]:
          - /url: /news
        - button "Notifications 3" [ref=e15]:
          - generic [ref=e16]: Notifications
          - img
          - generic [ref=e18]: "3"
        - link "Sign In" [ref=e19] [cursor=pointer]:
          - /url: /login
  - main [ref=e20]:
    - generic [ref=e21]: Error loading players. Please try again later.
  - contentinfo [ref=e22]:
    - paragraph [ref=e24]: © 2026 Amafor Gladiators FC. All rights reserved.
  - alert [ref=e25]
```