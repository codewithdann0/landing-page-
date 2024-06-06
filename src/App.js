
import './App.css';

function App() {

  const handleWorkWithUsClick = () => {
    const subject = encodeURIComponent('Interested in Working Together');
    const body = encodeURIComponent('Hello,\n\nI am interested in working with you. Please contact me with more information.\n\nBest regards,');
    window.location.href = `mailto:your_email_here@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <>
    <nav class="nav-bar">
    <h1>tier</h1>
      <ul>
        <li><select>
          <option>What Can We Do </option>
          <option>Facebook Advertising</option>
          <option>Instagram Advertising</option>
          <option>LinkedIn Advertising</option>
          <option>Twitter Advertising</option>
        </select></li>
        <li><a href='https://www.socialmediatoday.com/topic/facebook-ads/'>Blog</a></li>
        <li><a href='https://www.socialmediaexaminer.com/podcasts/'>Podcast</a></li>
        <li><a href='https://www.indeed.com/q-Facebook-Advertising-jobs.html'>Career</a></li>
        <li><button onClick={handleWorkWithUsClick}>Work With Us</button></li>
      </ul>
    </nav>
    <div class="container">
            <div id="promotion">
                <h1>Unlock Your Business Potential With Facebook $ Instagram Adversting</h1>
                <p>Facebook Premier Level Partner Agency</p>
               <button onClick={handleWorkWithUsClick}>Work With Us</button>
            </div>
            <div id="fb-img">
              <img src='./land-img.png' alt='The graph that show growth'/>
              </div>
    </div>
     <div class="footer">
         <div id='box'>
             <div>
                 <div>
                   <i class="fa-brands fa-square-facebook fa-2x"></i>
                   <h5>
                     Marketing Partner
                     
                  </h5>
                 </div>
                               
            </div>    
             <div>
              <p>Premier level Agency Partner</p>
            </div>
        </div>
         <div id='box'>
              <div id="google">
                <i class="fa-brands fa-google fa-2x"></i>
             </div>
             <div>
                <p>Google Endorsed Marketing Partner</p>
             </div>
         </div>
         <div id='box'>
                <div class="forbes">
                  <h>Forbes</h>
                </div>
                <div>
                <p>Forbes Agency Council Member</p>
                </div>
         </div>
         <div id='box'>
                  <div>
                  <h1>Inc</h1>
      
                    
                  </div>
                  <div>
                    <p>Inc 5000 Fastest Growing Company</p>
                  </div>
         </div>
         <div id='box'>
            <div><h1>$100M</h1></div>
            <div><p>In Annual Digital Ad Spend</p></div>
         </div>
         <div id='box'>
              <div>
                <h1>15%</h1>
              </div>
              <div>
                  <p>Years Of Facebook Adversting Experience</p>
              </div>
         </div>
     </div>
    </>
  );
}

export default App;
