const reviewForm = document.getElementById("addReviewForm");
const containerElement = document.getElementById("reviews");
let newReviewText = document.getElementById("review");
let reviews = [];

function Review(reviewtext) {
    this.reviewtext = reviewtext;
    //this.render();
    this.pushReviews = function() {
      reviews.push(this)
    }  
    this.pushReviews();
  }

Review.prototype.render = function () {
    
    const article = document.createElement('article');
    const space = document.createElement('space')
    space.textContent = '...................'
    article.textContent = this.reviewtext;
    console.log(article.textContent)
    console.log(containerElement)
    containerElement.append(article);
    containerElement.append(space)
    
    
        //cookieStands.push(this)
}

reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const theReview = e.target.newreview.value
    console.log(theReview)

     const newReview = new Review(theReview);
     newReview.render();

    reviewForm.reset();
    })
