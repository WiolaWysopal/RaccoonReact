/**
 * @generated SignedSource<<367037864987d712fca0c9b6f63d60b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

"use strict";

var node = (function () {
  var v0 = [
    {
      kind: "Literal",
      name: "id",
      value: "1",
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AppQuery",
      selections: [
        {
          alias: null,
          args: v0 /*: any*/,
          concreteType: "User",
          kind: "LinkedField",
          name: "user",
          plural: false,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "User_user",
            },
          ],
          storageKey: 'user(id:"1")',
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
          args: v0 /*: any*/,
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
          storageKey: 'user(id:"1")',
        },
      ],
    },
    params: {
      cacheID: "a2bb6be1076a25af41a0d7184baf3ead",
      id: null,
      metadata: {},
      name: "AppQuery",
      operationKind: "query",
      text: 'query AppQuery {\n  user(id: "1") {\n    ...User_user\n    id\n  }\n}\n\nfragment User_user on User {\n  id\n  name\n}\n',
    },
  };
})();

node.hash = "676a2590d88e81560e62e872296ba3fc";

export default node;
