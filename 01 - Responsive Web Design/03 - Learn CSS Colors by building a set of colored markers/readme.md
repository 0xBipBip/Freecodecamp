Selecting the correct colors for your webpage can greatly improve the aesthetic appeal to your readers.

In this course, you'll build a set of colored markers. You'll learn different ways to set color values and how to pair colors with each other.

Step 1
As you've seen in the previous projects, webpages should start with a DOCTYPE html declaration, followed by an html element.

Add a DOCTYPE html declaration at the top of the document, and an html element after that. Give the html element a lang attribute with en as its value.

Step 2
Nest a head element within the html element. Just after the head element, add a body element.

Step 3
Remember that the title element gives search engines extra information about the page. It also displays the content of that title element in two more ways:

in the title bar when the page is open
in the browser tab for the page when you hover on it. Even if that tab is not active, once you hover on the tab, the title text is displayed.
Within the head element, nest a title element with the text Colored Markers.

Step 4
To tell browsers how to encode characters on your page, set the charset to utf-8. utf-8 is a universal character set that includes almost every character from all human languages.

Inside the head element, nest a meta element with the attribute charset set to utf-8. Remember that meta elements are self-closing, and do not need a closing tag.

Step 5
You can have multiple self-closing meta elements on a web page. Each meta element adds information about the page that cannot be expressed by other HTML elements.

Add another self-closing meta element within the head. Give it a name attribute set to viewport and a content attribute set to width=device-width, initial-scale=1.0 so your page looks the same on all devices.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
</head>

Step 6
Now you're ready to start adding content to the page.

Within the body, nest an h1 element with the text CSS Color Markers.
<body>
    <h1>CSS Color Markers</h1>
</body>

Step 7
In this project you'll work with an external CSS file to style the page. We've already created a styles.css file for you. But before you can use it, you'll need to link it to the page.

Nest a link element within the head element. Give it a rel attribute set to stylesheet and an href attribute set to styles.css.

Step 8
Now that your external CSS file is set up, you can start styling the page.

Create a new CSS rule that targets the h1 element, and set its text-align property to center.

h1 {
    text-align: center;
}

Step 9
Now you'll add some elements that you'll eventually style into color markers.

First, within the body element, add a div element and set its class attribute to container. Make sure the div element is below the h1 element.

<h1>CSS Color Markers</h1>
<div class="container"></div>

Step 10
Next, within the div element, add another div element and give it a class of marker.

<div class="container">
    <div class="marker"></div>
</div>

Step 11
It's time to add some color to the marker. Remember that one way to add color to an element is to use a color keyword like black, cyan, or yellow.

Create a new CSS rule that targets the class marker, and set its background-color property to red.

.marker {
    background-color: red;
}

Step 12
The background color was applied, but since the marker div element has no content in it, it doesn't have any height by default.

In your .marker CSS rule, set the height property to 25px and the width property to 200px

.marker {
    height: 25px;
    width: 200px;
}

Step 13
Your marker would look better if it was centered on the page. An easy way to do that is with the margin shorthand property.

In the last project, you set the margin area of elements separately with properties like margin-top and margin-left. The margin shorthand property makes it easy to set multiple margin areas at the same time.

To center your marker on the page, set its margin property to auto. This sets margin-top, margin-right, margin-bottom, and margin-left all to auto.
.marker {
    margin: auto;
}
----------------------------------------------------------------
The CSS property margin: auto; is commonly used to horizontally center a block-level element (such as a <div>) within its parent container. When applied to a block-level element, it automatically calculates and distributes equal margins on the left and right sides, pushing the element towards the center.

Here's how it works:
Set the element's display property to either block or inline-block to ensure it behaves as a block-level element. Most commonly, <div> elements are already block-level by default.

Assign a specific width to the element. This can be done using properties like width, max-width, or flex-basis. Without a defined width, the element will automatically expand to fill its parent container, and centering it won't have any visible effect.

Apply margin: auto; to the element. This instructs the browser to calculate equal margins for the left and right sides of the element. As a result, the element is pushed towards the center of its parent container.

By using margin: auto; in combination with a defined width, you can achieve horizontal centering of a block-level element.
----------------------------------------------------------------

Step 14
Now that you've got one marker centered with color, it's time to add the other markers.

In the container div, add two more div elements and give them each a class of marker.
<div class="container">
    <div class="marker"></div>
    <div class="marker"></div>
    <div class="marker"></div>
</div>

Step 15
While you have three separate marker div elements, they look like one big rectangle. You should add some space between them to make it easier to see each element.

When the shorthand margin property has two values, it sets margin-top and margin-bottom to the first value, and margin-left and margin-right to the second value.

In your .marker CSS rule, set the margin property to 10px auto.
.marker {
    margin: 10px auto;
}

Step 16
To give the markers different colors, you will need to add a unique class to each one. Multiple classes can be added to an element by listing them in the class attribute and separating them with a space. For example, the following adds both the animal and dog classes to a div element.
<div class="animal dog">

If you add multiple classes to an HTML element, the styles of the first classes you list may be overridden by later classes.

To begin, add the class one to the first marker div element.
<div class="marker one"></div>

Step 17
Next, remove the background-color property and its value from the .marker CSS rule.
.marker {
    height: 25px;
    width: 200px;
    margin: 10px auto;
}

Step 18
Then, create a new CSS rule that targets the class one and set its background-color property to red.
.one {
    background-color: red;
}

Step 19
Add the class two to the second marker div, and add the class three to the third marker div.
<div class="container">
    <div class="marker one"></div>
    <div class="marker two"></div>
    <div class="marker three"></div>
</div>

Step 20
Create a CSS rule that targets the class two and set its background-color property to green.

Also, create a separate CSS rule that targets the class three and set its background-color to blue.
.two {
    background-color: green;
}

.three {
    background-color: blue;
}

Step 21
There are two main color models: the additive RGB (red, green, blue) model used in electronic devices, and the subtractive CMYK (cyan, magenta, yellow, black) model used in print.

In this project, you'll work with the RGB model. This means that colors begin as black, and change as different levels of red, green, and blue are introduced. An easy way to see this is with the CSS rgb function.

Create a new CSS rule that targets the class container and set its background-color to black with rgb(0, 0, 0).