var app = new Vue({
  el: '#userProfile',
  data: {
    userName:' ',
    userDOB:'',
    userAge:'',
    userEmail:'',
    userCountry:'',
    userImgLrg:'',
    userImgThb:'',
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser: function() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          var userData = data.results[0];
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.userDOB = userData.dob.date;
          this.userAge = userData.dob.age;
          this.userEmail = userData.email;
          this.userCountry = userData.location.country;
          this.userImgLrg = userData.picture.large;
          this.userImgThb = userData.picture.thumbnail;
        });
      },
        formatDate(d) {return moment(d).format("MMM Do YYYY");
      }
    },
  })
