var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('./sample.json');

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







