<div id='title'>

# E-Commerce-Routing
  </div>

  <br>
  <div id='desc'>

  ## Description
  This Application allows you to view your Products and Inventory for your E-Commerce business. the api command used in Insomnia will return the product listings and the information required to keep your business running, this includes stock levels and product options available by product.
  </div>
  <br>

## License
  
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  Copyright 2023 Andy316C Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


  <br>
  
  ## Table of contents
  <ol>
  <li><a href='#title'>Title</a></li>
  <li><a href='#desc'>Description</a></li>
  <li><a href='#install'>Installation</a></li>
  <li><a href='#cont'>Contribution</a></li>
  <li><a href='#test'>Testing</a></li>
  <li><a href='#images'>Images</a></li>
  <li><a href='#questions'>Questions</a></li>
  <li><a href='#contact'>Contact Info</a></li>
  </ol>
  <br>

  <div id='install'>

  ## Installation
  The application required multiple npm packages for successfull deployment, the pacakages used were mysql2 for database connections, sequalize to retrieve and update existing columns, express for the server side interaction and dotenv for database security.

  </div>
  <br>


  <div id='cont'>

  ## Contribution Guidelines
  No contributions required please.
  </div>
  <br>

  <div id='test'>

  ## Testing
  Each of the below 3 fields are qaccessible via api requests using insomnia.
  Categories:<br>
     GET   api/categories -     will retrieve all the categories from the categories field in your database.<br>
     GET   api/categories/:id - will retrieve the category of the id you selected.<br>
     POST  api/category-        will create a new category from the json input you provide in insomnia.<br>
     PUT   api/category/:id -   will update the category using the id provided based on the json values entered in Insomnia.<br>
     DELETE api/category/:id    will delete a category based on the id provided in the api request.<br>
     <br>
  Products:<br>
     GET   api/products -       will retrieve all the products from the products field in your database.<br>
     GET   api/products/:id -   will retrieve the product of the id you selected.<br>
     POST  api/products-        will create a new products from the json input you provide in insomnia.<br>
     PUT   api/products/:id -   will update the product using the id provided based on the json values entered in Insomnia.<br>
     DELETE api/products/:id    will delete a product based on the id provided in the api request.<br>
     <br>
  Tag:<br>
     GET   api/tags -       will retrieve all the tags from the tags field in your database.<br>
     GET   api/tags/:id -   will retrieve the tag of the id you selected.<br>
     POST  api/tags-        will create a new tag from the json input you provide in insomnia.<br>
     PUT   api/tags/:id -   will update the tag using the id provided based on the json values entered in Insomnia.<br>
     DELETE api/tags/:id    will delete a tags based on the id provided in the api request.<br>

<br>
  </div>
  <br>
   <div id='images'>

  ## Images
  Starting point, this is the first input query you will be asked. a message will appear if you successfully connected to the database. "Connected to WORK_CMS database"
  <img src= ''>
  <br>

  Viewing requests, returned sql queries will be displayed like below
  <img src= ''>
  <br>
  
  Updating requests, will return the success data. and will return a "Entry Added" if the entry was successfull
  <img src= ''>
  <br>
  
  </div>

  <br>
  
  <div id='questions'>
  
  ## Questions
  
  For questions or information please Email the following email address with your questions or concerns.
  <br>

  Company Name:<br>
  Global Software CMS INC
  <br>

  Company Email: <br>
  GlobalSoftwareCMSINC@gmail.com
  </div>

   <div id='contact'>
  
  ## Contact Info
  Developers Name: <br>
  Andrew Clark
  <br>

  Developers Email: <br>
  andy@gmail.com

  </div>

   <div id='VideoLink'>
<br>

## Screencastify video link

Click below for the video:

<a href= "">walkthrough video </a>

   </div>



  
