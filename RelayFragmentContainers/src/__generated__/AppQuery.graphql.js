/**
 * @generated SignedSource<<7330ae89415fd8be9989d601d61f1866>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

"use strict";

var node = {
  fragment: {
    argumentDefinitions: [],
    kind: "Fragment",
    metadata: null,
    name: "AppQuery",
    selections: [
      {
        alias: null,
        args: null,
        concreteType: "User",
        kind: "LinkedField",
        name: "users",
        plural: true,
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "UserList_users",
          },
        ],
        storageKey: null,
      },
    ],
    type: "Query",
    abstractKey: null,
  },
  kind: "Request",
  operation: {
    argumentDefinitions: [],
    kind: "Operation",
    name: "AppQuery",
    selections: [
      {
        alias: null,
        args: null,
        concreteType: "User",
        kind: "LinkedField",
        name: "users",
        plural: true,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "email",
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ],
  },
  params: {
    cacheID: "f4dbbc514c6fb7e34ee3a00a6f8ab56d",
    id: null,
    metadata: {},
    name: "AppQuery",
    operationKind: "query",
    text: "query AppQuery {\n  users {\n    ...UserList_users\n    id\n  }\n}\n\nfragment UserList_users on User {\n  id\n  name\n  email\n}\n",
  },
};

node.hash = "89e3745391a78b3b7abd8f40a1c93c2a";

export default node;
