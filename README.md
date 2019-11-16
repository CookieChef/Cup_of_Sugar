# Cup_of_Sugar

## Check it out on Heroku!: 
[Open Here](https://radiant-plateau-17571.herokuapp.com/ "Cup o' Sugar")

## Code Example:

``` 
<Router>
                    <div className="App">
                        
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                       
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/viewpage" component={View} />
                            <PrivateRoute exact path="/calendar" component={Calendar} />
                            <PrivateRoute exact path="/chat" component={ChatDisplay} />
                            <PrivateRoute exact path="/profile" component={Profile} />
                            <PrivateRoute exact path="/blog" component={Blog} />
                            <PrivateRoute exact path="/sos" component={Sos} />
                            <PrivateRoute exact path="/item" component={Item} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
```

## Built With:
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery 
* MongoDB
* Node
* Express
* React
* Chatkit
* Bcrypt


## Future Development: 
> Add an Administrator Option for the site to make changes to user inputs if they're inapporopriate
> Add functionality so other users can see each others profile and comment on each others posts


## Authors: 
* Sara Martinez and Alison Kelly