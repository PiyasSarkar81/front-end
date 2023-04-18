# HTML
## Semantic HTML cheat sheet

### __Sectioning tags__

Use the following tags to organize your HTML document into structured sections. 

`<header>`

The header of a content section or the web page. The web page header often contains the website branding or logo.

`<nav>`

The navigation links of a section or the web page.

`<footer>`

The footer of a content section or the web page. On a web page, it often contains secondary links, the copyright notice, privacy policy and cookie policy links.

`<main>`

Specifies the main content of a section or the web page.

`<aside>`

A secondary set of content that is not required to understand the main content.

`<article>`

An independent, self-contained block of content such as a blog post or product.

`<section>`

A standalone section of the document that is often used within the body and article elements.

`<details>`

A collapsed section of content that can be expanded if the user wishes to view it.

`<summary>`

Specifies the summary or caption of a `<details>` element.

`<h1><h2><h3><h4><h5><h6>`

Headings on the web page. `<h1>` indicates the most important heading whereas `<h6>` indicates the least important. 

### __Content tags__

`<blockquote>`

Used to describe a quotation.

`<dd>`

Used to define a description for the preceding <dt> element.

`<dl>`

Used to define a description list.

`<dt>`

Used to describe terms inside `<dl>` elements.

`<figcaption>`

Defines a caption for a photo image.

`<figure>`

Applies markup to a photo image.

`<hr>`

Adds a horizontal line to the parent element.

`<li>`

Used to define an item within a list.

`<menu>`

A semantic alternative to `<ul>` tag.

`<ol>`

Defines an ordered list.

`<p>`

Defines a paragraph.

`<pre>`

Used to represent preformatted text. Typically rendered in the web browser using a monospace font.

`<ul>`

Unordered list

### __Inline tags__

`<a>`

An anchor link to another HTML document.

`<abbr>`

Specifies that the containing text is an abbreviation or acronym.

`<b>`

Bolds the containing text. When used to indicate importance use `<strong>` instead.

`<br>`

A line break. Moves the subsequent text to a new line.

`<cite>`

Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the `<cite>` element is usually rendered in italics.

`<code>`

Indicates that the containing text is a block of computer code.

`<data>`

Indicates machine-readable data.

`<em>`

Emphasizes the containing text.

`<i>`

The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.

`<mark>`

The containing text should be marked or highlighted.

`<q>`

The containing text is a short quotation.

`<s>`

Displays the containing text with a strikethrough or line through it.

`<samp>`

The containing text represents a sample.

`<small>`

Used to represent small text, such as copyright and legal text.

`<span>`

A generic element for grouping content for CSS styling.

`<strong>`

Displays the containing text in bold. Used to indicate importance.

`<sub>`

The containing text is subscript text, displayed with a lowered baseline.

`<sup>`

The containing text is superscript text, displayed with a raised baseline.

`<time>`

A semantic tag used to display both dates and times.

`<u>`

Displays the containing text with a solid underline.

`<var>`

The containing text is a variable in a mathematical expression.

### __Embedded content and media tags__

`<audio>`

Used to embed audio in web pages.

`<canvas>`

Used to render 2D and 3D graphics on web pages.

`<embed>`

Used as a containing element for external content provided by an external application such as a media player or plug-in application. 

`<iframe>`

Used to embed a nested web page. 

`<img>`

Embeds an image on a web page.

`<object>`

Similar to `<embed>` but the content is provided by a web browser plug-in.

`<picture>`

An element that contains one `<img>` element and one or more `<source>` elements to offer alternative images for different displays/devices.

`<video>`

Embeds a video on a web page.

`<source>`

Specifies media resources for `<picture>`, `<audio>` and`<video>` elements.

`<svg>`

Used to define Scalable Vector Graphics within a web page.

### __Table tags__

`<table>`

Defines a table element to display table data within a web page.

`<thead>`

Represents the header content of a table. Typically contains one `<tr>` element.

`<tbody>`

Represents the main content of a table. Contains one or more `<tr>`elements.

`<tfoot>`

Represents the footer content of a table. Typically contains one `<tr>` element.

`<tr>`

Represents a row in a table. Contains one or more `<td>` elements when used within `<tbody>` or `<tfoot>`. When used within `<thead>`, contains one or more `<th>` elements.

`<td>`

Represents a cell in a table. Contains the text content of the cell.

`<th>`

Defines a header cell of a table. Contains the text content of the header.

`<caption>`

Defines the caption of a table element.

`<colgroup>`

Defines a semantic group of one or more columns in a table for formatting.

`<col>`

Defines a semantic column in a table.


## Metadata cheat sheet
### __HTML `<meta>` tags__ 

__Name__

The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be <meta name="author" content="name"> to state the author of the page. 

__Content__ 

The content field specifies the property's value. For example, you can use `<meta name="language" content="english">`, to specify the language of the webpage to search engines. 

__Charset__ 

The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: `<meta charset="UTF-8">`  

__HTTP-equiv__ 

This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: `<meta http-equiv="refresh" content="30">` 


### __Basic meta tags (meta tags For SEO)__

`<meta name="description"/>` provides a brief description of the web page 

`<meta name=”title”/>` specifies the title of the web page 

`<meta name="author" content="name">` specifies the author of the web page  

`<meta name="language" content="english">` specifies the language of the web page 



`<meta name="robots" content="index,follow" />` tells search engines how to crawl or index a certain page 

`<meta name="google"/>` tells Google not to show the sitelinks search box for your page when showing search results 

`<meta name="googlebot" content=”notranslate” />` tells Google you don’t want to provide an automatic translation for your page if the user uses a different language  

`<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />` specifies the last modified date and time on which you have made certain changes 

`<meta name="rating" content="safe for kids">` specifies the expected audience for your page 

`<meta name="copyright" content="Copyright 2022">` specifies a Copyright 


### __`<meta http-equiv="..."/>` tags__

`<meta http-equiv="content-type" content="text/html">` specifies the format of the document returned by the server 

`<meta http-equiv="default-style"/>`  specifies the format of the styling document 

