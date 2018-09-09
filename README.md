To run this app, steps are following: 

1. `cd server`
2. run `node app.js`

You will see 
`🚀 App is running on port 3000`

3. On your browser, hit `http://localhost:3000/graphql`

4. Add mutation like: 

```
mutation {
  addAccount(name: "Test") {
    id
    _id
    name
  }
}
```

5. Query: 

```
query {
  account(id: "5b9503a7e58e4a6c429ea869") {
    name
  }
}
```