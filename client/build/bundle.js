/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Bank = __webpack_require__(1);
	var Account = __webpack_require__(2);
	var sampleAccounts = __webpack_require__(3);
	
	var totalButton = document.getElementById('totalButton');
	var totalDisplay = document.getElementById('totalValue');
	
	var createItem = function(account){
	  var li = document.createElement('li');
	  li.innerText = "Owner: " + account.owner + "Amount: £" + account.amount;
	  return li;
	}
	
	window.onload = function(){
	  console.log('loaded bank app');
	  console.log("sample Accounts: ", sampleAccounts);
	  var bank = new Bank();
	  for(accountData of sampleAccounts){
	    bank.addAccount(new Account(accountData));
	  };
	  console.log("Bank: ", bank);
	
	  //BUTTONS
	  var totalButton = document.getElementById('totalButton');
	  var listAccounts = document.getElementById('listAccounts');
	  var listPersonalAccounts = document.getElementById('listPersonalAccounts');
	  var listBusinessAccounts = document.getElementById('listBusinessAccounts');
	
	  //ELEMANTS
	  var totalDisplay = document.getElementById('totalValue');
	  var accountList = document.getElementById('accountList');
	  var personalAccountList = document.getElementById('personalAccountList');
	  var businessAccountList = document.getElementById('businessAccountList');
	
	  totalButton.onclick = function(){
	    totalDisplay.innerText = "Bank Total: " + bank.totalCash();
	  };
	
	  listAccounts.onclick = function(){
	    for(account of bank.accounts){
	      accountList.appendChild(createItem(account));
	    };
	  };
	
	  listPersonalAccounts.onclick = function(){
	    filteredAccounts = bank.filteredAccounts("personal");
	    console.log("filtered accounts: ", filteredAccounts);
	    for(account of filteredAccounts){
	      personalAccountList.appendChild(createItem(account));
	    };
	  };
	  
	  listBusinessAccounts.onclick = function(){
	    filteredAccounts = bank.filteredAccounts("business");
	    console.log("filtered accounts: ", filteredAccounts);
	    for(account of filteredAccounts){
	      businessAccountList.appendChild(createItem(account));
	    };
	  };
	};
	
	
	
	
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Bank = function(){
	  this.accounts = [];
	}
	
	Bank.prototype = {
	  addAccount: function(account){
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName){
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName){
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type){
	    if(!type) return this.accounts
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type){
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	  accountAverage:function(){
	    return this.totalCash()/this.accounts.length;
	  },
	}
	
	module.exports = Bank;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var Account = function(params){
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "jay",
	    "amount": 125.50,
	    "type": "personal"
	  },
	  { "owner": "val",
	    "amount": 55125.10,
	    "type": "personal"
	  },
	  { "owner": "marc",
	    "amount": 400.00,
	    "type": "personal"
	  },
	  { "owner": "keith",
	    "amount": 220.25,
	    "type": "business"
	  },
	  { "owner": "rick",
	    "amount": 10000.00,
	    "type": "business"
	  }
	]

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map