`<meta http-equiv="refresh"/>` specifies the duration of the page before it’s considered stale 

`<meta http-equiv=”Content-language”/>` specifies the language of the page 

`<meta http-equiv="Cache-Control" content="no-cache">` instructs the browser how to cache your page 

### __Responsive design/mobile meta tags__ 
`<meta name="format-detection" content="telephone=yes"/>` indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call 

`<meta name="HandheldFriendly" content="true"/>` specifies that the page can be properly visualized on mobile devices 

`<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` specifies the area of the window in which web content can be seen
## __Input types__
You already learned about the input HTML tag and how the type property determines the data your users can type in. This cheat sheet should be a reference to decide what type best suits your use case. Most of the inputs go hand in hand with the label tag for best accessibility practices.

__Button__

This displays a clickable button and it’s mostly used in HTML forms to activate a script when clicked. 
`<input type="button" value="Click me" onclick="msg()" />`

Keep in mind you can also define buttons with the `<button>` tag, with the added benefit of being able to place content like text or images inside the tag.

```html
<button onclick="alert('Are you sure you want to continue?')"> 
    <img src="https://yourserver.com/button_img.jpg" 
        alt="Submit the form" height="64" width="64">
 </button>
``` 
__Checkbox__

Defines a check box allowing single values to be selected or deselected. They are used to let a user select one or more options of a limited number of choices.

```html
<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>
```
__Radio__

Displays a radio button, allowing only a single value to be selected out of multiple choices. They are normally presented in radio groups, which is a collection of radio buttons describing a set of related options that share the same "name" attribute.

```html
<input type="radio" id="light" name="theme" value="Light"> 
<label for="light">Light</label> 
<input type="radio" id="dark" name="theme" value="Dark"> 
<label for="dark">Dark</label> 
```
__Submit__

Displays a submit button for submitting all values from an HTML form to a form-handler, typically a server. The form-handler is specified in the form’s "action" attribute:

```html
<form action="myserver.com" method="POST">
  …
<input type="submit" value="Submit" />
</form>
```
__Text__

Defines a basic single-line text field that a user can enter text into. 

```html
<label for="fname">First name:</label> 
<input type="text" id="fname" name="fname"> 
```
__Password__

Defines a single-line text field whose value is obscured, suited for sensitive information like passwords.

```html
<label for="pwd">Password:</label> 
<input type="password" id="pwd" name="pwd"> 
```
__Date__

Displays a control for entering a date with no time (year, month and day).

```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```
__Datetime-local__

Defines a control for entering a date and time, including the year, month and day, as well as the time in hours and minutes.

```html
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">
```
__Email__

Defines a field for an email address. It’s similar to a plain text input, with the addition that it validates automatically when submitted to the server.

```html
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">
```
__File__

Displays a control that lets the user select and upload a file from their computer. To define the types of files permissible you can use the "accept" attribute. Also, to enable multiple files to be selected, add the "multiple" attribute.

```html
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">
```
__Hidden__

Defines a control that is not displayed but whose value is still submitted to the server.

```html
<input type="hidden" id="custId" name="custId" value="3487">
```
__Image__

Defines an image as a graphical submit button. You should use the “src” attribute to point to the location of your image file.

```html
<input type="image"src="submit_img.png" alt="Submit" width="48" height="48">
```
__Number__

Defines a control for entering a number. You can use attributes to specify restrictions, such as min and max values allowed, number intervals or a default value.

```html
<input type="number" id="quantity" name="quantity" min="1" max="5">
```
__Range__

Displays a range widget for specifying a number between two values. The precise value, however, is not considered important. This is typically represented using a slider or dial control. To define the range of acceptable values, use the “min” and “max” properties.

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```
__Reset__

Displays a button that resets the contents of the form to their default values.

```html
<input type="reset">
```

__Search__

Defines a text field for entering a search query. These are functionally identical to text inputs, but may be styled differently depending on the browser.

```html
<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">
```
__Time__

Displays a control for entering a time value in hours and minutes, with no time zone.

```html
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```
__Tel__

Defines a control for entering a telephone number. Browsers that do not support “tel” fall back to standard text input. You can optionally use the "pattern" field to perform validation.

```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```
__Url__

Displays a field for entering a text URL. It works similar to a text input, but performs automatic validation before being submitted to the server.

```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```
__Week__

Defines a control for entering a date consisting of a week-year number and a year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

```html
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```
__Month__

Displays a control for entering a month and year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

```html
<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```

## Cheat sheet: Interactive form elements
__Required__

Denotes a mandatory input that the user can’t leave empty. It can be used with any input type, like password, radio, text and so on. 
```html
<input type="text" id="firstName" name="firstName" required> 
```
__Maxlength__

Specifies the maximum length of a text input, in other words, the maximum number of characters that can be entered for a specific field. If provided, it will prevent the user from entering more characters than the limit. 
```html
<input type="text" id="description" name="description" maxlength="50"> 
```
__Minlength__

Specifies the minimum length of a text input. If set, the input will not accept fewer characters than those specified. 
```html
<input type="password" id="password" name="password" minlength="8"> 
```
__Min and max attributes__

Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates. 
```html
<input type="number" id="quantity" name="quantity" min="1" max="10"> 

<input type="range" id="volume" name="volume" min="1" max="100">
``` 

__Multiple__

Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types. 
```html
<input type="file" id="gallery" name="gallery" multiple> 
```
__Pattern__

Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK. 
```html
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” > 
```

## Submit
Form submissions are an essential part of the world wide web. Nearly every website uses forms, from buying items online to ordering food for delivery. When you click the login button on a website, it sends your username and password to a web server to log you into your account. 

As you know by now, you add a form to your web page using the form tag. 

```html
<form> 
</form>
``` 

But how the form is submitted is determined by two essential attributes: action and method. 

The action attribute specifies to which web address the form must be sent. This is address is location of server-side code that will process the request.

```html
<form action="/login"> 
</form> 
```
It is important to note that action can be a full URL address such as `https://meta.com`, an absolute path such as `/login`, or a relative path such as login. 

