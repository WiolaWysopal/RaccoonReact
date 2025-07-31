/**
 * @generated SignedSource<<561d83657e7e465ebef76f617d42fb54>>
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
        name: "content",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "content",
            variableName: "content",
          },
        ],
        concreteType: "Post",
        kind: "LinkedField",
        name: "addPost",
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
            name: "content",
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
      name: "AddPostMutation",
      selections: v1 /*: any*/,
      type: "Mutation",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "AddPostMutation",
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: "163e715a124aae7fa5aff75657a729ae",
      id: null,
      metadata: {},
      name: "AddPostMutation",
      operationKind: "mutation",
      text: "mutation AddPostMutation(\n  $content: String\n) {\n  addPost(content: $content) {\n    id\n    content\n  }\n}\n",
    },
  };
})();

node.hash = "21c172a03b507d7a46c7a8d2dd089102";

export default node;
