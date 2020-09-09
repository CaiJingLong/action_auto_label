# Auto label

If your label is `[bug] The title have problem`, then the action will be add a 'bug' label for it.

This is simply used to explore the use of action. The current version is not recommended for use in a production environment.

## Usabe

```yaml
name: 'On issue'
on:
  issues:
    types: [opened, reopened, edited]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: CaiJingLong/action_auto_label@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
