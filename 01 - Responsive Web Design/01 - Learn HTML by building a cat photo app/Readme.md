Step 1 
HTML elements have opening tags like <h1> and closing tags like </h1>.
The text for an element goes between its opening and closing tags.
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>

Step 2
The h1 through h6 heading elements are used to signify the importance of content below them. The lower the number, the higher the importance, so h2 elements have less importance than h1 elements. Only use one h1 element per page and place lower importance headings below higher importance headings.

<html>
  <body>
    <h1>CatPhotoApp</h1>
    <h2>Cat Photos</h2>
  </body>
</html>

Step 3
The p element is used to create a paragraph of text on websites. 

<body>
    <h1>Hello World</h1>
    <p>See more cat photos in our gallery.</p>
</body>

Step 4
Commenting allows you to leave messages without affecting the browser display. It also allows you to make code inactive. A comment in HTML starts with <!--, contains any number of lines of text, and ends with -->. 

Step 5 
HTML5 has some elements that identify different content areas. These elements make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility.

Identify the main section of this page by adding a <main> opening tag before the h1 element, and a </main> closing tag after the p element.

<main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more cat photos in our gallery.</p>
</main>

Step 6
In the previous step, you put the h1, h2, comment, and p elements inside the main element. This is called nesting. Nested elements should be placed two spaces further to the right of the element they are nested in. This spacing is called indentation and it is used to make HTML easier to read.

The h1 element, h2 element and the comment are indented two spaces more than the main element in the code below. Use the space bar on your keyboard to add two more spaces in front of the p element so that it is indented properly as well.

Step 7 
You can add images to your website by using the img element. img elements have an opening tag without a closing tag. A tag for an element without a closing tag is known as a self-closing tag.
<img>

Step 8
HTML attributes are special words used inside the opening tag of an element to control the element's behavior. The src attribute in an img element specifies the image's URL (where the image is located).

Here is an example of an img element with a src attribute pointing to the freeCodeCamp logo:
<img src="https://cdn.freecodecamp.org/platform/universal/fcc_secondary.svg">

Step 9
All img elements should have an alt attribute. The alt attribute's text is used for screen readers to improve accessibility and is displayed if the image fails to load. For example:
 <img src="cat.jpg" alt="A cat"> has an alt attribute with the text A cat.

Step 10
You can link to another page with the anchor (a) element. For example:
<a href='https://freecodecamp.org'></a> would link to freecodecamp.org.

Step 11
A link's text must be placed between the opening and closing tags of an anchor (a) element. For example, <a href="https://www.freecodecamp.org">click here to go to freeCodeCamp.org</a> is a link with the text click here to go to freeCodeCamp.org.

Step 12
In the previous step you turned the words link to cat pictures into a link by placing them between opening and closing anchor (a) tags. You can do the same to words inside of an element, such as a p element.

<p>See more <a href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>

Step 14
Add a target attribute with the value _blank to the anchor (a) element's opening tag, so that the link opens in a new tab.

<p>See more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a> in our gallery.</p>

Step 15
In previous steps you used an anchor element to turn text into a link. Other types of content can also be turned into a link by wrapping it in anchor tags.

Turn the image into a link by surrounding it with necessary element tags. 
<a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back"></a> 

Step 16
Before adding any new content, you should make use of a section element to separate the cat photos content from the future content.
Take your h2, comment, p, and anchor (a) elements and nest them in a section element.

<section>
  <h2>Cat Photos</h2>
  <!--TODO: Add link to cat photos-->
  <p>See more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a> in our gallery.</p>
  <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back"></a> 
</section>

Step 19
When you add a lower rank heading element to the page, it's implied that you're starting a new subsection.
After the last h2 element of the second section element, add an h3 element.

Step 20 & 21
After the h3 element with the Things cats love: text, add an unordered list (ul) element. Note that nothing will be displayed at this point.
Use list item (li) elements to create items in a list. Here is an example of list items in an unordered list:

<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>

Steps 22-25
After the unordered list, add a new image with an src attribute value and its alt attribute.
The figure element represents self-contained content and will allow you to associate an image with a caption.
A figure caption (figcaption) element is used to add a caption to describe the image contained within the figure element. For example, <figcaption>A cute cat</figcaption> adds the caption A cute cat.
Emphasize the word love in the figcaption element by wrapping it in an emphasis em element.

<figure>
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
    <figcaption>Cats <em>love</em> lasagna.</figcaption>
</figure>

Step 26-27
After the figure element, add another h3 element.
The code for an ordered list (ol) is similar to an unordered list, but list items in an ordered list are numbered when displayed.
After the second section element's last h3 element, add an ordered list.

<h3>Top 3 things cats hate:</h3>
<ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
</ol>          

Step 28-32
After the ordered list, add another figure element.
Inside the figure element you just added, nest an img element with a src attribute.
To improve accessibility of the image you added, add an alt attribute.
After the last img element, add a figcaption.
The strong element is used to indicate that some text is of strong importance or urgent. 
<figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
      <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
</figure>

