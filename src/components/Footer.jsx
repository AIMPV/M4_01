import Container from 'react-bootstrap/Container';

const Footer = ({preFooterText, footerText}) => {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="py-5 px-2 px-sm-5 mb-5 rounded text-center bg-light">
            {preFooterText}
          </div>
        </Container>
        <div className="py-3 text-center fixed-bottom text-white bg-dark">
          <Container>
            {footerText}
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer