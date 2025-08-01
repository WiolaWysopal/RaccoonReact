/**
 * @generated SignedSource<<b7bf8db4e01417ecd3e66d43c47c9b90>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

"use strict";

var node = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: "Country",
      kind: "LinkedField",
      name: "countries",
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "code",
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
          name: "emoji",
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CountriesListQuery",
      selections: v0 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "CountriesListQuery",
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: "569b217beec706867f578361b28c27d4",
      id: null,
      metadata: {},
      name: "CountriesListQuery",
      operationKind: "query",
      text: "query CountriesListQuery {\n  countries {\n    code\n    name\n    emoji\n  }\n}\n",
    },
  };
})();

node.hash = "75d728cfa2d3a1392a72fa57824f82d5";

export default node;