The absolute path, which starts with a forward slash, will use the base address of the current website, such as `https://meta.com` and combine it with the absolute path. For example, if `/login` is the absolute path, the form will be submitted to `https://meta.com/login`. If the address is `https://meta.com/company-info/` and `/login` is the absolute path, the submission address will still be `https://meta.com/login`.

Similarly, a relative path will combine the current web address with a relative path. For example, if the web browser is currently on the web page `https://meta.com/company-info/`, and the relative path is set to login, the form will be submitted to `https://meta.com/company-info/login`. 

The method attribute specifies which HTTP method is used to submit the form; GET or POST. 

```html
<form method="get"> 
</form> 
```
```html
<form method="post"> 
</form> 
```
The form will default to the HTTP GET method when the method attribute is not provided. 

As you may already know, when the form is submitted using the HTTP GET method, the data in the form's fields are encoded in the URL. And when the form is submitted using the HTTP POST method, the data is sent as part of the HTTP request body. 

When the web server receives the request, it processes the data and sends back an HTTP response. The response indicates the result of the submission, which can be successful or fail due to invalid or incorrect data. 

However, as a front-end developer, it is essential to know that forms are not the only way to submit data to the web server. As you learn more about JavaScript and front-end libraries, you’ll discover that developers often submit HTTP requests directly via code and send data as part of the HTTP request body in a text format called JavaScript Object Notation, or JSON. But that is a topic for another course. 

For now, practice building HTML forms and submitting data to the web server using the different attributes available. 



## Glossary: HTML form elements
The `<form>` element in HTML is an important and useful element. The following sheet provides an overview of the `<form>` constituent elements and their common attributes with simple examples for quick reference.

### `<input>` 

It is used to create interactive controls, for example, buttons and various types of text fields and so on, to accept input or data from the user. The key attribute of this element is type. Some common values for the type include: button, checkbox, date, email, number, password, submit, text, and url. These values dictate the appearance of the element. For example, this code:

```html
<form action="my_action_page"> 

  <label for="uname">Username:</label> 
  <br> 
  <input type="text" id="uname" name="username"> 
  <br> 
  <label for="pwd">Password:</label> 
  <br> 
  <input type="password" id="pwd" name="pwd"> 
  <br><br> 
```
Results in the following output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/A_17MQ8SSo69ezEPEkqOMw_759a7809eabd4fd0a26996c1ed1ce3e1_Glossary-HTML-form-elements-image-1.png?expiry=1679443200000&amp;hmac=IzlKtTyBPzeg1cRsHpPtq7NJX7ipmVW5Azv9gaPv-eA" alt="Two input types, text and password, as it displays in the browser." data-asset-id="A_17MQ8SSo69ezEPEkqOMw" class="cml-image-default undefined">
Two input types, text and password, as it displays in the browser.

 Note how the type `password` hides the user input. 

### `<label>`
Defines a label for an element. It has an attribute "for", the value of which should be equal to the id attribute of the element it is associated with. Note how in the example above, the `<label>` is associated with the `<input>` using its id value. 


 ### `<select>`
Defines a drop-down list of options presented to the user. It has a couple of attributes: 

* Form, the id of the form in which the drop-down appears 

* Name specifies the name of the control 

* Multiple Boolean attribute, when specified, indicates if a user can select multiple options out of the list 

* Required indicates if the user is required to select an option before submitting a form 

* Size mentions the number of visible options in a drop-down list 

The options in a drop-down list are defined using the `<option>` element inside `<select>`. Note the example in the `<option>` description below. 


### `<textarea>`

Defines a multi-line input field, typically to allow the user to input longer textual data. The common attributes for this element include: 

* `cols` defines the width of the text area, the default value is 20 

* `form` the form element the text area is associated with 

* `maxlength` when specified, limits the maximum number of characters that can be entered in the text area 

* `minlength` the minimum number of characters that the user should enter 

* `readonly` once set, the user cannot modify the contents 

* `rows` defines the number of visible text lines for the text area 

The following line of code defines a text area of 10 visible lines and nearly 30 characters wide where the user can input a maximum of 200 characters: 

```html
<textarea name="response" rows="10" cols="30" maxlength=”200”> 

</textarea> 
```
### `<button>`

Defines a clickable button. The onclick attribute defines the behavior when the button is clicked by the user. For example, in the code below, an alert message is shown to the user. 


```html
<button type="button" onclick="alert('You just clicked!')">Click Me! 
</button> 
```
### `<fieldset>` 

Used to group related input elements in a form. For instance, elements related to the user’s personal information and educational qualification can be grouped separately in two field sets. 

### `<legend>` 

Defines a caption for the `<fieldset>` element. For example: 


```html
<fieldset> 
  <legend>Personal Info</legend> 
  <label for="fname">First name:</label><br> 
  <input type="text" id="fname" name="fname" value="John"><br> 
  <label for="lname">Last name:</label><br> 
  <input type="text" id="lname" name="lname" value="Doe"><br> 
</fieldset> 

<fieldset> 
  <legend>Qualificaiton</legend> 
```
### `<datalist>`

Specifies a list of pre-defined options for an input element. It differs from `<select>` since the user can still provide textual or numeric input other than the listed options. 
 

```html
<form action="/my_action_page"> 
  <label for="flowers">Favourite flower:</label><br> 
  <input list="flowers" name="flowers"> 
  <datalist id="flowers"> 
    <option value="Rose"> 
    <option value="Lily"> 
    <option value="Tulip"> 
    <option value="Daffodil"> 
    <option value="Orchid"> 
  </datalist> 
    ... 
</form>
```
Datalist input type with its drop-down list containing the options visible

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/q0SmtJHrQjaEprSR6wI2zw_dd1195780f044f60bf632daf2690cde1_Glossary-HTML-form-elements-image-2.png?expiry=1679443200000&amp;hmac=kUg019UGekBRjBGWCalH4UqUuJtMx9c40AvL4uZW-Tg" alt="Datalist input type with its drop-down list containing the options visible" data-asset-id="q0SmtJHrQjaEprSR6wI2zw" class="cml-image-default undefined">

### `<output>` 

