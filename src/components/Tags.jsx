import Badge from 'react-bootstrap/Badge';

const Tags = ({badgeColor, badgeText}) => {
  return (
    <Badge className='w-100' pill bg={badgeColor}>
      {badgeText}
    </Badge>
  );
}

export default Tags;