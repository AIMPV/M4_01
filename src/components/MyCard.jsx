import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function MyCard({cardImg, cardTitle, cardText, badgeColor, badgeText}) {
  return (
    <div className='col-12 col-lg-6 col-xl-3 mb-4'>
      <Card>
        <div className='img-container'>
          <Card.Img className='cardImg' variant="top" src={cardImg} />
        </div>
        <Card.Body className='text-center'>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Tags badgeColor= {badgeColor} badgeText = {badgeText} />
        </Card.Body>
      </Card>
      </div>
  );
}

export default MyCard;