Represents the result of a calculation (typically the output of a script) or the outcome of the user action. 

### `<option>` 

Defines an option for the drop-down list. The following code example demonstrates how a simple list can be defined, with the rendered view below the code block. 


```html
<label for="course">Choose a course:</label><br> 
<select id="course" name="courselist"> 
  <option value="html">HTML Introduction</option> 
  <option value="css">Styling with CSS</option> 
  <option value="js">JavaScript</option> 
  <option value="react">React Basics</option> 
</select> 
```
Option input type as with its drop-down list visible

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/y3_PBJpEQp-_zwSaRFKfJQ_616e0a964430466c9551bb64231784e1_Glossary-HTML-form-elements-image-3.png?expiry=1679443200000&amp;hmac=JKoV8wwO4f5nuWW0rxbWAEPGtvrWc8y0e5s6TnNonpc" alt="Option input type as with its drop-down list visible" data-asset-id="y3_PBJpEQp-_zwSaRFKfJQ" class="cml-image-default undefined">

By default, the first item in the drop-down list is selected. To define a pre-selected option, add the selected attribute to the option. 

### `<optgroup>` 

Defines a group of related options in a drop-down list. Its attribute label names the group. 

## Images
This lesson will help refresh your knowledge of the `<img>` tag and how you can use it to embed images in webpages. 

The `<img>` tag is used to add an image to a web page. The image’s address is specified using the src attribute. For example, if you wanted to embed an image file named photo.png, you can do that with the following HTML. 
```html
<img src="photo.png"> 
```
You can also specify the width and height of the image using the width and height attributes. For example, if the width of the photo is 640 pixels and the height of the photo is 480 pixels, you can use the following HTML. 

`<img src="photo.png" width="640" height="480">` 

It is important to note that you can set the image to a larger or smaller size and the web browser will automatically scale the image. For example, you can update the previous HTML to half the width and height and the image would shrink by 50%. 
```html
<img src="photo.png" width="320" height="240"> 
```
One useful feature of rendering images in the web browser is that the web browser can automatically keep the correct ratio of width to height. So for example, if you want to scale the image by 50%, you can simply set the width attribute and the web browser will automatically calculate the height. 
```html
<img src="photo.png" width="320"> 
```
But what happens if the photo doesn’t load? Perhaps the file was accidentally deleted, or you mistyped the file name. Luckily, the web browser has a way to display some text when the image fails to load. This is done using the alt attribute. For example, you can display the text My Profile Photo using the alt attribute in the previous HTML. 
```html
<img src="photo.png" width="320" alt="My Profile Photo"> 
```
It is important to ensure that screen reader accessibility software can interpret images displayed in the web browser. To support this, the `<img>` tag is combined with the `<figure>` and `<figcaption>` tags to provide a description of the image. The `<img>` tag is added inside the `<figure>` tag and the `<figcaption>` is specified after it. 


```html
<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>
```
One last thing to note is that like videos and audio, the web browser only supports specific file types. These file types are: 

* .APNG – Animated Portable Network Graphics 

* .AVIF – AV1 Image Format 

* .GIF – Graphics Interchange Format 

* .JPEG / .JPG – Joint Photographic Expert Group image format 

* .PNG – Portable Network Graphics 

* .SVG – Scalable Vector Graphics 

* .WEBP – Web Picture Format 


Images will be important as you build websites and ensuring they are accessible will provide a better user experience for all visitors. 

## iFrame sandbox cheat sheet
The `<iframe>` is the inline frame element that embeds an HTML page into another page.  

Apart from the global attributes, which can be a part of the iframe, major element-specific attributes are listed below. 

__allow__

It specifies what features or permissions are available to the frame, for instance, access to the microphone, camera, other APIs and so on. For example: 

* `allow="fullscreen"` the fullscreen mode can be activated 

* `allow="geolocation"` lets you access the user’s location 

To specify more than one feature, a semicolon-separator should be used between features. For example, the following would allow using the camera and the microphone: 
```html
<iframe src="https://example.com/…" allow="camera; microphone"> </iframe> 
```
__name__

The name for the `<iframe>`. For example: 
```html
<iframe name = "My Frame" width="400" height="300"></iframe>  
```
__height__

It specifies the height of the frame. The default value is 150, in terms of CSS pixels. 
width 

__width__

Specifies the width of the frame, in terms of CSS pixels. The default value is 300 pixels.

__referrerpolicy__

A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource. The common values are: 

* `no-referrer` The referrer header will not be sent. 

* `origin` The referrer will be limited to the origin of the referring page 

* `strict-origin` The origin of the document is sent as the referrer only when using the same protocol security level (HTTPS to HTTPS) 

__sandbox__

To enforce greater security, a sandbox applies extra restrictions to the content in the `<iframe>`. To lift particular restrictions, an attribute value (permission token) is used. The common permission tokens are listed below: 

* `allow-downloads` Allows the user to download an item 

* `allow-forms` Allows the user to submit forms 

* `allow-modals` The resource can open modal windows 

* `allow-orientation-lock` Lets the resource lock the screen orientation 

* `allow-popups` Allows popups to open 

* `allow-presentation` Allows a presentation session to start 

* `allow-scripts` Lets the resource run scripts without creating popup windows 


Note that when the value of this attribute is empty, all restrictions are applied. To apply more than one permission, use a space-separated list. For example, the following would allow form submission and scripts while keeping other restrictions active: 

```html
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"> 
</iframe> 
```
__src__

The URL of the page to embed in the `<iframe>`. Using the value `about:blank` would embed an empty page. 

__srcdoc__

Let's you specify the inline HTML to embed in the `<iframe>`. When defined, this attribute would override the `src` attribute.  

For instance, the following code will display "My inline html" in the frame, instead of loading `my_iframe_src.html`. 

```html
<iframe src="my_iframe_src.html" srcdoc="<p>My inline html</p>" > 
</iframe> 
```
__loading__

This attribute let's you specify if the iframe should be loaded immediately when the web page loads (__eager__) or loaded when iframe is displayed in the browser (__lazy__). This allows you to defer loading iframe content if it is further down your web page and outside of the display area when the page is initially loaded.

