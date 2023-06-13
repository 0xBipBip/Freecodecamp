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

Steps 26-