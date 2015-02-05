ember-data duplication bug demo app
================

This repo demonstrates a duplication bug in ember data that appeared with the release of ember data beta 14.

The issue seems to be related to the merging of the following pull request

https://github.com/emberjs/data/pull/2576/

This project is a very minimal example, using the Sane Stack http://sanestack.com

Ember ClI for the client
Sails for the API server

## How to Run

Checkout repo

npm install and bower install 

Then launch with following command

```
sane up
```

## How to reproduce bug

1. Navigate to http://localhost:4200/post

2. Click "Add Comment" Button

3. Click "Delete Comment" Button

4. Click "Add Comment" Button again

### Issue:
The first deleted comment is rendered again.

Additionally the newly created comment is duplicated twice.

Trying to remove both instances of the newly created comment result in error:

```
Uncaught Error: Attempted to handle event `deleteRecord` on <client@model:comment::ember469:null> while in state root.deleted.saved. 
```

This zombie comment and duplicated comments are not exhibited in ember-data beta 12.

There is a initial commit in this repo's history that shows the app behavior working as expected.

Commit c93852c6dc76ecbf9bbacadba813fb8a417382ef demonstrates the bug 100% reproducible