```html
<iframe src="my_iframe_src.html" loading="lazy" > 
</iframe>
``` 
__title__

This attribute let's you add a description to the iframe for accessibility purposes. The value of this attribute should accurately describe the iframe's content.

```html
<iframe src="history.html" title="An embedded document about the history of my family" > 
</iframe> 
```

# CSS

## Flexbox properties
 Original HTML code:

```html
<body>
  <div class="flex-container">
    <div class="box box1">  One..</div>
    <div class="box box2">  Two..</div>
    <div class="box box3">  Three..</div>
    <div class="box box4">  Four..</div>
    <div class="box box5">  Five..</div>
    <div class="box box6">  Six..</div>
    <div class="box box7">  Seven..</div>
  </div>
```
 Original CSS file: 

```css
.box{
    background-color: aquamarine;
    border-radius: 5px;
    margin: 2px;
    padding: 10px;
}
```
Output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/G-dz3RFcSfqnc90RXLn6ag_557f7fb0056c49be907c6d8d279612e1_Picture2.png?expiry=1679702400000&amp;hmac=SWq4ZtSwVRO7wARBndyYaG_WHzuVkOG51xdcAeAQViU" alt="Output for CSS Code with listed number boxes" data-asset-id="G-dz3RFcSfqnc90RXLn6ag" class="cml-image-default undefined">

Output for CSS Code with listed number boxes

There are seven div containers inside the HTML file.

The corresponding CSS file contains rules for all seven div tags that have the box class. Note how two class names are given for each of the tags, one that is common among all classes and another independent of it. The style is applied to all the containers. 

Now let’s add properties to the flex container by converting it into flex. 

__display: flex;__
```css
.flex-container{
    display: flex;
}
```

The output is now seven flex containers that run from left to right starting in the top left corner.

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/YQvW2PFGQ82L1tjxRgPNpw_dbf8df41153245b480b57b84db885de1_Picture3.png?expiry=1679702400000&amp;hmac=mLYJG0KMVsG3kjRiuFmfbpCFITs8iZ0I6_B97G9KkVU" alt="Output for CSS Code with aligned number boxes" data-asset-id="YQvW2PFGQ82L1tjxRgPNpw" class="cml-image-default undefined">


### Alignment properties
 Let’s examine a few alignment properties inside the flex. There are four main properties used to align a flex container and items present inside it:  

* justify-content. For item alignment on main axis.

* align-items. For item alignment on cross axis.

* align-self. For unique flex items on cross axis.

* align-content. Used for packing flex lines and control over space.

Of these, justify-content and align-items are frequently used for the respective two axes. 

Let’s first examine the use of justify-content which has a value of ‘left’ by default.

__justify-content__

CSS:

```css
.flex-container{
    display: flex;
    justify-content: center
}
```
Output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/23k1weWbT-m5NcHlmw_pPA_cb30cd5ee8fd4dcd9c4eb75e19c0dde1_Picture4.png?expiry=1679702400000&amp;hmac=BvhdqJOHkp56FjoWlVWusSBkJhFjlz4ZTIA7BIAuBmM" alt="The output for CSS Code with justification in the center" data-asset-id="23k1weWbT-m5NcHlmw_pPA" class="cml-image-default undefined">

__flex-wrap:__
The default for this property is ‘nowrap’ which means the items will span the entire width of the axis. 

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
```
Output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/0luqSS1sQQKbqkktbHECIg_0dca56850210440f91a0aec100c74fe1_Picture5.png?expiry=1679702400000&amp;hmac=Tw_uf3-CHPFy_udpwXZKN5p2JceS0nqWvTgNZdrb2rI" alt="Output for CSS code with wrapped number boxes justified in the center" data-asset-id="0luqSS1sQQKbqkktbHECIg" class="cml-image-default undefined">

The items will now be wrapped to the size of the available viewport. 

__flex-direction:__

This property is used to set the main axis, which is a ‘row’ by default. It basically means you are changing your ‘main’ axis from horizontal rows to vertical columns. 

CSS Code:

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}
```
  Output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/wAfOom9cSBeHzqJvXKgXCw_81279a0a0ffa4b299ef120fb64c252e1_Picture6.png?expiry=1679702400000&amp;hmac=xeFO3ysnWDBvwwat_TF9xV4RW2tXaVEoKyQPUVrCizA" alt="Display of listed number boxes as a flex" data-asset-id="wAfOom9cSBeHzqJvXKgXCw" class="cml-image-default undefined">

The output looks like the original output; however, it is now actually a flex.

 Now let’s align the items again and examine a couple of the other properties mentioned earlier.   

__align-items:__

The alignment on the cross-axis is done with the help of this property. Let’s change the value for it to ‘flex-end’. 

CSS Code:

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
}
```
 Output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/3VPeiAOETRST3ogDhC0U2A_3c6e7af5e29b47e588a71d07671735e1_Picture7.png?expiry=1679702400000&amp;hmac=0Or9jOMcbAgZ0UXhi1ZpvSnfbyWN9QYCfeIVdPYZJNw" alt="Right-centered number boxes with the flex end aligning method." data-asset-id="3VPeiAOETRST3ogDhC0U2A" class="cml-image-default undefined">
  

The term ‘end’ refers to the right side of the page as the left side is seen as the beginning. 

__align-self:__

This property can be used on individual items inside the flex. 

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
}
.box3{
    background-color: blanchedalmond;
    align-self: center;
}
```
 Output:       

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/mm3YQNF-TnWt2EDRft51kg_2ae1f658e0c24967bd8fbfe6e00443e1_Picture8.png?expiry=1679702400000&amp;hmac=5avx02tAtW9yR-kf3SodWwG9XRRUQ4gfAWMrwaDVI80" alt="Output to display of a change in the color and alignment of individual items" data-asset-id="mm3YQNF-TnWt2EDRft51kg" class="cml-image-default undefined">
  

Here the color and alignment of the third box have been changed and it overrides the properties set using align-items.     

__gap:__

