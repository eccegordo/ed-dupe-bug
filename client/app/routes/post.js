import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var postTitle = Math.random();
    var postBody = this.randomContent();
    var post = this.store.createRecord('post', {title: postTitle, body: postBody});
    post.save();
    return post;
  },
  
  actions: {

    addComment: function() {
      var post = this.controller.get('model');
      var commentBody = this.randomContent();
      var comment = this.store.createRecord('comment', {body: commentBody} );
      comment.set('post', post);
      comment.save();
    },

    removeComment: function(comment) {
      comment.destroyRecord();
    }
  },


  randomContent: function() {
    var words = ["lorem","ipsum","dolor","sit","amet,"];
    var minWordCount = 15;
    var maxWordCount = 100;

    var random = Math.floor(Math.random()*(maxWordCount - minWordCount)) + minWordCount;
    var ret = "";
    for(var i = 0; i < random; i++) {
      var newTxt = words[Math.floor(Math.random() * (words.length - 1))];
      if (ret.substring(ret.length-1,ret.length) === "." || ret.substring(ret.length-1,ret.length) === "?") {
        newTxt = newTxt.substring(0,1).toUpperCase() + newTxt.substring(1, newTxt.length);
      }
      ret += " " + newTxt;
    }
    return ret;
  }

});
