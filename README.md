# Fullstack Developer
Hello! My name is Sayaka, and I’m originally from Japan, now residing in Stockholm. I recently graduated from Linnaeus University with a degree in Computer Science. Alongside my passion for programming, I’m a mother of three and a former healthcare professional. In my free time, I enjoy exercising, cooking, and traveling.

## Technical Skills:
To improve the readability and presentation of your technical skills section on the web, you can organize the list into clearer categories and format it with bullet points or grids to avoid overwhelming readers. Here's a suggestion on how to structure it:

---

### Technical Skills:

- JavaScript, React, Node.js, Express  
- Java, PHP, Python  
- Git, NPM, Linux, Docker, Nginx, Gradle  
- Jest, Mocha, JUnit  
- JWT, Bash  

## Projects
### OAuth2 Access Delegation System for GitLab + Consuming REST and GraphQL APIs
[Code](https://github.com/sc222rb/OAuth)

This Node.js application was designed to implement an OAuth2 access delegation system for a server-side rendered web app, where GitLab serves as the service provider. The OAuth2 flow is built from scratch, without using external libraries, allowing users to securely log in with their GitLab accounts hosted on gitlab.lnu.se.  
After authentication, users can view their GitLab profile information, recent activities, and details about projects and commits from their GitLab groups. The project integrates GitLab’s REST API and GraphQL API to fetch this data, providing a deep understanding of both OAuth2 and API consumption.

![Oauth](/assets/img/oauth_activities.png)

### API DESIGN
[Code](https://github.com/sc222rb/beehive)

This is a HATEOAS-driven REST API that uses the HAL format for hypermedia and follows the MVC architectural pattern. It enables comprehensive monitoring of mobile beehive platforms, offering authenticated access to hive data such as humidity, temperature, weight, and bee flow. Farmers can manage their beehives, report honey harvests, and subscribe to harvest updates via notifications. The API uses a 2017 sensor dataset from Kaggle and stores the data in MongoDB, providing a reliable platform for tracking hive conditions and managing harvests.

![API](/assets/img/api.png)