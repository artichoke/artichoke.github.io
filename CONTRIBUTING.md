# Contributing to Artichoke – artichoke.github.io

👋 Hi and welcome to [Artichoke]. Thanks for taking the time to contribute!
💪💎🙌

Artichoke aspires to be a [recent MRI Ruby][mri-target]-compatible
implementation of the Ruby programming language. [There is lots to do].

[mri-target]:
  https://github.com/artichoke/artichoke/blob/trunk/RUBYSPEC.md#mri-target

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

artichoke.github.io is a static site that includes Ruby, HTML, and JavaScript
sources. Developing artichoke.github.io requires configuring several
dependencies.

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
[`package.json`](package.json) by running:

```shell
npm install
```

### Ruby

artichoke.github.io requires a recent Ruby and [bundler] for development tasks.
The [`.ruby-version`](.ruby-version) file in this repository specifies the
preferred Ruby toolchain.

If you use [RVM], you can install Ruby dependencies by running:

```sh
rvm install "$(cat .ruby-version)"
gem install bundler
```

If you use [rbenv] and [ruby-build], you can install Ruby dependencies by
running:

```sh
rbenv install "$(cat .ruby-version)"
gem install bundler
rbenv rehash
```

The [`Gemfile`](Gemfile) in this repository specifies several dev dependencies.
You can install these dependencies by running:

```sh
bundle install
```

[rvm]: https://rvm.io/
[rbenv]: https://github.com/rbenv/rbenv
[ruby-build]: https://github.com/rbenv/ruby-build

artichoke.github.io uses [`rake`](Rakefile) as a task runner. You can see the
available tasks by running:

```console
$ bundle exec rake --tasks
rake build                        # Build bundle
rake bundle:audit:check           # Checks the Gemfile.lock for insecure dependencies
rake bundle:audit:update          # Updates the bundler-audit vulnerability database
rake fmt                          # Format sources
rake fmt:text                     # Format text, YAML, and Markdown sources with prettier
rake format                       # Format sources
rake format:text                  # Format text, YAML, and Markdown sources with prettier
rake lint                         # Lint sources
rake lint:eslint                  # Lint JavaScript sources with eslint
rake lint:rubocop                 # Run RuboCop
rake lint:rubocop:autocorrect     # Auto-correct RuboCop offenses
rake release:markdown_link_check  # Check for broken links in markdown files
```

To lint Ruby sources, Focaccia uses [RuboCop]. RuboCop runs as part of the
`lint` task. To run RuboCop by itself, invoke the `lint:rubocop` task.

```console
$ bundle exec rake lint
$ bundle exec rake lint:rubocop
```

## Building

Building the static site can be done with an npm run-task:

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
[bundler]: https://bundler.io/
[rubocop]: https://github.com/rubocop-hq/rubocop
[node.js]: https://nodejs.org/en/download/package-manager/
[homebrew]: https://docs.brew.sh/Installation
[@dependabot]: https://dependabot.com/