Step 33-43
It is time to add a new section. Add an h2 element.
Now you will add a web form to collect information from users.
The action attribute indicates where form data should be sent. For example, <form action="/submit-url"></form> tells the browser that the form data should be sent to the path /submit-url.
The input element allows you several ways to collect data from a web form. Like img elements, input elements are self-closing and do not need closing tags.
There are many kinds of inputs you can create using the type attribute. You can easily create a password field, reset button, or a control to let users select a file from their computer.
In order for a form's data to be accessed by the location specified in the action attribute, you must give the text field a name attribute and assign it a value to represent the data being submitted. For example, you could use the following syntax for an email address text field: <input type="text" name="email">.
Placeholder text is used to give people a hint about what kind of information to enter into an input. For example, <input type="text" placeholder="Email address">.
To prevent a user from submitting your form when required information is missing, you need to add the required attribute to an input element. There's no need to set a value to the required attribute. Instead, just add the word required to the input element, making sure there is space between it and other attributes.
Use the button element to create a clickable button. For example, <button>Click Here</button> creates a button with the text Click Here.

Even though you added your button below the text input, they appear next to each other on the page. That's because both input and button elements are inline elements, which don't appear on new lines.
The button you added will submit the form by default. However, relying on default behavior may cause confusion. Add the type attribute with the value submit to the button to make it clear that it is a submit button.

<section>
  <h2>Cat Form</h2>
  <form action="https://freecatphotoapp.com/submit-cat-photo"></form>
  <input type="text" name="catphotourl" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</section>

Step 44-51
You can use radio buttons for questions where you want only one answer out of multiple options.
Here is an example of a radio button with the option of cat: <input type="radio"> cat. Remember that input elements are self-closing.
label elements are used to help associate the text for an input element with the input element itself (especially for assistive technologies like screen readers). For example, <label><input type="radio"> cat</label> makes it so clicking the word cat also selects the corresponding radio button.
The id attribute is used to identify specific HTML elements. Each id attribute's value must be unique from all other id values for the entire page.
Notice that both radio buttons can be selected at the same time. To make it so selecting one radio button automatically deselects the other, both buttons must have a name attribute with the same value.
If you select the Indoor radio button and submit the form, the form data for the button is based on its name and value attributes. Since your radio buttons do not have a value attribute, the form data will include indoor-outdoor=on, which is not useful when you have multiple buttons.
Add a value attribute to both radio buttons. For convenience, set the button's value attribute to the same value as its id attribute.
The fieldset element is used to group related inputs and labels together in a web form. fieldset elements are block-level elements, meaning that they appear on a new line.
Nest the Indoor and Outdoor radio buttons within a fieldset element, and don't forget to indent the radio buttons.
The legend element acts as a caption for the content in the fieldset element. It gives users context about what they should enter into that part of the form.

<fieldset>
    <legend>Is your cat an indoor or outdoor cat?</legend>
    <label><input type="radio" checked id="indoor" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label><input type="radio" id="outdoor" name="indoor-outdoor" value="outdoor"> Outdoor</label>
</fieldset>

Step 52-61
Next, you are going to add some new form input elements, so add another fieldset element directly below the current fieldset element.
Forms commonly use checkboxes for questions that may have more than one answer. For example, here's a checkbox with the option of tacos: <input type="checkbox"> tacos.
There's another way to associate an input element's text with the element itself. You can nest the text within a label element and add a for attribute with the same value as the input element's id attribute.
Add the name attribute with the value personality to the checkbox input element.
While you won't notice this in the browser, doing this makes it easier for a server to process your web form, especially when there are multiple checkboxes.
Like radio buttons, form data for selected checkboxes are name / value attribute pairs. While the value attribute is optional, it's best practice to include it with any checkboxes or radio buttons on the page.
Add a value attribute to each checkbox. For convenience, set each checkbox's value attribute to the same value as its id attribute.
Passed
In order to make a checkbox checked or radio button selected by default, you need to add the checked attribute to it. There's no need to set a value to the checked attribute. Instead, just add the word checked to the input element, making sure there is space between it and other attributes.

<fieldset>
    <legend>What's your cat's personality?</legend>
    <input type="checkbox" checked id="loving" name="personality" value="loving"> <label for="loving"> Loving</label>
    <input type="checkbox" id="lazy" name="personality" value="lazy"> <label for="lazy"> Lazy</label>
    <input type="checkbox" id="energetic" name="personality" value="energetic"> <label for="energetic"> Energetic</label>
</fieldset>

Step 62-64
Now you will add a footer section to the page.
After the main element, add a footer element.
Nest a p element.
Turn the existing freeCodeCamp.org text into a link by enclosing it in an anchor (a) element. The href attribute should be set to https://www.freecodecamp.org.

<footer>
  <p>No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a></p>
</footer>

Step 65-69
Notice that everything you've added to the page so far is inside the body element. All page content elements that should be rendered to the page go inside the body element. However, other important information goes inside the head element.
Add a head element above the body element.
The title element determines what browsers show in the title bar or tab for the page.
Notice that the entire contents of the page are nested within an html element. All other elements must be descendants of this html element.
Add the lang attribute with the value en to the opening html tag to specify that the language of the page is English.
All pages should begin with <!DOCTYPE html>. This special string is known as a declaration and ensures the browser tries to meet industry-wide specifications.
Add this declaration as the first line of the code.
You can set browser behavior by adding self-closing meta elements in the head. Here's an example:
<meta attribute="value">
Tell the browser to parse the markup into multiple languages by creating a meta element as a child of the head element. Set its charset attribute to UTF-8.

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CatPhotoApp</title>
</head>