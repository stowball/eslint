/**
 * @fileoverview Disallow the use of process.exit()
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow the use of `process.exit()`",
            category: "Node.js and CommonJS",
            recommended: false
        },

        schema: []
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            CallExpression(node) {
                const callee = node.callee;

                if (callee.type === "MemberExpression" && callee.object.name === "process" &&
                    callee.property.name === "exit"
                ) {
                    context.report(node, "Don't use process.exit(); throw an error instead.");
                }
            }

        };

    }
};
