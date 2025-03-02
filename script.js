:root {
    --primary-color: #000000;
    --secondary-color: #FFD700;
    --tertiary-color: #FFFFFF;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Raleway', sans-serif;
    color: var(--primary-color);
    background-color: var(--tertiary-color);
    overflow-x: hidden;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Navigation */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
}

.logo {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    color: var(--primary-color);
    text-decoration: none;
}

.logo span {
    color: var(--secondary-color);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 600;
    position: relative;
    padding-bottom: 5px;
    transition: var(--transition);
}

.nav-links a:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-color);
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--secondary-color);
}

.nav-links a:hover:after {
    width: 100%;
}

.mobile-toggle {
    display: none;
    cursor: pointer;
}

.mobile-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 5px 0;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-top: 80px;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/IMG_1262.jpeg');
    background-size: cover;
    background-position: center;
    filter: blur(8px) brightness(1.2);
    opacity: 0.2;
    z-index: -1;
}

.hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.hero-text {
    width: 50%;
    padding-right: 2rem;
}

.hero-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
}

.hero-image {
    width: 45%;
    text-align: center;
}

.hero-image img {
    max-width: 100%;
    max-height: 70vh;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    transition: var(--transition);
}

.hero-image img:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.cta-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 700;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
    margin-top: 1rem;
}

.cta-button:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* About Section */
.about {
    padding: 100px 0;
    background-color: #f9f9f9;
}

.section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.section-title:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--secondary-color);
}

.about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.about-text {
    width: 60%;
}

.about-text p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.about-features {
    width: 35%;
}

.feature {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
}

.feature-icon {
    width: 50px;
    height: 50px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
}

.feature-icon span {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.feature-text h3 {
    margin-bottom: 0.5rem;
}

/* Delivery Section */
.delivery {
    padding: 100px 0;
}

.delivery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.delivery-card {
    background-color: #f5f5f5;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
}

.delivery-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.delivery-icon {
    font-size: 3rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

.delivery-card h3 {
    margin-bottom: 1rem;
}

/* Payment Section */
.payment {
    padding: 100px 0;
    background-color: #f9f9f9;
}

.payment-methods {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.payment-method {
    padding: 2rem;
    width: 250px;
    background-color: var(--tertiary-color);
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;
    transition: var(--transition);
}

.payment-method:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.payment-icon {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
}

/* Contact Section */
.contact {
    padding: 100px 0;
}

.contact-wrapper {
    display: flex;
    justify-content: space-between;
}

.contact-info {
    width: 45%;
}

.contact-info h3 {
    margin-bottom: 1.5rem;
}

.contact-detail {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.contact-icon {
    width: 40px;
    height: 40px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
}

.contact-icon i {
    color: var(--primary-color);
}

.contact-form {
    width: 50%;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.form-control {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    transition: var(--transition);
}

.form-control:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
}

.form-button {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.form-button:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
}

/* Footer */
footer {
    background-color: var(--primary-color);
    color: var(--tertiary-color);
    padding: 50px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
}

.footer-column {
    width: 30%;
}

.footer-column h3 {
    font-family: 'Montserrat', sans-serif;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    position: relative;
}

.footer-column h3:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--secondary-color);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.8rem;
}

.footer-links a {
    color: var(--tertiary-color);
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--secondary-color);
    padding-left: 5px;
}

.footer-social {
    display: flex;
    margin-top: 1.5rem;
}

.social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin-right: 1rem;
    transition: var(--transition);
}

.social-link:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
}

.social-link i {
    color: var(--tertiary-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Media Queries */
@media (max-width: 992px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .about-content,
    .contact-wrapper {
        flex-direction: column;
    }
    
    .about-text,
    .about-features,
    .contact-info,
    .contact-form {
        width: 100%;
        margin-bottom: 2rem;
    }
    
    .delivery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .mobile-toggle {
        display: block;
    }
    
    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--tertiary-color);
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        transform: translateY(-150%);
        transition: var(--transition);
    }
    
    .nav-links.active {
        transform: translateY(0);
    }
    
    .nav-links li {
        margin: 1rem 0;
    }
    
    .hero-content {
        flex-direction: column-reverse;
    }
    
    .hero-text,
    .hero-image {
        width: 100%;
        text-align: center;
        padding: 0;
    }
    
    .hero-image {
        margin-bottom: 2rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .delivery-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
    }
    
    .footer-column {
        width: 100%;
        margin-bottom: 2rem;
    }
}

@media (max-width: 576px) {
    .container {
        width: 95%;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .cta-button {
        padding: 0.8rem 2rem;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
}
