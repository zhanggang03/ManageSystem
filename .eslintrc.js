module.exports = {
    "extends": [
        "react-app",
        "prettier/standard", //使用standard做代码规范
        "prettier/react",
        "prettier",
        "plugin:prettier/recommended",
    ],
    "plugins": ["prettier"],
    "rules":{
        "prettier/prettier": "error"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    }
}