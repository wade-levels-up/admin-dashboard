# admin-dashboard

This was a project I completed as part of following The Odin Project curriculum to demonstrate my knowledge of using CSS grid.

Whilst it was part of The Odin Project curriculum this was not a guided tutorial so I had to come up with the solution on my own following along with a visual template design file.

I decided to go further than the project required and I took up the challenge of integrating a dark mode / light mode button as well as making the design responsive for mobile devices.

Challenges I faced:

With the initial layout in grid format it was challenging to position the Announcements and Trending sections as they would 'pop' apart, pushing the Trending section down to the bottom of the page, this was happening because auto-fit with minmax() on the main section would cause the grid to expand. As the Trending section was in the bottom half of the grid it would pop down at a certain screen width.
I overcame this problem by assigning the Announcements and Trending sections into their own div and making that div belong to a grid section that now spanned both grid rows vertically (main-side), this kept them together nicely.

Mobile responsiveness was also something I hadn't done before from a layout as complicated as this. A lot of it involved removing grid and using flexbox with flex-direction set to column. Certain sections had to be dropped altogether such as the search bar. I also removed a lot of the sidebar navigation icons and had to rethink how this navigation bar would work on mobile. Ultimately I stuck it to the bottom with fixed positioning (within thumbs reach!).

Conclusion:

Overall I'm quite proud of this project. Projects like this are a lot of fun.
If I could do it over again I'd like to reduce the amount of selectors I've used in CSS as it's quite verbose and many times I'm repeating myself where I could've been smarter and reused rules/properties. The length of the inline SVG's within the HTML file bothers me a bit too, I'd like to learn how I can keep them out of my HTML structure for future projects.

I
