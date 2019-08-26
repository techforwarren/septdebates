import React from 'react';

export const CampaignFooter = () => {
  // This is the raw HTML grabbed from the bottom
  // of the campaign page.  Probably looks like
  // garbage given that I didn't take any styling,
  // but shouldn't be too hard to convert.
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-signup">
          <h2>Stay In Touch</h2>
          <form className="js-form" action="https://my.elizabethwarren.com/page/s/web-sign-up?source=web-footer" method="post">
            <input className="form-field form-field--email" type="email" aria-label="Email" name="email" placeholder="Email" required={true} />
            <input className="form-field form-field--zip" aria-label="Zip" name="zip" type="text" placeholder="Zip" pattern="[0-9]{5}" title="Please enter 5 digit zipcode" required={true} />
            <input className="js-form-submit form-submit" type="submit" value="Submit" />
          </form>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/ElizabethWarren/" className="icon" aria-hidden="true" tabIndex={-1} target="_blank">Facebook</a>
          <a href="https://twitter.com/ewarren" className="icon" aria-hidden="true" tabIndex={-1} target="_blank">Twitter</a>
          <a href="https://www.instagram.com/elizabethwarren/" className="icon" aria-hidden="true" tabIndex={-1} target="_blank">Instagram</a>
          <a href="https://www.youtube.com/channel/UCrj-0FxK19tgUR2EbHkBBGg/videos" className="icon" aria-hidden="true" tabIndex={-1} target="_blank">YouTube</a>
          <a href="https://www.flickr.com/photos/elizabethwarren" className="icon" aria-hidden="true" tabIndex={-1} target="_blank">Flickr</a>
          <a href="https://medium.com/@teamwarren" className="icon" aria-hidden="true" tabIndex={-1} target="_blank">Medium</a>
        </div>
        <div className="footer-navs">
          <nav className="footer-nav footer-nav--main">
            <ul>
              <li>
                <a className="nav-link" href="/tax-returns/">Tax Returns</a>
              </li>
              <li>
                <a className="nav-link" href="https://facts.elizabethwarren.com/">Fact Squad</a>
              </li>
              <li>
                <a className="nav-link" href="https://boards.greenhouse.io/elizabethwarren">Jobs</a>
              </li>
              <li>
                <a className="nav-link" href="https://my.elizabethwarren.com/page/s/web-volunteer">Volunteer</a>
              </li>
              <li>
                <a className="nav-link" href="/give-by-mail">Donate by Mail</a>
              </li>
              <li>
                <a className="nav-link" href="/website-accessibility-statement">Web Accessibility Statement</a>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav footer-nav--meta">
            <ul>
              <li>
                <a className="nav-link" href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a className="nav-link" href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a className="nav-link" href="/terms-of-service/">Terms of Use</a>
              </li>
              <li>
                <a className="nav-link" href="https://my.elizabethwarren.com/page/s/web-text-message-sign-up">Text Message Policy</a>
              </li>
              <li>
                <a className="nav-link" href="/faqs/">FAQs</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-colophon">
          <div className="footer-colophon__disclaimer">PAID FOR BY WARREN FOR PRESIDENT</div>
          <div className="footer-colophon__copyright">© Copyright 2019. All rights reserved.</div>
        </div>
      </div>
    </footer >
  )
}

export default CampaignFooter;