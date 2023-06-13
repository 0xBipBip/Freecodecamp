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

Step 4
To prepare to create some actual content, add a body element below the head element.

It's time to add some menu content. Add a main element within the existing body element. It will eventually contain pricing information about coffee and desserts offered by the cafe.

The name of the cafe is CAMPER CAFE. Add an h1 element within your main element. Give it the name of the cafe in capitalized letters to make it stand out.

