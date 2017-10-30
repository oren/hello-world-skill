# Build Alexa skill quick and using the terminal

The quickest way to build an Alexa skill. The goal of this repo is to allow building Alexa skill from the CLI and without reaching out to the web interface.

### 1. Prerequisites

1. create account on aws.amazon.com
2. create account on developer.amazon.com
3. Create IAM user on aws.amazon.com and put the credentials in ~/.aws/credentials

```
[default]
aws_access_key_id = xxxxxxxxxxxxxxxxxxxx
aws_secret_access_key = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

4. Install 'ask' the executable for managing skills: `npm install -g ask-cli`

### 2. Create and deploy the skill

```
git clone git@github.com:oren/hello-world-skill.git
cd hello-world-skill
ask deploy
```

In the web interface, under the 'test' tab, enable the skill for testing. It's a red toggle button.
Maybe there is a way to do that from the CLI, I am not sure yet.

### 3. Test it

Say: "Alexa, open oren states quiz"

## How to update the skill?

`ask deploy` didn't work since .ask/config is being populated with a skill_id. What I currently do is delete the skill from the web interface and start all over. I am sure there is a better way. I just don't know how.

## How to create a skill from scratch

(This is probably not be working. This document is a work in progress. If you know how to make it work, send a PR please)

```
alexa ask new --skill-name states-quiz --lambda-name states-quiz 
cd states-quiz
ask deploy
```
