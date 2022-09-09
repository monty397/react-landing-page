import Akhil from './/akhil.png';
const About = () => {
  return (
    <div>
      <h2>More about Akhil</h2>
      <div className="container2">
        <div className="child2">
          <img className="img" src={Akhil} />
        </div>
        <div className="child2">
          <p id="child2">Born in Trinidad and Tobago, Akhil is a very enthuastic person who is willing to learn and perform at the best of his capacity in order to achieve any goal he wants to accomplish may it be individual or group goals. </p>
          <p id="child2">His favorite hobbies are watching football (avid Chelsea F.C. fan), playing video games, reading and working out.</p>
          <p id="child2">Akhil is a born again disciple of Jesus Christ and he lets his belief guide him to aspires to do the right thing. He firmly believe that everyone has intrinsic value no matter their race, status, gender because Jesus would do the same.</p>

        </div>
      </div>
    </div>
  );
}

export default About;