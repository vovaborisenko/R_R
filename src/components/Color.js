import React from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';

// const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f }) =>
//   <section className="color">
//     <h2>{title}</h2>
//     <button onClick={onRemove}>X</button>
//     <div className="color"
//          style={{ backgroundColor: color }}>
//     </div>
//     <div>
//       <StarRating starsSelected={rating} onRate={onRate} />
//     </div>
//   </section>
class Color extends React.Component {
  componentWillMount() {
    this.style = { backgroundColor: "#ccc" }
  }

  shouldComponentUpdate(nextProps) {
    const { rating } = this.props;

    return rating !== nextProps.rating;
  }

  componentWillUpdate(nextProps) {
    const {title, rating} = this.props;

    this.style = null;
    this.refs.title.style.backgroundColor = 'red';
    this.refs.title.style.color = 'white';
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
  }

  componentDidUpdate(prevProps) {
    const {title, rating} = this.props,
      status = (rating > prevProps.rating) ? 'better' : 'worse';

      // this.refs.title.style.backgroundColor = '';
      // this.refs.title.style.color = 'black';
  }

  render() {
    const { title, rating, color, onRate } = this.props;

    return (
      <section className="color-section" style={this.style}>
        <h2 ref="title">{title}</h2>
        <div className="color"
          style={{ backgroundColor: color }}>
        </div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    )
  }
}

Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func
}

Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: "#000",
  onRate: f=>f
}

export default Color;