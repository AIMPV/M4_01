import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import MyCard from './components/MyCard';
function App() {

  return (
    <>
      <Header
        navBarTitle = 'Adopta un perrito'
        navBarContact = 'Contacto'
        navBarDonation = 'Donaciones'
      />
      <div className='d-flex flex-column mt-5'>
        <Container>
          <div className='row'>
            <MyCard
                cardImg = 'https://pets.molinoschampion.com/wp-content/uploads/2022/05/husky.jpeg'
                cardTitle = 'Bartolo'
                cardText = 'Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!'
                badgeColor='success' 
                badgeText='Husky'
            />
            <MyCard
                cardImg = 'https://soyunperro.com/wp-content/uploads/2018/03/bobtail1.jpg'
                cardTitle = 'Messi'
                cardText = 'Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!'
                badgeColor='primary' 
                badgeText='Bobtail'
            />
            <MyCard
                cardImg = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Shar_pei.jpg'
                cardTitle = 'Gohan'
                cardText = 'Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional'
                badgeColor='danger' 
                badgeText='Shar pei'
            />
            <MyCard
                cardImg = 'https://soyunperro.com/wp-content/uploads/2020/04/Beagle-Harrier-770x470.jpg'
                cardTitle = 'Princesa'
                cardText = 'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su hogar!'
                badgeColor='warning' 
                badgeText='Beagle'
            />
          </div>
        </Container>
        <Footer 
          preFooterText = 'Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes presonalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre.'
          footerText = 'Adopta un perrito. Todos los derechos reservados. © 2024 '
        />
      </div>
    </>
  )
}

export default App
