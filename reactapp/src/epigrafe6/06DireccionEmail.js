import {useState, useEffect} from "react";

function DireccionEmail({email}) {
  const [direccion, setDireccion] = useState(email);

  useEffect( () => {
    setDireccion(email);
  }, [email]);
  
  return (
    <p>Email: {direccion}</p>
  );
}

export default DireccionEmail;