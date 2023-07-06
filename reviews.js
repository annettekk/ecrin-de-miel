const reviewForm = document.getElementById("addReviewForm");
const containerElement = document.getElementById("reviews");
let newReviewText = document.getElementById("review");
document.getElementById('date').value = Date();
let reviews = [];

function Review(reviewtext, date) {
    this.reviewtext = reviewtext;
    this.date = date;
    //this.render();
    this.pushReviews = function() {
      reviews.push(this)
    }  
    this.pushReviews();
  }

Review.prototype.render = function () {
    
    const article = document.createElement('article');
    const date = document.createElement('date')
    article.setAttribute ('id', 'newrev');
    date.setAttribute ('id', 'newdate');
    
    date.textContent = this.date;
    article.textContent = this.reviewtext;
    console.log(article.textContent)
    console.log(containerElement)
    containerElement.append(article);
    containerElement.append(date)
  
    
        //cookieStands.push(this)
}

reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const theReview = e.target.newreview.value
    const theDate = e.target.date.value
    console.log(theReview)

     const newReview = new Review(theReview, theDate);
     newReview.render();

    reviewForm.reset();
    document.getElementById('date').value = Date();
    })
