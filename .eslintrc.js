module.exports = {
  extends: [
		"react-app", 
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	],
	plugins: [
		"react",
		"@typescript-eslint",
		"prettier"
	],
	rules: {
		"@typescript-eslint/explicit-function-return-type": ["error"],
		"@typescript-eslint/no-explicit-any": ["error"],
		"@typescript-eslint/no-unused-vars": ["error"],
		"react/prop-types": 0
	},
	// not working in CRA
	// overrides: [
    //     {
    //         "files": ["**/saga.ts", "**/rootSaga.ts"],
    //         "rules": {
    //             "@typescript-eslint/explicit-function-return-type": "off",
    //             "@typescript-eslint/no-explicit-any": "off",
    //         }
    //     }
    // ],
	settings: {
		react: {
		  pragma: "React",
		  version: "detect"
		}
	},
	parser: "@typescript-eslint/parser"
}
