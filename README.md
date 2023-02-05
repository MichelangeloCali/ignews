# ignews

### React library news portal blog

![image](https://user-images.githubusercontent.com/90471567/216835616-313bcb2d-a2b6-4d12-9fe2-6f1ebd038c2d.png)

## How was it developed?

This application was developed to practice the SSR (server-side Rendering) and SSG (server-side Gerenation) concepts.
This news blog has recurring payment, applied with Stripe, technical infrastructure of payment method.

### blog usage flow architecture:

![arquitetura sistema ignews](https://user-images.githubusercontent.com/90471567/216835948-10fe937b-dc11-46f5-8665-ed3770bf679c.png)

### The payment system was created with a Stripe API call using SSG, with `getStaticProps` function, to improve Google SEO indexing and to have the price displayed in searches and performance.

### The SSG (Static Site Generation) it will be used when we can show static content, such as populating an HTML and sharing its content with all users, with performance and good indexing in Google SEO. Ex: Homepage, PDP, Category Page, Blog post content. This method in Next JS can be summarized in the image below:

![Screenshot from 2023-02-05 18-04-11](https://user-images.githubusercontent.com/90471567/216846315-b611260e-ef9c-429e-91ed-6062438e97b5.png)

### The SSR (Server-side Rendering). It will be useful when you need indexing, but the data needs to be dynamic, such as a User Session, real-time information of user access. This method in Next JS can be summarized in the image below:

![Screenshot from 2023-02-05 14-30-16](https://user-images.githubusercontent.com/90471567/216836045-c8987af4-2a88-43f0-94f2-9166ad4ee299.png)

### The CSR (Client-Side Rendering). When it does not need Google SEO indexing and information will appear with user actions. Content can be generated after the page loads, such as comments on a blog post or purchase reviews on an e-commerce site. This method in Next JS can be summarized in the image below:

![Screenshot from 2023-02-05 18-38-37](https://user-images.githubusercontent.com/90471567/216847553-3d0887bb-6a84-4334-9299-0ccff6e2fae5.png)

## Tools used

Next JS (CSR, SSR, SSG)

React

Typescript

SASS

Stripe (Server-side SDKs REST APIs)

## Developer

LinkedIn:
https://www.linkedin.com/in/michelangelocali/

E-mail:
michelangelocali@hotmail.com
