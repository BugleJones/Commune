import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
const uuid = require('uuid/v4');


export default class EventPage_Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review: "",
      rating: 0,
      currentUserId: null
    }
  }

  componentDidMount(){

    this.getCurrentUser();

  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  getCurrentUser = () => {
    $.get("/api/users/current")
    .done(result => {
      this.setState({
        currentUserId: result.id
      });
    })
    .fail(err => {
      console.log('Failed to Logout', err);
    })
  }

  handleReview = (e) => {
    e.preventDefault();

    this.setState({
      review: "",
      rating: 0
    });

    const { review, rating, currentUserId } = this.state;
    this.props.submitReview(review, rating, currentUserId);


  }

  onReviewChange = (e) => {
    this.setState({ review: e.target.value });
  }

  onRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  }

  render() {
    const reviews = this.props.reviews.map(review => (
      <li className="list-group-item" key={uuid()}>

          <StarRatingComponent
            name='displayRating'
            editing={false}
            starCount={5}
            value={Number(review.rating)}
          />

        &nbsp;
        <strong>
          {review.first_name} {review.last_name}:
        </strong>
        &nbsp;
        {review.description}
      </li>
    ));

    const { rating } = this.state;

    return (
      <div className="container-fluid row justify-content-center reviewContainer">
        <div className="triangleTop"></div>
        <div className="col-8 reviewsWrap">
          <h3>Reviews:</h3>
          <ul className="list-group reviews">
            { reviews }
          </ul><br/>
        </div>
        <br/>

        <form className="col-8 reviewInputWrap" onSubmit={this.handleReview}>
          <h4>Describe your experience:</h4>
          <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Type here..." onChange={this.onReviewChange} value={this.state.review}></textarea>
          <br/>
          <h4>Click the stars to rate out of 5:</h4>
          <div style={{'fontSize': '180%'}}>
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <button className="btn btn-primary clickable" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

