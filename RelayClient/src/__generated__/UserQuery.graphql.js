/**
 * @generated SignedSource<<ac7f117cc08e930da51e063ba95d0e7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

"use strict";

var node = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "id",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "id",
            variableName: "id",
          },
        ],
        concreteType: "User",
        kind: "LinkedField",
        name: "user",
        plural: false,
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
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "UserQuery",
      selections: v1 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "UserQuery",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "6417dfced15de8dd686efaf46ee2c1ba",
      id: null,
      metadata: {},
      name: "UserQuery",
      operationKind: "query",
      text: "query UserQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    name\n  }\n}\n",
    },
  };
})();

node.hash = "2e1b5fa91e05d6e0a28b60350a4f3df2";

export default node;
