import HTMLImg from '../assets/HTML5.svg.png';
import downloadImg from '../assets/CSS3_logo_and_wordmark.svg.png';
import colorsImg from '../assets/colors.jpg';
import opacityImg from '../assets/opacity.jpg';
import JavaScriptImg from '../assets/JavaScript.png'

export const BLOGS = [
    {   
        id: 0,
        featured: true, 
        image: HTMLImg,
        tags: ['HTML'],
        title: "Today I learned HTML",
        alt: "Image contains Meta Tags in action.",
        date: "03/14/23",
        entry: `Today I learend the use of meta tags in HTML. These tags store the information needed to render the elements 
                of the application to the screen that contain specific fonts or styles.`,
        likes: 0,
        

    },
    {
        id: 1,
        featured: true,
        image: downloadImg,
        tags: ['CSS'],
        title: "Today I learned CSS",
        alt: "Image contains CSS in action.",
        date: "03/14/23",
        entry: `Today I learend the use of CSS in conjunction with HTML. CSS can be used in a variety of
        ways such as styling, displaying and animating.`,
        likes: 0,
        

    },
    {
        id: 2,
        featured: false,
        image: colorsImg,
        tags: ['CSS', 'HTML'],
        title: "Today I learned CSS: Colors",
        alt: "Image contains Meta Tags in action.",
        date: "03/14/23",
        entry: `Today I learend the use of CSS coloring. Coloring is used to make the wedpage more
        appealing to the eye. Coloring can have a monumental effect on how users interact with 
        web applications. I am looking forward to diving more into opacity and box-shadoing in the 
        near future`,
        

    },
    {
        id: 3,
        featured: false,
        image: opacityImg,
        tags: ['CSS', 'HTML'],
        title: "Today I learned CSS: Opacity",
        alt: "Image contains Meta Tags in action.",
        date: "03/14/23",
        entry: `Today I learend the use of CSS: Opacity. This can be used to make colors more or less 
        trasnparent when displayed over other HTML elements. I plan to use this property in my projects 
        to further my understanding of this concept.`,
        likes: 0,
        

    },
    {
        id: 4,
        featured: true,
        image: JavaScriptImg,
        tags: ['JavaScript'],
        title: "Today I learned javacript",
        alt: "Image contains Meta Tags in action.",
        date: "03/14/23",
        entry: `Today I learend the use of Javascript. This can be used to make apps much more interactive and 
        allows users to interact with the contents of the page.`,
        likes: 0,
    },
    {
        id: 5,
        featured: false,
        image: colorsImg,
        tags: ['CSS', 'HTML'],
        title: "Today I learned CSS: Colors",
        alt: "Image contains Meta Tags in action.",
        date: "03/14/23",
        entry: `Today I learend the use of CSS coloring. Coloring is used to make the wedpage more
        appealing to the eye. Coloring can have a monumental effect on how users interact with 
        web applications. I am looking forward to diving more into opacity and box-shadoing in the 
        near future`,
        // dupicate to see layout - remove later 
    }
]