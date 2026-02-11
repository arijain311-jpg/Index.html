<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tathastu Clinic | Dr. Arihant Jain</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- ADMIN BUTTON (HIDDEN) -->
<button id="adminBtn" onclick="openLogin()">Admin</button>

<!-- NAVBAR -->
<header class="navbar">
  <div class="logo">Tathastu Clinic</div>
  <nav>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#doctor">Doctor</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<!-- HERO -->
<section class="hero">
  <h1 contenteditable="false" id="heroText">
    Comprehensive Medical Care<br>
    <span>With Compassion & Precision</span>
  </h1>
  <p contenteditable="false" id="heroSub">
    Consultation • Diagnostics • Day Care Services
  </p>
</section>

<!-- ABOUT -->
<section id="about" class="section">
  <h2>Welcome to Tathastu Clinic</h2>
  <p id="aboutText" contenteditable="false" class="center-text">
    Tathastu Clinic provides holistic and evidence-based healthcare services
    focusing on accurate diagnosis, personalized treatment, and long-term wellness.
  </p>
</section>

<!-- SERVICES -->
<section id="services" class="section gray-bg">
  <h2>Our Services</h2>
  <div class="grid">
    <div class="card" id="serviceText" contenteditable="false">
      Healthcare Services, Diabetes, Heart, Liver, Kidney, Thyroid,
      Brain, Rheumatic and Digestive diseases.
      Blood Investigations, ECG and Day Care Services available.
    </div>
  </div>
</section>

<!-- DOCTOR -->
<section id="doctor" class="section">
  <h2>Doctor</h2>
  <div class="doctor-box">
    <p id="doctorText" contenteditable="false">
      <strong>Dr. Arihant Jain</strong><br>
      MD (Medicine)<br>
      Dedicated Internal Medicine specialist.
    </p>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section gray-bg">
  <h2>Contact</h2>
  <p id="contactText" contenteditable="false" class="center-text">
    Phone: +91-XXXXXXXXXX<br>
    Address: Add clinic address here<br>
    Timings: Morning & Evening
  </p>
</section>

<!-- ADMIN PANEL -->
<div id="adminPanel">
  <input type="password" id="password" placeholder="Enter admin password">
  <button onclick="login()">Login</button>
  <button onclick="enableEdit()">Enable Edit</button>
  <button onclick="saveData()">Save</button>
  <button onclick="logout()">Logout</button>
</div>

<script src="script.js"></script>
</body>
</html>    <p><strong>MD (Medicine)</strong></p>
    <p>
      Dr. Arihant Jain is a dedicated physician specializing in Internal Medicine,
      offering patient-centered care with a strong focus on accurate diagnosis,
      ethical practice, and long-term disease management.
    </p>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section gray-bg">
  <h2>Contact & Appointments</h2>
  <div class="contact-box">
    <p><strong>Tathastu Clinic</strong></p>
    <p>📍 Clinic Address (Add Here)</p>
    <p>📞 Phone: +91-XXXXXXXXXX</p>
    <p>⏰ Timings: Morning & Evening</p>
    <p class="note">Prior appointment recommended</p>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <p>© 2026 Tathastu Clinic | Dr. Arihant Jain</p>
</footer>

</body>
</html>