gap property can be used to create space between the items along the main axis. You can also individually configure the gaps in rows and columns using row-gap and column-gap properties.   

CSS Code:

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
    gap:10px;
}
.box3{
    background-color: blanchedalmond;
}
```
 Output:

<figure role="figure" contenteditable="false"><img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ztkm6NUSQ9iZJujVEiPYHg_90b99e4f7a584b28ae59c926b9b513e1_Picture9.png?expiry=1679702400000&amp;hmac=hivWs3mxJp8CofyOJNmld3JufFzi5tPJuwx3bGA9OsM" alt="Display of items with different spacing" data-asset-id="ztkm6NUSQ9iZJujVEiPYHg" class="cml-image-default undefined"></figure>

There is a clear change in spacing between the items. 

The final set of properties are flex-grow, flex-shrink and flex-basis. Together these determine how the flex takes up space, grows or shrinks according to the space available.

These are the sub-properties of a property called flex. Together all three properties can also be given values with the help of something called the shorthand notation in CSS. Shorthand notation helps you make your code compact and also easy to write and follow. The values left empty in shorthand notation are given their default values. 

For example:

```css
.flex-container{
flex: 0 1 auto;
}
```

Here for the flex-container class, there is a set rule for the flex property. The values correspond to the three properties, namely the flex-grow set to 0, flex-shrink to 1 and flex-basis to auto. The flex-basis sets the initial size of the container. and together they define the rigidity or flexibility and dynamism you want to add to the flexbox. 

To demonstrate the effect of this, the code has to be modified slightly by removing the flex-direction value set to ‘column’. This will change it to default ‘row’ and the output will again be centrally aligned and horizontal best-distributed between two rows. 

Output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/yEoMipglQMyKDIqYJWDMmA_e9e7e0fe3299407eaf95742f32e6eee1_Picture10.png?expiry=1679702400000&amp;hmac=dq0cu9FKp_s1BjRrDAvC06kQICDxD5Nk2HhSMRDxS6Y" alt="List of items as default raw modified by removing the flex direction" data-asset-id="yEoMipglQMyKDIqYJWDMmA" class="cml-image-default undefined">

The rest of the remaining code is unchanged. However, the output will change if the code is modified with the addition of the flex property inside the flex item box3 class. 

CSS Code:

```css
.box3{
    background-color: blanchedalmond;
    align-self: center;
    flex: 1 1 auto;
}
```
 Output:

<img src="https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/46TFyd29TLukxcndvZy7Tg_f0c1fe9ee37a45438aa31fb8cb871be1_Picture11.png?expiry=1679702400000&amp;hmac=woa0NVkaDnsfKzjTBFz60sBPBHLWbfWswDG1zjJ1Dqs" alt="Different spacing of items in row display" data-asset-id="46TFyd29TLukxcndvZy7Tg" class="cml-image-default undefined">

The third box now takes up the entire free space available because flex-growth’s value has been set to 1. So if we have `flex-grow` set to 1, the children will all set to equal size. And if one of the children has a value of 1.5, that child would take up more space as compared to the others.

### __Relative values__
|Unit|Description and relativity|
|:---:|:---:|
|  `em` |  Font size of the parent where present. |
|  `ex` |  x-co-ordinate or height of the font element. |
|  `ch` |  Width of the font character. |
|  `rem` | Font size of the root element.  |
|  `lh` |  Value computed for line height of parent element.  |
|   `rlh`| Value computed for line height of root element which is `<html>`.  |
|   `vw`|  1% of the viewport width. |
|   `vh`|  1% of the viewport height. |
|  `vmin`| 1% of the smaller dimension of viewport.  |
| `vmax` |  1% of the larger dimension of viewport. |
|  `%` |  Denotes a percentage value in relation to its parent element. 


## Grids and flexbox cheat sheet

### __Grid__
The syntax for creating a grid:

```css
selector{
    display: grid; /* or inline-grid */
}
```
Grid shorthand consists of the following properties with default values:

`grid`

A grid will allow you organize the various elements on your page. 

`grid-template-rows: none`

This feature allows you configure your elements so that they are organized similarly to rows on a table. 

`grid-template-columns: none`

This feature allows you configure your elements but with this setting the elements are organized like columns on a table. 

`grid-template-areas: none`

This feature allows you configure the names of a grid and how they sit in relation to one another. 

`grid-auto-rows: auto`

Default setting for all row sizes that have not been explicitly configured. 

`grid-auto-columns: auto`

Default setting for all column sizes that have not been explicitly configured. 

`grid-auto-flow: row`

Default location for rows that are not explicitly allocated. 

`column-gap: normal`

This sets the gap between the columns

`row-gap: normal`

This sets the gap between the rows

### __Grid properties for container__
`grid-template-columns: measurement units | % units |repeat()`

Defines the line names, and maintains a constant size of column items. Can accept a range of different measurement sizes.

`grid-template-rows: measurement units | % units |repeat()`

Defines the line names, and maintains a constant size of rows. Can accept a range of different measurement sizes.

`grid-auto-columns: measurement unit (fixed value for all columns)`

Determines the default size for columns that have not been explicitly configured. 

`grid-auto-rows: measurement unit (fixed value for all rows)`

Determines the default size for rows that have not been explicitly configured.

`grid-template: “header header” auto`

This allows you define and maintain named cells on a grid 

`"main right" 75vh`

This defines two cells named main and right, that have a sizing of 75% of the viewport height. 

`"footer footer" 20rem`

This defines two cells named footer and footer, that have a sizing of 20 root em (rem). This defines the size in relation to the html font size. 

### __Gap__
`grid-gap: measurement units`

Determines the gap between rows and columns 

`grid-column-gap: measurement units`

Determines the gap between columns

`grid-row-gap: m-unit-1  m-unit-2`

Determines the gap between columns

### __Alignment__
`justify-items: start | center | end | stretch `

Defines the default space that is allot to each item on the grid 

`align-items: start | center | end | stretch`

Defines the default space related to an item along the grid’s block axis  

`place-items: start | stretch` /* shorthand for two properties above */

This feature allows you align items with  the block and inline directions.

### __Justification__
`justify-content: start | center | end | stretch | space-between | space-evenly | space-around`

Defines browser allocation of space to content items in relation to the main-axis 

`align-content: start | center | end | stretch | space-between | space-evenly | space-around`

Defines browser allocation of space to content items in relation to cross axis and block axis  

`place-content: center | start`

This feature allows you align items with  the block and inline directions.

### __Positioning__
`grid-auto-flow: row | column | dense`

This relates to how the items are placed automatically within the grid

`grid-auto-columns: measurement units`

This relates to the size for columns created without specific size specifications 

`grid-auto-rows: measurement units`

This relates to the size for rows created without specific size specifications  |

### __Grid properties for items (child)__
`grid-column: column position` /* E.g. 1/2  */

Allows for specifying where on the grid the column is to start. 

`grid-column-start: column start position` 

This property determines the starting column position an item is placed on a grid. 

`grid-column-end: column end position `

This property determines the end column position an item is placed on a grid. 

`grid-row: row position /* E.g. 1/2  */`

Allows for specifying where on the grid the row is to start. 

`grid-row-start: row start position` 

This property determines the starting row position an item is placed on a grid. 

`grid-row-end: row end position` 

This property determines the end row position an item is placed on a grid. 

### __Justification and alignment__
`justify-self: start | center | end | stretch`

Determines how  an item is positioned inside its aligned container in relation to the appropriate axis. 

`align-self: start | center | end | stretch`

Aligns an item within a grid area. 

`place-self: start | stretch /* shorthand for two properties above */`

This setting lets one align and justify an item within a block. 

## Flexbox
The syntax for creating a flexbox:

```css
selector{
    display: flex | inline-flex
}
```
Here the selector can refer to any of the following flex attributes 

* Attribute selector

* Class Selector

* ID Selector 

* Type Selectors 

* Universal Selectors 

The display relates to how you want the selector to be shown. Setting display to flex makes the given selector a flex box. Setting display to inline-flex makes the selector a flex box container while will be inline. 

### __Properties for flexbox container__
`flex-direction: row | row-reverse | column | column-reverse`

It is possible to specify the direction your elements will follow. Traditionally text goes from left to right which is flex’s default setting however it can be set from right to left or even top to bottom. The four flex-direction are:

* row : organized from left to right 

* row-reverse: organized from right to left 

* column: organized from top to bottom

* column-reverse: organized from bottom to top. 

`flex-wrap: wrap | nowrap`

The standard layout is to plot the elements from left to right in a straight line. The wrap feature allows you customize this to match the size of the window displaying the page. 

* wrap: Automatically wrap the items with as the window space gets smaller. 

* Nowrap: Default setting, items remain rigid and don’t respond  to adjustments made to the window size.

`align-items: flex-start | flex-end | center |Stretch`

This determines how the flex items are to be positioned on the page. Items can be aligned in a variety of ways 

* Flex-start: Similar to standard writing, items start at the top left-hand corner and are positioned from left to right 

* Flex-end: Position begins in the bottom right hand corner. 

* Center: Item is positioned from the center. 

* Stretch: item expands to fill the container. 

`justify-content: flex-start | flex-end | center | space-between | space-evenly`


Justify-content determines the alignment of the flex items. 

* Flex-start: goes from right to left along the main axis. 

* Flex-end: goes from left to right along the main axis. 

* Center: Starting at the middle, alignments expands from there. 

* Space-between: first and last item are flush with the left and right wall respectively, every other item is evenly spaced. 

* Space-evenly: each item is equidistant from each other and the boundary wall 

### __Properties for flexbox items (child)__
`flex-grow: factor of flex’s main size  `

This attribute enables the flex container to grow proportionally to the other containers present. 

`flex-shrink: factor of flex’s main size`

This allows elements to shrink in relation to items around it.

`flex-basis: auto | factor of main’s size | measurement unit`

The sets the initial main size of an item. It can be overridden if other stylized elements are configured. 

`order:position in flex /* Set ascending by default */`

The standard positioning of items is by source order, however this feature will enable you to configure where the items appear on the page. 

`align-self:  start | center | end | stretch`

This determines where on the page the child items will be positioned. Similar to the main flex attributes, start is to the left and end is to the right.

## Text effects cheat sheet

The visual representation of text content can be changed by four main properties: text-transform, font-style, font-weight and text-decoration.

<table><thead><tr><th scope="col"><p><span><span>Property&nbsp;</span></span></p></th><th scope="col"><p><span><span>Values</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>Text-transform</span></span></p></td><td><p><span><span>None, uppercase, lowercase, capitalize, full-width</span></span></p></td><td><p><span><span>Modify text properties</span></span></p></td></tr><tr><td><p><span><span>Font-style</span></span></p></td><td><p><span><span>Normal, italic, oblique</span></span></p></td><td><p><span><span>Font styling options such as italics&nbsp;</span></span></p></td></tr><tr><td><p><span><span>Font-weight</span></span></p></td><td><p><span><span>Normal, weight, lighter, bolder, 100-900</span></span></p></td><td><p><span><span>Other font styling options like change of emphasis such as making text bold</span></span></p></td></tr><tr><td><p><span><span>Text-decoration</span></span></p></td><td><p><span><span>None, underline, overline, line-through</span></span></p></td><td><p><span><span>Shorthand for auxiliary elements added to text using other properties such as text-decoration-line</span></span></p></td></tr></tbody></table>

The additional properties that help configure styling effects are below.

<table><thead><tr><th scope="col"><p><span><span>Text-align</span></span></p></th><th scope="col"><p><span><span>For horizontal alignment of text</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>Text-align-last</span></span></p></td><td><p><span><span>Alignment for the last line when text set to justify</span></span></p></td></tr><tr><td><p><span><span>Text-combine-upright</span></span></p></td><td><p><span><span>Multiple characters into the space of a single character placed upright like in Mandarin</span></span></p></td></tr><tr><td><p><span><span>Text-decoration-color</span></span></p></td><td><p><span><span>Color configuration of the text-decoration</span></span></p></td></tr><tr><td><p><span><span>Text-decoration-line</span></span></p></td><td><p><span><span>Line type in text-decoration such as underline, overline and so on</span></span></p></td></tr><tr><td><p><span><span>Text-decoration-style</span></span></p></td><td><p><span><span>Styles added to lines under text such as wavy, dotted and so on</span></span></p></td></tr><tr><td><p><span><span>Text-decoration-thickness</span></span></p></td><td><p><span><span>Thickness of the decoration line</span></span></p></td></tr><tr><td><p><span><span>Text-emphasis</span></span></p></td><td><p><span><span>Shorthand for other properties such as color and style&nbsp;</span></span></p></td></tr><tr><td><p><span><span>Text-indent</span></span></p></td><td><p><span><span>The indentation of the first line&nbsp;</span></span></p></td></tr><tr><td><p><span><span>Text-justify</span></span></p></td><td><p><span><span>Specifies the justification method used when text-align is "justify"</span></span></p></td></tr><tr><td><p><span><span>Text-orientation</span></span></p></td><td><p><span><span>Orientation of text in a line such as sideways, upright and so on</span></span></p></td></tr><tr><td><p><span><span>Text-shadow</span></span></p></td><td><p><span><span>Adds shadow to text </span></span></p></td></tr><tr><td><p><span><span>Text-underline-position</span></span></p></td><td><p><span><span>Declare position of underline set using the text-decoration property</span></span></p></td></tr></tbody></table>


Other than these, there are some more properties that help modify the alignment and define the scope of text with their containers. 

<table><thead><tr><th scope="col"><p><span><span>Property&nbsp;</span></span></p></th><th scope="col"><p><span><span>Values</span></span></p></th><th scope="col"><p><span><span>Description</span></span></p></th></tr></thead><tbody><tr><td><p><span><span>Text-overflow</span></span></p></td><td><p><span><span>Clip, ellipsis</span></span></p></td><td><p><span><span>Determines overflow behavior of text with the container</span></span></p></td></tr><tr><td><p><span><span>Word-wrap</span></span></p></td><td><p><span><span>Normal, anywhere, break-word</span></span></p></td><td><p><span><span>Applies to inline elements, alias for overflow-wrap</span></span></p></td></tr><tr><td><p><span><span>Word-break</span></span></p></td><td><p><span><span>Normal, break-all, keep-all, break-word</span></span></p></td><td><p><span><span>Used for long words to decide if words should break or overflow</span></span></p></td></tr><tr><td><p><span><span>Writing-mode</span></span></p></td><td><p><span><span>Horizontal-tb, vertical-lr, vertical-rl</span></span></p></td><td><p><span><span>Can set the text direction vertical or horizontal</span></span></p></td></tr></tbody></table>



## CSS keyframes

In this reading, you will become acquainted with the @keyframes rule and you’ll learn how to use it with the animation property in CSS. The rules covered so far are for alignment and styling of web pages using CSS. Keyframes are a type of at-rule which are represented by the '@' suffix. At-rules are statements inside CSS that describe how to behave or perform certain actions. In line with that, keyframes are defined as '@keyframes' in the CSS code. @keyframes are part of the animation sequence and help in defining the steps inside it. Imagine an object on your web page moving from point A to point B. You can use the transition and transform properties to do that, but animation sequences are used to accomplish more complex behaviors in an easier way. 

### __from{} and to{} keywords and using percentages(%) syntax__

```css
@keyframes animation-name { 

from { 

property-a: value-a; 

} 

 

to { 

property-a: value-b; 

} 

} 
```
The 'from' and 'to' keywords are used inside the @keyframes rule to mark the transition of one or more properties and can be seen as the start and end points of that transition. As can be seen from the syntax, the values of ‘property-a’ changes from ‘value-a’ to ‘value-b’. To expand on the use of ‘from’ and ‘to’, the @keyframes allows you to add more steps to your animation by using a percentage that represents the completion of the animation. 

```css
@keyframes identifier { 

0% {transform: rotate(100deg);} 

30% {opacity: 1;} 

50% {opacity: 0.50;} 

70% {opacity: 1;} 

100% {transform: rotate(50deg);} 
}
```
The different percentages used in the example demonstrate the progression of the animation. Note that it doesn’t have to be the same property that you modify in these steps. That's not possible using the transition property, but you can do it with @keyframes. This flexibility is what makes @keyframes so powerful. Another advantage is how these animations can also loop infinitely, run forwards, reverse and alternate.

@keyframes are tied in with the animation-name to which they are going to be applied. To give an overview of the animation property, it consists of other sub-properties. Of these, animation-name and animation-duration must be defined while others such as timing-function, delay, direction, fill-more, iteration-count and so on can be added. 

Animation property shorthand:

The shorthand for the animation property consists of the following properties with their default values:

* animation-name: none 

* animation-duration: 0s 

* animation-timing-function: ease 

* animation-delay: 0s 

* animation-iteration-count: 1 

* animation-direction: normal 

* animation-fill-mode: none 

* animation-play-state: running 

* animation-timeline: auto 

If the values of any of these are not defined, you should assume that they are the default. Of these, the first property of the animation-name is what's used to tie it to the @keyframes rule.

Let’s now examine an example of how you can use @keyframes and the animation property. 


## Color Sheme
https://www.moving.com/tips/how-to-choose-a-color-scheme-for-your-home/

## Additional resources
[Client-Side Form Validation with HTML5](https://www.sitepoint.com/client-side-form-validation-html5/)

[`<input>`: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

[HTML5 Form Validation Examples](https://www.the-art-of-web.com/html/html5-form-validation/)

[`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

[Why Does Your Website Look Different In Different Browsers?](https://www.webfx.com/web-design/learn/why-does-your-website-look-different-in-different-browsers/)

[Sending form data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

https://html.com/media/

https://studio.support.brightcove.com/publish/publishing/choosing-correct-embed-code.html

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML

https://www.educba.com/iframes-in-html/

https://www.tutorialrepublic.com/html-tutorial/html5-canvas.php

https://html.spec.whatwg.org/multipage/media.html