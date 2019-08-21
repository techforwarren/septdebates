const Footer = () => {
  // This is the raw HTML grabbed from the bottom
  // of the campaign page.  Probably looks like
  // garbage given that I didn't take any styling,
  // but shouldn't be too hard to convert.
  return (
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-signup">
          <h2>Stay In Touch</h2>
          <form class="js-form" action="https://my.elizabethwarren.com/page/s/web-sign-up?source=web-footer" method="post">
            <input class="form-field form-field--email" type="email" aria-label="Email" name="email" placeholder="Email" required="" />
            <input class="form-field form-field--zip" aria-label="Zip" name="zip" type="text" placeholder="Zip" pattern="[0-9]{5}" title="Please enter 5 digit zipcode" required="" />
            <input class="js-form-submit form-submit" type="submit" value="Submit" />
          </form>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/ElizabethWarren/" class="icon" aria-hidden="true" tabindex="-1" target="_blank">Facebook</a>
          <a href="https://twitter.com/ewarren" class="icon" aria-hidden="true" tabindex="-1" target="_blank">Twitter</a>
          <a href="https://www.instagram.com/elizabethwarren/" class="icon" aria-hidden="true" tabindex="-1" target="_blank">Instagram</a>
          <a href="https://www.youtube.com/channel/UCrj-0FxK19tgUR2EbHkBBGg/videos" class="icon" aria-hidden="true" tabindex="-1" target="_blank">YouTube</a>
          <a href="https://www.flickr.com/photos/elizabethwarren" class="icon" aria-hidden="true" tabindex="-1" target="_blank">Flickr</a>
          <a href="https://medium.com/@teamwarren" class="icon" aria-hidden="true" tabindex="-1" target="_blank">Medium</a>
        </div>
        <div class="footer-navs">
          <nav class="footer-nav footer-nav--main">
            <ul>
              <li>
                <a class="nav-link" href="/tax-returns/">Tax Returns</a>
              </li>
              <li>
                <a class="nav-link" href="https://facts.elizabethwarren.com/">Fact Squad</a>
              </li>
              <li>
                <a class="nav-link" href="https://boards.greenhouse.io/elizabethwarren">Jobs</a>
              </li>
              <li>
                <a class="nav-link" href="https://my.elizabethwarren.com/page/s/web-volunteer">Volunteer</a>
              </li>
              <li>
                <a class="nav-link" href="/give-by-mail">Donate by Mail</a>
              </li>
              <li>
                <a class="nav-link" href="/website-accessibility-statement">Web Accessibility Statement</a>
              </li>
            </ul>
          </nav>
          <nav class="footer-nav footer-nav--meta">
            <ul>
              <li>
                <a class="nav-link" href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a class="nav-link" href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a class="nav-link" href="/terms-of-service/">Terms of Use</a>
              </li>
              <li>
                <a class="nav-link" href="https://my.elizabethwarren.com/page/s/web-text-message-sign-up">Text Message Policy</a>
              </li>
              <li>
                <a class="nav-link" href="/faqs/">FAQs</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer-colophon">
          <div class="footer-colophon__disclaimer">PAID FOR BY WARREN FOR PRESIDENT</div>
          <div class="footer-colophon__copyright">© Copyright 2019. All rights reserved.</div>
        </div>
      </div>
    </footer >
  )
}