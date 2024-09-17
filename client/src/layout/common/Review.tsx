// import { ReviewItem } from '../../models/review.model';
// import { formatDate } from '../../utils/format';
// import { FaStar } from 'react-icons/fa';
// import styled from 'styled-components';

// interface Props {
//   review: ReviewItem;
// }

// const Star = (props: Pick<ReviewItem, 'score'>) => {
//   return (
//     <span className="star">
//       {Array.from({ length: props.score }, (_, index) => (
//         <FaStar />
//       ))}
//     </span>
//   );
// };

// function ReviewItems({ review }: Props) {
//   return (
//     <ReviewItemStyle>
//       <header className="header">
//         <div>
//           <span>{review.userName}</span>
//           <Star score={review.score} />
//         </div>
//         <div>{formatDate(review.createdAt)}</div>
//       </header>
//       <div className="content">
//         <p>{review.content}</p>
//       </div>
//     </ReviewItemStyle>
//   );
// }

// const ReviewItemStyle = styled.div``;

// export default ReviewItems;
