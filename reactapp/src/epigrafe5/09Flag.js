function Flag({verPendientes, setVerPendientes, children}) {
  return (
    <>
      <input type="checkbox" 
        onChange={() => setVerPendientes(!verPendientes)} checked={verPendientes}/>
      {children}
    </>
  );
}
export default Flag
