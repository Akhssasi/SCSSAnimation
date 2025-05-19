<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>

<h1>Guide: Integrate <code>animations.scss</code> into Your Project</h1>

<div class="step">
  <h2>1. Ensure Your Environment Supports SCSS</h2>
  <p>Install a Sass compiler if you haven't already:</p>
  <pre><code>npm install -D sass</code></pre>
  <p>Compile your SCSS to CSS before deploying or during your build process.</p>
</div>

<div class="step">
  <h2>2. Place Your <code>animations.scss</code> File in Your Project</h2>
  <p>Put the <code>animations.scss</code> file in your styles directory, e.g., <em>/src/styles/animations.scss</em>.</p>
</div>

<div class="step">
  <h2>3. Import the SCSS into Your Main Stylesheet</h2>
  <p>If you have a main <code>styles.scss</code> or <code>main.scss</code>, add the import at the top:</p>
  <pre><code>@import 'animations'; // adjust path as necessary</code></pre>
  <p>Or compile <code>animations.scss</code> separately into CSS and include it in your HTML:</p>
  <pre><code>&lt;link rel="stylesheet" href="path/to/animations.css" /&gt;</code></pre>
</div>

<div class="step">
  <h2>4. Compile SCSS to CSS</h2>
  <p>Run your Sass compiler:</p>
  <pre><code>sass src/styles/animations.scss dist/css/animations.css</code></pre>
  <p>Or set up a build script if you're using Webpack, Gulp, etc.</p>
</div>

<div class="step">
  <h2>5. Include the Compiled CSS in Your HTML</h2>
  <p>Link the generated CSS file in your HTML <code>&lt;head&gt;</code>:</p>
  <pre><code>&lt;link rel="stylesheet" href="dist/css/animations.css" /&gt;</code></pre>
</div>

<div class="step">
  <h2>6. Use the Animation Data Attributes in Your HTML</h2>
  <p>Apply <code>data-aos</code> attributes to elements for animation:</p>
  <pre><code>&lt;div data-aos="fade-up"&gt;Fade Up Animation&lt;/div&gt;
&lt;div data-aos="zoom-in"&gt;Zoom In Animation&lt;/div&gt;
&lt;div data-aos="slide-left"&gt;Slide Left Animation&lt;/div&gt;</code></pre>
</div>

<div class="step">
  <h2>7. Initialize AOS and Trigger Animations with JS</h2>
  <p>Ensure your <code>animations.js</code> includes <code>AOS.init();</code>. Include your script after DOM loads:</p>
  <pre><code>&lt;script src="path/to/animations.js"&gt;&lt;/script&gt;
&lt;script&gt;
  document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
  });
&lt;/script&gt;</code></pre>
</div>

<div class="step">
  <h2>8. Optional: Customize Variables</h2>
  <p>Modify your SCSS variables to change animation effects:</p>
  <pre><code>$aos-distance: 150px; // new distance
$aos-duration: 800ms; // new duration</code></pre>
  <p>Recompile your SCSS after making changes.</p>
</div>

<div class="step">
  <h2>9. Summary</h2>
  <table>
    <tr>
      <th>Step</th>
      <th>Action</th>
      <th>Notes</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Install Sass compiler</td>
      <td>e.g., <code>npm install -D sass</code></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Place <code>animations.scss</code> in your project</td>
      <td>e.g., <em>/src/styles/</em></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Import or compile to CSS</td>
      <td>Use <code>@import</code> or CLI command</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Include CSS in your HTML</td>
      <td>via <code>&lt;link&gt;</code> tag</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Add <code>data-aos</code> attributes to HTML elements</td>
      <td>e.g., <code>&lt;div data-aos="fade-up"&gt;</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Initialize AOS in JS</td>
      <td>Call <code>AOS.init();</code> after DOM loaded</td>
    </tr>
  </table>
</div>

<h2 style="margin-top:40px;">Additional Tips</h2>
<ul>
  <li>Ensure your CSS selectors match your HTML structure.</li>
  <li>Adjust variables (<code>$aos-distance</code>, <code>$aos-duration</code>) in SCSS for different effects.</li>
  <li>Test across browsers and devices for consistency.</li>
</ul>

</body>
</html>
