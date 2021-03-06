module.exports = {
    "extends": "eslint:all",
    "env": {
        "browser": true,
        "es6": true,
        "greasemonkey": true
    },
    "parserOptions": {
    	"ecmaVersion": 2018
    },
    "rules": {
        /* Possible Errors */

        "no-cond-assign": [
            "error",
            "always"
        ],
        "no-inner-declarations": [
            "error",
            "both"
        ],
        "no-irregular-whitespace": [
            "error", {
                "skipComments": false
            }
        ],
        "valid-jsdoc": [
            "error", {
                "requireReturn": false
            }
        ],
        "valid-typeof": [
            "error", {
                "requireStringLiterals": true
            }
        ],

        /* Best Practices */

        "dot-notation": [
            "error", {
                "allowKeywords": false
            }
        ],
        "no-else-return": [
            "error", {
                "allowElseIf": false
            }
        ],
        "no-fallthrough": [
            "error", {
                "commentPattern": "fall-through"
            }
        ],
        // Remove inline disables for this rule after this gets fixed:
        // https://github.com/eslint/eslint/issues/10391
        "no-magic-numbers": [
            "error", {
                "ignoreArrayIndexes": true,
                "enforceConst": true
            }
        ],
        "no-param-reassign": [
            "error", {
                "props": true
            }
        ],
        "no-redeclare": [
            "error", {
                "builtinGlobals": true
            }
        ],
        "no-return-assign": [
            "error",
            "always"
        ],
        "no-self-assign": [
            "error", {
                "props": true
            }
        ],
        "no-unused-expressions": [
            "error", {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "wrap-iife": [
            "error",
            "inside", {
                "functionPrototypeMethods": true
            }
        ],

        /* Strict Mode */

        "strict": [
            "error",
            "function"
        ],

        /* Variables */

        "init-declarations": "off",
        "no-shadow": [
            "error", {
                "builtinGlobals": true,
                "hoist": "all"
            }
        ],
        "no-undef": [
            "error", {
                "typeof": true
            }
        ],
        "no-unused-vars": [
            "error", {
                "args": "all",
                "argsIgnorePattern": "^_",
                "caughtErrors": "all",
                "caughtErrorsIgnorePattern": "^_"
            }
        ],

        /* Stylistic Issues */

        "array-bracket-newline": [
            "error",
            "consistent"
        ],
        "array-element-newline": [
            "error",
            "consistent"
        ],
        "capitalized-comments": [
            "error",
            "always", {
                "ignorePattern": "fall-through",
                "ignoreConsecutiveComments": true
            }
        ],
        "consistent-this": [
            "error",
            "self"
        ],
        "func-names": [
            "error",
            "as-needed"
        ],
        "function-call-argument-newline": [
            "error",
            "never"
        ],
        "function-paren-newline": [
            "error",
            "never"
        ],
        "id-length": [
            "error", {
                "exceptions": ["_"]
            }
        ],
        "indent": [
            "error",
            4, {
                "SwitchCase": 1
            }
        ],
        "line-comment-position": [
            "error", {
                // Remove this after updating to the latest version of
                // ESLint.
                "position": "above",
                "ignorePattern": "fall-through"
            }
        ],
        "lines-around-comment": [
            "error", {
                "afterBlockComment": true,
                "beforeLineComment": true,
                "allowBlockStart": true,
                "ignorePattern": "\\*"
            }
        ],
        "max-len": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-statements": "off",
        // Create a plugin for this to ignore GreaseMonkey header
        // comments.
        // https://github.com/eslint/eslint/issues/10673
        "multiline-comment-style": "off",
        "multiline-ternary": [
            "error",
            "never"
        ],
        "newline-per-chained-call": "off",
        "no-continue": "off",
        // Create a PR for this to ignore certain patterns (e.g.
        // "fall-through").
        "no-inline-comments": "off",
        "no-multiple-empty-lines": [
            "error", {
                "max": 1,
                "maxBOF": 0,
                "maxEOF": 1
            }
        ],
        "no-plusplus": [
            "error", {
                "allowForLoopAfterthoughts": true
            }
        ],
        "one-var": [
            "error",
            "consecutive"
        ],
        "no-ternary": "off",
        "padded-blocks": [
            "error",
            "never"
        ],
        "sort-keys": "off",
        "sort-vars": "off",

        /* ECMAScript 6 */

        "object-shorthand": [
            "error",
            "never"
        ]
    }
};
