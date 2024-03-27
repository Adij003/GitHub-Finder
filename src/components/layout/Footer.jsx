import logo from '../assets/Tars.jpg'

function Footer() {
    const footerYear = new Date().getFullYear()
  
    return (
      <footer className='footer p-8 bg-gray-700 text-primary-content footer-center'>
        <div>
          <img
            width='70'
            viewBox='0 0 24 24'
           src={logo}
            className='inline-block fill-current rounded-lg'
         / >
           

          <p className='text-white text-xs' >Copyright &copy; {footerYear} All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default Footer