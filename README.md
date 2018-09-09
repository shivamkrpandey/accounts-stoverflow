To run this app, steps are following: 

1. run `node app.js`

You will see 
`🚀 App is running on port 3000`

2. On your browser, hit `http://localhost:3000/graphql`

3. Add mutation like: 

```
mutation {
  addAccount(name: "Test") {
    id
    _id
    name
  }
}
```
<img width="600" alt="webpack-bundle-analyzer" src="https://github.com/shivamkrpandey/accounts-stoverflow/blob/master/mutation.png">

4. Query: 

```
query {
  account(id: "5b9503a7e58e4a6c429ea869") {
    name
  }
}
```

<img width="600" alt="webpack-bundle-analyzer" src="https://github.com/shivamkrpandey/accounts-stoverflow/blob/master/query.png">