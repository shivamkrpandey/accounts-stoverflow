const graphql = require('graphql');
const _ = require('lodash');
const Account = require('../models/account');

const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull } = graphql;

const AccountType = new GraphQLObjectType({
    name: 'account',
    fields: function () {
        return {
            id: {
                type: GraphQLID
            },
            _id: {
                type: GraphQLID
            },
            name: {
                type: GraphQLString
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAccount: {
            type: AccountType,
            description: 'Create new account',
            args: {
                name: {
                    name: 'Account Name',
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (root, args) => {
                const newAccount = new Account({
                    name: args.name
                });

                newAccount.id = newAccount._id;

                return new Promise((resolve, reject) => {
                    newAccount.save(err => {
                        if (err) reject(err);
                        else resolve(newAccount);
                    });
                });
            }
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        account: {
            type: AccountType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {

                return Account.findById(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});