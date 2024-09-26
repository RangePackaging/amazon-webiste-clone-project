1. Setup GIT
    - Helps us keep track changes in our code and easily
    undo our changes.
    - Its very useful in bigger projects.
    - NB: A REPOSITORY is the folder where changes are 
    being tracked.
    - git init
    - git congfig user.name 'username'
    - git congfig user.email 'username@gmail.com'
    - Enter a saving message and click commit

2. The main idea of JavaScript is
    i. - first save the Data (Information about the products, as in the product's name, image, price ...)
    ii - Second we generate the HTML using JavaScript
    (thats inside a JavaScript file)
    The benefits here are that:
    - if you want to add a product you have to copy paste or rewrite the entire code all over, all we need to do
    go into the data and add a new data to a product

    iii - Make it interactive
            1. First, the Add to Cart buttons
            2. Second, the Cart quatity Icon 
            

3. Accumulator Pattern

4. DATA ATTRIBUTE

5. Modules
    - Creating modules we need two steps:
        - first we create a file
        - dont load the file with <script>
    - By this any variable we create inside the file, will be contained inside the file. ( this would help prevent any name conflict)
    - Modules are also better way to organise our code

6. Getting a variable outside a FILE
    - first add type='module' attribute
    - export
    - import

7. Entry Point
    - Its the last script file that needs to be kept in the HTML file for all the javascript to be run

8. Data Deduplicating / Data Normalization

9. Deleting (AN IMPORTANT PART TO CONSIDER) from the Page and the Application of localStorage
    - So you set a localStorage function 
        function saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(cart))}

        NB: LocalStorage takes two argument (strings)
            1. the first string represent the name for the data.
            2. and the second a stringify version of the data we would like to save.

10. External libraries
    - these are code outside our project that could be shared
    - Using an External library we going to set delivery 
    dates to the delivery options on the checkout page.
    

    NB: To get these dates:
        1. We need to get the current data
        2. Do some calculations (eg Add 7days)
        3. and display the date in easy-to-read format

    DayJS External Library

11. Minification: This means compression of code (eg. external libraries) for quick and easy loading in a project. 

12. Default Export
    - This is another way exporting
    - we use it when we only want to export one thing from a file
    eg. is the dayjs library which only exports one thing(the dayjs function)

13. Recursion
        - this is when a fucntion rerun all of its code

14. MVC (Model - View - Controller)
    - This is the technique for updating the data and regenerating all the HTML
    - Its also called a Design Pattern for organising and desgning our code. 
    - In MVC we split our code into 3 parts.
        1. Model = This is the code that saves and manages the data.
        2. View = This part combines the data and the HTML and displays it on the page.(eg. when we loop through the data with the forEach function to get the data for generating the html)
        3. Controller = runs some code when we interact with the page (eg. the function of the eventlistners)
                
