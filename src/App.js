import logo from './logo.png';
import logo2 from './logo2.png';
import bg from './background.png';
import select from './Group.svg';
import requirements from './requirement.svg';
import review from './review.svg';
import profile from './profile.svg';
import quote from './quote.svg';
import parties from './parties.svg';
import linkedln from './LinkedIn.svg';
import twitter from './Twitter.svg';
import fb from './Facebook.svg';
import instagram from './Instagram.svg';
import './App.css';

function App() {
  return (
<div>
<nav class="navbar">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="181" height="43"/>
    </a>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active au-nav" aria-current="page" href="#">Find Suppliers</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Find Service Tags
                        </a>
                    </li>
                </ul>
                <form class="d-flex">
                    <button type="button" class="btn btn-outline-success">Login / Sign Up</button>
                </form>
            </div>
        </div>
    </nav>
  </div>
</nav>
<div class="card text-white">
  <img src={bg} class="card-img" alt="" width= "100%" height="400"/>
  <div class="card-img-overlay ax-card">
    <h5 class="card-title ax-card-title">Are You a Supplier?</h5>
    <h5 class="card-title ax-card-title">Explore Matching Opportunities.</h5>
    <p class="card-text"></p>
    <div class="row g-2">
  <div class="col-md">
    <div class="form-floating ax-form-floating">
      <input type="text" class="form-control ax-form" id="floatingInputGrid"/>
      <label for="floatingInputGrid"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E7760D" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
</svg> Search your required service here</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating ax-form-floating-second">
      <input type="text" class="form-control ax-form" id="location"/>
      <label for="location"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E7760D" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> Search your desired location here</label>
    </div>
  </div>
  <div class="col-md">
  <div class="form-floating ax-form-floating-third">
    <button type="button" class="btn btn-success">Search</button>
    </div>
  </div>
</div>
<div class="ax-link">
<p>Are you a buyer? <u><a href="https://habot.io/postjobone" target="_blank">Click here if you are looking to post a requirements</a></u></p>
</div>
  </div>
</div>
<div class="card ax--card border-0">
<div class="ax-div">
        <div class="ax-left">
          <h3 class="ax-left-head">Ready to dive into HABOT?</h3>
          <p class="ax-para">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
          <div class="d-grid gap-2 col-4 ax-btn-div"><button type="button" class="btn btn-success btn-sm ax--btn"><a href="https://habot.io/signup" target="_blank" class="ax--link">Sign up Today !</a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="16.08" top="960" left="358" fill="#FFFFFF" weight="100" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></button></div>
        </div>
        <div class="ax-right"> 
        <div class="card border-0">
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card ax-card-color">
      <div class="card-body">
        <p class="card-text">Abu Dhabi</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ax-card-color">
      <div class="card-body">
        <p class="card-text">Dubai</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ax-card-color">
      <div class="card-body">
        <p class="card-text">Sharjah & Ajman</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ax-card-color">
      <div class="card-body">
        <p class="card-text">Fujairah</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ax-card-color">
      <div class="card-body">
        <p class="card-text">Ras Al Khaimah</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ax-card-color">
      <div class="card-body">
        <p class="card-text">Umm Al Quwain</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    </div>
</div>
<div class="card ax-card-video">
<div class="ax-div">
        <div class="ax--left">
        <iframe class="ax-video" src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=R9DfCHtDp7W6GWBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div class="ax--right">
    <ul class="nav justify-content-center ax__nav" id="myTab" role="tablist">
        <li class="nav-item ax-nav-items">
            <a class="ax-nav-link active ax-nav-buyer" id="buyer-tab" data-bs-toggle="tab" href="#buyer" role="tab" aria-controls="buyer" aria-selected="true">Buyer</a>
        </li>
        <li class="nav-item ax-nav-items">
            <a class="ax-nav-link ax-nav-supplier" id="supplier-tab" data-bs-toggle="tab" href="#supplier" role="tab" aria-controls="supplier" aria-selected="false">Supplier</a>
        </li>
    </ul>
    <div class="tab-content ax-tab-content">
    <div class="tab-pane fade show active text-white" id="buyer" role="tabpanel" aria-labelledby="buyer-tab">
        <p class="icon-text">Post your requirements.</p>
        <p class="icon-text">Sit back for multiple suppliers to contact you.</p>
        <p class="icon-text">Choose among the suppliers based on the ratings and reviews.</p>
    </div>
    <div class="tab-pane fade text-white" id="supplier" role="tabpanel" aria-labelledby="supplier-tab">
        <p class="icon-text">Complete your profile and get verified.</p>
        <p class="icon-text">Choose service tags and get notified about each opportunity.</p>
        <p class="icon-text">Contact buyers, and expand your business.</p>
    </div>
</div>
</div>
</div>
</div>
<div class="card ax__card">
  <div class="card-body ax-card-text">
  <div class="ax-div-verify">
        <div class="ax-left-verify">
        Let Suppliers Find You<hr class="ax-hr"></hr>
        </div>
        <div class="ax-right-verify"> 
        <button type="button" class="btn btn-sm ax--btn ax--btn--color"><a href="https://habot.io/signin" target="_blank" class="ax--link">Get Verified</a></button>
        </div>
    </div>
     </div>
</div>
<div class="card ax-working">
<h2 class="ax-working-head">How it works?</h2>
<p class="ax-working-para">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>

<div class="row row-cols-1 row-cols-md-3 g-4 ax-row">
  <div class="col">
    <div class="card ax-working-card">
    <img src={select} class="card-img ax-card-select" alt=""/>
      <div class="card-body">
        <p class="card-text">Select Your Role and Sign Up</p>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="card ax-working-card1">
  <img src={requirements} class="card-img ax-card-select" alt=""/>
    <div class="card-body">
      <p class="card-text">Buyers Post Your Requirements</p>
    </div>
  </div>
</div>
  <div class="col">
  <div class="card ax-working-card2">
  <img src={review} class="card-img ax-card-select" alt=""/>
      <div class="card-body">
        <p class="card-text">Review, Select, and Contact the Best Suppliers</p>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="card ax-working-card1">
  <img src={profile} class="card-img ax-card-select" alt=""/>
    <div class="card-body">
      <p class="card-text">Suppliers Complete your profile and get notified for opportunities</p>
    </div>
  </div>
</div>
<div class="col">
    <div class="card ax-working-card">
    <img src={quote} class="card-img ax-card-select" alt=""/>
      <div class="card-body">
        <p class="card-text ax-working-card-text">Contact to Buyers and Share your Quote for the service</p>
      </div>
    </div>
</div>
<div class="col">
  <div class="card ax-working-card1">
  <img src={parties} class="card-img ax-card-select" alt=""/>
    <div class="card-body">
      <p class="card-text ax-working-card-text">Both the Parties can Connect and Make Business Leave a Feedback</p>
    </div>
  </div>
</div>
</div>
</div>
<footer class="footer">
<hr class="ax--hr"></hr>
    <div class="container ax-container">
      <div class="row">
        <div class="col-md-3">
        <img src={logo2} alt="" width="181" height="43" class="ax-img2"/>
          <p>&copy; R Singhania</p>
        </div>
        <div class="col-md-2">
          <h5>Company</h5>
          <ul class="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>Terms</h5>
          <ul class="list-unstyled">
            <li><a href="#">Data privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h5>Related</h5>
          <ul class="list-unstyled">
            <li><a href="#">Find Buyer</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
        <div className="col-md-3 d-flex ax-footer">
            <a className="social-icon">
              <div className="icon-circle">
                <img src={linkedln} className="card-img ax-card-select" alt="LinkedIn" />
              </div>
            </a>
            <a className="social-icon">
              <div className="icon-circle">
                <img src={twitter} className="card-img ax-card-select" alt="LinkedIn" />
              </div>
            </a>
            <a className="social-icon">
              <div className="icon-circle">
                <img src={fb} className="card-img ax-card-select" alt="LinkedIn" />
              </div>
            </a>
            <a className="social-icon">
              <div className="icon-circle">
                <img src={instagram} className="card-img ax-card-select" alt="LinkedIn" />
              </div>
            </a>
          </div>
      </div>
    </div>
    <hr class="ax--hr"></hr>
  </footer>
</div>
  );
}

export default App;
