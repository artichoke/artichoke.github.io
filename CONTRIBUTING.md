# Contributing to Artichoke – artichoke.github.io

👋 Hi and welcome to [Artichoke]. Thanks for taking the time to contribute!
💪💎🙌

Artichoke aspires to be a Ruby 2.6.3-compatible implementation of the Ruby
programming language. [There is lots to do].

artichoke.github.io is used to for web infrastructure and redirects of
GitHub-provided URLs.

If Artichoke does not run Ruby source code in the same way that MRI does, it is
a bug and we would appreciate if you [filed an issue so we can fix it]. [File
bugs specific to artichoke.github.io in this repository].

If you would like to contribute code to rand_mt 👩‍💻👨‍💻, find an issue that looks
interesting and leave a comment that you're beginning to investigate. If there
is no issue, please file one before beginning to work on a PR. [Good first
issues are labeled `E-easy`].

## Discussion

If you'd like to engage in a discussion outside of GitHub, you can [join
Artichoke's public Discord server].

## Setup

artichoke.github.io is a static site that includes HTML and JavaScript sources.
Developing the site requires a Node.js toolchain.

### Node.js

The project website uses Node.js for linting, orchestration, and development
tooling.

You will need to install [Node.js].

On macOS, you can install Node.js with [Homebrew]:

```shell
brew install node
```

### Node.js Packages

Once you have Node.js installed, you can install the packages specified in
[`package.json`](/package.json) by running:

```shell
npm install
```

## Building

Building the static site can be done with webpack:

```shell
npm run build
```

Linting and formatting are available as npm run scripts:

```shell
npm run fmt
npm run lint
npm run lint:fix
```

## Updating Dependencies

Regular dependency bumps are handled by [@dependabot].

[artichoke]: https://github.com/artichoke
[there is lots to do]: https://github.com/artichoke/artichoke/issues
[filed an issue so we can fix it]:
  https://github.com/artichoke/artichoke/issues/new
[file bugs specific to artichoke.github.io in this repository]:
  https://github.com/artichoke/artichoke.github.io/issues/new
[good first issues are labeled `e-easy`]:
  https://github.com/artichoke/artichoke.github.io/labels/E-easy
[join artichoke's public discord server]: https://discord.gg/QCe2tp2.
[node.js]: https://nodejs.org/en/download/package-manager/
[homebrew]: https://docs.brew.sh/Installation
[@dependabot]: https://dependabot.com/
