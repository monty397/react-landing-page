const Home = () => {
  return (
    <div>
      <h1>Welcome to Akhil's Landing Page</h1>
      <p>My name is Akhil Montrose and I am an aspiring Frontend Developer. This page was built using React.</p>
      <hr />

      <div className="container">
        <div className="child" id="left">
          <header className="left-header">My Contact <i class="fas fa-phone"></i></header>
          <main>
            <p>Email: akhilmontrose62@gmail.com</p>
            <p>Contact: 868-275-5992</p>
          </main>
        </div>

        <div className="child" id="right">
          <header className="right-header">Educational Background <i class="fas fa-graduation-cap"></i></header>
          <main>
            <p>University: University of Trinidad and Tobago</p>
            <p>Qualification: BASc Computer Engineering (3.5 GPA)</p>
          </main>
        </div>
      </div>
    </div>
  );
}
export default Home;