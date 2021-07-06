# Piggy Bank
Simple expense tracker.

## Dependencies
- Vagrant (host)
- NodeJs (host|guest)

## Install

```sh
npm install
```

## Run

```sh
npm start
```

## Vagrant
if you don't have git installed on your computer. Use the vagrant configuration instead

- download zip
- unpack and move project folder to where you like
- (host) `vagrant up`
- (host) `vagrant ssh`
- (guest) `cd /vagrant`
- (guest) `git init`
- (guest) `git remote add origin git@github.com:awesome-devops-and-cd/piggy-bank.git`