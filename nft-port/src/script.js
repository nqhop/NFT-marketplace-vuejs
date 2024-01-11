const options = {
  method: 'GET',
  headers: {'Content-Type': 'application/json', Authorization: "72ecabfc-ef15-4fe4-9620-cd402f99dd72"}
};

fetch('https://api.nftport.xyz/v0/accounts/account_address?chain=ethereum', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));