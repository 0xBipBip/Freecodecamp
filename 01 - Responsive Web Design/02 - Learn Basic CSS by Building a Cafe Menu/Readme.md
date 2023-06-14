CSS tells the browser how to display your webpage. You can use CSS to set the color, font, size, and other aspects of HTML elements.

In this course, you'll learn CSS by designing a menu page for a cafe webpage.

Step 1-3
As you learned in the last few steps of the Cat Photo App, there is a basic structure needed to start building your web page.
Add the <!DOCTYPE html> tag, and an html element with a lang attribute of en.

Add a head element within the html element, so you can add a title element. The title element's text should be Cafe Menu.

The title is one of several elements that provide extra information not visible on the web page, but it is useful for search engines or how the page gets displayed.
Inside the head element, nest a meta element with an attribute named charset set to the value utf-8 to tell the browser how to encode characters for the page. Note that meta elements are self-closing.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cafe Menu</title>
</head>

Step 4-9
To prepare to create some actual content, add a body element below the head element.

It's time to add some menu content. Add a main element within the existing body element. It will eventually contain pricing information about coffee and desserts offered by the cafe.

The name of the cafe is CAMPER CAFE. Add an h1 element within your main element. Give it the name of the cafe in capitalized letters to make it stand out.

To let visitors know the cafe was founded in 2020, add a p element below the h1 element with the text Est. 2020.

There will be two sections on the menu, one for coffees and one for desserts. Add a section element within the main element so you have a place to put all the coffees available.

Create an h2 element in the section element and give it the text Coffee.

<main>
    <h1>CAMPER CAFE</h1>
    <p>Est. 2020</p>
    <section>
        <h2>Coffee</h2>
    </section>
</main>

Step 10
Up until now, you have been limited regarding the presentation and appearance of the content you create. To start taking control, add a style element within the head element.

Step 11
You can add style to an element by specifying it in the style element and setting a property for it like this:

element {
 property: value;
}
Center your h1 element by setting its text-align property to the value center.

Step 12
In the previous step, you used a type selector to style the h1 element. Center the h2 and p elements by adding a new type selector for each one to the existing style element.

Step 13
You now have three type selectors with the exact same styling. You can add the same group of styles to many elements by creating a list of selectors. Each selector is separated with commas like this:

selector1, selector2 {
  property: value;
}

Step 14
You have styled three elements by writing CSS inside the style tags. This works, but since there will be many more styles, it's best to put all the styles in a separate file and link to it.

We have created a separate styles.css file for you and switched the editor view to that file. You can change between files with the tabs at the top of the editor.

Start by rewriting the styles you have created into the styles.css file. Make sure to exclude the opening and closing style tags.

Step 15
Now that you have the CSS in the styles.css file, go ahead and remove the style element and all its content. Once it is removed, the text that was centered will shift back to the left.

Step 16
Now you need to link the styles.css file so the styles will be applied again. Nest a self-closing link element in the head element. Give it a rel attribute value stylesheet and an href attribute value of styles.css.

Step 17
For the styling of the page to look similar on mobile as it does on a desktop or laptop, you need to add a meta element with a special content attribute.

Add the following within the head element:
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

Step 18
The text is centered again so the link to the CSS file is working. Add another style to the file that changes the background-color property to brown for the body element.

Step 19
That brown background makes it hard to read the text. Change the body element's background color to be burlywood so it has some color but you are still be able to read the text.

Step 20
The div element is used mainly for design layout purposes unlike the other content elements you have used so far. Add a div element inside the body element and then move all the other elements inside the new div.

Step 21
The goal now is to make the div not take up the entire width of the page. The CSS width property is perfect for this. Create a new type selector in the style sheet that gives your div element a width of 300px.

Step 22
Comments in CSS look like this:
/* comment here */
In your style sheet, comment out the line containing the background-color property and value, so you can see the effect of only styling div element. This will make the background white again.

Step 23
Now use the existing div selector to set the background color of the div element to be burlywood.

Step 24
Now it's easy to see that the text is centered inside the div element. Currently, the width of the div element is specified in pixels (px). Change the width property's value to be 80%, to make it 80% the width of its parent element (body).

Step 25
Next, you want to center the div horizontally. You can do this by setting its margin-left and margin-right properties to auto. Think of the margin as invisible space around an element. Using these two margin properties, center the div element within the body element.

Step 26
So far you have been using type selectors to style elements. A class selector is defined by a name with a dot directly in front of it, like this:

.class-name {
  styles
}
Change the existing div selector into a class selector by replacing div with a class named menu.

Step 27
To apply the class's styling to the div element, add a class attribute to the div element's opening tag and set its value to menu.

Step 28
Since the cafe's main product for sale is coffee, you could use an image of coffee beans for the background of the page.

Delete the comment and its contents inside the body type selector. Now add a background-image property and set its value to url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg).

Step 29
It’s looking good. Time to start adding some menu items. Add an empty article element under the Coffee heading. It will contain a flavor and price of each coffee you currently offer.

Step 30
article elements commonly contain multiple elements that have related information. In this case, it will contain a coffee flavor and a price for that flavor. Nest two p elements inside your article element. The first one's text should be French Vanilla, and the second's text 3.00.

Step 31
Starting below the existing coffee/price pair, add the following coffee and prices using article elements with two nested p elements inside each. As before, the first p element's text should contain the coffee flavor and the second p element's text should contain the price.

Caramel Macchiato 3.75
Pumpkin Spice 3.50
Hazelnut 4.00
Mocha 4.50

Step 32
The flavors and prices are currently stacked on top of each other and centered with their respective p elements. It would be nice if the flavor was on the left and the price was on the right.

Add the class name flavor to the French Vanilla p element.

Step 33
Using your new flavor class as a selector, set the text-align property's value to left.

Step 34
Next, you want to align the price to the right. Add a class named price to your p element that has 3.00 as its text.

Step 35
Now align the text to the right for the elements with the price class.

Step 36
That is kind of what you want, but now it would be nice if the flavor and price were on the same line. p elements are block-level elements, so they take up the entire width of their parent element.

To get them on the same line, you need to apply some styling to the p elements so they behave more like inline elements. To do that, start by adding a class attribute with the value item to the first article element under the Coffee heading.