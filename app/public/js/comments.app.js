var app = new Vue({
  el: '#userCom',
  data: {
      comInfo: [

      ],

      newComment: {
        id: '',
        commentText: ''
      }
  },

  methods: {
    fetchComment(){
      fetch('api/comments/')
        .then(response => response.json())
        .then(json => {
          this.comInfo=json;
          console.log(this.comInfo);
        });
      },

    createComment(){
      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then( json => {
        console.log("Returned from post:", json);
        this.comInfo = json;
        this.newComment = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
    },

    newCommentData() {
      return {
        id: "",
        commentText: ""
      }
    }
  },
  created(){
    this.fetchComment();
  }
});
