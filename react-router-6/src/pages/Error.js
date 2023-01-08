import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/" >back home</Link>
    </section>
  );
};
export default Error;

/*
# Error page 
diyelim ki kullanıcı adres cubuguna olmayan bir path name gibi bu sayfaya yönledirilecek.

*/
