# @notymail/action

Use [notymail](https://notymail.dafnik.me) from GitHub Actions.

## Usage

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: send notification
        uses: notymail/action@v1
        with:
          url: 'https://notymail.you_domain.your_tld'
          to: 'test@1.1.1.1'
          subject: 'Hello world'
          #apiKey: ''
          #body: |
          #  Hello world!
          #  **Markdown** _supported_.
```

<!-- prettier-ignore-start -->
| Inputs    | Required | Description                          |
|-----------|----------|--------------------------------------|
| `url`     | X        | URL of notymail server               |
| `to`      | X        | Recipient email address              |
| `subject` | X        | E-Mail subject                       |
| `body`    |          | E-Mail body (**Markdown supported**) |
| `apiKey`  |          | API-Key of notymail                  |
<!-- prettier-ignore-end -->

Furthermore, see [action.yml](action.yml)

## Release instructions

In order to release a new version of this action:

1. Locate the semantic version of the [upcoming release][release-list] (a draft is maintained by the [`draft-release` workflow][draft-release]).

2. Publish the draft release from the `main` branch with semantic version as the tag name, _with_ the checkbox to publish to the GitHub Marketplace checked. :ballot_box_with_check:

3. After publishing the release, the [`release` workflow][release] will automatically run to create/update the corresponding the major version tag such as `v0`.

   ⚠️ Environment approval is required. Check the [Release workflow run list][release-workflow-runs].

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE).

<!-- references -->

[release-list]: https://github.com/notymail/core/releases
[draft-release]: .github/workflows/draft-release.yml
[release]: .github/workflows/release.yml
[release-workflow-runs]: https://github.com/notymail/core/actions/workflows/release.yml
