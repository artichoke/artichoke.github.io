# frozen_string_literal: true

require 'open-uri'
require 'shellwords'
require 'rubocop/rake_task'

task default: %i[format lint]

desc 'Lint sources'
task lint: %i[lint:eslint lint:rubocop:auto_correct]

namespace :lint do
  RuboCop::RakeTask.new(:rubocop)

  desc 'Lint JavaScript sources with eslint'
  task :eslint do
    sh 'npx eslint --fix .'
  end
end

desc 'Format sources'
task format: %i[format:text]

namespace :format do
  desc 'Format text, YAML, and Markdown sources with prettier'
  task :text do
    sh 'npx prettier --write "**/*"'
  end
end

desc 'Format sources'
task fmt: %i[fmt:text]

namespace :fmt do
  desc 'Format text, YAML, and Markdown sources with prettier'
  task :text do
    sh 'npx prettier --write "**/*"'
  end
end

desc 'Build Webpack bundle'
task :build do
  sh 'npm run build'
end

namespace :release do
  link_check_files = FileList.new('**/*.md') do |f|
    f.exclude('node_modules/**/*')
    f.exclude('**/target/**/*')
    f.exclude('**/vendor/**/*')
    f.include('*.md')
    f.include('**/vendor/*.md')
  end

  link_check_files.sort.uniq.each do |markdown|
    desc 'Check for broken links in markdown files'
    task markdown_link_check: markdown do
      command = ['npx', 'markdown-link-check', '--config', '.github/markdown-link-check.json', markdown]
      sh command.shelljoin
      sleep(rand(1..5))
    end
  end
end
