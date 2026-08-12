function User(p) {
  return (
    <>
      <h1>Id:{p.Id}</h1>
      <h1>name: {p.name}</h1>
      <h2>Age: {p.age}</h2>
      <p>{p.children}</p>
    </>
  )
}

export default User;
